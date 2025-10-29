"use client";
import React, { createContext, useContext, useMemo, useState } from "react";
import { translations, type Lang, type TDict } from "./translations";

type Ctx = {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: TDict;
};

const LanguageCtx = createContext<Ctx | null>(null);

export function LanguageProvider({
  children,
  translations: dict = translations,
}: {
  children: React.ReactNode;
  translations?: typeof translations;
}) {
  const [lang, setLang] = useState<Lang>("en");

  const value = useMemo<Ctx>(() => {
    const t = dict[lang] as TDict;
    return { lang, setLang, t };
  }, [lang, dict]);

  return <LanguageCtx.Provider value={value}>{children}</LanguageCtx.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageCtx);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}
