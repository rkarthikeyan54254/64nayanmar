import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 rounded-full bg-orange-600 text-white hover:bg-orange-700 transition-colors"
    >
      {language === 'ta' ? 'English' : 'தமிழ்'}
    </button>
  );
}