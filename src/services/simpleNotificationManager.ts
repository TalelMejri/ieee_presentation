// src/services/notificationManager.ts
import notificationService from './simpleNotificationService';
import { NOTIFICATION_TEMPLATES, SPECIAL_DATES } from './notificationTemplates';
import type { NotificationStatus } from '@/types/notifications';

class NotificationManager {
  private initialized: boolean = false;

  async initialize(): Promise<void> {
    if (this.initialized) return;

    try {
      const success = await notificationService.initialize();
      if (success) {
        this.setupSpecialDates();
        this.initialized = true;
        console.log('✅ Notification Manager initialized');
        this.showWelcomeIfFirstTime();
      } else {
        console.error('❌ Failed to initialize notification service');
      }
    } catch (error) {
      console.error('❌ Failed to initialize Notification Manager:', error);
    }
  }

  private showWelcomeIfFirstTime(): void {
    const hasSeenWelcome = localStorage.getItem('hasSeenWelcome');
    if (!hasSeenWelcome) {
      setTimeout(() => {
        this.sendWelcomeNotification();
        localStorage.setItem('hasSeenWelcome', 'true');
      }, 3000);
    }
  }

  private setupSpecialDates(): void {
    setInterval(() => {
      this.checkSpecialDates();
    }, 24 * 60 * 60 * 1000);

    this.checkSpecialDates();
  }

  private checkSpecialDates(): void {
    const today = new Date();
    const todayMD = `${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;

    SPECIAL_DATES.BIRTHDAYS.forEach(person => {
      if (person.date === todayMD) {
        const template = NOTIFICATION_TEMPLATES.BIRTHDAY(person.name);
        this.scheduleForToday(template.title, template.body, template.data);
      }
    });

    SPECIAL_DATES.ANNIVERSARIES.forEach(anniversary => {
      const anniversaryMD = anniversary.date.substring(5);
      if (anniversaryMD === todayMD) {
        const years = anniversary.years || new Date().getFullYear() - new Date(anniversary.date).getFullYear();
        const template = NOTIFICATION_TEMPLATES.ANNIVERSARY(anniversary.name, years);
        this.scheduleForToday(template.title, template.body, template.data);
      }
    });

    SPECIAL_DATES.HOLIDAYS.forEach(holiday => {
      if (holiday.date === todayMD) {
        const template = NOTIFICATION_TEMPLATES.HOLIDAY(holiday.name);
        this.scheduleForToday(template.title, template.body, template.data);
      }
    });
  }

  private scheduleForToday(title: string, body: string, data: any = {}): void {
    const now = new Date();
    const scheduledTime = new Date(now);
    scheduledTime.setHours(10, 0, 0, 0);

    if (scheduledTime < now) {
      scheduledTime.setDate(scheduledTime.getDate() + 1);
    }

    notificationService.scheduleNotification(title, body, scheduledTime, data);
  }

  async sendWelcomeNotification(): Promise<boolean> {
    if (!this.initialized) {
      await this.initialize();
    }

    const template = NOTIFICATION_TEMPLATES.WELCOME;
    return await notificationService.showNotification(template.title, {
      body: template.body,
      data: template.data
    });
  }

  async sendEventRegistrationNotification(eventName: string): Promise<boolean> {
    if (!this.initialized) {
      await this.initialize();
    }

    const template = NOTIFICATION_TEMPLATES.EVENT_REGISTRATION(eventName);
    return await notificationService.showNotification(template.title, {
      body: template.body,
      data: template.data,
      actions: template.actions
    });
  }

  async sendEventReminder(eventName: string, timeLeft: string): Promise<boolean> {
    if (!this.initialized) {
      await this.initialize();
    }

    const template = NOTIFICATION_TEMPLATES.EVENT_REMINDER(eventName, timeLeft);
    return await notificationService.showNotification(template.title, {
      body: template.body,
      data: template.data,
      requireInteraction: template.requireInteraction
    });
  }

  async sendCustomNotification(title: string, body: string, data: any = {}): Promise<boolean> {
    if (!this.initialized) {
      await this.initialize();
    }

    return await notificationService.showNotification(title, { body, data });
  }

  async requestPermission(): Promise<boolean> {
    return await notificationService.requestPermission();
  }

  getStatus(): NotificationStatus {
    return notificationService.getStatus();
  }

  getNotifications() {
    return notificationService.getNotifications();
  }

  markAsRead(notificationId: string): void {
    notificationService.markAsRead(notificationId);
  }

  markAllAsRead(): void {
    notificationService.markAllAsRead();
  }

  isReady(): boolean {
    return this.initialized && notificationService.isReady();
  }
}

const notificationManager = new NotificationManager();
export default notificationManager;