import "./globals.css";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";

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
            // fundo escuro com brilho dourado leve
            "radial-gradient(circle at 20% 20%, rgba(246,226,122,0.07) 0%, rgba(0,0,0,0) 60%), radial-gradient(circle at 80% 20%, rgba(199,146,47,0.07) 0%, rgba(0,0,0,0) 60%), linear-gradient(#0a0f1c 0%, #1a2235 100%)",
          color: "white",
          WebkitFontSmoothing: "antialiased",
          fontFamily:
            'system-ui, -apple-system, BlinkMacSystemFont, "Inter", "Roboto", "Segoe UI", sans-serif',
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
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
            {/* LOGO E NOME */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
              }}
            >
              {/* sua logo oficial */}
              <Image
                src="/logo.png"
                alt="Kodiah Logo"
                width={42}
                height={42}
                style={{
                  borderRadius: "10px",
                  boxShadow:
                    "0 0 16px rgba(246,226,122,0.4), 0 0 60px rgba(199,146,47,0.25)",
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

            {/* LADO DIREITO DO HEADER */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
              }}
            >
              {/* seletor de idioma dropdown */}
              <LanguageSelector />

              {/* botão dourado */}
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

        {/* CONTEÚDO PRINCIPAL */}
        <main
          style={{
            maxWidth: "1280px",
            width: "100%",
            margin: "0 auto",
            padding: "48px 24px 80px",
            flex: "1 0 auto",
          }}
        >
          {/*
            Tudo que está na home (o título "Shape your vision into reality",
            o campo de texto, etc) aparece aqui via page.tsx.
            Não mexe aqui agora.
          */}
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
            flexShrink: 0,
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
