"use client";

import Image from "next/image";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";

function Header() {
  const { t } = useLanguage();

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
        {/* LOGO + NOME */}
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
              letterSpacing: "-0.03em",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* LADO DIREITO DO HEADER */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* Seletor de idioma (globo + dropdown) */}
          <LanguageSelector />

          {/* Botão dourado no header (call to action) */}
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              background:
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%), linear-gradient(to right, #d4af37, #8f6b15)",
              color: "#000",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: "1.2",
              padding: "10px 16px",
              borderRadius: "8px",
              boxShadow:
                "0 10px 30px rgba(255,220,120,0.15), 0 0 40px rgba(255,200,80,0.4)",
              minWidth: "140px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.3)",
            }}
          >
            {t.startButton /* <-- AGORA EXISTE */}
          </button>
        </div>
      </div>
    </header>
  );
}

function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: "relative",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "48px 24px 80px",
        color: "white",
      }}
    >
      {/* Título + Subtítulo */}
      <h1
        style={{
          fontSize: "clamp(2rem,2.5vw,2.5rem)",
          fontWeight: 600,
          lineHeight: 1.2,
          maxWidth: "800px",
          color: "white",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {t.heroHeadline}
      </h1>

      <p
        style={{
          marginTop: "16px",
          fontSize: "18px",
          lineHeight: 1.5,
          maxWidth: "780px",
          color: "rgba(255,255,255,0.8)",
          fontWeight: 400,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {t.heroSub}
      </p>

      {/* Caixa black glass com input + botão */}
      <div
        style={{
          marginTop: "32px",
          maxWidth: "760px",
          background:
            "radial-gradient(circle at 20% 10%, rgba(255,255,200,0.07) 0%, rgba(0,0,0,0) 60%), rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "10px",
          boxShadow:
            "0 60px 160px rgba(255,220,120,0.07), 0 0 120px rgba(255,200,80,0.12)",
          padding: "20px",
          position: "relative",
        }}
      >
        {/* Label acima do input */}
        <div
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
            marginBottom: "8px",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
          }}
        >
          Tell Kodiah what to build:
        </div>

        {/* Input + botão generate */}
        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
          }}
        >
          <input
            defaultValue={t.promptPlaceholder}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "6px",
              color: "white",
              fontSize: "15px",
              lineHeight: "1.4",
              padding: "14px 16px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          />

          <button
            style={{
              all: "unset",
              cursor: "pointer",
              background:
                "radial-gradient(circle at 0% 0%, rgba(255,255,255,0.4) 0%, rgba(255,255,255,0) 60%), linear-gradient(to right, #d4af37, #8f6b15)",
              color: "#000",
              fontWeight: 600,
              fontSize: "15px",
              lineHeight: 1.2,
              padding: "12px 16px",
              minWidth: "110px",
              borderRadius: "8px",
              textAlign: "center",
              border: "1px solid rgba(255,255,255,0.3)",
              boxShadow:
                "0 20px 60px rgba(255,220,120,0.18), 0 0 60px rgba(255,200,80,0.3)",
            }}
          >
            Generate
          </button>
        </div>

        {/* Aviso beta */}
        <div
          style={{
            marginTop: "12px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.5)",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
          }}
        >
          Private beta — limited seats.
        </div>
      </div>

      {/* 3 cards: Built with AI / Refined by humans / Ready to sell */}
      <div
        style={{
          marginTop: "32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "16px 20px",
            background:
              "radial-gradient(circle at 0% 0%, rgba(255,255,200,0.05) 0%, rgba(0,0,0,0) 60%), rgba(0,0,0,0.3)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.badgeAiTitle}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: "1.5",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.badgeAiDesc}
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "16px 20px",
            background:
              "radial-gradient(circle at 0% 0%, rgba(255,255,200,0.05) 0%, rgba(0,0,0,0) 60%), rgba(0,0,0,0.3)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.badgeTeamTitle}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: "1.5",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.badgeTeamDesc}
          </div>
        </div>

        <div
          style={{
            border: "1px solid rgba(255,255,255,0.1)",
            borderRadius: "8px",
            padding: "16px 20px",
            background:
              "radial-gradient(circle at 0% 0%, rgba(255,255,200,0.05) 0%, rgba(0,0,0,0) 60%), rgba(0,0,0,0.3)",
            boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.badgeLaunchTitle}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: "1.5",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.badgeLaunchDesc}
          </div>
        </div>
      </div>

      {/* Rodapé curto */}
      <div
        style={{
          marginTop: "40px",
          fontSize: "13px",
          lineHeight: 1.4,
          color: "rgba(255,255,255,0.6)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {t.footerTagline}
        <br />
        <span style={{ color: "rgba(255,255,255,0.5)" }}>
          © 2025 Kodiah Inc. All rights reserved.
        </span>
      </div>
    </section>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <div
        style={{
          background:
            "radial-gradient(circle at 20% 0%, rgba(255,255,150,0.06) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 80% 20%, rgba(90,110,255,0.07) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 50% 80%, rgba(255,180,50,0.08) 0%, rgba(0,0,0,0) 70%), linear-gradient(#0f1117 0%, #1a1d29 60%, #1a1d29 100%)",
          minHeight: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* luz que segue o mouse */}
        <MouseGlow />

        {/* header fixo no topo */}
        <Header />

        {/* conteúdo principal */}
        <HeroSection />
      </div>
    </LanguageProvider>
  );
}
