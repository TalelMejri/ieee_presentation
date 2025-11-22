import type { 
  NotificationData, 
  NotificationOptions, 
  StoredNotification, 
  ScheduledNotification,
  NotificationStatus 
} from '@/types/notifications';

class NotificationService {
  private swRegistration: ServiceWorkerRegistration | null = null;

  // Register service worker
  async registerServiceWorker(): Promise<boolean> {
    try {
      if (!('serviceWorker' in navigator)) {
        console.warn('❌ Service workers are not supported');
        return false;
      }

      this.swRegistration = await navigator.serviceWorker.register('/service-worker.js');
      console.log('✅ Service Worker registered with scope:', this.swRegistration.scope);
      return true;
    } catch (error) {
      console.error('❌ Service Worker registration failed:', error);
      return false;
    }
  }

  // Initialize notification system
  async initialize(): Promise<boolean> {
    try {
      const registered = await this.registerServiceWorker();
      if (!registered) return false;

      this.initScheduler();
      return true;
    } catch (error) {
      console.error('❌ Failed to initialize notifications:', error);
      return false;
    }
  }

  // Request notification permission
  async requestPermission(): Promise<boolean> {
    try {
      if (Notification.permission === 'granted') {
        return true;
      }

      const permission = await Notification.requestPermission();
      localStorage.setItem('notificationPermission', permission);
      return permission === 'granted';
    } catch (error) {
      console.error('❌ Error requesting notification permission:', error);
      return false;
    }
  }

  // Show local notification - FIXED WITH NULL CHECKS
  async showNotification(title: string, options: NotificationOptions = {}): Promise<boolean> {
    try {
      if (!this.swRegistration) {
        const initialized = await this.initialize();
        if (!initialized || !this.swRegistration) {
          console.error('❌ Service Worker not available');
          return false;
        }
      }

      if (Notification.permission !== 'granted') {
        const granted = await this.requestPermission();
        if (!granted) return false;
      }

      // Add null check before using swRegistration
      if (!this.swRegistration) {
        console.error('❌ Service Worker registration is null');
        return false;
      }

      const defaultOptions: NotificationOptions = {
        icon: '/images/android/android-launchericon-192-192.png',
        badge: '/images/android/android-launchericon-72-72.png',
        tag: 'cstam-notification',
        ...options
      };

      // Now this.swRegistration is guaranteed to be not null
      await this.swRegistration.showNotification(title, defaultOptions);
      this.logNotification({ title, ...defaultOptions });
      return true;
    } catch (error) {
      console.error('❌ Error showing notification:', error);
      return false;
    }
  }

  // Log notification to localStorage
  private logNotification(notification: { title: string; body?: string; data?: NotificationData }): void {
    try {
      const notifications: StoredNotification[] = JSON.parse(
        localStorage.getItem('cstamNotifications') || '[]'
      );
      
      const notificationLog: StoredNotification = {
        id: Date.now().toString(),
        title: notification.title,
        body: notification.body,
        timestamp: new Date().toISOString(),
        read: false,
        data: notification.data
      };
      
      notifications.unshift(notificationLog);
      if (notifications.length > 50) notifications.splice(50);
      
      localStorage.setItem('cstamNotifications', JSON.stringify(notifications));
      this.updateUnreadCount();
    } catch (error) {
      console.error('❌ Error logging notification:', error);
    }
  }

  // Update unread count in document title
  private updateUnreadCount(): void {
    try {
      const notifications: StoredNotification[] = JSON.parse(
        localStorage.getItem('cstamNotifications') || '[]'
      );
      const unreadCount = notifications.filter(n => !n.read).length;
      
      document.title = unreadCount > 0 
        ? `(${unreadCount}) IEEE CS ENICarthage` 
        : 'IEEE CS ENICarthage';
    } catch (error) {
      console.error('❌ Error updating unread count:', error);
    }
  }

  // Mark notification as read
  markAsRead(notificationId: string): void {
    try {
      const notifications: StoredNotification[] = JSON.parse(
        localStorage.getItem('cstamNotifications') || '[]'
      );
      const notification = notifications.find(n => n.id === notificationId);
      
      if (notification) {
        notification.read = true;
        localStorage.setItem('cstamNotifications', JSON.stringify(notifications));
        this.updateUnreadCount();
      }
    } catch (error) {
      console.error('❌ Error marking notification as read:', error);
    }
  }

  // Mark all as read
  markAllAsRead(): void {
    try {
      const notifications: StoredNotification[] = JSON.parse(
        localStorage.getItem('cstamNotifications') || '[]'
      );
      
      notifications.forEach(notification => {
        notification.read = true;
      });
      
      localStorage.setItem('cstamNotifications', JSON.stringify(notifications));
      this.updateUnreadCount();
    } catch (error) {
      console.error('❌ Error marking all as read:', error);
    }
  }

  // Get all notifications
  getNotifications(): StoredNotification[] {
    try {
      return JSON.parse(localStorage.getItem('cstamNotifications') || '[]');
    } catch (error) {
      console.error('❌ Error getting notifications:', error);
      return [];
    }
  }

  // Get unread count
  getUnreadCount(): number {
    const notifications = this.getNotifications();
    return notifications.filter(n => !n.read).length;
  }

  // Schedule notification - FIXED WITH NULL CHECKS
  scheduleNotification(
    title: string, 
    body: string, 
    triggerTime: Date, 
    data: NotificationData = {}
  ): void {
    try {
      const scheduled: ScheduledNotification[] = JSON.parse(
        localStorage.getItem('scheduledNotifications') || '[]'
      );
      
      const notification: ScheduledNotification = {
        id: Date.now().toString(),
        title,
        body,
        triggerTime: triggerTime.toISOString(),
        data,
        created: new Date().toISOString()
      };
      
      scheduled.push(notification);
      localStorage.setItem('scheduledNotifications', JSON.stringify(scheduled));
      console.log('📅 Notification scheduled:', notification);
    } catch (error) {
      console.error('❌ Error scheduling notification:', error);
    }
  }

  // Check and send scheduled notifications - FIXED WITH NULL CHECKS
  private async checkScheduledNotifications(): Promise<void> {
    try {
      const scheduled: ScheduledNotification[] = JSON.parse(
        localStorage.getItem('scheduledNotifications') || '[]'
      );
      const now = new Date();
      
      const toSend = scheduled.filter(item => {
        const triggerTime = new Date(item.triggerTime);
        return triggerTime <= now;
      });
      
      for (const item of toSend) {
        await this.showNotification(item.title, {
          body: item.body,
          data: item.data
        });
      }
      
      const remaining = scheduled.filter(item => {
        const triggerTime = new Date(item.triggerTime);
        return triggerTime > now;
      });
      
      localStorage.setItem('scheduledNotifications', JSON.stringify(remaining));
    } catch (error) {
      console.error('❌ Error checking scheduled notifications:', error);
    }
  }

  // Initialize scheduler
  private initScheduler(): void {
    setInterval(() => {
      this.checkScheduledNotifications();
    }, 60000);
    
    this.checkScheduledNotifications();
  }

  // Get status
  getStatus(): NotificationStatus {
    return {
      permission: Notification.permission,
      unreadCount: this.getUnreadCount(),
      isSupported: 'serviceWorker' in navigator && 'Notification' in window
    };
  }

  // Check if service worker is ready
  isReady(): boolean {
    return this.swRegistration !== null;
  }
}

// Singleton instance
const notificationService = new NotificationService();
export default notificationService;