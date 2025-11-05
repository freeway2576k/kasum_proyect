import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  // Carga los archivos de traducción asíncronamente
  .use(Backend) 
  .use(LanguageDetector) 
  // Conecta i18next con React
  .use(initReactI18next) 
  .init({
    // {{lng}} = 'es', 'en', etc. | {{ns}} = 'translation'
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' 
    },
    fallbackLng: 'en',
    //lng: "es", // para forzar un idioma inicial
    
    ns: ['translation'], 
    defaultNS: 'translation',

    interpolation: {
      escapeValue: false, 
    },
    
    // Opciones para la detección de idioma
    detection: {
      order: ['queryString', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag', 'path', 'subdomain'],
      caches: ['localStorage'],
    }
  });

export default i18n;