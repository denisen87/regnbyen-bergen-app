const CACHE_NAME = 'regnbyen-cache-v9';

// Legg inn de viktigste sidene/filene for offline.
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./main.js",
  "./manifest.webmanifest",
  "./public/logo/logo.png",
  "./chatbot.js",

  // Legg til de andre sidene dine:
  "./om-oss.html",
  "./klaer.html",
  "./hus.html",
  "./bil.html",
  "./aktiviteter.html",
  "./kontakt.html",
  "./sosialearagementer.html",
  "./python.html",
  "./chatbot.html"

];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.map((k) => (k === CACHE_NAME ? null : caches.delete(k))))
    )
  );
  self.clients.claim();
});

// Cache-first for statiske filer
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request).then((resp) => {
        // valgfritt: legg nye ting i cache (forsiktig på store filer)
        return resp;
      });
    })
  );
});
