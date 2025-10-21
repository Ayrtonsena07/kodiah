'use client'

import { useEffect, useRef, useState } from 'react'
import './language-switcher.css'

type Lang = { code: string; label: string; href: string }

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch', href: '/de' },
  { code: 'en', label: 'English', href: '/' },
  { code: 'es', label: 'Español', href: '/es' },
  { code: 'fr', label: 'Français', href: '/fr' },
  { code: 'pt', label: 'Português', href: '/pt' },
  { code: 'ja', label: '日本語', href: '/ja' },
]

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  const path =
    typeof window !== 'undefined' ? window.location.pathname : '/'
  const current =
    LANGS.find(l => l.href === path) || LANGS.find(l => l.code === 'en')!

  // fecha ao clicar fora / tecla ESC
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node))
        setOpen(false)
    }
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', handleClickOutside)
    document.addEventListener('keydown', handleEsc)
    return () => {
      document.removeEventListener('click', handleClickOutside)
      document.removeEventListener('keydown', handleEsc)
    }
  }, [])

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang__trigger"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <svg
          className="lang__icon"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm0 0c2.5 2.4 2.5 17.6 0 20m0-20C9.5 4.4 9.5 19.6 12 22m-8.66-6h17.32M3.34 8h17.32"
          />
        </svg>
        <span className="l
