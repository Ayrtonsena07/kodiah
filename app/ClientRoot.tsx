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
        {/* ESQUERDA: logo + nome */}
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
              lineHeight: 1.2,
            }}
          >
            Kodiah
          </span>
        </div>

        {/* DIREITA: seletor de idioma + botão amarelo */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* seletor de idiomas */}
          <LanguageSelector />

          {/* botão CTA principal do header */}
          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #fff7c2 0%, #f6d76b 40%, #8a6520 100%)",
              color: "black",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 16px",
              minWidth: "140px",
              boxShadow:
                "0 0 20px rgba(255,220,120,0.4), 0 20px 60px rgba(0,0,0,0.8)",
              cursor: "pointer",
              lineHeight: 1.2,
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {t.startButton}
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
        zIndex: 1,
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "64px 24px 120px 24px",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
      }}
    >
      {/* Título principal */}
      <h1
        style={{
          maxWidth: "720px",
          fontSize: "42px",
          lineHeight: 1.15,
          fontWeight: 600,
          background:
            "linear-gradient(to bottom right, #fff 0%, #f6e08a 40%, #8a6a2a 80%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow: "0 15px 40px rgba(0,0,0,0.8)",
          margin: 0,
          marginBottom: "24px",
        }}
      >
        {t.heroHeadline}
      </h1>

      {/* Subtítulo */}
      <p
        style={{
          maxWidth: "680px",
          fontSize: "18px",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.8)",
          fontWeight: 400,
          margin: 0,
          marginBottom: "32px",
          textShadow: "0 20px 50px rgba(0,0,0,0.9)",
        }}
      >
        {t.heroSub}
      </p>

      {/* BLOCO: campo "Tell Kodiah..." + botão Generate */}
      <div
        style={{
          position: "relative",
          background:
            "radial-gradient(circle at 30% 20%, rgba(246,226,122,0.18) 0%, rgba(0,0,0,0) 60%)",
          border: "1px solid rgba(255,255,255,0.1)",
          backgroundColor: "rgba(10,10,10,0.4)",
          boxShadow:
            "0 30px 120px rgba(0,0,0,0.9), 0 0 120px rgba(255,215,100,0.08)",
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "720px",
          marginBottom: "32px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "15px",
            fontWeight: 400,
            color: "rgba(255,255,255,0.75)",
            marginBottom: "12px",
          }}
        >
          {t.promptLabel /* ex: 'Tell Kodiah what to build:' */}
        </label>

        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: "12px",
          }}
        >
          <input
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px",
              color: "white",
              fontSize: "15px",
              padding: "14px 16px",
              outline: "none",
              lineHeight: 1.4,
              boxShadow:
                "0 0 50px rgba(255,255,255,0.07), 0 30px 80px rgba(0,0,0,0.9)",
            }}
            placeholder={t.promptPlaceholder}
          />

          <button
            style={{
              flexShrink: 0,
              background:
                "radial-gradient(circle at 20% 20%, #fff7c2 0%, #f6d76b 40%, #8a6520 100%)",
              color: "black",
              border: "1px solid rgba(255,255,255,0.4)",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: 500,
              padding: "14px 16px",
              minWidth: "110px",
              cursor: "pointer",
              lineHeight: 1.2,
              textAlign: "center",
              boxShadow:
                "0 0 20px rgba(255,220,120,0.4), 0 20px 60px rgba(0,0,0,0.8)",
            }}
          >
            {t.generateButton /* ex: "Generate" */}
          </button>
        </div>

        <div
          style={{
            marginTop: "12px",
            fontSize: "13px",
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.5)",
          }}
        >
          {t.betaNote /* ex: 'Private beta — limited seats.' */}
        </div>
      </div>

      {/* 3 cards de valor */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,360px),1fr))",
          gap: "16px",
          maxWidth: "1080px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "rgba(13,13,13,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 0 120px rgba(255,215,100,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "white",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {t.badgeAiTitle /* ex: 'Built with AI' */}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.badgeAiDesc}
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "rgba(13,13,13,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 0 120px rgba(255,215,100,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "white",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {t.badgeTeamTitle /* ex: 'Refined by humans' */}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.badgeTeamDesc}
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "rgba(13,13,13,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 0 120px rgba(255,215,100,0.05)",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "white",
              marginBottom: "8px",
              lineHeight: 1.3,
            }}
          >
            {t.badgeLaunchTitle /* ex: 'Ready to sell' */}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.45,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.badgeLaunchDesc}
          </div>
        </div>
      </div>

      {/* Rodapé curto abaixo dos cards */}
      <div
        style={{
          marginTop: "48px",
          fontSize: "13px",
          color: "rgba(255,255,255,0.6)",
          lineHeight: 1.4,
          textShadow: "0 20px 60px rgba(0,0,0,0.9)",
        }}
      >
        {t.footerTagline /* ex: 'Kodiah — Intelligence has a new signature.' */}
        <br />
        © 2025 Kodiah Inc. All rights reserved.
      </div>
    </section>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <div
        style={{
          minHeight: "100vh",
          width: "100%",
          background:
            "radial-gradient(circle at 20% 20%, rgba(0,0,0,1) 0%, rgba(10,10,10,1) 40%, rgba(10,10,10,0) 70%), radial-gradient(circle at 80% 20%, rgba(20,20,30,1) 0%, rgba(10,10,10,1) 40%, rgba(10,10,10,0) 70%), radial-gradient(circle at 50% 80%, rgba(10,10,10,1) 0%, rgba(0,0,0,1) 60%)",
          backgroundColor: "black",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* brilho que segue o mouse */}
        <MouseGlow />

        {/* header fixo topo */}
        <Header />

        {/* conteúdo principal */}
        <HeroSection />
      </div>
    </LanguageProvider>
  );
}
