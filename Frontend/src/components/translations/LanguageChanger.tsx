// Importa el hook principal
import { Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next'; 
import { Button } from '../ui/button';
import { ModeToggle } from '../ModeToggle';

export function LanguageChanger() {
  // `t` es la función de traducción, `i18n` es la instancia de i18next
  const { t, i18n } = useTranslation(); 
  
  const currentLang = i18n.language;
  const newLang = currentLang === 'es' ? 'en' : 'es';

  return (
      <div className="flex items-center space-x-4">
        <label>{t('theme_switcher_label')}:</label>
        {/* Aquí iría tu componente ThemeSwitcher */}
                  <ModeToggle/>
        
        {/* Botón para cambiar el idioma */}
        <p>{t('language')}</p>
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => (i18n.changeLanguage(newLang), window.location.reload())}
          type="button"
        >
          
          <Globe></Globe>
        </Button>
        
      </div>
    
  );
}