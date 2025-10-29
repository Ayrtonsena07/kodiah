"use client";
import React, { createContext, useContext, useState, useMemo } from "react";
import { translations, Lang } from "./translations";

type T = (typeof translations)[Lang];

type Ctx = {
  lang: Lang;
  setActiveLang: (l: Lang) => void;
  t: T;
};

const LanguageContext = createContext<Ctx | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo<Ctx>(() => {
    return {
      lang,
      setActiveLang: setLang,
      t: translations[lang],
    };
  }, [lang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
}
