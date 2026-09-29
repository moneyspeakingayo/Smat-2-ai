# Android app with floating bubble & overlay

A website or PWA cannot draw over other apps. Only a native Android app can. This folder adds one: `android/` is a small app that opens your site, plus a floating bubble that works over other apps.

## What it does
- **Floating bubble:** a draggable "AI" bubble over any app. Tap it to open a chat panel. In the panel, ⤢ opens the full app, – shrinks it back to the bubble, ✕ turns the bubble off.
- **Overlay permission:** Settings → "Floating bubble & overlay" opens Android's "Display over other apps" screen.
- **Mic, camera, files:** the app asks for them on first launch. Voice typing uses Android's speech recognizer.
- **Save:** saved files go to your Downloads folder.

## Build it from your phone (GitHub Actions)
1. Deploy the site (Netlify) and push this whole folder to GitHub.
2. GitHub → Actions → **Build Android app** → Run workflow → enter your site URL.
3. When it finishes, download the `smart-tech-ai-apk` artifact, unzip it and install `app-debug.apk` (allow "Install unknown apps").
4. Open the app → Settings → Floating bubble & overlay → turn on "Allow display over other apps" → come back.

## Limits
- The bubble panel cannot attach files or use the camera; tap ⤢ for the full app.
- Some image downloads (logo, GIF) may not save inside the app yet.
- This is a debug build: Play Protect may warn. It was written without an Android build environment, so check the Actions log if the build fails.
- On a computer, Chrome's floating mini-window is used instead (no other-app overlay).
