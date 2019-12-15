import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import common_en from './locales/en/common.json';
import auth_en from './locales/en/auth.json';

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  lng: window.localStorage.getItem('lng') || 'en',
  ns: ['common', 'auth'],
  defaultNS: 'common',
  resources: {
    en: {
      common: common_en,
      auth: auth_en,
    },
  },
});

export default i18n;
