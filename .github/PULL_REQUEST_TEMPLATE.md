## Summary

- 

## Hooks

What live IDE / JSONL hook does this add or change? (save, create, delete, diagnostics, `.auditor/events.jsonl`, agent-folder `*.jsonl`)

- 

## Uniqueness check

- [ ] Does **not** read source / prompts / CoT
- [ ] Does **not** reuse the coding agent’s model
- [ ] Scores **trajectory** (lost vs progress), not diff quality
- [ ] Independent Audit, if touched, still uses claim + signatures only

## Test plan

- [ ] Reload Cursor; auto-start without Watch Workspace
- [ ] Save a file → Output logs `edit` with no file body
- [ ] Repeat a diagnostic error → signature family fires
- [ ] Connect Model still stores the key in SecretStorage
