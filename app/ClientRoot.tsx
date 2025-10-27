"use client";

import Image from "next/image";
import React, { useState, useEffect } from "react";

// ─────────────────────────────────────────
// 1. Dicionário de idiomas (EN por enquanto)
// Depois você pode traduzir pt/es/etc.
// Só NÃO remova nenhuma chave.
// ─────────────────────────────────────────
const LANG_DICTIONARY = {
  en: {
    heroHeadline: "Shape your vision into reality.",
    heroSub:
      "Tell Kodiah what you want. We build intelligent, connected applications — fast, reliable, and beautifully designed. No code needed.",
    promptLabel: "Tell Kodiah what to build:",
    promptPlaceholder: "Build me an appointment app that takes payments",
    betaNote: "Private beta — limited seats.",
    generateBtn: "Generate",
    card1Title: "Built with AI",
    card1Body:
      "You describe the product. Kodiah drafts it in minutes.",
    card2Title: "Refined by humans",
    card2Body:
      "Our team polishes flows, UI and data model for real business use.",
    card3Title: "Ready to sell",
    card3Body:
      "Hosting, login, dashboard, payments. You don’t just “test” — you launch.",
    startBuilding: "Start Building", // <- adicionamos essa chave
    languageLabel: "Language",
  },
} as const;

type LangKey = keyof typeof LANG_DICTIONARY;
const DEFAULT_LANG: LangKey = "en";

// ─────────────────────────────────────────
// 2. Componente Header (logo + botão)
// ─────────────────────────────────────────
function Header({ t }: { t: (typeof LANG_DICTIONARY)[LangKey] }) {
  return (
    <header
      style={{
        width: "100%",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(12px)",
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "16px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          color: "white",
        }}
      >
        {/* BLOCO ESQUERDA: LOGO + NOME */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Image
            src="/kodiah-logo.png"
            alt="Kodiah Logo"
            width={42}
            height={42}
            style={{
              borderRadius: "10px",
              filter:
                "drop-shadow(0 0 10px rgba(246,226,122,0.45)) drop-shadow(0 0 25px rgba(199,146,47,0.25))",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "white",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
              lineHeight: "1.2",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* BLOCO DIREITA: BOTÃO CALL TO ACTION */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          {/* Botão CTA */}
          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #f7e9a6 0%, #d4a93d 60%, #8b5e13 100%)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 600,
              padding: "10px 16px",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0 8px 40px rgba(255,213,89,0.4), 0 2px 6px rgba(0,0,0,0.6)",
              cursor: "pointer",
              lineHeight: 1.1,
              whiteSpace: "nowrap",
              minWidth: "120px",
              textAlign: "center",
            }}
          >
            {t.startBuilding /* <- agora o TS conhece essa chave */}
          </button>
        </div>
      </div>
    </header>
  );
}

// ─────────────────────────────────────────
// 3. Glow que segue o mouse (efeito luxo 😎)
// ─────────────────────────────────────────
function MouseGlow() {
  const [pos, setPos] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, []);

  return (
    <div
      style={{
        pointerEvents: "none",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pos.x - 150 + "px",
          top: pos.y - 150 + "px",
          width: "300px",
          height: "300px",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,220,120,0.18) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(32px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

// ─────────────────────────────────────────
// 4. Cartões “Built with AI / Refined...”
// ─────────────────────────────────────────
function FeatureCard({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <div
      style={{
        flex: 1,
        background:
          "radial-gradient(circle at 20% 20%, rgba(40,40,40,0.6) 0%, rgba(10,10,10,0.4) 70%)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "8px",
        padding: "16px 20px",
        minWidth: "0",
        boxShadow:
          "0 30px 120px rgba(0,0,0,0.9), 0 10px 30px rgba(0,0,0,0.7)",
      }}
    >
      <div
        style={{
          fontSize: "15px",
          lineHeight: "20px",
          fontWeight: 600,
          color: "white",
          marginBottom: "8px",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "14px",
          lineHeight: "20px",
          color: "rgba(255,255,255,0.7)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {body}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────
// 5. Hero principal (headline, input prompt etc.)
// ─────────────────────────────────────────
function Hero({ t }: { t: (typeof LANG_DICTIONARY)[LangKey] }) {
  return (
    <section
      style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "48px 24px 80px",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
      }}
    >
      {/* Headline */}
      <h1
        style={{
          fontSize: "clamp(2rem, 1vw + 1.5rem, 2.4rem)",
          lineHeight: 1.15,
          fontWeight: 600,
          color: "white",
          maxWidth: "720px",
          marginBottom: "16px",
        }}
      >
        {t.heroHeadline.split(" ").map((word, i) => {
          // deixa algumas palavras douradas
          if (
            word.toLowerCase() === "vision" ||
            word.toLowerCase() === "reality."
          ) {
            return (
              <span
                key={i}
                style={{
                  background:
                    "linear-gradient(90deg,#f9e7a3 0%,#d8a63c 60%,#8b5e13 100%)",
                  WebkitBackgroundClip: "text",
                  color: "transparent",
                  textShadow:
                    "0 0 20px rgba(255,215,100,0.4), 0 0 60px rgba(160,100,20,0.4)",
                }}
              >
                {word + " "}
              </span>
            );
          }
          return word + " ";
        })}
      </h1>

      {/* Subtexto */}
      <p
        style={{
          fontSize: "16px",
          lineHeight: "24px",
          maxWidth: "720px",
          color: "rgba(255,255,255,0.75)",
          marginBottom: "32px",
          fontWeight: 400,
        }}
      >
        {t.heroSub}
      </p>

      {/* Caixinha "Tell Kodiah what to build" */}
      <div
        style={{
          position: "relative",
          background:
            "radial-gradient(circle at 20% 20%, rgba(40,40,40,0.6) 0%, rgba(10,10,10,0.4) 70%)",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.07)",
          padding: "16px 16px 20px",
          maxWidth: "720px",
          boxShadow:
            "0 60px 200px rgba(0,0,0,1), 0 30px 100px rgba(0,0,0,0.8)",
        }}
      >
        <label
          style={{
            fontSize: "14px",
            lineHeight: "20px",
            color: "rgba(255,255,255,0.75)",
            fontWeight: 500,
            display: "block",
            marginBottom: "8px",
          }}
        >
          {t.promptLabel}
        </label>

        <div
          style={{
            display: "flex",
            gap: "8px",
            alignItems: "stretch",
          }}
        >
          <input
            defaultValue={t.promptPlaceholder}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
              border:
                "1px solid rgba(255,255,255,0.1)",
              borderRadius: "6px",
              color: "white",
              fontSize: "14px",
              lineHeight: "20px",
              padding: "12px 12px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          />

          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #f7e9a6 0%, #d4a93d 60%, #8b5e13 100%)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 600,
              padding: "12px 16px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.2)",
              boxShadow:
                "0 12px 40px rgba(255,213,89,0.4), 0 2px 6px rgba(0,0,0,0.6)",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
              cursor: "pointer",
              minWidth: "110px",
              textAlign: "center",
            }}
          >
            {t.generateBtn}
          </button>
        </div>

        <div
          style={{
            fontSize: "13px",
            lineHeight: "18px",
            color: "rgba(255,255,255,0.5)",
            fontWeight: 400,
            marginTop: "12px",
          }}
        >
          {t.betaNote}
        </div>
      </div>

      {/* 3 Cards */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "40px",
        }}
      >
        <FeatureCard
          title={t.card1Title}
          body={t.card1Body}
        />
        <FeatureCard
          title={t.card2Title}
          body={t.card2Body}
        />
        <FeatureCard
          title={t.card3Title}
          body={t.card3Body}
        />
      </div>
    </section>
  );
}

// ─────────────────────────────────────────
// 6. <ClientRoot/> = página toda
// ─────────────────────────────────────────
export default function ClientRoot() {
  // Futuro: salvar idioma escolhido no state/localStorage/etc.
  const [lang] = useState<LangKey>(DEFAULT_LANG);
  const t = LANG_DICTIONARY[lang];

  return (
    <main
      style={{
        position: "relative",
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, #1a1c22 0%, #0d0f12 60%, #07080a 100%)",
        color: "white",
      }}
    >
      <MouseGlow />

      <Header t={t} />

      <Hero t={t} />
    </main>
  );
}
