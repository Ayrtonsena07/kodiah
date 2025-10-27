"use client";

import Image from "next/image";
import { LanguageProvider, useLanguage } from "./LanguageContext";
import LanguageSelector from "./LanguageSelector";
import MouseGlow from "./MouseGlow";

// traduções de texto da interface
const translations = {
  en: {
    heroHeadline: "Shape your vision into reality.",
    heroSub:
      "Tell Kodiah what you want. We build intelligent, connected applications — fast, reliable, and beautifully designed. No code needed.",
    promptLabel: "Tell Kodiah what to build:",
    promptPlaceholder:
      "Build me an appointment app that takes payments",
    betaNote: "Private beta — limited seats.",
    generate: "Generate",
    card1Title: "Built with AI",
    card1Text:
      "You describe the product. Kodiah drafts it in minutes.",
    card2Title: "Refined by humans",
    card2Text:
      "Our team polishes flows, UI and data model for real business use.",
    card3Title: "Ready to sell",
    card3Text:
      "Hosting, login, dashboard, payments. You don’t just “test” — you launch.",
    ctaButton: "Start Building",
  },
  pt: {
    heroHeadline: "Dê forma à sua visão na realidade.",
    heroSub:
      "Diga para a Kodiah o que você quer. Nós construímos aplicações inteligentes e conectadas — rápidas, confiáveis e lindamente desenhadas. Sem código.",
    promptLabel: "Diga à Kodiah o que construir:",
    promptPlaceholder:
      "Crie para mim um app de agendamentos que aceita pagamento",
    betaNote: "Beta privado — vagas limitadas.",
    generate: "Gerar",
    card1Title: "Construído com IA",
    card1Text:
      "Você descreve o produto. A Kodiah rascunha em minutos.",
    card2Title: "Refinado por humanos",
    card2Text:
      "Nosso time ajusta fluxos, UI e modelo de dados para uso real de negócio.",
    card3Title: "Pronto para vender",
    card3Text:
      "Hosting, login, dashboard, pagamentos. Você não só “testa” — você lança.",
    ctaButton: "Começar agora",
  },
  es: {
    heroHeadline: "Convierte tu visión en realidad.",
    heroSub:
      "Dile a Kodiah lo que quieres. Construimos aplicaciones inteligentes y conectadas — rápidas, confiables y con diseño hermoso. Sin código.",
    promptLabel: "Dile a Kodiah qué construir:",
    promptPlaceholder:
      "Crea una app de reservas que acepte pagos",
    betaNote: "Beta privado — cupos limitados.",
    generate: "Generar",
    card1Title: "Hecho con IA",
    card1Text:
      "Describes el producto. Kodiah lo redacta en minutos.",
    card2Title: "Refinada por humanos",
    card2Text:
      "Nuestro equipo pule flujos, UI y modelo de datos listo para negocio real.",
    card3Title: "Lista para vender",
    card3Text:
      "Hosting, login, panel, pagos. No es “probar” — es lanzar.",
    ctaButton: "Empezar",
  },
};

// HEADER com logo + botão + seletor de idioma
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
        {/* bloco ESQUERDA: logo + nome */}
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
                "-apple-system, BlinkMacSystemFont, 'Inter', Roboto, 'SF Pro Display', system-ui, sans-serif",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* bloco DIREITA: seletor idioma + botão CTA */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "16px",
          }}
        >
          {/* seletor de idioma */}
          <LanguageSelector />

          {/* botão call-to-action */}
          <button
            style={{
              all: "unset",
              cursor: "pointer",
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,237,160,0.9) 0%, rgba(255,200,60,0.6) 40%, rgba(80,50,0,0.2) 100%)",
              boxShadow:
                "0 10px 30px rgba(255,200,60,0.25), 0 0 60px rgba(255,210,90,0.4)",
              color: "#1a1a1a",
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "8px",
              padding: "10px 16px",
              lineHeight: 1.2,
              border: "1px solid rgba(255,255,255,0.15)",
              minWidth: "130px",
              textAlign: "center",
              transition: "all 0.15s ease",
              backgroundClip: "padding-box",
            }}
          >
            {t.ctaButton /* <- aqui usamos a chave que EXISTE */}
          </button>
        </div>
      </div>
    </header>
  );
}

// BLOCO HERO principal (headline gigante, input, cards etc)
function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      style={{
        position: "relative",
        overflow: "hidden",
        background:
          "radial-gradient(circle at 20% 20%, rgba(20,20,20,1) 0%, rgba(10,10,15,1) 40%, rgba(5,5,10,1) 100%)",
        minHeight: "100vh",
        color: "white",
        padding: "64px 16px 120px 16px",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Inter', Roboto, 'SF Pro Display', system-ui, sans-serif",
      }}
    >
      {/* brilho de fundo dourado atrás do card principal */}
      <div
        style={{
          position: "absolute",
          top: "180px",
          left: "180px",
          width: "480px",
          height: "480px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle at 50% 50%, rgba(255,220,120,0.18) 0%, rgba(0,0,0,0) 70%)",
          filter: "blur(60px)",
          opacity: 0.7,
          pointerEvents: "none",
        }}
      />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* headline + sub */}
        <div
          style={{
            maxWidth: "640px",
          }}
        >
          <h1
            style={{
              fontSize: "clamp(2rem,2vw,2.5rem)",
              lineHeight: 1.2,
              fontWeight: 500,
              color: "white",
              textShadow:
                "0 20px 60px rgba(0,0,0,0.9), 0 0 30px rgba(255,220,120,0.08)",
            }}
          >
            {t.heroHeadline.split(" ").map((word, i) => {
              // vamos destacar palavras como "vision", "visão", etc:
              const highlightIndex = 2; // só p/ dar um brilho em uma palavra
              const isHighlight = i === highlightIndex;
              return (
                <span
                  key={i}
                  style={
                    isHighlight
                      ? {
                          background:
                            "linear-gradient(90deg, #f6e27a 0%, #c7922f 60%)",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          filter:
                            "drop-shadow(0 0 8px rgba(255,220,120,0.5)) drop-shadow(0 0 32px rgba(199,146,47,0.2))",
                        }
                      : {}
                  }
                >
                  {word + " "}
                </span>
              );
            })}
          </h1>

          <p
            style={{
              marginTop: "24px",
              fontSize: "18px",
              lineHeight: 1.5,
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              maxWidth: "640px",
              textShadow: "0 20px 60px rgba(0,0,0,0.8)",
            }}
          >
            {t.heroSub}
          </p>
        </div>

        {/* bloco INPUT + botão Generate */}
        <div
          style={{
            maxWidth: "640px",
            background:
              "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.7) 0%, rgba(20,20,20,0.4) 100%)",
            boxShadow:
              "0 40px 120px rgba(0,0,0,0.9), 0 10px 60px rgba(255,220,120,0.08)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: "8px",
            padding: "16px 20px",
            marginTop: "32px",
            position: "relative",
            color: "white",
          }}
        >
          <label
            style={{
              fontSize: "14px",
              fontWeight: 400,
              color: "rgba(255,255,255,0.8)",
              display: "block",
              marginBottom: "8px",
            }}
          >
            {t.promptLabel}
          </label>

          <div
            style={{
              display: "flex",
              gap: "12px",
              alignItems: "center",
            }}
          >
            <input
              defaultValue={t.promptPlaceholder}
              style={{
                flex: 1,
                background:
                  "linear-gradient(to bottom right, rgba(10,10,10,0.9) 0%, rgba(0,0,0,0.6) 100%)",
                color: "#fff",
                borderRadius: "4px",
                border: "1px solid rgba(255,255,255,0.15)",
                fontSize: "15px",
                lineHeight: 1.4,
                padding: "14px 16px",
                boxShadow:
                  "0 30px 80px rgba(0,0,0,0.9), 0 10px 40px rgba(255,220,120,0.07)",
              }}
            />

            <button
              style={{
                all: "unset",
                cursor: "pointer",
                background:
                  "radial-gradient(circle at 20% 20%, rgba(255,237,160,0.9) 0%, rgba(255,200,60,0.6) 40%, rgba(80,50,0,0.2) 100%)",
                boxShadow:
                  "0 10px 30px rgba(255,200,60,0.25), 0 0 60px rgba(255,210,90,0.4)",
                color: "#1a1a1a",
                fontSize: "14px",
                fontWeight: 500,
                borderRadius: "6px",
                padding: "12px 16px",
                lineHeight: 1.2,
                border: "1px solid rgba(255,255,255,0.15)",
                minWidth: "110px",
                textAlign: "center",
              }}
            >
              {t.generate}
            </button>
          </div>

          <div
            style={{
              marginTop: "12px",
              fontSize: "13px",
              lineHeight: 1.4,
              color: "rgba(255,255,255,0.6)",
              textShadow: "0 20px 60px rgba(0,0,0,0.9)",
            }}
          >
            {t.betaNote}
          </div>
        </div>

        {/* 3 cartões de valor */}
        <div
          style={{
            marginTop: "40px",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
            gap: "16px",
            maxWidth: "1024px",
          }}
        >
          {/* Card 1 */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.7) 0%, rgba(20,20,20,0.4) 100%)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.9), 0 10px 60px rgba(255,220,120,0.07)",
              borderRadius: "8px",
              padding: "20px",
              minHeight: "140px",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "white",
                marginBottom: "8px",
              }}
            >
              {t.card1Title}
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {t.card1Text}
            </div>
          </div>

          {/* Card 2 */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.7) 0%, rgba(20,20,20,0.4) 100%)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.9), 0 10px 60px rgba(255,220,120,0.07)",
              borderRadius: "8px",
              padding: "20px",
              minHeight: "140px",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "white",
                marginBottom: "8px",
              }}
            >
              {t.card2Title}
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {t.card2Text}
            </div>
          </div>

          {/* Card 3 */}
          <div
            style={{
              border: "1px solid rgba(255,255,255,0.08)",
              background:
                "radial-gradient(circle at 0% 0%, rgba(0,0,0,0.7) 0%, rgba(20,20,20,0.4) 100%)",
              boxShadow:
                "0 40px 120px rgba(0,0,0,0.9), 0 10px 60px rgba(255,220,120,0.07)",
              borderRadius: "8px",
              padding: "20px",
              minHeight: "140px",
            }}
          >
            <div
              style={{
                fontSize: "15px",
                fontWeight: 500,
                color: "white",
                marginBottom: "8px",
              }}
            >
              {t.card3Title}
            </div>
            <div
              style={{
                fontSize: "14px",
                lineHeight: 1.5,
                color: "rgba(255,255,255,0.7)",
              }}
            >
              {t.card3Text}
            </div>
          </div>
        </div>
      </div>

      {/* bolinha de luz que segue o mouse */}
      <MouseGlow />
    </section>
  );
}

// componente raiz que junta tudo
function ClientRootInner() {
  return (
    <>
      <Header />
      <HeroSection />
    </>
  );
}

// Provider de idioma envolvendo tudo
export default function ClientRoot() {
  return (
    <LanguageProvider translations={translations} defaultLang="en">
      <ClientRootInner />
    </LanguageProvider>
  );
}
