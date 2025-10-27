"use client";

import Image from "next/image";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";

// HEADER ===================================================
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
        zIndex: 10, // acima do glow do mouse
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
        {/* ESQUERDA: logo + nome */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          {/* sua logo oficial */}
          <Image
            src="/kodiah-logo.png" // <-- está no /public, certo
            alt="Kodiah Logo"
            width={40}
            height={40}
            style={{
              borderRadius: "8px",
              filter:
                "drop-shadow(0 0 10px rgba(246,226,122,0.45)) drop-shadow(0 0 25px rgba(199,146,47,0.25))",
            }}
          />

          {/* nome "Kodiah" */}
          <span
            style={{
              fontSize: "16px",
              fontWeight: 500,
              lineHeight: 1.2,
              color: "white",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
          >
            Kodiah
          </span>
        </div>

        {/* DIREITA: seletor de idioma  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* seletor de idioma custom */}
          <LanguageSelector />

          {/*
            IMPORTANTE:
            removi o botão "Start Building" por enquanto pra não usar t.startBuilding,
            que é o que estava quebrando o build.
            Quando quisermos reativar, a gente volta com o botão e adiciona a chave no dicionário.
          */}
        </div>
      </div>
    </header>
  );
}

// HERO (a seção grande inicial) ============================
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
      {/* título */}
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
        {/* usamos <span> dourado dentro do título como antes */}
        <span style={{ color: "white" }}>{t.heroHeadline.split("##")[0]}</span>{" "}
        <span
          style={{
            background:
              "radial-gradient(circle at 0% 0%, #f7e9a4 0%, #c0892a 60%)",
            WebkitBackgroundClip: "text",
            color: "transparent",
            filter:
              "drop-shadow(0 0 10px rgba(246,226,122,0.4)) drop-shadow(0 0 30px rgba(199,146,47,0.3))",
          }}
        >
          {t.heroHeadline.split("##")[1] || ""}
        </span>
      </h1>

      {/* subtítulo */}
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

      {/* BLOCO DO PROMPT / INPUT */}
      <div
        style={{
          background:
            "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.07) 0%, rgba(0,0,0,0) 70%)",
          border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: "8px",
          boxShadow:
            "0 40px 120px rgba(199,146,47,0.25), 0 10px 30px rgba(0,0,0,0.8)",
          padding: "24px",
          maxWidth: "720px",
          position: "relative",
          marginBottom: "48px",
          backgroundColor: "rgba(0,0,0,0.4)",
        }}
      >
        {/* label acima do input */}
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

        {/* linha input + botão */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "6px",
            overflow: "hidden",
          }}
        >
          <input
            style={{
              flex: 1,
              background: "transparent",
              color: "white",
              border: "none",
              outline: "none",
              fontSize: "0.95rem",
              padding: "14px 16px",
              fontFamily:
                '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
            }}
            placeholder={t.promptPlaceholder}
          />

          <button
            style={{
              background:
                "radial-gradient(circle at 20% 20%, #f7e9a4 0%, #c0892a 60%)",
              border: "none",
              outline: "none",
              color: "#000",
              fontWeight: 600,
              fontSize: "0.95rem",
              padding: "0 20px",
              borderRadius: "0",
              cursor: "pointer",
              boxShadow:
                "0 20px 60px rgba(199,146,47,0.4), 0 4px 12px rgba(0,0,0,0.8)",
              whiteSpace: "nowrap",
            }}
          >
            {t.generateBtn}
          </button>
        </div>

        {/* texto pequeno abaixo */}
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

      {/* CARDS DE VALOR */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "16px",
          maxWidth: "960px",
        }}
      >
        {/* CARD 1 */}
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
            {t.card1Title}
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.card1Body}
          </div>
        </div>

        {/* CARD 2 */}
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
            {t.card2Title}
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.card2Body}
          </div>
        </div>

        {/* CARD 3 */}
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
            {t.card3Title}
          </div>
          <div
            style={{
              fontSize: "0.9rem",
              lineHeight: 1.5,
              color: "rgba(255,255,255,0.7)",
            }}
          >
            {t.card3Body}
          </div>
        </div>
      </div>
    </section>
  );
}

// FOOTER BEM SIMPLES (temporário) =========================
function Footer() {
  return (
    <footer
      style={{
        width: "100%",
        borderTop: "1px solid rgba(255,255,255,0.08)",
        background:
          "radial-gradient(circle at 20% 20%, rgba(199,146,47,0.25) 0%, rgba(0,0,0,0) 70%)",
        backgroundColor: "rgba(0,0,0,0.4)",
        backdropFilter: "blur(12px)",
        marginTop: "80px",
        color: "rgba(255,255,255,0.6)",
        fontSize: "0.8rem",
        lineHeight: 1.5,
        fontFamily:
          '-apple-system, BlinkMacSystemFont, Inter, Roboto, "SF Pro Display", system-ui, sans-serif',
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
        <div
          style={{
            color: "rgba(255,255,255,0.8)",
            fontWeight: 500,
            marginBottom: "6px",
          }}
        >
          Kodiah — Intelligence has a new signature.
        </div>
        <div>© {new Date().getFullYear()} Kodiah Inc. All rights reserved.</div>
      </div>
    </footer>
  );
}

// ROOT WRAPPER ============================================
export default function ClientRoot() {
  return (
    <LanguageProvider>
      {/* camada que desenha o brilho que segue o mouse */}
      <MouseGlow />
      {/* header fixo */}
      <Header />
      {/* hero de venda */}
      <Hero />
      {/* rodapé */}
      <Footer />
    </LanguageProvider>
  );
}
