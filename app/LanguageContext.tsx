"use client";

import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

export type Lang = "en" | "pt" | "es";

type TranslationData = typeof translations.en;

interface LanguageContextValue {
  lang: Lang;
  t: TranslationData;
  setLang: (next: Lang) => void;
}

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // idioma padrão: inglês
  const [lang, setLang] = useState<Lang>("en");

  const value: LanguageContextValue = {
    lang,
    t: translations[lang],
    setLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider />");
  }
  return ctx;
}
