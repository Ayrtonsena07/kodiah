"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { translations, type LangCode } from "./translations";

type LangContextType = {
  lang: LangCode;
  t: typeof translations["en"];
  setLang: (l: LangCode) => void;
};

const LangContext = createContext<LangContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  // idioma inicial padrão -> inglês
  const [lang, setLangState] = useState<LangCode>("en");

  // carrega idioma salvo no navegador
  useEffect(() => {
    const saved = window.localStorage.getItem("kodiah-lang") as LangCode | null;
    if (saved && translations[saved]) {
      setLangState(saved);
    }
  }, []);

  // troca idioma e salva no navegador
  function setLang(newLang: LangCode) {
    setLangState(newLang);
    window.localStorage.setItem("kodiah-lang", newLang);
  }

  return (
    <LangContext.Provider
      value={{
        lang,
        t: translations[lang],
        setLang,
      }}
    >
      {children}
    </LangContext.Provider>
  );
}

// hook pra usar no resto do site
export function useLanguage() {
  const ctx = useContext(LangContext);
  if (!ctx) {
    throw new Error("useLanguage must be used inside <LanguageProvider />");
  }
  return ctx;
}
