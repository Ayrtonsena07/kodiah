"use client";

import { useState } from "react";
import { useLanguage } from "./LanguageContext";

const LANG_OPTIONS = [
  { code: "en", label: "English" },
  { code: "pt", label: "Português" },
  { code: "es", label: "Español" },
] as const;

export default function LanguageSelector() {
  const { lang, setLang } = useLanguage();
  const [open, setOpen] = useState(false);

  return (
    <div style={{ position: "relative" }}>
      {/* Botão do globo */}
      <button
        onClick={() => setOpen(!open)}
        style={{
          all: "unset",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
          padding: "8px 12px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(60,60,60,0.6) 0%, rgba(0,0,0,0.0) 60%)",
          borderRadius: "10px",
          border: "1px solid rgba(255,255,255,0.08)",
          color: "white",
          fontSize: "14px",
          lineHeight: 1.2,
          minWidth: "42px",
        }}
      >
        {/* pequeno globo (ícone em linha) */}
        <span
          style={{
            width: "16px",
            height: "16px",
            display: "inline-block",
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.6)",
            position: "relative",
          }}
        >
          <span
            style={{
              position: "absolute",
              left: "50%",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "rgba(255,255,255,0.6)",
              transform: "translateX(-50%)",
            }}
          />
          <span
            style={{
              position: "absolute",
              top: "50%",
              left: "0",
              right: "0",
              height: "1px",
              background: "rgba(255,255,255,0.6)",
              transform: "translateY(-50%)",
            }}
          />
        </span>

        <span style={{ color: "rgba(255,255,255,0.7)" }}>{lang.toUpperCase()}</span>
      </button>

      {/* Dropdown */}
      {open && (
        <div
          style={{
            position: "absolute",
            right: 0,
            marginTop: "8px",
            minWidth: "160px",
            backgroundColor: "rgba(15,15,20,0.95)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.7), 0 60px 80px rgba(0,0,0,0.4)",
            padding: "8px 0",
            zIndex: 999,
          }}
        >
          {LANG_OPTIONS.map((opt) => (
            <button
              key={opt.code}
              onClick={() => {
                setLang(opt.code as any);
                setOpen(false);
              }}
              style={{
                all: "unset",
                display: "block",
                width: "100%",
                textAlign: "left",
                padding: "10px 16px",
                cursor: "pointer",
                fontSize: "14px",
                lineHeight: "20px",
                color:
                  opt.code === lang
                    ? "rgb(255, 220, 130)"
                    : "rgba(255,255,255,0.9)",
                backgroundColor:
                  opt.code === lang ? "rgba(255,220,130,0.07)" : "transparent",
                fontWeight: opt.code === lang ? 500 : 400,
              }}
            >
              {opt.label}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
