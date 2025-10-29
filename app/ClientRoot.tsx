"use client";

import Image from "next/image";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";
import { translations, type TDict } from "./translations";

function Header() {
  const { t } = useLanguage() as { t: TDict };

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
        {/* Logo + nome */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
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
              textShadow: "0 0 12px rgba(246,226,122,0.25)",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* Idiomas + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "14px" }}>
          <LanguageSelector />

          <button
            style={{
              all: "unset",
              cursor: "pointer",
              padding: "10px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "radial-gradient(120% 160% at 50% 10%, rgba(255,215,128,0.35) 0%, rgba(255,198,85,0.15) 40%, rgba(255,198,85,0.08) 70%, rgba(255,198,85,0.04) 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,215,128,0.4) inset, 0 8px 24px rgba(255,198,85,0.24), 0 2px 6px rgba(0,0,0,0.35)",
              color: "#111",
              fontWeight: 700,
            }}
            onClick={() => {
              // futuro: abrir modal ou rolar pra seção de captura
            }}
          >
            {t.startButton}
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const { t } = useLanguage() as { t: TDict };

  return (
    <section
      style={{
        maxWidth: "1050px",
        margin: "0 auto",
        padding: "64px 24px 24px",
        color: "white",
      }}
    >
      <h1
        style={{
          fontSize: "54px",
          fontWeight: 800,
          lineHeight: 1.1,
          margin: 0,
          letterSpacing: "-0.5px",
        }}
      >
        {t.heroHeadline}
      </h1>

      <p
        style={{
          marginTop: "12px",
          fontSize: "18px",
          color: "rgba(255,255,255,0.8)",
          maxWidth: "820px",
        }}
      >
        {t.heroSub}
      </p>

      {/* Prompt de lead (rotular usando t.promptLabel) */}
      <div
        style={{
          marginTop: "28px",
          padding: "18px",
          borderRadius: "16px",
          background: "rgba(0,0,0,0.35)",
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.35)",
        }}
      >
        <label
          htmlFor="prompt"
          style={{
            display: "block",
            marginBottom: "8px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {t.promptLabel}
        </label>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <input
            id="prompt"
            placeholder={t.promptPlaceholder}
            style={{
              flex: 1,
              height: "48px",
              padding: "0 14px",
              borderRadius: "12px",
              background: "rgba(255,255,255,0.06)",
              color: "white",
              border: "1px solid rgba(255,255,255,0.1)",
              outline: "none",
            }}
          />
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              padding: "12px 18px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.12)",
              background:
                "radial-gradient(120% 160% at 50% 10%, rgba(255,215,128,0.35) 0%, rgba(255,198,85,0.15) 40%, rgba(255,198,85,0.08) 70%, rgba(255,198,85,0.04) 100%)",
              boxShadow:
                "0 0 0 1px rgba(255,215,128,0.4) inset, 0 8px 24px rgba(255,198,85,0.24), 0 2px 6px rgba(0,0,0,0.35)",
              color: "#111",
              fontWeight: 800,
            }}
          >
            Generate
          </button>
        </div>

        <div
          style={{
            marginTop: "10px",
            fontSize: "12px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          Private beta — limited seats.
        </div>
      </div>

      {/* 3 cards */}
      <div
        style={{
          marginTop: "28px",
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
        }}
      >
        {[
          { title: t.badgeAiTitle, desc: t.badgeAiDesc },
          { title: t.badgeTeamTitle, desc: t.badgeTeamDesc },
          { title: t.badgeLaunchTitle, desc: t.badgeLaunchDesc },
        ].map((item, i) => (
          <div
            key={i}
            style={{
              padding: "18px",
              borderRadius: "16px",
              background: "rgba(0,0,0,0.35)",
              boxShadow:
                "inset 0 0 0 1px rgba(255,255,255,0.06), 0 20px 60px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "6px" }}>
              {item.title}
            </div>
            <div style={{ color: "rgba(255,255,255,0.75)" }}>{item.desc}</div>
          </div>
        ))}
      </div>

      {/* Rodapé */}
      <div
        style={{
          marginTop: "28px",
          color: "rgba(255,255,255,0.6)",
          fontSize: "14px",
        }}
      >
        {t.footerTagline}
      </div>
    </section>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider translations={translations}>
      <MouseGlow />
      <Header />
      <Hero />
    </LanguageProvider>
  );
}
