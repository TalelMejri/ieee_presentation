const CACHE_NAME = 'v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/images/android/android-launchericon-192-192.png',
  '/images/android/android-launchericon-512-512.png',
];

// Liste des types de ressources à cacher
const cacheableTypes = ['script', 'style', 'document', 'image'];

self.addEventListener('install', (event) => {
  console.log('🔔 Service Worker installed');
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(urlsToCache))
      .catch(console.error)
  );
  self.skipWaiting();
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
  
  // Ignorer les schémas non supportés
  const unsupportedSchemes = [
    'chrome-extension:',
    'chrome:',
    'data:',
    'blob:',
    'file:'
  ];
  
  if (unsupportedSchemes.some(scheme => request.url.startsWith(scheme))) {
    return;
  }

  // Gestion spéciale pour les scripts
  if (request.destination === 'script') {
    event.respondWith(handleScriptRequest(request));
    return;
  }

  // Pour les autres ressources
  event.respondWith(
    caches.match(request).then((response) => {
      return response || fetch(request);
    })
  );
});

async function handleScriptRequest(request) {
  try {
    // Essayer d'abord le cache
    const cachedResponse = await caches.match(request);
    if (cachedResponse) {
      return cachedResponse;
    }

    // Sinon, fetch depuis le réseau
    const networkResponse = await fetch(request);
    
    // Vérifier si la réponse est valide pour la mise en cache
    if (networkResponse.ok && networkResponse.status === 200) {
      const cache = await caches.open(CACHE_NAME);
      await cache.put(request, networkResponse.clone());
    }
    
    return networkResponse;
  } catch (error) {
    console.error('Failed to fetch script:', error);
    
    // Retourner une réponse JavaScript vide en cas d'erreur
    return new Response('// Script load failed', {
      status: 200,
      headers: { 'Content-Type': 'application/javascript' }
    });
  }
}

// Vos gestionnaires d'événements push existants
self.addEventListener('push', (event) => {
  // Votre code push existant
});

self.addEventListener('notificationclick', (event) => {
  // Votre code notification click existant
});