import "./globals.css";
import type { Metadata } from "next";
import ClientRoot from "./ClientRoot";

export const metadata: Metadata = {
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
      {/* body aqui é simples. nada de hook. */}
      <body
        style={{
          margin: 0,
          padding: 0,
        }}
      >
        {/* Tudo que precisa de React client fica dentro do ClientRoot */}
        <ClientRoot>{children}</ClientRoot>
      </body>
    </html>
  );
}
