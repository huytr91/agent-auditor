# Contributing

Agent Auditor is a **trajectory compass**. PRs should preserve the uniqueness constraints:

1. Do not ingest source, prompts, or chain-of-thought.
2. Do not call the coding agent’s model. Auditor API is separate.
3. Prefer hooks (save / diagnostics / JSONL tail) over “read the repo and review it.”
4. Independent Audit may use a one-line claim + signatures only.

## Layout

```
patched-extension/     Cursor / VS Code VSIX (package.json, dist, media)
README.md      Product + hooks
HUONG-DAN-AUDITOR-AI.md
```

## Package

```bash
cd patched-extension
npx @vscode/vsce package --no-dependencies --allow-missing-repository
```

Open a PR from a feature branch. Use `.github/PULL_REQUEST_TEMPLATE.md`.
