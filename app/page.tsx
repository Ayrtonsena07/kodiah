"use client";

import { useLanguage } from "./LanguageContext";

export default function HomePage() {
  const { t } = useLanguage();

  return (
    <div style={{ color: "white", maxWidth: "800px" }}>
      {/* TITULO */}
      <h1
        style={{
          fontSize: "32px",
          lineHeight: "1.2",
          fontWeight: 600,
          letterSpacing: "-0.04em",
          background:
            "radial-gradient(circle at 0% 0%, #fff 0%, #d4c07a 40%, #c7922f 80%)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          textShadow:
            "0 0 30px rgba(246,226,122,0.4), 0 0 80px rgba(199,146,47,0.25)",
          maxWidth: "20ch",
          marginBottom: "16px",
        }}
      >
        {t.heroHeadline}
      </h1>

      {/* SUBTEXTO */}
      <p
        style={{
          fontSize: "16px",
          lineHeight: "1.5",
          color: "rgba(255,255,255,0.7)",
          maxWidth: "50ch",
          marginBottom: "24px",
        }}
      >
        {t.heroSub}
      </p>

      {/* BLOCO DE INPUT / CTA */}
      <div
        style={{
          background:
            "radial-gradient(circle at 50% 0%, rgba(246,226,122,0.08) 0%, rgba(0,0,0,0) 70%), rgba(20,20,20,0.6)",
          boxShadow:
            "0 30px 100px rgba(0,0,0,0.8), 0 0 120px rgba(199,146,47,0.25)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "12px",
          padding: "16px",
          marginBottom: "32px",
          width: "100%",
          maxWidth: "560px",
        }}
      >
        <div
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.6)",
            marginBottom: "8px",
          }}
        >
          Tell Kodiah what to build:
        </div>

        <div
          style={{
            display: "flex",
            gap: "8px",
          }}
        >
          <input
            defaultValue={t.promptPlaceholder}
            style={{
              flex: 1,
              backgroundColor: "rgba(0,0,0,0.4)",
              color: "#fff",
              borderRadius: "8px",
              border: "1px solid rgba(255,255,255,0.15)",
              fontSize: "14px",
              lineHeight: "20px",
              padding: "10px 12px",
              outline: "none",
            }}
          />
          <button
            style={{
              background:
                "radial-gradient(circle at 40% 0%, #F6E27A 0%, #C7922F 60%)",
              color: "#000",
              fontWeight: 500,
              borderRadius: "8px",
              border: "0",
              fontSize: "14px",
              lineHeight: "20px",
              padding: "10px 12px",
              cursor: "pointer",
              boxShadow:
                "0 10px 40px rgba(246,226,122,0.5),0 0 80px rgba(199,146,47,0.4)",
            }}
          >
            Generate
          </button>
        </div>

        <div
          style={{
            fontSize: "12px",
            color: "rgba(255,255,255,0.45)",
            marginTop: "8px",
          }}
        >
          Private beta — limited seats.
        </div>
      </div>

      {/* 3 BLOQUINHOS DE VALOR */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          flexWrap: "wrap",
          maxWidth: "800px",
        }}
      >
        <FeatureCard title={t.badgeAiTitle} desc={t.badgeAiDesc} />
        <FeatureCard title={t.badgeTeamTitle} desc={t.badgeTeamDesc} />
        <FeatureCard title={t.badgeLaunchTitle} desc={t.badgeLaunchDesc} />
      </div>
    </div>
  );
}

function FeatureCard({ title, desc }: { title: string; desc: string }) {
  return (
    <div
      style={{
        flex: "1 1 200px",
        minWidth: "200px",
        backgroundColor: "rgba(0,0,0,0.4)",
        border: "1px solid rgba(255,255,255,0.12)",
        borderRadius: "10px",
        padding: "16px",
        boxShadow:
          "0 20px 60px rgba(0,0,0,0.8), 0 0 80px rgba(0,0,0,0.6)",
      }}
    >
      <div
        style={{
          fontSize: "14px",
          fontWeight: 600,
          color: "rgba(255,255,255,0.9)",
          marginBottom: "6px",
        }}
      >
        {title}
      </div>
      <div
        style={{
          fontSize: "13px",
          lineHeight: "18px",
          color: "rgba(255,255,255,0.6)",
        }}
      >
        {desc}
      </div>
    </div>
  );
}
