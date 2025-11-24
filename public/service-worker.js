// public/service-worker.js
const CACHE_NAME = 'v2'; // Changez le nom pour invalider l'ancien cache
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/android/android-launchericon-192-192.png',
  '/images/android/android-launchericon-512-512.png',
];

self.addEventListener('install', (event) => {
  console.log('🔔 Service Worker installed');
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch(console.error)
  );
});

self.addEventListener('activate', (event) => {
  console.log('🔔 Service Worker activated');
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('Deleting old cache:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  
  // Ne pas intercepter les méthodes non-GET
  if (request.method !== 'GET') return;
  
  // Ignorer les requêtes non-HTTP/HTTPS
  const url = new URL(request.url);
  if (!['http:', 'https:'].includes(url.protocol)) {
    return;
  }

  // Ignorer les requêtes Vite HMR en développement
  if (url.pathname.includes('@vite') || url.pathname.includes('@react-refresh')) {
    return;
  }

  event.respondWith(
    caches.match(request).then((cachedResponse) => {
      // Si en ligne, fetch et cache
      if (navigator.onLine) {
        return fetch(request).then((networkResponse) => {
          // Ne cacher que les réponses réussies
          if (networkResponse.status === 200) {
            const responseClone = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(request, responseClone);
            });
          }
          return networkResponse;
        }).catch(() => {
          // Si fetch échoue, retourner le cache
          return cachedResponse || new Response('Network error', { status: 408 });
        });
      } else {
        // Hors ligne, retourner le cache
        return cachedResponse || new Response('Offline', { status: 408 });
      }
    })
  );
});