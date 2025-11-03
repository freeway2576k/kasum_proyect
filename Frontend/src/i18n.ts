import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
// 1. Importa el plugin del backend
import Backend from 'i18next-http-backend'; 

i18n
  // 2. Le decimos a i18n que use el Backend
  .use(Backend) 
  
  .use(LanguageDetector)
  .use(initReactI18next) 
  .init({
    // Ya no necesitas la propiedad 'resources' aquí
    // resources: { ... } 
    
    fallbackLng: "en", 
    debug: true, 
    
    // 3. Configuración del Backend
    backend: {
      // Esta es la ruta donde buscará los archivos:
      // {{lng}} se reemplaza por 'en', 'es', etc.
      // {{ns}} se reemplaza por el namespace, 'translation' por defecto.
      loadPath: '/locales/{{lng}}/{{ns}}.json' 
    },
    
    // El namespace por defecto (translation.json)
    ns: ["translation"], 
    defaultNS: "translation",
    
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;