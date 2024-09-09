self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('budget-ads-store').then((cache) => cache.addAll([
      '/',
      '/index.html',
      '/manifest.json',
      'https://cdnjs.cloudflare.com/ajax/libs/mini.css/3.0.1/mini-default.min.css',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});