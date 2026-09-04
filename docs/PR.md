# PR: Cursor auto-hooks + independent behavioral compass

**Title:** `feat: hook Cursor IDE trajectory — independent compass, not a code reviewer`

Use this body when opening the GitHub PR.

---

## Summary

- **Hook Cursor (and VS Code) directly:** on workspace open, Agent Auditor auto-starts. It does not wait for Watch Workspace.
- **Live hooks (behavioral signatures only):**
  - `onDidSaveTextDocument` → `edit` (path hash, no contents)
  - `onDidCreateFiles` / `onDidDeleteFiles` → `write` / `delete`
  - `onDidChangeDiagnostics` → `error` fingerprint (repeated TypeScript/Python errors)
  - tail `.auditor/events.jsonl`
  - auto-discover `*.jsonl` under `.cursor`, `.claude`, `.aider`, `.continue`, `.windsurf`, `.cline` with CoT/prompt stripped
- **Connect Model** panel: choose vendor first, then paste key (OpenAI, Anthropic, Gemini, GitHub Models, DeepSeek, Qwen, Kimi, OpenRouter, Ollama). Auditor API is **never** the coding agent’s model.
- **Independent Audit** remains claim + signatures. No source upload.

## Why this is unique (not Bugbot / CodeRabbit)

Those tools answer “is this *diff* wrong?”. Agent Auditor answers “is this *agent* lost?”

| Constraint we keep | Why it matters |
|---|---|
| Hooks on trajectory, not file bodies | Sees loops and oscillation that a PR review never sees |
| Separate Auditor model | Won’t rubber-stamp the same stuck agent |
| No CoT / prompt / code ingest | Local-first compass, not a second copilot |
| Adapter JSONL | Same signatures for Cursor *and* Claude Code / Aider / Continue / Cline / Windsurf |

Without the hooks, the original VSIX was a dead panel: users had to append JSONL by hand. This PR is the product: **the compass runs while Cursor acts.**

## Test plan

- [ ] `cursor --install-extension` 0.1.5; Reload Window
- [ ] Status bar shows Auditor without running Watch Workspace
- [ ] Save any file → Output **Agent Auditor** logs `edit` (no source)
- [ ] Introduce the same diagnostic error twice → `SAME_ERROR_REPEAT` / SUSPICIOUS or STAGNATING
- [ ] Connect Model → Choose → Check key → Save & connect
- [ ] Independent Audit with a one-line claim; no repo in the payload
- [ ] `agentAuditor.autoStart` = false stops hooks
- [ ] Tree has no API keys; `*.vsix` gitignored
