# Hướng dẫn Agent Auditor

Extension **0.1.5** — la bàn chống lạc lối cho coding agent. Chỉ dùng **chữ ký hành vi** (lặp lỗi, oscillation, không progress). **Không** đọc code, prompt, hay thinking.

## Tự chạy

Mở workspace trong Cursor/VS Code là Auditor tự bật (`autoStart=true`):

- Save / tạo / xóa file → sự kiện `edit` / `write` / `delete` (hash path, không lấy nội dung)
- Lỗi diagnostics (TypeScript, Python, …) → sự kiện `error` (fingerprint message)
- Tail `.auditor/events.jsonl`
- Auto-discover `*.jsonl` trong `.cursor`, `.claude`, `.aider`, `.continue`, `.windsurf`, `.cline` (bỏ CoT/prompt)

Status bar trái: `HEALTHY | SUSPICIOUS | STAGNATING | LOST`.

Tắt tự chạy: Settings → `agentAuditor.autoStart` = false.  
Dừng tay: **Agent Auditor: Stop Watch**.

## Connect Model (API riêng, tuỳ chọn)

Chữ ký hành vi **chạy không cần API**. API chỉ để Independent Audit / mode `audit` giải thích thêm.

`Ctrl+Shift+P` → **Agent Auditor: Connect Model**

1. **Choose** hãng (OpenAI, Anthropic, Google, GitHub, DeepSeek, Qwen, Kimi, OpenRouter)
2. Dán key → **Check key** → **Save & connect**
3. Local: hàng **Ollama** → **Set up** (không cần key)

Auditor **không** dùng model của Cursor Agent.

## Dùng khi agent đang code

Không cần bấm Watch. Agent (Cursor, Claude Code, Copilot, Continue, Aider, Cline, Windsurf…) sửa file / gây lỗi → Auditor cập nhật trạng thái.

Output **Agent Auditor** (tự mở khi có tín hiệu): `edit → SUSPICIOUS · SAME_ERROR_REPEAT`.

**Independent Audit** (khi agent claim đã xong): `Ctrl+Shift+P` → Independent Audit → gõ claim. Không paste code.

## JSONL chung cho mọi agent

Mọi agent có thể append `.auditor/events.jsonl` (1 JSON / dòng). Không ghi `prompt` / `thinking` / `content`:

```json
{"id":"1","type":"edit","path":"src/a.ts","timestamp":"2026-09-04T12:00:00.000Z"}
{"id":"2","type":"error","error":"TypeError: x","path":"src/a.ts","timestamp":"2026-09-04T12:00:01.000Z"}
```

## Cài

```bash
cursor --install-extension agent-auditor-0.1.5.vsix
```

Cũng cài được trên VS Code / Windsurf (VSIX). Reload window một lần.

## Privacy

Local only. Không upload code/prompt/trajectory. Pattern store: `.auditor/patterns.json`.
