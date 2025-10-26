import "./globals.css";
import Image from "next/image";

export const metadata = {
  title: "Kodiah — From idea to product",
  description:
    "Describe what you want. Kodiah builds it: web apps, dashboards, automations, ready to launch.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          minHeight: "100vh",
          background:
            "radial-gradient(circle at 20% 20%, rgba(246,226,122,0.07) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 80% 20%, rgba(199,146,47,0.07) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 50% 120%, rgba(0,0,0,0) 0%, rgba(0,0,0,0) 60%), linear-gradient(#0a0f1c 0%, #1a2235 100%)",
          color: "white",
          WebkitFontSmoothing: "antialiased",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Roboto", "Segoe UI", sans-serif',
        }}
      >
        {/* HEADER FIXO BONITO */}
        <header
          style={{
            width: "100%",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
            background: "rgba(0,0,0,0.3)",
            backdropFilter: "blur(12px)",
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
            {/* ESQUERDA: LOGO + NOME */}
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div
                style={{
                    width: 36,
                    height: 36,
                    borderRadius: "999px",
                    background:
                      "radial-gradient(circle at 30% 30%, #F6E27A 0%, #C7922F 60%, #4a360f 100%)",
                    boxShadow:
                      "0 0 20px rgba(246,226,122,0.5), 0 0 80px rgba(199,146,47,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: 14,
                    fontWeight: 600,
                    color: "#000",
                }}
              >
                K
              </div>

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

            {/* DIREITA: IDIOMA + BOTÃO */}
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <button
                style={{
                  fontSize: "13px",
                  lineHeight: "16px",
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.2)",
                  borderRadius: "999px",
                  color: "white",
                  padding: "6px 10px",
                  cursor: "pointer",
                }}
              >
                🌍 EN ▾
              </button>

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
                Start Building
              </button>
            </div>
          </div>
        </header>

        {/* CONTEÚDO DA PÁGINA */}
        <main
          style={{
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "48px 24px 80px",
          }}
        >
          {children}
        </main>

        {/* FOOTER */}
        <footer
          style={{
            width: "100%",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            padding: "32px 24px 64px",
            background:
              "radial-gradient(circle at 20% 20%, rgba(246,226,122,0.06) 0%, rgba(0,0,0,0) 60%), rgba(0,0,0,0.1)",
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
            <div style={{ fontWeight: 500, color: "rgba(255,255,255,0.8)" }}>
              Kodiah — Intelligence has a new signature.
            </div>
            <div style={{ color: "rgba(255,255,255,0.5)" }}>
              © {new Date().getFullYear()} Kodiah Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
