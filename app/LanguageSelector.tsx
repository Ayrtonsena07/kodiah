"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";
import type { LangCode } from "./translations";

const LANG_OPTIONS: { code: LangCode; label: string }[] = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "es", label: "Español" },
  { code: "fr", label: "Français" },
  { code: "pt", label: "Português" },
  { code: "ja", label: "日本語" },
];

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* Botão globo */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "32px",
          height: "32px",
          background: "rgba(255,255,255,0.07)",
          border: "1px solid rgba(255,255,255,0.18)",
          borderRadius: "999px",
          cursor: "pointer",
          color: "white",
          boxShadow:
            "0 10px 30px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)",
        }}
        aria-label="Change language"
      >
        {/* ícone globo em traço */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20" />
          <path d="M12 2a15 15 0 0 1 4 10 15 15 0 0 1-4 10 15 15 0 0 1-4-10 15 15 0 0 1 4-10z" />
        </svg>
      </button>

      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "120%",
            minWidth: "190px",
            backgroundColor: "#ffffff",
            borderRadius: "10px",
            border: "1px solid rgba(0,0,0,0.07)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(0,0,0,0.4)",
            padding: "10px 0",
            fontSize: "15px",
            lineHeight: "22px",
            color: "#000",
            zIndex: 9999,
          }}
        >
          {LANG_OPTIONS.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLang(option.code);
                setOpen(false);
              }}
              style={{
                all: "unset",
                display: "block",
                width: "100%",
                padding: "12px 16px",
                cursor: "pointer",
                textAlign: "left",
                color: "#000",
                fontWeight: option.code === lang ? 600 : 400,
                backgroundColor:
                  option.code === lang
                    ? "rgba(0,0,0,0.05)"
                    : "transparent",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  option.code === lang
                    ? "rgba(0,0,0,0.05)"
                    : "transparent";
              }}
            >
              {option.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
