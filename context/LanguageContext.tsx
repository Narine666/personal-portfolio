"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '@/lib/dictionaries';

type LanguageContextType = {
  lang: string;
  setLang: (lang: string) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  // 1. Սկզբնական լեզուն փորձում ենք վերցնել localStorage-ից
  const [lang, setLangState] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('preferredLang');
    if (savedLang) {
      setLangState(savedLang);
    }
  }, []);

  // 2. Ֆունկցիա լեզուն փոխելու և պահպանելու համար
  const setLang = (newLang: string) => {
    setLangState(newLang);
    localStorage.setItem('preferredLang', newLang);
  };

  const t = translations[lang as keyof typeof translations];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage must be used within LanguageProvider");
  return context;
};