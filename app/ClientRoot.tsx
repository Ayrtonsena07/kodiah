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
        {/* logo + nome */}
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
                "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* lado direito: seletor de idioma + botão call to action */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <LanguageSelector />

          <button
            style={{
              all: "unset",
              cursor: "pointer",
              borderRadius: "10px",
              padding: "10px 14px",
              fontSize: "14px",
              fontWeight: 500,
              color: "#000",
              background:
                "linear-gradient(90deg, rgba(255,224,130,1) 0%, rgba(204,160,60,1) 100%)",
              boxShadow:
                "0 8px 24px rgba(255,224,130,0.2), 0 0 60px rgba(255,200,80,0.4)",
              border: "1px solid rgba(255,255,255,0.2)",
              lineHeight: 1.2,
              whiteSpace: "nowrap",
            }}
          >
            {t.startButton /* "Start Building", "Começar agora", "Empezar ahora" */}
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
        background:
          "radial-gradient(circle at 20% 20%, rgba(255,220,130,0.07) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 80% 10%, rgba(60,60,80,0.4) 0%, rgba(0,0,0,0) 60%), linear-gradient(to bottom right, #0f1117 0%, #1a1d29 60%, #000 100%)",
        color: "white",
        padding: "48px 24px 80px",
        minHeight: "480px",
        overflow: "hidden",
      }}
    >
      {/* Glow do mouse */}
      <MouseGlow />

      <div
        style={{
          position: "relative",
          maxWidth: "1280px",
          margin: "0 auto",
          zIndex: 2,
        }}
      >
        {/* headline */}
        <h1
          style={{
            fontSize: "clamp(1.8rem, 1.2vw + 1rem, 2.4rem)",
            fontWeight: 600,
            lineHeight: 1.25,
            color: "white",
            maxWidth: "640px",
            letterSpacing: "-0.03em",
          }}
        >
          {/* um pedaço dourado pro destaque */}
          <span style={{ color: "rgb(255,224,130)" }}>
            {t.heroHeadline.split(" ")[0]}{" "}
          </span>
          {t.heroHeadline.split(" ").slice(1).join(" ")}
        </h1>

        <p
          style={{
            marginTop: "16px",
            maxWidth: "680px",
            color: "rgba(255,255,255,0.7)",
            fontSize: "16px",
            lineHeight: 1.5,
            fontWeight: 400,
          }}
        >
          {t.heroSub}
        </p>

        {/* bloco da caixa de prompt + botão generate */}
        <div
          style={{
            marginTop: "32px",
            maxWidth: "700px",
            background:
              "radial-gradient(circle at 50% 0%, rgba(255,220,130,0.07) 0%, rgba(0,0,0,0) 70%)",
            borderRadius: "12px",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow:
              "0 30px 80px rgba(0,0,0,0.7), 0 60px 80px rgba(0,0,0,0.4)",
            padding: "20px",
            color: "white",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "stretch",
                gap: "12px",
              }}
            >
              <input
                placeholder={t.promptPlaceholder}
                style={{
                  flex: "1 1 auto",
                  minWidth: 0,
                  backgroundColor: "rgba(0,0,0,0.6)",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.12)",
                  padding: "14px 16px",
                  color: "white",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  outline: "none",
                }}
              />

              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  background:
                    "linear-gradient(90deg, rgba(255,224,130,1) 0%, rgba(204,160,60,1) 100%)",
                  color: "#000",
                  borderRadius: "8px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  padding: "14px 16px",
                  fontSize: "14px",
                  lineHeight: 1.2,
                  fontWeight: 500,
                  textAlign: "center",
                  minWidth: "110px",
                  boxShadow:
                    "0 8px 24px rgba(255,224,130,0.2), 0 0 60px rgba(255,200,80,0.4)",
                  whiteSpace: "nowrap",
                }}
              >
                Generate
              </button>
            </div>

            <div
              style={{
                fontSize: "12px",
                lineHeight: "16px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
                Private beta — limited seats.
            </div>
          </div>
        </div>

        {/* cards de valor */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(min(280px,100%),1fr))",
            gap: "16px",
            marginTop: "32px",
            maxWidth: "1000px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,0,0.6) 0%, rgba(30,30,30,0.2) 100%)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "16px",
              color: "white",
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
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t.badgeAiDesc}
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,0,0.6) 0%, rgba(30,30,30,0.2) 100%)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "16px",
              color: "white",
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
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t.badgeTeamDesc}
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              background:
                "linear-gradient(to bottom right, rgba(0,0,0,0.6) 0%, rgba(30,30,30,0.2) 100%)",
              borderRadius: "10px",
              border: "1px solid rgba(255,255,255,0.08)",
              padding: "16px",
              color: "white",
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
                lineHeight: 1.4,
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {t.badgeLaunchDesc}
            </div>
          </div>
        </div>

        {/* rodapé */}
        <div
          style={{
            marginTop: "40px",
            paddingTop: "24px",
            fontSize: "13px",
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.5)",
            borderTop: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          {t.footerTagline}
          <br />
          <span style={{ fontSize: "12px", opacity: 0.5 }}>
            © 2025 Kodiah Inc. All rights reserved.
          </span>
        </div>
      </div>
    </section>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <div
        style={{
          backgroundColor: "#0b0d12",
          minHeight: "100vh",
          color: "white",
          fontFamily:
            "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
        }}
      >
        <Header />
        <HeroSection />
      </div>
    </LanguageProvider>
  );
}
