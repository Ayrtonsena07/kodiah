import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

import LanguageSwitcher from './components/LanguageSwitcher'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: { default: 'Kodiah – Intelligent Digital Solutions', template: '%s | Kodiah' },
  description:
    'Kodiah delivers complete digital solutions in technology, design and automation for modern businesses.',
  keywords: ['Kodiah', 'technology', 'automation', 'Next.js', 'web development'],
  alternates: {
    languages: {
      'en': '/',
      'pt': '/pt',
      'fr': '/fr',
      'de': '/de',
      'es': '/es',
      'ja': '/ja',
    },
  },
  openGraph: {
    title: 'Kodiah – Intelligent Digital Solutions',
    description: 'Transform ideas into digital experiences with Kodiah.',
    url: 'https://kodiah.com',
    siteName: 'Kodiah',
    images: [{ url: '/og-image.png', width: 1200, height: 630 }],
    locale: 'en_US',
    alternateLocale: ['pt_BR', 'fr_FR', 'de_DE', 'es_ES', 'ja_JP'],
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div style={{
          position:'sticky',
          top: 0, zIndex: 50,
          display:'flex', justifyContent:'flex-end',
          padding:'12px 16px'
        }}>
          <LanguageSwitcher />
        </div>

        {children}
      </body>
    </html>
  )
}
