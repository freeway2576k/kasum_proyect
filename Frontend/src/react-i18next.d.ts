// Este archivo debe estar en tu carpeta 'src'
import { resources } from './i18n'; //  truco para tipar

// Extiende el módulo 'react-i18next'
declare module 'react-i18next' {
  interface CustomTypeOptions {
    // Definimos los namespaces (translation) osea, los nombres de los archivos de traduccion
    defaultNS: 'translation';
    resources: {
      translation: typeof import('../public/locales/en/translation.json');// con esto, los ficheros de traduccion deberan tener la estructura de ese fichero
    };
  }
}