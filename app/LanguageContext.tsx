"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations, type LangKey, type Translation } from "./translations";

type LangContextShape = {
  lang: LangKey;
  setLang: (l: LangKey) => void;
  t: Translation;
};

const LangContext = createContext<LangContextShape | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  // idioma inicial
  const [lang, setLang] = useState<LangKey>("en");

  const value: LangContextShape = {
    lang,
    setLang,
    t: translations[lang],
  };

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider />");
  }
  return ctx;
}
