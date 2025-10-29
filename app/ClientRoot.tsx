"use client";

import Image from "next/image";
import React from "react";

import { LanguageProvider, useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";

/** ---------- HEADER ---------- */
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
            }}
          >
            Kodiah
          </span>
        </div>

        {/* LANG + CTA */}
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <LanguageSelector />
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              background:
                "linear-gradient(180deg, rgba(255,222,141,1) 0%, rgba(230,170,60,1) 100%)",
              color: "#1b1404",
              fontWeight: 600,
              fontSize: "14px",
              padding: "10px 16px",
              borderRadius: "12px",
              boxShadow:
                "0 8px 30px rgba(255,207,92,0.25), 0 2px 8px rgba(0,0,0,0.35)",
              transition: "transform .12s ease",
            }}
            onMouseDown={(e) =>
              ((e.currentTarget.style.transform = "translateY(1px)"))
            }
            onMouseUp={(e) =>
              ((e.currentTarget.style.transform = "translateY(0)"))
            }
          >
            {t.startButton}
          </button>
        </div>
      </div>
    </header>
  );
}

/** ---------- HERO ---------- */
function Hero() {
  const { t } = useLanguage();

  return (
    <main style={{ position: "relative", zIndex: 1, color: "white" }}>
      {/* glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          right: "-80px",
          height: "420px",
          background:
            "radial-gradient(800px 220px at 45% 30%, rgba(255,214,115,0.12), transparent 70%)",
          filter: "blur(20px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ maxWidth: "1280px", margin: "0 auto", padding: "48px 24px" }}>
        <h1
          style={{
            fontSize: "56px",
            lineHeight: 1.05,
            letterSpacing: "-0.5px",
            margin: 0,
            marginBottom: "18px",
            fontWeight: 800,
            background:
              "linear-gradient(180deg, #ffecb3 0%, #ffd15a 60%, #e7b23b 100%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            textShadow: "0 12px 60px rgba(255,212,82,0.15)",
          }}
        >
          {t.heroHeadline}
        </h1>

        <p
          style={{
            marginTop: "8px",
            marginBottom: "28px",
            color: "rgba(255,255,255,0.82)",
            fontSize: "18px",
            maxWidth: "760px",
          }}
        >
          {t.heroSub}
        </p>

        {/* Prompt */}
        <div
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.06)",
            borderRadius: "16px",
            padding: "18px",
            maxWidth: "780px",
            boxShadow:
              "0 35px 120px rgba(0,0,0,0.50), inset 0 1px 0 rgba(255,255,255,0.05)",
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

          <div style={{ display: "flex", gap: "10px" }}>
            <input
              id="prompt"
              placeholder={t.promptPlaceholder}
              style={{
                flex: 1,
                height: "44px",
                borderRadius: "12px",
                border: "1px solid rgba(255,255,255,0.08)",
                background: "rgba(0,0,0,0.35)",
                color: "white",
                padding: "0 14px",
                outline: "none",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            />

            <button
              style={{
                all: "unset",
                cursor: "pointer",
                borderRadius: "12px",
                background:
                  "linear-gradient(180deg, rgba(255,222,141,1) 0%, rgba(230,170,60,1) 100%)",
                color: "#1b1404",
                padding: "0 18px",
                fontWeight: 700,
                fontSize: "14px",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                minWidth: "112px",
                boxShadow:
                  "0 8px 30px rgba(255,207,92,0.25), 0 2px 8px rgba(0,0,0,0.35)",
              }}
            >
              Generate
            </button>
          </div>

          <div
            style={{
              marginTop: "10px",
              fontSize: "12px",
              color: "rgba(255,255,255,0.5)",
            }}
          >
            Private beta — limited seats.
          </div>
        </div>

        {/* Cards */}
        <div
          style={{
            marginTop: "28px",
            display: "grid",
            gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
            gap: "18px",
          }}
        >
          <div
            style={{
              borderRadius: "16px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "18px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "6px" }}>
              {t.badgeAiTitle}
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)" }}>{t.badgeAiDesc}</div>
          </div>

          <div
            style={{
              borderRadius: "16px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "18px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "6px" }}>
              {t.badgeTeamTitle}
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.badgeTeamDesc}
            </div>
          </div>

          <div
            style={{
              borderRadius: "16px",
              background:
                "linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",
              border: "1px solid rgba(255,255,255,0.07)",
              padding: "18px",
              boxShadow: "0 25px 80px rgba(0,0,0,0.35)",
            }}
          >
            <div style={{ fontWeight: 700, marginBottom: "6px" }}>
              {t.badgeLaunchTitle}
            </div>
            <div style={{ color: "rgba(255,255,255,0.7)" }}>
              {t.badgeLaunchDesc}
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "42px",
            fontSize: "13px",
            color: "rgba(255,255,255,0.55)",
          }}
        >
          {t.footerTagline}
        </div>
      </div>
    </main>
  );
}

/** ---------- ROOT ---------- */
export default function ClientRoot() {
  return (
    <LanguageProvider>
      <div
        style={{
          minHeight: "100dvh",
          background:
            "radial-gradient(1600px 900px at 50% -200px, #1a1a22 0%, #0a0b10 65%)",
        }}
      >
        <MouseGlow />
        <Header />
        <Hero />
      </div>
    </LanguageProvider>
  );
}
