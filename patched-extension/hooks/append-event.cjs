#!/usr/bin/env node
/**
 * Vendor-hook sink for Agent Auditor.
 * Cursor afterFileEdit / Codex PostToolUse(apply_patch) / Claude PostToolUse(Edit|Write).
 * Writes path + type only. Never persists prompt, CoT, edits, patch body, or file content.
 */
"use strict";

const fs = require("fs");
const path = require("path");

const SKIP = [
  "/node_modules/",
  "/.git/",
  "/.auditor/",
  "/.next/",
  "/dist/",
  "/out/",
  "/coverage/",
  "/.venv/",
  "/__pycache__/",
  "/.cursor/",
  "/.claude/",
  "/.codex/",
];

function ignorePath(p) {
  const n = String(p || "").replace(/\\/g, "/").toLowerCase();
  if (!n) return true;
  if (SKIP.some((s) => n.includes(s))) return true;
  if (/\.(png|jpe?g|gif|webp|ico|woff2?|lock|vsix|map|bin)$/.test(n)) return true;
  return false;
}

function projectRoot(j) {
  const roots = j.workspace_roots;
  if (Array.isArray(roots) && roots[0]) return String(roots[0]);
  if (process.env.CLAUDE_PROJECT_DIR) return process.env.CLAUDE_PROJECT_DIR;
  if (j.cwd) return String(j.cwd);
  return process.cwd();
}

function pathsFromPatchCommand(command) {
  const out = [];
  const text = String(command || "");
  const re = /^\*\*\* (?:Update|Add|Delete|Move) File:\s*(.+)$/gm;
  let m;
  while ((m = re.exec(text))) {
    const p = String(m[1] || "").trim();
    if (p) out.push(p);
  }
  return out;
}

function collectPaths(j) {
  const found = [];
  const push = (v) => {
    if (typeof v === "string" && v.trim()) found.push(v.trim());
  };
  push(j.file_path || j.filePath || j.path);
  const ti = j.tool_input && typeof j.tool_input === "object" ? j.tool_input : {};
  push(ti.file_path || ti.filePath || ti.path);
  if (typeof ti.command === "string") {
    for (const p of pathsFromPatchCommand(ti.command)) push(p);
  }
  return [...new Set(found)];
}

function eventType(j, filePath) {
  const name = String(j.hook_event_name || j.event || "").toLowerCase();
  const tool = String(j.tool_name || "").toLowerCase();
  if (name.includes("failure") || name.includes("fail")) return "error";
  if (tool.includes("delete") || /delete file/i.test(filePath)) return "delete";
  if (tool.includes("write") || name.includes("create")) return "write";
  return "edit";
}

function inferAgent(j) {
  const ev = String(j.hook_event_name || "");
  const tool = String(j.tool_name || "");
  const ti = j.tool_input && typeof j.tool_input === "object" ? j.tool_input : {};
  if (ev === "afterFileEdit" || ev === "afterTabFileEdit" || ev === "postToolUseFailure" || j.cursor_version) {
    return "cursor";
  }
  if (tool === "apply_patch" || typeof ti.command === "string") return "codex";
  if (process.env.CLAUDE_PROJECT_DIR || ti.file_path || tool === "Edit" || tool === "Write" || tool === "MultiEdit") {
    return "claude-code";
  }
  return "generic";
}

function errorText(j) {
  const raw = j.error_message || j.failure_type || "";
  return String(raw).slice(0, 200);
}

let raw = "";
process.stdin.setEncoding("utf8");
process.stdin.on("data", (c) => {
  raw += c;
  if (raw.length > 2_000_000) raw = raw.slice(0, 2_000_000);
});
process.stdin.on("end", () => {
  let j = {};
  try {
    j = JSON.parse(raw || "{}");
  } catch {
    process.exit(0);
  }
  const root = projectRoot(j);
  const outFile = path.join(root, ".auditor", "events.jsonl");
  const paths = collectPaths(j);
  if (!paths.length && eventType(j, "") !== "error") process.exit(0);
  const rows = paths.length ? paths : [root];
  try {
    fs.mkdirSync(path.dirname(outFile), { recursive: true });
    for (const p of rows) {
      if (ignorePath(p)) continue;
      const type = eventType(j, p);
      const row = {
        id: `hook_${Date.now()}_${Math.random().toString(16).slice(2, 8)}`,
        type,
        path: p,
        timestamp: new Date().toISOString(),
        agent: inferAgent(j),
        source: String(j.hook_event_name || "vendor-hook"),
      };
      if (type === "error") {
        const err = errorText(j);
        if (err) row.error = err;
      }
      fs.appendFileSync(outFile, `${JSON.stringify(row)}\n`);
    }
  } catch {
    /* never block the agent */
  }
  process.exit(0);
});
