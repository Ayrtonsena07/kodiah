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
        className="
          min-h-screen
          bg-gradient-to-b from-[#0a0f1c] via-[#0a0f1c] to-[#1a2235]
          text-white
          antialiased
        "
      >
        {/* HEADER */}
        <header
          className="
            w-full
            flex items-center justify-between
            px-6 py-4
            border-b border-white/10
            bg-white/5 backdrop-blur-sm
            sticky top-0 z-50
          "
        >
          {/* Logo + nome */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="Kodiah"
              width={40}
              height={40}
              className="rounded-full"
            />
            <span className="text-lg font-semibold tracking-tight">
              Kodiah
            </span>
          </div>

          {/* Direita do header */}
          <div className="flex items-center gap-3">
            {/* seletor de idioma fake por enquanto */}
            <button
              className="
                text-sm
                px-3 py-1.5
                rounded-full
                bg-white/10
                border border-white/20
                hover:bg-white/20
                transition
              "
            >
              🌍 EN ▾
            </button>

            {/* CTA principal */}
            <button
              className="
                text-sm font-medium
                px-4 py-1.5
                rounded-full
                bg-gradient-to-r from-[#F6E27A] to-[#C7922F]
                text-black
                hover:brightness-110
                transition
                shadow-[0_0_20px_rgba(246,226,122,0.4)]
              "
            >
              Start Building
            </button>
          </div>
        </header>

        {/* CONTEÚDO DAS PÁGINAS */}
        <main className="px-6 py-16">{children}</main>

        {/* FOOTER SIMPLES */}
        <footer className="px-6 py-16 border-t border-white/10 text-xs text-white/40">
          <div className="max-w-6xl mx-auto flex flex-col gap-4">
            <div className="text-white/60 font-medium text-sm">
              Kodiah — Intelligence has a new signature.
            </div>
            <div className="text-white/40">
              © {new Date().getFullYear()} Kodiah Inc. All rights reserved.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
