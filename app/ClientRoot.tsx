"use client";

import React from "react";
import { useLanguage } from "./LanguageContext";
import translations from "./translations";

export default function ClientRoot() {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <main
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#0a0a0a",
        color: "white",
        fontFamily: "Inter, sans-serif",
        padding: "40px 16px",
      }}
    >
      {/* Cabeçalho */}
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          textAlign: "center",
          lineHeight: "1.2",
          maxWidth: "800px",
        }}
      >
        {t.heroHeadline}
      </h1>

      {/* Subtítulo */}
      <p
        style={{
          marginTop: "12px",
          color: "rgba(255,255,255,0.82)",
          fontSize: "18px",
          lineHeight: "1.55",
          maxWidth: "760px",
          textAlign: "center",
        }}
      >
        {t.heroSub}
      </p>

      {/* Área do prompt */}
      <div
        style={{
          marginTop: "28px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "16px",
          padding: "14px",
          boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
          maxWidth: "760px",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: "12px",
            alignItems: "center",
          }}
        >
          {/* Label acessível */}
          <label
            htmlFor="prompt"
            style={{
              position: "absolute",
              width: 1,
              height: 1,
              padding: 0,
              margin: -1,
              overflow: "hidden",
              clip: "rect(0, 0, 0, 0)",
              whiteSpace: "nowrap",
              border: 0,
            }}
          >
            Prompt
          </label>

          {/* Input principal */}
          <input
            id="prompt"
            aria-label="Prompt"
            placeholder={t.promptPlaceholder}
            style={{
              all: "unset",
              background: "rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.06)",
              borderRadius: "12px",
              padding: "14px 16px",
              color: "white",
              fontSize: "15px",
              width: "100%",
            }}
          />

          {/* Botão de enviar */}
          <button
            type="button"
            style={{
              all: "unset",
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "12px",
              padding: "12px 24px",
              color: "white",
              fontSize: "15px",
              cursor: "pointer",
              transition: "background 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.25)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.background = "rgba(255,255,255,0.1)")
            }
          >
            {t.buttonLabel}
          </button>
        </div>
      </div>
    </main>
  );
}
