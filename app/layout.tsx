import "./globals.css";
import type { Metadata } from "next";
import ClientRoot from "./ClientRoot";

export const metadata: Metadata = {
  title: "Kodiah – Build intelligent apps effortlessly",
  description:
    "AI-powered platform for creating smart, modern applications.",
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
          margin: 0,
          backgroundColor: "#0b0d12",
          color: "white",
        }}
      >
        <ClientRoot />
        {/* children ainda existe por padrão */}
        <main style={{ display: "none" }}>{children}</main>
      </body>
    </html>
  );
}
