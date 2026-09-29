// Smart Tech AI — offline support.
// Caches the app page and the script libraries it loads from CDNs (web-llm, gif.js).
// Model weights are cached by WebLLM itself; API calls are never touched.
const CACHE = 'smarttech-v6';
const CDN = ['esm.run', 'cdn.jsdelivr.net', 'cdnjs.cloudflare.com'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(['./', './index.html', './manifest.json', './offline.html', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'])).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const sameOrigin = url.origin === location.origin;
  if (sameOrigin && /\.apk$|assetlinks\.json$/.test(url.pathname)) return; // big download / Android verification file: always straight from the network
  if (!sameOrigin && !CDN.includes(url.hostname)) return;
  // Page: network first, fall back to cache when offline. Libraries: cache first.
  const pageLike = sameOrigin;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const hit = await cache.match(req, { ignoreSearch: false });
    if (!pageLike && hit) return hit;
    try {
      const res = await fetch(req);
      if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
      return res;
    } catch (err) {
      if (hit) return hit;
      if (req.mode === 'navigate') return (await cache.match('./index.html')) || (await cache.match('./offline.html')) || Response.error();
      return Response.error();
    }
  })());
});
