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
        zIndex: 10, // acima da luz
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
        {/* LOGO + NOME */}
<div
  style={{
    display: "flex",
    alignItems: "center",
    gap: "12px",
  }}
>
  <Image
    src="/kodiah-logo.png" // Certifique-se de que o arquivo está em /public/kodiah-logo.png
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

            }}
          />
          <span
            style={{
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "-0.03em",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* LADO DIREITO */}
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
              fontSize: "13px",
              lineHeight: "16px",
              fontWeight: 500,
              background:
                "linear-gradient(90deg,#F6E27A 0%,#C7922F 100%)",
              color: "#000",
              borderRadius: "999px",
              padding: "6px 12px",
              border: "0",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(246,226,122,0.5),0 0 60px rgba(199,146,47,0.3)",
            }}
          >
            {t.startButton}
          </button>
        </div>
      </div>
    </header>
  );
}

function Footer() {
  const { t } = useLanguage();
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "32px 24px 64px",
        background:
          "radial-gradient(circle at 20% 20%, rgba(246,226,122,0.06) 0%, rgba(0,0,0,0) 60%), rgba(0,0,0,0.1)",
        flexShrink: 0,
        position: "relative",
        zIndex: 10,
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          fontSize: "13px",
          lineHeight: "20px",
          color: "rgba(255,255,255,0.6)",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <div
          style={{
            fontWeight: 500,
            color: "rgba(255,255,255,0.8)",
          }}
        >
          {t.footerTagline}
        </div>

        <div style={{ color: "rgba(255,255,255,0.5)" }}>
          © {new Date().getFullYear()} Kodiah Inc. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default function ClientRoot({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LanguageProvider>
      {/* Esse wrapper é o "fundo" do site */}
      <div
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 20% 20%, rgba(246,226,122,0.07) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 80% 20%, rgba(199,146,47,0.07) 0%, rgba(0,0,0,0) 60%), linear-gradient(#0a0f1c 0%, #1a2235 100%)",
          color: "white",
          WebkitFontSmoothing: "antialiased",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Roboto", "Segoe UI", sans-serif',
          display: "flex",
          flexDirection: "column",
          position: "relative",
          overflow: "hidden", // garante que nada estoure visual
        }}
      >
        {/* Luz que segue o mouse */}
        <MouseGlow />

        <Header />

        {/* CONTEÚDO DA PÁGINA */}
        <main
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "48px 24px 80px",
            flex: "1 0 auto",
            position: "relative",
            zIndex: 10,
          }}
        >
          {children}
        </main>

        <Footer />
      </div>
    </LanguageProvider>
  );
}
