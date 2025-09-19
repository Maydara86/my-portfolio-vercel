import { useTheme } from '@/context/ThemeContext';
import { translations, type Language, type Translations } from '@/data/translations';

export function useTranslation() {
  const { language } = useTheme();

  const t: Translations = translations[language as Language];

  return { t, language };
}