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
            }}
          >
            Kodiah
          </span>
        </div>

        {/* IDIOMA + BOTÃO */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* seletor de idioma */}
          <LanguageSelector />

          {/* botão dourado no header */}
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,241,175,1) 0%, rgba(209,162,47,1) 40%, rgba(93,61,7,1) 100%)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 500,
              padding: "10px 14px",
              borderRadius: "8px",
              minWidth: "110px",
              textAlign: "center",
              boxShadow:
                "0 10px 40px rgba(255,222,100,0.4), 0 2px 4px rgba(0,0,0,0.8)",
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
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "48px 24px 80px",
        color: "white",
        position: "relative",
      }}
    >
      {/* Título principal */}
      <h1
        style={{
          fontSize: "clamp(2rem, 2vw, 2.5rem)",
          fontWeight: 500,
          lineHeight: 1.2,
          color: "white",
          maxWidth: "640px",
        }}
      >
        {t.heroHeadline}
      </h1>

      {/* Subtítulo */}
      <p
        style={{
          marginTop: "16px",
          fontSize: "16px",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.7)",
          maxWidth: "640px",
        }}
      >
        {t.heroSub}
      </p>

      {/* BLOCO DO INPUT + BOTÃO */}
      <div
        style={{
          marginTop: "32px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,241,175,0.08) 0%, rgba(0,0,0,0) 70%)",
          border: "1px solid rgba(255,255,255,0.12)",
          borderRadius: "8px",
          padding: "20px",
          position: "relative",
          boxShadow:
            "0 30px 90px rgba(255,222,100,0.08), 0 60px 200px rgba(0,0,0,0.9)",
          maxWidth: "700px",
        }}
      >
        {/* Label acima do campo
           IMPORTANTE: sua tradução NÃO tem promptLabel,
           então escrevemos o texto manualmente pra não quebrar build.
        */}
        <label
  style={{
    display: "block",
    color: "rgba(255,255,255,0.9)",
    fontSize: "14px",
    marginBottom: "8px",
  }}
>
  Tell Kodiah what to build:
</label>


        <div
          style={{
            display: "flex",
            flexWrap: "nowrap",
            gap: "12px",
          }}
        >
          <input
            type="text"
            defaultValue={t.promptPlaceholder}
            style={{
              flex: 1,
              backgroundColor: "#000",
              color: "white",
              fontSize: "14px",
              borderRadius: "6px",
              border: "1px solid rgba(255,255,255,0.2)",
              padding: "12px",
              outline: "none",
            }}
          />

          <button
            style={{
              all: "unset",
              cursor: "pointer",
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,241,175,1) 0%, rgba(209,162,47,1) 40%, rgba(93,61,7,1) 100%)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 500,
              padding: "12px 16px",
              borderRadius: "8px",
              minWidth: "100px",
              textAlign: "center",
              boxShadow:
                "0 15px 50px rgba(255,222,100,0.4), 0 2px 4px rgba(0,0,0,0.8)",
            }}
          >
            {t.startButton}
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
          Private beta — limited seats.
        </div>
      </div>

      {/* 3 cards de valor */}
      <div
        style={{
          marginTop: "40px",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(320px,100%),1fr))",
          gap: "16px",
          maxWidth: "1000px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px",
            color: "white",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 10px 30px rgba(255,222,100,0.05) inset",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "8px",
              color: "white",
            }}
          >
            {t.badgeAiTitle}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.badgeAiDesc}
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px",
            color: "white",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 10px 30px rgba(255,222,100,0.05) inset",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "8px",
              color: "white",
            }}
          >
            {t.badgeTeamTitle}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.badgeTeamDesc}
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px",
            color: "white",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 10px 30px rgba(255,222,100,0.05) inset",
          }}
        >
          <div
            style={{
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "8px",
              color: "white",
            }}
          >
            {t.badgeLaunchTitle}
          </div>
          <div
            style={{
              fontSize: "14px",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.badgeLaunchDesc}
          </div>
        </div>
      </div>

      {/* Rodapé / tagline */}
      <div
        style={{
          marginTop: "48px",
          fontSize: "13px",
          lineHeight: 1.4,
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {t.footerTagline}
      </div>
    </section>
  );
}

function PageContent() {
  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,241,175,0.08) 0%, rgba(15,16,24,1) 60%)",
        backgroundColor: "#0f1018",
        position: "relative",
        overflow: "hidden",
        color: "white",
      }}
    >
      {/* brilho que segue o mouse */}
      <MouseGlow />

      <Header />
      <HeroSection />
    </div>
  );
}

// Provider global de idioma
export default function ClientRoot() {
  return (
    <LanguageProvider>
      <PageContent />
    </LanguageProvider>
  );
}
