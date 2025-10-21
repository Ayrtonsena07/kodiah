'use client'

import { useEffect, useRef, useState } from 'react'
import './language-switcher.css'

type Lang = { code: string; label: string; href: string; flag: string }

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch',   href: '/de', flag: '🇩🇪' },
  { code: 'en', label: 'English',   href: '/',   flag: '🇺🇸' },
  { code: 'es', label: 'Español',   href: '/es', flag: '🇪🇸' },
  { code: 'fr', label: 'Français',  href: '/fr', flag: '🇫🇷' },
  { code: 'pt', label: 'Português', href: '/pt', flag: '🇧🇷' },
  { code: 'ja', label: '日本語',        href: '/ja', flag: '🇯🇵' },
]

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  // Detecta idioma a partir do path atual
  const path =
    typeof window !== 'undefined' ? window.location.pathname : '/'
  const current =
    LANGS.find(l => l.href === path) || LANGS.find(l => l.code === 'en')!

  // Fecha ao clicar fora / tecla ESC
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false)
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false)
    }
    document.addEventListener('click', onClickOutside)
    document.addEventListener('keydown', onEsc)
    return () => {
      document.removeEventListener('click', onClickOutside)
      document.removeEventListener('keydown', onEsc)
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
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1 2.07A8 8 0 0 0 4.07 11H11V4.07ZM4.07 13A8 8 0 0 0 11 19.93V13H4.07ZM13 19.93A8 8 0 0 0 19.93 13H13v6.93ZM19.93 11A8 8 0 0 0 13 4.07V11h6.93Z"
          />
        </svg>
        <span className="lang__current">{current.label}</span>
        <svg
          className={`lang__chev ${open ? 'is-open' : ''}`}
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            fill="currentColor"
            d="M7 10l5 5 5-5H7z"
          />
        </svg>
      </button>

      <ul className={`lang__menu ${open ? 'is-open' : ''}`} role="menu">
        {LANGS.map(l => {
          const active = l.href === path
          return (
            <li role="none" key={l.code}>
              <a
                role="menuitem"
                className={`lang__item ${active ? 'is-active' : ''}`}
                href={l.href}
                onClick={() => setOpen(false)}
              >
                <span className="lang__flag" aria-hidden="true">{l.flag}</span>
                <span className="lang__label">{l.label}</span>
                {active && <span className="lang__chip">Current</span>}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
