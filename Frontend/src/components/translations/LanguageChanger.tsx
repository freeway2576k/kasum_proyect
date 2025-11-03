// Importa el hook principal
import { useTranslation } from 'react-i18next'; 

export function LanguageChanger() {
  // `t` es la función de traducción, `i18n` es la instancia de i18next
  const { t, i18n } = useTranslation(); 
  
  // Función para cambiar el idioma
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      {/* 1. Usar la función `t` para traducir */}
      <h2>{t('welcome_message')}</h2> 
      
      {/* 2. Botones para cambiar el idioma */}
      <p>{t('change_language')}:</p>
      <button onClick={() => changeLanguage('en')}>
        English
      </button>
      <button onClick={() => changeLanguage('es')}>
        Español
      </button>
    </div>
  );
}