// public/service-worker.js
const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/android/android-launchericon-192-192.png',
  '/images/android/android-launchericon-512-512.png',
];

// Install service worker
self.addEventListener('install', (event) => {
  console.log('🔔 Service Worker installed');
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
  self.skipWaiting();
});

// Activate service worker
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

// Fetch event - handle different MIME types
self.addEventListener('fetch', (event) => {
  // Skip non-GET requests
  if (event.request.method !== 'GET') return;

  // Handle module scripts specifically
  if (event.request.destination === 'script') {
    event.respondWith(
      caches.match(event.request).then((response) => {
        // Return cached version or fetch from network
        return response || fetch(event.request).then((fetchResponse) => {
          // Clone the response to cache it
          const responseToCache = fetchResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
          return fetchResponse;
        });
      }).catch(() => {
        // Fallback for script loading errors
        return new Response(
          'console.error("Failed to load module script");',
          {
            headers: { 'Content-Type': 'application/javascript' }
          }
        );
      })
    );
    return;
  }

  // Default handling for other resources
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});

// ... rest of your push notification handlers remain the same
self.addEventListener('push', (event) => {
  // Your existing push notification code
});

self.addEventListener('notificationclick', (event) => {
  // Your existing notification click code
});