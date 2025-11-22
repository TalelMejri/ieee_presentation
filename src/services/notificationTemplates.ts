import type { NotificationData } from '@/types/notifications';

export interface NotificationTemplate {
  title: string;
  body: string;
  data?: NotificationData;
  actions?: { action: string; title: string }[];
  requireInteraction?: boolean;
}

export const NOTIFICATION_TEMPLATES = {
  WELCOME: {
    title: '🎉 Welcome to CSTAM!',
    body: 'Thank you for installing our app. Stay tuned for exciting events and workshops!',
    data: { url: '/' }
  } as NotificationTemplate,
  
  EVENT_REGISTRATION: (eventName: string): NotificationTemplate => ({
    title: '📅 Registration Open!',
    body: `"${eventName}" - Register now and secure your spot! Don't miss out!`,
    data: { url: '/events' },
    actions: [
      { action: 'register', title: 'Register Now' }
    ]
  }),
  
  EVENT_REMINDER: (eventName: string, timeLeft: string): NotificationTemplate => ({
    title: '⏰ Event Starting Soon',
    body: `${eventName} starts in ${timeLeft}. Get ready to join us!`,
    data: { url: '/events' },
    requireInteraction: true
  }),
  
  BIRTHDAY: (name: string): NotificationTemplate => ({
    title: '🎂 Happy Birthday!',
    body: `Wishing ${name} a fantastic birthday filled with joy and success! 🎉`,
    data: { url: '/team' }
  }),
  
  ANNIVERSARY: (name: string, years: number): NotificationTemplate => ({
    title: '🌟 Anniversary Celebration!',
    body: `Happy ${years} year${years > 1 ? 's' : ''} anniversary to ${name}! Thank you for your dedication.`,
    data: { url: '/team' }
  }),
  
  HOLIDAY: (holidayName: string): NotificationTemplate => ({
    title: '🎊 Holiday Greetings',
    body: `Wishing you and your family a blessed and joyful ${holidayName}!`,
    data: { url: '/' }
  }),
  
  NEWSLETTER: (title: string): NotificationTemplate => ({
    title: '📰 Latest Updates',
    body: `New content available: ${title}. Check it out now!`,
    data: { url: '/news' }
  })
};

// Special dates
export const SPECIAL_DATES = {
  BIRTHDAYS: [
    { name: 'Sahar Jleli', date: '03-15' },
    { name: 'John Doe', date: '07-20' }
  ],
  
  ANNIVERSARIES: [
    { name: 'Sahar Jleli', date: '2020-09-01', years: 4 },
    { name: 'IEEE CS ENICarthage', date: '2012-01-01', years: 12 }
  ],
  
  HOLIDAYS: [
    { name: 'Ramadan Mubarak', date: '03-01' },
    { name: 'Eid al-Fitr', date: '04-10' },
    { name: 'IEEE Day', date: '10-05' }
  ]
};