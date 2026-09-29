# Deploying Smart Tech AI

The site is static. There is no build step and nothing to install.

## GitHub Pages
1. Create a repo and push these files to the `main` branch.
2. Repo **Settings → Pages → Source → GitHub Actions**.
3. `.github/workflows/pages.yml` publishes on every push. Your site will be at `https://<user>.github.io/<repo>/`.

## Netlify
**Drag and drop:** go to app.netlify.com/drop and drop this folder.

**From GitHub:** Add new site → Import from Git → pick the repo. Leave the build command empty and set the publish directory to `.` (already set in `netlify.toml`).

## Offline use
Both hosts serve https, which the service worker (`sw.js`) needs.
1. Open the deployed site once while online.
2. In Settings choose On-device Qwen and tap **Download model for offline use**. This needs a browser with WebGPU.
3. After that the app opens and chats without internet.

## Files
| File | Purpose |
|---|---|
| `index.html` | The whole app |
| `sw.js` | Offline caching |
| `manifest.json` | PWA manifest (name, icons, colors) |
| `offline.html` | Shown if the app was never cached |
| `icons/` | App icons: 192, 512, maskable, Apple touch, favicon |
| `netlify.toml` | Netlify settings and headers |
| `.github/workflows/pages.yml` | GitHub Pages deploy |
| `.github/workflows/check.yml` | Syntax and leaked-key check |
| `.nojekyll` | Stops GitHub Pages from processing files |

## Install as an app (PWA)
- **Android Chrome:** tap the Install button in the app header, or menu → Install app.
- **iPhone Safari:** Share → Add to Home Screen.
- Requires https (GitHub Pages and Netlify both provide it).
