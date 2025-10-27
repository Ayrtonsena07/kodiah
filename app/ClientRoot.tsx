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
        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Image
            src="/kodiah-logo.png"
            alt="Kodiah Logo"
            width={42}
            height={42}
            style={{
              borderRadius: "8px",
              filter:
                "drop-shadow(0 0 10px rgba(246,226,122,0.45)) drop-shadow(0 0 25px rgba(199,146,47,0.25))",
            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 500,
              color: "white",
            }}
          >
            Kodiah
          </span>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <LanguageSelector />
          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #f7e9a4 0%, #c0892a 60%)",
              border: "none",
              color: "#000",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "10px 18px",
              borderRadius: "8px",
              cursor: "pointer",
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
  const { t } = useLanguage();

  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "64px 24px 120px",
        color: "white",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", fontWeight: 600 }}>{t.heroHeadline}</h1>
      <p style={{ fontSize: "1.1rem", opacity: 0.8 }}>{t.heroSub}</p>
      <div style={{ marginTop: "20px" }}>
        <input
          placeholder={t.promptPlaceholder}
          style={{
            background: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(255,255,255,0.1)",
            padding: "10px",
            borderRadius: "6px",
            color: "white",
            width: "60%",
          }}
        />
        <button
          style={{
            marginLeft: "10px",
            background: "#f7e9a4",
            border: "none",
            padding: "10px 20px",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          {t.generateBtn}
        </button>
      </div>
    </section>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <MouseGlow />
      <Header />
      <Hero />
    </LanguageProvider>
  );
}
