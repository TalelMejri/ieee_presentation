// src/types/notifications.ts
export interface NotificationData {
  url?: string;
  eventId?: string;
  [key: string]: any;
}

export interface NotificationAction {
  action: string;
  title: string;
  icon?: string;
}

export interface NotificationOptions {
  body?: string;
  icon?: string;
  image?: string;
  badge?: string;
  tag?: string;
  requireInteraction?: boolean;
  actions?: NotificationAction[];
  data?: NotificationData;
}

export interface StoredNotification {
  id: string;
  title: string;
  body?: string;
  timestamp: string;
  read: boolean;
  data?: NotificationData;
}

export interface ScheduledNotification {
  id: string;
  title: string;
  body: string;
  triggerTime: string;
  data?: NotificationData;
  created: string;
}

export interface NotificationStatus {
  permission: NotificationPermission;
  unreadCount: number;
  isSupported: boolean;
}

export interface SpecialDate {
  name: string;
  date: string;
  years?: number;
  type?: string;
}

export interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}