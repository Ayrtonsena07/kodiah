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
        zIndex: 10, // fica acima da luz do mouse
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
            src="/kodiah-logo.png" // IMPORTANTE: esse arquivo precisa estar em /public/kodiah-logo.png
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
            }}
          >
            Kodiah
          </span>
        </div>

        {/* DIREITA: seletor de idioma + botão */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* menu de idiomas */}
          <LanguageSelector />

          {/* botão call-to-action */}
          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,234,150,1) 0%, rgba(173,118,16,1) 60%)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#000",
              fontWeight: 500,
              fontSize: "14px",
              borderRadius: "10px",
              padding: "10px 16px",
              boxShadow:
                "0 20px 60px rgba(255,200,50,0.3), 0 2px 4px rgba(0,0,0,0.6)",
              cursor: "pointer",
              minWidth: "140px",
              textAlign: "center",
            }}
          >
            {/* antes estava {t.startBuilding} e quebrava; agora é texto fixo */}
            Start Building
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
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "64px 24px",
        color: "white",
        position: "relative",
        zIndex: 1,
      }}
    >
      {/* título grande */}
      <h1
        style={{
          fontSize: "clamp(32px, 2vw + 24px, 40px)",
          lineHeight: 1.2,
          fontWeight: 600,
          color: "white",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
          maxWidth: "680px",
        }}
      >
        {/* t.heroHeadline é o texto tipo "Shape your vision into reality." */}
        {/* t.heroHeadlineStrong é a parte dourada */}
        <span>{t.heroHeadline} </span>
        <span
          style={{
            background:
              "linear-gradient(90deg, rgb(255,230,150) 0%, rgb(180,120,20) 60%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            filter:
              "drop-shadow(0 0 12px rgba(255,210,80,0.4)) drop-shadow(0 0 40px rgba(200,140,30,0.25))",
          }}
        >
          {t.heroHeadlineStrong}
        </span>
      </h1>

      {/* subtítulo */}
      <p
        style={{
          marginTop: "24px",
          fontSize: "18px",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.8)",
          maxWidth: "640px",
          fontWeight: 400,
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {t.heroSub}
      </p>

      {/* bloco do prompt + botão */}
      <div
        style={{
          marginTop: "32px",
          width: "100%",
          maxWidth: "700px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,234,150,0.07) 0%, rgba(0,0,0,0) 70%)",
          border: "1px solid rgba(255,255,255,0.08)",
          borderRadius: "8px",
          padding: "24px",
          boxShadow:
            "0 40px 120px rgba(255,200,50,0.1), 0 8px 30px rgba(0,0,0,0.8)",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        {/* label acima */}
        <div
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "8px",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
          }}
        >
          {t.promptLabel}
        </div>

        {/* linha input + botão */}
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
              padding: "14px 16px",
              fontSize: "15px",
              outline: "none",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.8), 0 2px 3px rgba(0,0,0,0.6) inset",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
            placeholder={t.promptPlaceholder}
          />

          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,234,150,1) 0%, rgba(173,118,16,1) 60%)",
              border: "1px solid rgba(255,255,255,0.2)",
              color: "#000",
              fontWeight: 500,
              fontSize: "14px",
              borderRadius: "8px",
              padding: "12px 16px",
              minWidth: "110px",
              cursor: "pointer",
              boxShadow:
                "0 20px 60px rgba(255,200,50,0.3), 0 2px 4px rgba(0,0,0,0.6)",
              textAlign: "center",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.generateBtn}
          </button>
        </div>

        {/* aviso beta */}
        <div
          style={{
            marginTop: "12px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
            fontFamily:
              '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
          }}
        >
          {t.betaNote}
        </div>
      </div>

      {/* 3 cards: Built with AI, Refined by humans, Ready to sell */}
      <div
        style={{
          marginTop: "32px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "16px",
          maxWidth: "1000px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "8px",
            padding: "16px 20px",
            color: "white",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.8), 0 2px 3px rgba(0,0,0,0.6) inset",
            minHeight: "130px",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "white",
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.card1Title}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.card1Desc}
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "8px",
            padding: "16px 20px",
            color: "white",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.8), 0 2px 3px rgba(0,0,0,0.6) inset",
            minHeight: "130px",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "white",
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.card2Title}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.card2Desc}
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            border: "1px solid rgba(255,255,255,0.08)",
            backgroundColor: "rgba(0,0,0,0.4)",
            borderRadius: "8px",
            padding: "16px 20px",
            color: "white",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.8), 0 2px 3px rgba(0,0,0,0.6) inset",
            minHeight: "130px",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 600,
              color: "white",
              marginBottom: "8px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.card3Title}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {t.card3Desc}
          </div>
        </div>
      </div>

      {/* rodapé compacto */}
      <footer
        style={{
          marginTop: "48px",
          fontSize: "13px",
          lineHeight: 1.4,
          color: "rgba(255,255,255,0.6)",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        <div
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.75)",
            marginBottom: "8px",
            fontWeight: 500,
          }}
        >
          {t.footerTagline}
        </div>
        <div>© 2025 Kodiah Inc. All rights reserved.</div>
      </footer>
    </section>
  );
}

// Componente raiz - junta tudo (MouseGlow, Header, conteúdo)
export default function ClientRoot() {
  return (
    <LanguageProvider>
      {/* fundo geral escuro + leve radial */}
      <div
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,233,170,0.08) 0%, rgba(10,15,25,1) 60%)",
          backgroundColor: "rgb(10,15,25)",
          minHeight: "100vh",
          position: "relative",
          color: "white",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        }}
      >
        {/* luz que segue o mouse */}
        <MouseGlow />

        {/* header fixo lá em cima */}
        <Header />

        {/* conteúdo principal */}
        <HeroSection />
      </div>
    </LanguageProvider>
  );
}
