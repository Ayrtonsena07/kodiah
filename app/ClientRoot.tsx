"use client";

import Image from "next/image";
import {
  LanguageProvider,
  useLanguage,
} from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";

// componente do header (barra de cima)
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
        {/* ESQUERDA: logo e nome */}
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

        {/* DIREITA: idioma + botão Start Building */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* seletor de idioma */}
          <LanguageSelector />

          {/* botão Start Building */}
          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,237,180,0.9) 0%, rgba(245,200,70,0.6) 40%, rgba(30,22,0,0.1) 100%)",
              boxShadow:
                "0 10px 30px rgba(255,220,120,0.2), 0 2px 4px rgba(0,0,0,0.5)",
              border: "1px solid rgba(255,255,255,0.3)",
              borderRadius: "10px",
              color: "#1a1a1a",
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 16px",
              minWidth: "140px",
              textAlign: "center",
              cursor: "pointer",
              lineHeight: 1.2,
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            {/* usamos t.startButton em vez de t.startBuilding */}
            {t.startButton /* ex: "Start Building" */}
          </button>
        </div>
      </div>
    </header>
  );
}

// componente da área principal (hero + cards)
function HeroSection() {
  const { t } = useLanguage();

  return (
    <main
      style={{
        position: "relative",
        width: "100%",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        background:
          "radial-gradient(circle at 20% 20%, rgba(20,20,24,1) 0%, rgba(10,10,18,1) 40%, rgba(5,5,10,1) 80%)",
        minHeight: "100vh",
        paddingBottom: "120px",
      }}
    >
      {/* Glow do mouse */}
      <MouseGlow />

      <section
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "64px 24px 0 24px",
          display: "grid",
          gridTemplateColumns: "minmax(0,1fr)",
          rowGap: "40px",
        }}
      >
        {/* Texto principal lado esquerdo */}
        <div
          style={{
            maxWidth: "640px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem, 1vw + 1.5rem, 2.5rem)",
              fontWeight: 600,
              lineHeight: 1.15,
              letterSpacing: "-0.04em",
              color: "white",
              margin: 0,
              textWrap: "balance",
            }}
          >
            {/* título principal com destaque dourado */}
            <span style={{ color: "white" }}>{t.heroHeadline.split("{gold}")[0]}</span>
            <span
              style={{
                background:
                  "linear-gradient(90deg,rgb(255,237,180) 0%,rgb(245,200,70) 50%,rgb(130,92,27) 100%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                textShadow:
                  "0 0 10px rgba(255,220,120,0.4),0 0 40px rgba(255,170,60,0.2)",
              }}
            >
              {t.heroHeadline.split("{gold}")[1] || ""}
            </span>
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "16px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
              maxWidth: "620px",
              letterSpacing: "-0.03em",
            }}
          >
            {t.heroSub}
          </p>

          {/* Caixa de prompt + botão Generate */}
          <div
            style={{
              marginTop: "32px",
              position: "relative",
              background:
                "radial-gradient(circle at 0% 0%, rgba(255,230,140,0.05) 0%, rgba(0,0,0,0) 70%)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 30px 120px rgba(255,220,120,0.08), 0 0 120px rgba(255,200,60,0.05) inset",
              borderRadius: "8px",
              padding: "16px",
              maxWidth: "640px",
              backgroundColor: "rgba(15,15,20,0.6)",
              backdropFilter: "blur(8px)",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "14px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                marginBottom: "8px",
                letterSpacing: "-0.03em",
              }}
            >
              {t.promptLabel}
            </label>

            <div
              style={{
                display: "flex",
                gap: "12px",
              }}
            >
              <input
                placeholder={t.promptPlaceholder}
                style={{
                  flex: 1,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.15)",
                  borderRadius: "6px",
                  padding: "14px 16px",
                  color: "white",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  outline: "none",
                  minWidth: 0,
                }}
              />

              <button
                style={{
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(255,237,180,0.9) 0%, rgba(245,200,70,0.6) 40%, rgba(30,22,0,0.1) 100%)",
                  boxShadow:
                    "0 15px 40px rgba(255,220,120,0.22), 0 3px 6px rgba(0,0,0,0.6)",
                  border: "1px solid rgba(255,255,255,0.3)",
                  borderRadius: "8px",
                  color: "#1a1a1a",
                  fontSize: "14px",
                  fontWeight: 500,
                  padding: "14px 16px",
                  minWidth: "110px",
                  textAlign: "center",
                  cursor: "pointer",
                  lineHeight: 1.2,
                  whiteSpace: "nowrap",
                  fontFamily:
                    '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
                }}
              >
                {t.generateBtn}
              </button>
            </div>

            <p
              style={{
                fontSize: "13px",
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.5)",
                marginTop: "12px",
              }}
            >
              {t.betaNote}
            </p>
          </div>

          {/* 3 cards de valor */}
          <div
            style={{
              marginTop: "40px",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(min(260px,100%),1fr))",
              gap: "16px",
              maxWidth: "960px",
            }}
          >
            {/* Card 1 */}
            <div
              style={{
                backgroundColor: "rgba(15,15,20,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                padding: "16px",
                boxShadow:
                  "0 30px 80px rgba(255,220,120,0.05), 0 2px 2px rgba(0,0,0,0.8)",
                minHeight: "120px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "white",
                  marginBottom: "8px",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.badgeAiTitle}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.badgeAiDesc}
              </div>
            </div>

            {/* Card 2 */}
            <div
              style={{
                backgroundColor: "rgba(15,15,20,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                padding: "16px",
                boxShadow:
                  "0 30px 80px rgba(255,220,120,0.05), 0 2px 2px rgba(0,0,0,0.8)",
                minHeight: "120px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "white",
                  marginBottom: "8px",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.badgeTeamTitle}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.badgeTeamDesc}
              </div>
            </div>

            {/* Card 3 */}
            <div
              style={{
                backgroundColor: "rgba(15,15,20,0.5)",
                border: "1px solid rgba(255,255,255,0.07)",
                borderRadius: "8px",
                padding: "16px",
                boxShadow:
                  "0 30px 80px rgba(255,220,120,0.05), 0 2px 2px rgba(0,0,0,0.8)",
                minHeight: "120px",
              }}
            >
              <div
                style={{
                  fontSize: "14px",
                  fontWeight: 500,
                  color: "white",
                  marginBottom: "8px",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.badgeLaunchTitle}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  lineHeight: 1.4,
                  color: "rgba(255,255,255,0.6)",
                  letterSpacing: "-0.03em",
                }}
              >
                {t.badgeLaunchDesc}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer simples */}
      <footer
        style={{
          maxWidth: "1280px",
          margin: "64px auto 0 auto",
          padding: "24px",
          color: "rgba(255,255,255,0.55)",
          fontSize: "13px",
          lineHeight: 1.4,
          borderTop: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
            marginBottom: "8px",
            letterSpacing: "-0.03em",
          }}
        >
          {t.footerTagline}
        </div>
        <div style={{ color: "rgba(255,255,255,0.4)" }}>
          © 2025 Kodiah Inc. All rights reserved.
        </div>
      </footer>
    </main>
  );
}

// Componente raiz que envolve tudo com o provider de idioma
export default function ClientRoot() {
  return (
    <LanguageProvider>
      <Header />
      <HeroSection />
    </LanguageProvider>
  );
}
