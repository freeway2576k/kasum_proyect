// Este archivo debe estar en tu carpeta 'src'
import { resources } from './i18n'; // Aunque no usemos 'resources' directamente, es un truco para tipar

// Extiende el módulo 'react-i18next'
declare module 'react-i18next' {
  interface CustomTypeOptions {
    // Definimos los namespaces (translation)
    defaultNS: 'translation';
    // Tipamos los recursos con la estructura de tus JSON
    resources: {
      translation: typeof import('../public/locales/en/translation.json');
      // Puedes añadir más idiomas aquí si quieres una tipificación más estricta
    };
  }
}