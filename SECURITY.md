# Security

- API keys: VS Code / Cursor SecretStorage only. User-setting `agentAuditor.apiKey` is a fallback; workspace values are ignored so a cloned repo cannot steal or redirect the key.
- Network: off until Connect Model sets `allowNetworkAi`.
- Events: adapters drop `thinking`, `prompt`, `content`, `cot`.
- Report vulnerabilities privately via GitHub Security Advisories on this repository. Do not open a public issue with secrets.
