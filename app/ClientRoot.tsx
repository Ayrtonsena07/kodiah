"use client";

import Image from "next/image";
import { useLanguage, LanguageProvider } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";

// ===============================
// HEADER
// ===============================
function Header() {
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
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            Kodiah
          </span>
        </div>

        {/* seletor de idioma */}
        <LanguageSelector />
      </div>
    </header>
  );
}

// ===============================
// HERO SECTION
// ===============================
function Hero() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "64px 24px 120px",
        color: "white",
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
        position: "relative",
        zIndex: 1,
      }}
    >
      <h1
        style={{
          fontSize: "clamp(2rem, 1.1rem + 2vw, 2.5rem)",
          fontWeight: 600,
          lineHeight: 1.2,
          color: "white",
          maxWidth: "720px",
          margin: "0 0 24px 0",
        }}
      >
        {t.heroHeadline}
      </h1>

      <p
        style={{
          maxWidth: "720px",
          fontSize: "1.1rem",
          lineHeight: 1.5,
          fontWeight: 400,
          color: "rgba(255,255,255,0.75)",
          margin: "0 0 32px 0",
        }}
      >
        {t.heroSub}
      </p>

      {/* prompt */}
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          padding: "24px",
          maxWidth: "720px",
          marginBottom: "48px",
        }}
      >
        <label
          style={{
            display: "block",
            fontSize: "0.9rem",
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
            marginBottom: "8px",
          }}
        >
          {t.promptLabel}
        </label>

        <div style={{ display: "flex", alignItems: "stretch" }}>
          <input
            style={{
              flex: 1,
              background: "transparent",
              color: "white",
              border: "1px solid rgba(255,255,255,0.2)",
              borderRadius: "6px 0 0 6px",
              padding: "14px 16px",
              fontSize: "0.95rem",
              outline: "none",
            }}
            placeholder={t.promptPlaceholder}
          />
          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #f7e9a4 0%, #c0892a 60%)",
              border: "none",
              color: "#000",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0 20px",
              borderRadius: "0 6px 6px 0",
              cursor: "pointer",
            }}
          >
            {t.generateBtn}
          </button>
        </div>

        <div
          style={{
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.6)",
            marginTop: "10px",
          }}
        >
          {t.disclaimer}
        </div>
      </div>

      {/* cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
          maxWidth: "960px",
        }}
      >
        <Card title={t.card1Title} body={t.card1Body} />
        <Card title={t.card2Title} body={t.card2Body} />
        <Card title={t.card3Title} body={t.card3Body} />
      </div>
    </section>
  );
}

// ===============================
// CARD COMPONENT
// ===============================
function Card({ title, body }: { title: string; body: string }) {
  return (
    <div
      style={{
        backgroundColor: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: "8px",
        padding: "20px 24px",
        boxShadow:
          "0 30px 80px rgba(0,0,0,0.8), 0 8px 20px rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          color: "white",
          fontSize: "1rem",
          fontWeight: 500,
          marginBottom: "8px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "0.9rem",
          lineHeight: 1.5,
          color: "rgba(255,255,255,0.7)",
        }}
      >
        {body}
      </div>
    </div>
  );
}

// ===============================
// FOOTER
// ===============================
function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        marginTop: "80px",
        color: "rgba(255,255,255,0.6)",
        fontSize: "0.8rem",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "24px",
          textAlign: "left",
        }}
      >
        <div style={{ color: "rgba(255,255,255,0.8)", fontWeight: 500 }}>
          Kodiah — Intelligence has a new signature.
        </div>
        <div>© {new Date().getFullYear()} Kodiah Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ===============================
// ROOT
// ===============================
export default function ClientRoot() {
  return (
    <LanguageProvider>
      <MouseGlow />
      <Header />
      <Hero />
      <Footer />
    </LanguageProvider>
  );
}
