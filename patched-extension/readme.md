# Agent Auditor — Cursor / VS Code extension

Local-first **behavioral** risk signals for coding agents (Cursor, Claude Code, Copilot, Continue, Aider, Cline, Windsurf, …). **Never reads code, prompts, or CoT.** Auto-starts when a workspace opens.

## Install

```bash
cursor --install-extension agent-auditor-0.1.5.vsix
```

Or: **Extensions** → `⋯` → **Install from VSIX…** (Cursor, VS Code, Windsurf). Reload once.

## Auto-run (default)

On workspace open (`agentAuditor.autoStart`):

- File save / create / delete → `edit` / `write` / `delete` (path hash only)
- Diagnostics errors → `error` (message fingerprint)
- Tail `.auditor/events.jsonl`
- `autoDiscover`: newest `*.jsonl` under `.cursor`, `.claude`, `.aider`, `.continue`, `.windsurf`, `.cline` (prompts/CoT dropped)

Status bar: `HEALTHY | SUSPICIOUS | STAGNATING | LOST`.

Turn off: `agentAuditor.autoStart` = false. Stop: **Agent Auditor: Stop Watch**.

## Independent Auditor AI (optional)

Signatures work **without** an API key. Connect Model is only for Independent Audit / `mode=audit` notes.

**Agent Auditor: Connect Model** — choose provider, then paste key.

The Auditor must **not** reuse the coding agent's model.

Supported: OpenAI, Anthropic, OpenRouter, Gemini, GitHub Models, Kimi/Moonshot, DeepSeek, Qwen, Qwen local (Ollama), custom OpenAI-compatible.

## Commands

| Command | What it does |
|---|---|
| **Agent Auditor: Connect Model** | Choose vendor + API key |
| **Agent Auditor: Independent Audit** | Claim/task audit (no code upload) |
| **Agent Auditor: Watch Workspace** | Restart auto-watch |
| **Agent Auditor: Run Fixture Demo** | Replay bundled fixture |
| **Agent Auditor: Show Last Risk** | Print last assessment |
| **Agent Auditor: Privacy Settings** | Local only vs share stub |
| **Agent Auditor: Stop Watch** | Stop auto-watch |
| **Agent Auditor: Clear API Key** | Remove SecretStorage key |

## Feeding events (any agent)

Append one JSON object per line to `.auditor/events.jsonl` — no `prompt` / `thinking` / `content`:

```json
{"id":"1","type":"edit","path":"src/a.ts","timestamp":"2026-09-04T12:00:00.000Z"}
{"id":"2","type":"error","error":"TypeError: x","path":"src/a.ts","timestamp":"2026-09-04T12:00:01.000Z"}
```

## Privacy

```text
● Local only (Recommended)
○ Share anonymous signatures ← stub; V1 uploads nothing
```

Pattern Store: `.auditor/patterns.json`. Auditor never edits user code.
