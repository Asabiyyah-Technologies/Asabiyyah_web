// Offline-First Service Worker for Muhammad Auwal Aliyu (Abu Mus'ab) Portfolio
const CACHE_NAME = 'aliyu-portfolio-v2.1';

const CORE_ASSETS = [
  '/',
  '/index.html',
  '/app.js',
  '/manifest.json',
  '/favicon.svg',
  '/assets/brand/portfolio-favicon.svg',
  '/assets/profile/muhammad-auwal-aliyu.png',
  '/assets/vendor/react.production.min.js',
  '/assets/vendor/react-dom.production.min.js',
  '/assets/vendor/tailwind.min.js',
  '/assets/projects/dila-system-interface.png',
  '/assets/projects/uspf-architecture-wide.png',
  '/assets/projects/uspf-learning-hub-architecture.jpg',
  '/assets/projects/amana-shield-architecture.svg',
  '/assets/projects/digital-learner.png',
  '/assets/projects/rural-classroom.png',
  '/assets/projects/adashe-community-savings.jpeg',
  '/assets/certificates/datacamp-ai-engineer-associate.pdf',
  '/assets/resume/muhammad-auwal-aliyu-cv.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[SW] Pre-caching core portfolio assets');
      return cache.addAll(CORE_ASSETS).catch((err) => {
        console.warn('[SW] Some non-critical assets could not be cached immediately:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Removing stale cache:', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Network-first for HTML navigation requests to ensure instantaneous updates
  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => caches.match(event.request).then((res) => res || caches.match('/index.html')))
    );
    return;
  }

  // Cache-first with background network revalidation for static assets
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});
