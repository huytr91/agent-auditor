# Agent Auditor

**A local-first compass for coding agents — not a code reviewer.**

Cursor, Claude Code, Copilot, Continue, Aider, Cline, and Windsurf all *write code*. Other extensions *review diffs*. Agent Auditor does neither. It **hooks the agent’s live trajectory** and asks a different question:

> Is this agent still making progress, or is it lost?

```
HEALTHY → SUSPICIOUS → STAGNATING → LOST
```

Signatures only: repeated errors, file oscillation, edit–revert–edit, no progress, scope expansion, test regression, repeated tool calls. **No source, no prompts, no chain-of-thought.**

## Why this is unique

| | Bugbot / CodeRabbit / Copilot Review | ESLint / tests | **Agent Auditor** |
|---|---|---|---|
| Question | Is this *diff* buggy? | Does *code* match rules? | Is the *agent* wandering? |
| Input | File contents / PR | AST / test suite | Behavioral hooks (saves, diagnostics, JSONL) |
| Model | Often the same family as the coder | None | **Separate Auditor API** — never the coding agent’s model |
| Privacy | Diffs leave the machine | Local | Local-first; CoT/prompt/content stripped |

The unique combination:

1. **IDE hooks that auto-run on Cursor** (and VS Code / Windsurf) — no Watch button.
2. **Trajectory compass**, not output quality.
3. **Independent model** so the auditor cannot “agree” with the same stuck agent.
4. **Adapter JSONL** so Claude Code, Aider, Continue, Cline, Windsurf feed the same signatures.

## Hooks (this is the product)

On workspace open (`agentAuditor.autoStart`, default **on**):

| Hook | What it observes | What it stores |
|---|---|---|
| `onDidSaveTextDocument` | Agent (or human) saved a file | `edit` + path hash |
| `onDidCreateFiles` / `onDidDeleteFiles` | New / removed files | `write` / `delete` + path hash |
| `onDidChangeDiagnostics` | Compiler/linter errors | `error` + message fingerprint |
| File watcher `.auditor/events.jsonl` | Any agent’s canonical event stream | Normalized actions |
| Auto-discover `*.jsonl` under `.cursor`, `.claude`, `.aider`, `.continue`, `.windsurf`, `.cline` | Other agents’ traces | Same signatures; **prompts/CoT dropped** |

It does **not** hook Cursor’s private chat/tool API (that API is not public). The live substitute is IDE behavior — the same signals you would use to notice “this agent is spinning.”

Optional, on-demand: **Independent Audit** — you state the *claim* (“OAuth + refresh tokens”). The Auditor AI judges from signatures + claim only, never from source.

## Install on Cursor

```bash
cd patched-extension
npx @vscode/vsce package --no-dependencies --allow-missing-repository
cursor --install-extension agent-auditor-0.1.5.vsix
```

Or **Extensions → ⋯ → Install from VSIX…**. Reload the window. Status bar: `Auditor: HEALTHY`.

Same VSIX runs on VS Code and Windsurf.

Vietnamese walkthrough: [HUONG-DAN-AUDITOR-AI.md](HUONG-DAN-AUDITOR-AI.md).

## Connect Model (optional)

Signatures work **without** a key. For Independent Audit / `mode=audit` notes:

`Ctrl+Shift+P` → **Agent Auditor: Connect Model**

Choose the vendor first (OpenAI, Anthropic, Gemini, GitHub Models, DeepSeek, Qwen, Kimi, OpenRouter, Ollama local), then paste the key. Stored in SecretStorage. Workspace settings cannot redirect it.

## Event format (any agent)

Append one JSON object per line to `.auditor/events.jsonl`. Do **not** include `prompt`, `thinking`, or `content`:

```json
{"id":"1","type":"edit","path":"src/a.ts","timestamp":"2026-09-04T12:00:00.000Z"}
{"id":"2","type":"error","error":"TypeError: x","path":"src/a.ts","timestamp":"2026-09-04T12:00:01.000Z"}
```

## License

MIT. See [LICENSE](LICENSE).
