import i18n from 'i18next';
import detector from "i18next-browser-languagedetector";
import backend from "i18next-http-backend";
import { initReactI18next } from 'react-i18next';

import en from './assets/locales/en.json';
import ua from './assets/locales/ua.json';

i18n.use(detector)
  .use(backend).use(initReactI18next).init({
    resources: {
      en: { translation: en },
      ua: { translation: ua },
    },
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;