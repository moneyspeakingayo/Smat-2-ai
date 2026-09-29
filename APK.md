# Smart Tech AI as an Android app

Netlify only hosts the site; it cannot build an APK. Two ways to get the app on Android:

**1. Install from Chrome (instant).** Open your Netlify site in Chrome, tap the menu, then "Install app". Android creates a real app for it.

**2. Get an APK file (PWABuilder, works from a phone).**
1. Deploy this folder to Netlify.
2. Open pwabuilder.com, paste your Netlify URL, tap Start, then Package for stores, Android, Generate.
3. Download the zip. Keep its signing key and password safe: every future APK needs the same key.
4. Rename the `.apk` from the zip to `smart-tech-ai.apk` and add it to this folder.
5. Paste the package name and SHA-256 fingerprint that PWABuilder shows into `assetlinks.json`.
6. Redeploy. Settings then shows "Download Android app (APK)".

The APK opens your Netlify site, so every new version you deploy reaches installed apps by itself (the app checks every 15 minutes and on launch). You never need to rebuild the APK for new features.
