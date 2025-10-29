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
        zIndex: 10, // acima do glow
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
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
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
              fontWeight: 600,
              color: "white",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
              letterSpacing: "0.2px",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* Idiomas + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <LanguageSelector />
          <button
            type="button"
            style={{
              all: "unset",
              background:
                "radial-gradient(120% 120% at 50% 0, #f6e27a 0%, #e2b84b 55%, #c7922f 100%)",
              color: "#1a1205",
              fontWeight: 600,
              padding: "10px 16px",
              borderRadius: "999px",
              cursor: "pointer",
              boxShadow:
                "0 2px 0 rgba(0,0,0,0.4), 0 10px 28px rgba(246,226,122,0.25)",
              transition: "transform .08s ease, box-shadow .12s ease",
            }}
            onMouseDown={(e) =>
              ((e.currentTarget.style.transform = "translateY(1px)"),
              (e.currentTarget.style.boxShadow =
                "0 1px 0 rgba(0,0,0,0.5), 0 6px 18px rgba(246,226,122,0.2)"))
            }
            onMouseUp={(e) =>
              ((e.currentTarget.style.transform = "translateY(0)"),
              (e.currentTarget.style.boxShadow =
                "0 2px 0 rgba(0,0,0,0.4), 0 10px 28px rgba(246,226,122,0.25)"))
            }
          >
            {t.startButton /* ex: "Start Building" */}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage();

  return (
    <main
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(1200px 600px at 30% 10%, rgba(246,226,122,0.08) 0, rgba(0,0,0,0) 45%), #0d0f14",
        minHeight: "calc(100dvh - 72px)",
        color: "white",
      }}
    >
      <MouseGlow />

      <section
        style={{
          maxWidth: "1180px",
          margin: "0 auto",
          padding: "56px 24px 56px",
        }}
      >
        {/* Headline */}
        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1.05,
            fontWeight: 800,
            letterSpacing: "-0.02em",
            margin: "18px 0 12px",
            background:
              "linear-gradient(180deg, #f6e27a 0%, #d5c274 12%, #a9a29a 60%, #dcdcdc 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            textShadow: "0 10px 68px rgba(246,226,122,0.12)",
            maxWidth: "820px",
          }}
        >
          {t.heroHeadline}
        </h1>

        {/* Subhead */}
        <p
          style={{
            marginTop: "12px",
            color: "rgba(255,255,255,0.82)",
            fontSize: "18px",
            lineHeight: 1.55,
            maxWidth: "760px",
          }}
        >
          {t.heroSub}
        </p>

        {/* Prompt + botão */}
        <div
          style={{
            marginTop: "28px",
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "16px",
            padding: "14px",
            boxShadow: "0 20px 60px rgba(0,0,0,0.35)",
            maxWidth: "760px",
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
            <input
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
              }}
            />

            <button
              type="button"
              style={{
                all: "unset",
                background:
                  "radial-gradient(140% 140% at 50% 0, #f6e27a 0%, #e2b84b 55%, #c7922f 100%)",
                color: "#1a1205",
                fontWeight: 700,
                padding: "12px 18px",
                borderRadius: "12px",
                cursor: "pointer",
                boxShadow:
                  "0 2px 0 rgba(0,0,0,0.4), 0 10px 28px rgba(246,226,122,0.22)",
              }}
            >
              Generate
            </button>
          </div>

          <div
            style={{
              marginTop: "10px",
              color: "rgba(255,255,255,0.55)",
              fontSize: "13px",
              paddingLeft: "2px",
            }}
          >
            Private beta — limited seats.
          </div>
        </div>

        {/* Badges */}
        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "16px",
            maxWidth: "980px",
          }}
        >
          {[ // conteúdo dos cards
            { title: t.badgeAiTitle, desc: t.badgeAiDesc },
            { title: t.badgeTeamTitle, desc: t.badgeTeamDesc },
            { title: t.badgeLaunchTitle, desc: t.badgeLaunchDesc },
          ].map((b, i) => (
            <div
              key={i}
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                padding: "16px",
                boxShadow: "0 10px 40px rgba(0,0,0,0.25)",
              }}
            >
              <div style={{ fontWeight: 700, marginBottom: "6px" }}>
                {b.title}
              </div>
              <div style={{ color: "rgba(255,255,255,0.8)" }}>{b.desc}</div>
            </div>
          ))}
        </div>

        {/* Rodapé curto */}
        <div
          style={{
            marginTop: "28px",
            color: "rgba(255,255,255,0.65)",
            fontSize: "13px",
          }}
        >
          {t.footerTagline}
        </div>
      </section>
    </main>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <Header />
      <Hero />
    </LanguageProvider>
  );
}
