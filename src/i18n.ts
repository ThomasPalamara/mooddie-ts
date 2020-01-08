/* eslint-disable camelcase */
/* eslint-disable @typescript-eslint/camelcase */
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './locales/en/common.json';
import auth_en from './locales/en/auth.json';
import mood_en from './locales/en/mood.json';
import calendar_en from './locales/en/calendar.json';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  lng: window.localStorage.getItem('lng') || 'en',
  ns: ['common', 'auth', 'mood', 'calendar'],
  defaultNS: 'common',
  resources: {
    en: {
      common: common_en,
      auth: auth_en,
      mood: mood_en,
      calendar: calendar_en,
    },
  },
});

export default i18n;
