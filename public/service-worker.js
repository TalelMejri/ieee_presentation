const CACHE_NAME = 'v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json',
    '/images/android/android-launchericon-192-192.png',
    '/images/android/android-launchericon-512-512.png',
];


self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) =>
            Promise.all(
                cacheNames.map((cache) => {
                    if (cache !== CACHE_NAME) {
                        return caches.delete(cache);
                    }
                })
            )
        )
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => response || fetch(event.request))
    );
});


self.addEventListener('push', (event) => {
    console.log('📨 Push notification received');
    
    if (!event.data) return;

    let data;
    try {
        data = event.data.json();
    } catch (error) {
        console.error('Error parsing push data:', error);
        data = {
            title: 'IEEE CS ENICarthage',
            body: event.data.text() || 'New notification',
        };
    }

    const options = {
        body: data.body,
        icon: '/images/android/android-launchericon-192-192.png',
        badge: '/images/android/android-launchericon-72-72.png',
        image: data.image,
        tag: data.tag || 'general',
        requireInteraction: data.requireInteraction || false,
        actions: data.actions || [],
        data: data.data || {},
        vibrate: [200, 100, 200],
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

// Notification click event
self.addEventListener('notificationclick', (event) => {
    console.log('👆 Notification clicked');
    event.notification.close();

    const urlToOpen = event.notification.data?.url || '/';

    event.waitUntil(
        clients.matchAll({ 
            type: 'window',
            includeUncontrolled: true 
        }).then((windowClients) => {
            // Check if there's already a window/tab open with the target URL
            for (let client of windowClients) {
                if (client.url.includes(urlToOpen) && 'focus' in client) {
                    return client.focus();
                }
            }
            
            // If no window/tab is open, open a new one
            if (clients.openWindow) {
                return clients.openWindow(urlToOpen);
            }
        })
    );
});

// Handle notification actions
self.addEventListener('notificationclose', (event) => {
    console.log('❌ Notification closed');
});