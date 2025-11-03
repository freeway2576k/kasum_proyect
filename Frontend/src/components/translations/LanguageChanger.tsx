// Importa el hook principal
import { useTranslation } from 'react-i18next'; 

export function LanguageChanger() {
  // `t` es la función de traducción, `i18n` es la instancia de i18next
  const { t, i18n } = useTranslation(); 
  
  const currentLang = i18n.language;
  const newLang = currentLang === 'es' ? 'en' : 'es';

  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md dark:bg-gray-800">
      
      {/* Uso de la función t para traducir texto */}
      <h1 className="text-2xl font-bold dark:text-white">
        {t('header_title')}
      </h1> 

      <div className="flex items-center space-x-4">
        <label className="dark:text-white">{t('theme_switcher_label')}:</label>
        {/* Aquí iría tu componente ThemeSwitcher */}
        
        {/* Botón para cambiar el idioma */}
        <button
          className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
          onClick={() => (i18n.changeLanguage(newLang), window.location.reload())}
          type="button"
        >
          {t('btn_change_lang')} ({newLang.toUpperCase()})
        </button>
      </div>
    </header>
  );
}