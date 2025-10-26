"use client";

import { useState } from "react";

export default function LanguageSelector() {
  const [open, setOpen] = useState(false);
  const [activeLang, setActiveLang] = useState("English");

  // lista de idiomas que vamos mostrar
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
      {/* botão principal com o globo */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          display: "flex",
          alignItems: "center",
          gap: "6px",
          background: "rgba(255,255,255,0.08)",
          border: "1px solid rgba(255,255,255,0.2)",
          borderRadius: "999px",
          color: "white",
          padding: "6px 10px",
          fontSize: "13px",
          lineHeight: "16px",
          cursor: "pointer",
        }}
      >
        <span
          style={{
            width: "16px",
            height: "16px",
            borderRadius: "999px",
            background:
              "radial-gradient(circle at 30% 30%, #4d9fff 0%, #003bff 70%)",
            boxShadow: "0 0 8px rgba(77,159,255,0.6)",
            border: "1px solid rgba(255,255,255,0.4)",
          }}
        />
        <span style={{ color: "#fff" }}> {activeLang.slice(0, 2)} ▾ </span>
      </button>

      {/* dropdown dos idiomas */}
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            top: "120%",
            minWidth: "160px",
            background: "#ffffff",
            borderRadius: "8px",
            border: "1px solid rgba(0,0,0,0.08)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.5), 0 0 60px rgba(0,0,0,0.4)",
            padding: "10px 0",
            fontSize: "14px",
            lineHeight: "20px",
            color: "#000",
            zIndex: 9999,
          }}
        >
          {langs.map((lang) => (
            <button
              key={lang}
              onClick={() => {
                setActiveLang(lang);
                setOpen(false);
              }}
              style={{
                all: "unset",
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                cursor: "pointer",
                backgroundColor:
                  lang === activeLang ? "rgba(0,0,0,0.05)" : "transparent",
                fontWeight: lang === activeLang ? 500 : 400,
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
