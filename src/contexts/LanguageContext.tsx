import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ta' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (ta: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ta');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ta' ? 'en' : 'ta');
  };

  const t = (ta: string, en: string) => {
    return language === 'ta' ? ta : en;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}