# Smart Tech AI

A single-file, mobile-first AI chat app. Snap a gadget for an instant spec sheet, ask anything, search live news, and design logos, icons, images and GIFs. Everything runs in the browser, with no backend.

## Providers

Add keys in **Settings**. The app tries providers in order and switches automatically when one runs out of free tokens or fails.

| Type | Providers |
|---|---|
| Free tiers | Google Gemini, Groq, Hugging Face, Cerebras, SambaNova, Mistral, NVIDIA NIM, GitHub Models, Cohere, Cloudflare Workers AI |
| Aggregators | OpenRouter (free `:free` models), Vercel AI Gateway, any OpenAI-compatible gateway (LiteLLM, Requesty, One API…) |
| Local / unlimited | Ollama, LM Studio, self-hosted Qwen |
| Paid fallback | Together AI, Cloud API (DashScope) |
| On-device | Qwen and Gemma via WebGPU (no key, works offline) |

### Ollama
```bash
OLLAMA_ORIGINS=* OLLAMA_HOST=0.0.0.0 ollama serve
```
Server URL: `http://localhost:11434/v1`. Use a vision model such as `llava` for photos.

### LM Studio
Developer tab → start the server → turn on **Enable CORS** (and **Serve on Local Network** for a phone). Server URL: `http://localhost:1234/v1`.

> Browsers block plain `http://` addresses from https pages. On a phone, expose Ollama or LM Studio through an https tunnel.

## Run locally
Open `index.html` in a browser, or serve the folder:
```bash
python3 -m http.server 8080
```

## Deploy to GitHub Pages
1. Push this folder to a GitHub repo on the `main` branch.
2. In the repo go to **Settings → Pages → Source → GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` publishes the site on every push.

## Deploy
See [DEPLOY.md](DEPLOY.md) for GitHub Pages and Netlify (config included), plus offline setup.

## Privacy
API keys and chats are stored only in your browser's localStorage and are sent only to the provider you choose. Never commit keys to the repo.

## License
MIT
