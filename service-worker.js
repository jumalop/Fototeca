self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('fototeca-cache').then(function(cache) {
      return cache.addAll([
        '/',
        '/index.html',
        '/styles.css',
        '/app.js',
        '/db.js',
        '/pdf-lib.js',
        '/drive.js',
        '/manifest.json'
      ]);
    })
  );
});
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
      return response || fetch(event.request);
    })
  );
});