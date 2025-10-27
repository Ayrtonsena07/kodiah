"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";

/* =========================
   EFEITO DE LUZ NO MOUSE
   ========================= */
function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPos({ x: e.clientX, y: e.clientY });
    }
    window.addEventListener("pointermove", handleMove);
    return () => window.removeEventListener("pointermove", handleMove);
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <div
        style={{
          position: "absolute",
          left: pos.x - 200,
          top: pos.y - 200,
          width: 400,
          height: 400,
          borderRadius: "50%",
          background:
            "radial-gradient(circle at center, rgba(255,215,100,0.18) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          mixBlendMode: "screen",
        }}
      />
    </div>
  );
}

/* =========================
   CABEÇALHO (LOGO / NOME / LINGUA / BOTÃO)
   ========================= */
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
        }}
      >
        {/* BLOCO ESQUERDO: LOGO + NOME */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <Image
            src="/kodiah-logo.png" // <-- garanta que esse arquivo está em /public/kodiah-logo.png
            alt="Kodiah Logo"
            width={42}
            height={42}
            style={{
              borderRadius: "10px",
              // brilho dourado premium em volta da logo
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

        {/* BLOCO DIREITO: IDIOMA + BOTÃO */}
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
            {t.startBuilding /* ex: "Start Building" */}
          </button>
        </div>
      </div>
    </header>
  );
}

/* =========================
   BLOCO HERO (título / descrição / input / cards)
   ========================= */
function Hero() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: "relative",
        zIndex: 1, // acima do MouseGlow
        color: "white",
        maxWidth: "1280px",
        margin: "0 auto",
        padding: "48px 24px 96px",
        display: "flex",
        flexDirection: "column",
        gap: "32px",
      }}
    >
      {/* Título principal */}
      <div
        style={{
          maxWidth: "720px",
          display: "flex",
          flexDirection: "column",
          gap: "16px",
        }}
      >
        <h1
          style={{
            fontSize: "clamp(2rem,1.2rem + 1.5vw,2.5rem)",
            lineHeight: 1.2,
            fontWeight: 600,
            color: "white",
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
          }}
        >
          <span
            style={{
              color: "white",
            }}
          >
            {t.hero_line1_prefix /* ex: "Shape your" */}
          </span>{" "}
          <span
            style={{
              background:
                "linear-gradient(90deg, rgba(255,241,175,1) 0%, rgba(180,134,26,1) 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              fontWeight: 600,
              textShadow:
                "0 0 12px rgba(255,228,120,0.4), 0 0 32px rgba(180,134,26,0.4)",
            }}
          >
            {t.hero_line1_highlight /* ex: "vision" */}
          </span>{" "}
          <span
            style={{
              color: "white",
            }}
          >
            {t.hero_line1_suffix /* ex: "into reality." */}
          </span>
        </h1>

        <p
          style={{
            color: "rgba(255,255,255,0.8)",
            fontSize: "16px",
            lineHeight: 1.5,
            maxWidth: "640px",
            fontWeight: 400,
            fontFamily:
              "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
          }}
        >
          {t.hero_sub /* ex: "Tell Kodiah what you want..." */}
        </p>
      </div>

      {/* Caixa prompt + botão Generate */}
      <div
        style={{
          position: "relative",
          maxWidth: "760px",
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,234,150,0.07) 0%, rgba(0,0,0,0) 70%)",
          padding: "24px",
          borderRadius: "8px",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 60px 200px rgba(255,200,50,0.15), 0 30px 60px rgba(0,0,0,0.6) inset",
          backgroundColor: "rgba(15,15,15,0.6)",
          backdropFilter: "blur(8px)",
        }}
      >
        <label
          style={{
            display: "block",
            color: "rgba(255,255,255,0.8)",
            fontSize: "14px",
            marginBottom: "8px",
            fontWeight: 400,
          }}
        >
          {t.prompt_label /* ex: "Tell Kodiah what to build:" */}
        </label>

        <div
          style={{
            display: "flex",
            gap: "12px",
          }}
        >
          <input
            defaultValue={t.prompt_placeholder /* ex: "Build me..." */}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "6px",
              color: "white",
              fontSize: "15px",
              lineHeight: 1.4,
              padding: "14px 16px",
              outline: "none",
            }}
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
              boxShadow:
                "0 20px 60px rgba(255,200,50,0.25), 0 2px 4px rgba(0,0,0,0.6)",
              cursor: "pointer",
              minWidth: "110px",
              textAlign: "center",
              whiteSpace: "nowrap",
            }}
          >
            {t.generate /* ex: "Generate" */}
          </button>
        </div>

        <div
          style={{
            marginTop: "12px",
            fontSize: "13px",
            lineHeight: 1.4,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {t.beta_note /* ex: "Private beta — limited seats." */}
        </div>
      </div>

      {/* Cards de valor */}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          maxWidth: "1040px",
        }}
      >
        {/* Card 1 */}
        <div
          style={{
            flex: "1 1 280px",
            minWidth: "260px",
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px 24px",
            boxShadow:
              "0 30px 120px rgba(0,0,0,0.8), 0 0 120px rgba(255,220,120,0.07) inset",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            {t.card1_title /* ex: "Built with AI" */}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {t.card1_desc /* ex: "You describe..." */}
          </div>
        </div>

        {/* Card 2 */}
        <div
          style={{
            flex: "1 1 280px",
            minWidth: "260px",
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px 24px",
            boxShadow:
              "0 30px 120px rgba(0,0,0,0.8), 0 0 120px rgba(255,220,120,0.07) inset",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            {t.card2_title /* ex: "Refined by humans" */}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {t.card2_desc /* ex: "Our team polishes..." */}
          </div>
        </div>

        {/* Card 3 */}
        <div
          style={{
            flex: "1 1 280px",
            minWidth: "260px",
            backgroundColor: "rgba(0,0,0,0.4)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "20px 24px",
            boxShadow:
              "0 30px 120px rgba(0,0,0,0.8), 0 0 120px rgba(255,220,120,0.07) inset",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            {t.card3_title /* ex: "Ready to sell" */}
          </div>
          <div
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "14px",
              lineHeight: 1.5,
              fontWeight: 400,
            }}
          >
            {t.card3_desc /* ex: "Hosting, login..." */}
          </div>
        </div>
      </div>
    </section>
  );
}

/* =========================
   FOOTER SIMPLES
   ========================= */
function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.07)",
        padding: "24px",
        textAlign: "center",
        color: "rgba(255,255,255,0.45)",
        fontSize: "13px",
        maxWidth: "1280px",
        margin: "0 auto",
      }}
    >
      Kodiah — Intelligence has a new signature.
      <br />
      © {year} Kodiah Inc. All rights reserved.
    </footer>
  );
}

/* =========================
   PÁGINA COMPLETA
   ========================= */
function Page() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        background:
          "radial-gradient(circle at 20% 20%, rgba(15,15,20,1) 0%, rgba(10,12,20,1) 40%, rgba(4,6,12,1) 100%)",
        backgroundColor: "#0a0c14",
        color: "white",
        position: "relative",
        zIndex: 0,
        overflow: "hidden",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
      }}
    >
      <MouseGlow />
      <Header />
      <Hero />
      <Footer />
    </main>
  );
}

/* =========================
   ROOT EXPORT (com provider de idioma)
   ========================= */
export default function ClientRoot() {
  return (
    <LanguageProvider>
      <Page />
    </LanguageProvider>
  );
}
