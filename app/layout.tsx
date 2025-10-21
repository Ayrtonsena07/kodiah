import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: 'Kodiah — Intelligent Digital Solutions',
    template: '%s | Kodiah',
  },
  description:
    'Kodiah delivers complete digital solutions in technology, design, and automation for modern businesses.',
  keywords: ['Kodiah', 'technology', 'automation', 'Next.js', 'web development'],
  alternates: {
    languages: {
      en: '/',
      pt: '/pt',
      fr: '/fr',
    },
  },
  openGraph: {
    title: 'Kodiah — Intelligent Digital Solutions',
    description:
      'Transform ideas into digital experiences with Kodiah.',
    url: 'https://kodiah.com',
    siteName: 'Kodiah',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'fr_FR'],
    type: 'website',
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en"> {/* por enquanto, mantém inglês como padrão */}
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <nav style={{ padding: '12px' }}>
          <a href="/" style={{ marginRight: 12 }}>EN</a>
          <a href="/pt" style={{ marginRight: 12 }}>PT</a>
          <a href="/fr">FR</a>
        </nav>

        {children}
      </body>
    </html>
  );
}

