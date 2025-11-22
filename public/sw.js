// public/sw.js
const CACHE_NAME = 'cstam-notifications-v1';

self.addEventListener('install', (event) => {
  console.log('🔔 Service Worker installed');
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  console.log('🔔 Service Worker activated');
  self.clients.claim();
});

self.addEventListener('push', (event) => {
  console.log('📨 Push notification received');
  
  if (!event.data) return;

  const data = event.data.json();
  
  const options = {
    body: data.body,
    icon: '/icons/icon-192x192.png',
    badge: '/icons/icon-72x72.png',
    image: data.image,
    tag: data.tag || 'general',
    requireInteraction: data.requireInteraction || false,
    actions: data.actions || [],
    data: data.data || {}
  };

  event.waitUntil(
    self.registration.showNotification(data.title, options)
  );
});

self.addEventListener('notificationclick', (event) => {
  console.log('👆 Notification clicked');
  event.notification.close();

  const urlToOpen = event.notification.data.url || '/';

  event.waitUntil(
    clients.matchAll({ type: 'window' }).then((windowClients) => {
      for (let client of windowClients) {
        if (client.url.includes(urlToOpen) && 'focus' in client) {
          return client.focus();
        }
      }
      if (clients.openWindow) {
        return clients.openWindow(urlToOpen);
      }
    })
  );
});