export default function HomePage() {
  return (
    <section
      style={{
        maxWidth: "780px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
      }}
    >
      {/* HERO / TÍTULO */}
      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        <h1
          style={{
            fontSize: "32px",
            lineHeight: "1.15",
            fontWeight: 600,
            letterSpacing: "-0.04em",
            color: "white",
          }}
        >
          Shape your vision into{" "}
          <span
            style={{
              backgroundImage:
                "linear-gradient(90deg,#F6E27A 0%,#C7922F 60%,#8a5b15 100%)",
              WebkitBackgroundClip: "text",
              color: "transparent",
              textShadow:
                "0 0 20px rgba(246,226,122,0.4),0 0 60px rgba(199,146,47,0.2)",
            }}
          >
            reality.
          </span>
        </h1>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.5rem",
            color: "rgba(255,255,255,0.7)",
            maxWidth: "600px",
          }}
        >
          Tell Kodiah what you want. We build intelligent, connected
          applications — fast, reliable, and beautifully designed. No code
          needed.
        </p>
      </div>

      {/* BLOCO DE INPUT “FAÇA ISSO PRA MIM” */}
      <div
        style={{
          background: "rgba(0,0,0,0.4)",
          border: "1px solid rgba(255,255,255,0.15)",
          borderRadius: "16px",
          padding: "20px",
          backdropFilter: "blur(12px)",
          maxWidth: "600px",
          boxShadow:
            "0 30px 80px rgba(0,0,0,0.8),0 0 60px rgba(199,146,47,0.15)",
          display: "flex",
          flexDirection: "column",
          gap: "12px",
        }}
      >
        <label
          style={{
            fontSize: "13px",
            fontWeight: 500,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          Tell Kodiah what to build:
        </label>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            gap: "8px",
            flexWrap: "wrap",
          }}
        >
          <input
            style={{
              flex: "1",
              minWidth: "220px",
              background: "rgba(0,0,0,0.6)",
              border: "1px solid rgba(255,255,255,0.22)",
              borderRadius: "12px",
              padding: "12px 14px",
              fontSize: "14px",
              lineHeight: "16px",
              color: "white",
              outline: "none",
            }}
            placeholder="Build me an appointment app that takes payments"
          />

          <button
            style={{
              background:
                "linear-gradient(90deg,#F6E27A 0%,#C7922F 100%)",
              color: "#000",
              fontSize: "14px",
              fontWeight: 500,
              borderRadius: "12px",
              padding: "12px 16px",
              border: "0",
              cursor: "pointer",
              boxShadow:
                "0 0 20px rgba(246,226,122,0.5),0 0 60px rgba(199,146,47,0.3)",
              whiteSpace: "nowrap",
            }}
          >
            Generate
          </button>
        </div>

        <div
          style={{
            fontSize: "12px",
            lineHeight: "16px",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          Private beta — limited seats.
        </div>
      </div>

      {/* 3 BENEFÍCIOS / POR QUE VOCÊ É MELHOR QUE BASE44 */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(200px,1fr))",
          gap: "16px",
          maxWidth: "780px",
          marginTop: "24px",
        }}
      >
        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "6px",
            }}
          >
            Built with AI
          </div>
          <div
            style={{
              fontSize: "13px",
              lineHeight: "18px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            You describe the product. Kodiah drafts it in minutes.
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "6px",
            }}
          >
            Refined by humans
          </div>
          <div
            style={{
              fontSize: "13px",
              lineHeight: "18px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Our team polishes flows, UI and data model for real business use.
          </div>
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.12)",
            borderRadius: "16px",
            padding: "16px",
          }}
        >
          <div
            style={{
              color: "white",
              fontSize: "15px",
              fontWeight: 500,
              marginBottom: "6px",
            }}
          >
            Ready to sell
          </div>
          <div
            style={{
              fontSize: "13px",
              lineHeight: "18px",
              color: "rgba(255,255,255,0.6)",
            }}
          >
            Hosting, login, dashboard, payments. You don’t just “test” — you
            launch.
          </div>
        </div>
      </div>
    </section>
  );
}
