// src/context/LanguageContext.jsx
import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸', short: 'EN' },
  { code: 'om', label: 'Afaan Oromoo', flag: '🇪🇹', short: 'OM' },
  { code: 'am', label: 'አማርኛ', flag: '🇪🇹', short: 'AM' },
];

export function LanguageProvider({ children }) {
  const [language, setLanguageState] = useState(() => {
    return localStorage.getItem('portfolio_lang') || 'en';
  });

  const setLanguage = (langCode) => {
    if (translations[langCode]) {
      setLanguageState(langCode);
      localStorage.setItem('portfolio_lang', langCode);
    }
  };

  // Translation helper function
  const t = (path) => {
    const keys = path.split('.');
    let current = translations[language];
    let fallback = translations.en;

    for (const key of keys) {
      if (current && current[key] !== undefined) {
        current = current[key];
      } else {
        current = undefined;
      }

      if (fallback && fallback[key] !== undefined) {
        fallback = fallback[key];
      } else {
        fallback = undefined;
      }
    }

    return current !== undefined ? current : fallback !== undefined ? fallback : path;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languages }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
