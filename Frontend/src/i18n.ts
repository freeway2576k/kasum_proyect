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
    // La ruta de la carpeta pública donde están los JSON
    // {{lng}} = 'es', 'en', etc. | {{ns}} = 'translation' (por defecto)
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json' 
    },
    
    // Configuración de idioma
    fallbackLng: 'en', // Idioma a usar si el idioma detectado no está disponible
    //lng: "es", // Opcional: Descomentar para forzar un idioma inicial
    
    // Configuración de namespaces (archivos JSON)
    ns: ['translation'], 
    defaultNS: 'translation',

    // Deshabilita el escape de valores (React ya maneja esto)
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