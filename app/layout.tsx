"use client";

import { useState } from "react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);

  // idiomas que aparecem no dropdown
  const langs = [
    "Deutsch",
    "English",
    "Español",
    "Français",
    "Português",
    "日本語",
  ];

  return (
    <div style={{ position: "relative" }}>
      {/* Botão principal (só o globo em linha) */}
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
        {/* Ícone de globo (linhas, sem preenchimento) */}
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

      {/* Dropdown de idiomas */}
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "120%",
            minWidth: "180px",
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
          {langs.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                // aqui no futuro você pode trocar o idioma do site de verdade
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
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "rgba(0,0,0,0.05)";
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.backgroundColor =
                  "transparent";
              }}
            >
              {lang}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
