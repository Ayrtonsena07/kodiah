"use client";

import Image from "next/image";
import { useLanguage, LanguageProvider } from "./LanguageContext";
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
        {/* LOGO + NOME */}
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
            width={28}
            height={28}
            style={{
              filter:
                "drop-shadow(0 0 10px rgba(246,226,122,0.45)) drop-shadow(0 0 25px rgba(199,146,47,0.25))",
              borderRadius: "6px",
            }}
          />
          <span
            style={{
              fontSize: "15px",
              fontWeight: 500,
              color: "#fff",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
              textShadow:
                "0 0 8px rgba(255,255,200,0.3), 0 0 24px rgba(255,220,120,0.2)",
            }}
          >
            Kodiah
          </span>
        </div>

        {/* LANGUAGE SELECTOR + CTA */}
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
              background:
                "radial-gradient(circle at 20% 20%, rgba(255,223,128,1) 0%, rgba(160,120,40,1) 60%)",
              color: "#000",
              fontWeight: 500,
              fontSize: "14px",
              padding: "10px 14px",
              borderRadius: "8px",
              minWidth: "120px",
              textAlign: "center",
              boxShadow:
                "0 0 10px rgba(255,220,130,0.6), 0 20px 50px rgba(255,200,80,0.15)",
            }}
          >
            {t.startButton /* agora é startButton */}
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
        width: "100%",
        color: "white",
        background:
          "radial-gradient(circle at 20% 20%, rgba(30,30,40,1) 0%, rgba(10,10,15,1) 70%)",
        boxShadow: "inset 0 60px 200px rgba(0,0,0,0.9)",
        padding: "64px 16px 120px 16px",
      }}
    >
      <MouseGlow />

      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr",
          gap: "32px",
        }}
      >
        {/* Texto principal */}
        <div style={{ maxWidth: "640px" }}>
          <h1
            style={{
              fontSize: "40px",
              lineHeight: 1.15,
              fontWeight: 600,
              color: "#fff",
              fontFamily:
                "-apple-system, BlinkMacSystemFont, Inter, Roboto, 'SF Pro Display', system-ui, sans-serif",
              textShadow:
                "0 0 12px rgba(255,242,140,0.4),0 0 40px rgba(255,200,80,0.2)",
            }}
          >
            <span
              style={{
                background:
                  "linear-gradient(90deg, rgb(255,240,180) 0%, rgb(180,130,40) 60%)",
                WebkitBackgroundClip: "text",
                color: "transparent",
                filter:
                  "drop-shadow(0 0 8px rgba(255,235,150,0.6)) drop-shadow(0 0 24px rgba(255,200,90,0.2))",
              }}
            >
              {t.heroHeadline.split(" ")[0] + " "}
            </span>
            {t.heroHeadline.replace(
              t.heroHeadline.split(" ")[0] + " ",
              ""
            )}
          </h1>

          <p
            style={{
              marginTop: "16px",
              fontSize: "16px",
              lineHeight: 1.5,
              color: "rgba(220,220,230,0.8)",
              maxWidth: "620px",
              fontWeight: 400,
            }}
          >
            {t.heroSub}
          </p>

          {/* Caixote prompt */}
          <div
            style={{
              marginTop: "32px",
              background:
                "radial-gradient(circle at 0% 0%, rgba(30,30,30,0.6) 0%, rgba(10,10,10,0.2) 60%)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "8px",
              boxShadow:
                "0 20px 60px rgba(0,0,0,0.8), 0 0 60px rgba(255,200,80,0.12)",
              padding: "20px",
              maxWidth: "640px",
              backdropFilter: "blur(12px)",
              position: "relative",
            }}
          >
            <label
              style={{
                display: "block",
                fontSize: "13px",
                fontWeight: 500,
                color: "rgba(255,255,255,0.8)",
                marginBottom: "8px",
              }}
            >
              {t.promptLabel /* AGORA existe */}
            </label>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              <input
                defaultValue={t.promptPlaceholder}
                style={{
                  flex: 1,
                  background:
                    "linear-gradient(to right, rgba(0,0,0,0.4), rgba(20,20,25,0.6))",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.12)",
                  borderRadius: "6px",
                  fontSize: "14px",
                  lineHeight: 1.4,
                  padding: "12px 14px",
                  outline: "none",
                  boxShadow:
                    "0 0 20px rgba(255,220,120,0.07), 0 30px 80px rgba(0,0,0,0.9) inset",
                }}
              />

              <button
                style={{
                  all: "unset",
                  cursor: "pointer",
                  background:
                    "radial-gradient(circle at 20% 20%, rgba(255,223,128,1) 0%, rgba(160,120,40,1) 60%)",
                  color: "#000",
                  fontWeight: 500,
                  fontSize: "14px",
                  padding: "12px 16px",
                  borderRadius: "6px",
                  minWidth: "100px",
                  textAlign: "center",
                  boxShadow:
                    "0 0 10px rgba(255,220,130,0.6), 0 20px 50px rgba(255,200,80,0.15)",
                }}
              >
                {t.generateButton}
              </button>
            </div>

            <div
              style={{
                marginTop: "12px",
                fontSize: "12px",
                color: "rgba(255,255,255,0.5)",
              }}
            >
              Private beta — limited seats.
            </div>
          </div>

          {/* 3 cards */}
          <div
            style={{
              marginTop: "32px",
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "16px",
            }}
          >
            <FeatureCard
              title={t.badgeAiTitle}
              desc={t.badgeAiDesc}
            />
            <FeatureCard
              title={t.badgeTeamTitle}
              desc={t.badgeTeamDesc}
            />
            <FeatureCard
              title={t.badgeLaunchTitle}
              desc={t.badgeLaunchDesc}
            />
          </div>

          {/* Rodapé mini tagline */}
          <div
            style={{
              marginTop: "40px",
              borderTop: "1px solid rgba(255,255,255,0.07)",
              paddingTop: "24px",
              fontSize: "13px",
              lineHeight: 1.4,
              color: "rgba(200,200,210,0.7)",
            }}
          >
            <div>{t.footerTagline}</div>
            <div
              style={{
                fontSize: "12px",
                marginTop: "8px",
                color: "rgba(160,160,170,0.6)",
              }}
            >
              © 2025 Kodiah Inc. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function FeatureCard({
  title,
  desc,
}: {
  title: string;
  desc: string;
}) {
  return (
    <div
      style={{
        background:
          "radial-gradient(circle at 0% 0%, rgba(25,25,30,0.8) 0%, rgba(10,10,12,0.4) 60%)",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "8px",
        padding: "16px 16px 20px 16px",
        boxShadow:
          "0 0 60px rgba(255,220,120,0.08), 0 30px 100px rgba(0,0,0,0.9)",
        backdropFilter: "blur(8px)",
        maxWidth: "420px",
      }}
    >
      <div
        style={{
          fontSize: "15px",
          fontWeight: 500,
          color: "#fff",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "13px",
          lineHeight: 1.5,
          color: "rgba(210,210,220,0.7)",
        }}
      >
        {desc}
      </div>
    </div>
  );
}

export default function ClientRoot() {
  return (
    <LanguageProvider>
      <div
        style={{
          minHeight: "100vh",
          backgroundColor: "#000",
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(40,40,60,0.6) 0%, rgba(5,5,10,1) 70%)",
          color: "#fff",
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
