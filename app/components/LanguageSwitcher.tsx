'use client';

import { useEffect, useRef, useState } from 'react';
import './language-switcher.css';

type Lang = { code: string; label: string; href: string };

const LANGS: Lang[] = [
  { code: 'en', label: 'English',   href: '/'   },
  { code: 'es', label: 'Español',   href: '/es' },
  { code: 'fr', label: 'Français',  href: '/fr' },
  { code: 'pt', label: 'Português', href: '/pt' },
  { code: 'de', label: 'Deutsch',   href: '/de' },
  { code: 'ja', label: '日本語',       href: '/ja' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const current =
    typeof window !== 'undefined'
      ? LANGS.find(l => window.location.pathname.startsWith(l.href))?.code ?? 'en'
      : 'en';

  return (
    <div className="lang-wrap" ref={ref}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        className="lang-trigger"
        onClick={() => setOpen(v => !v)}
      >
        {/* Ícone de globo */}
        <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2Zm6.93 9h-3.21a15.9 15.9 0 0 0-1.24-5 8.06 8.06 0 0 1 4.45 5ZM12 4a13.9 13.9 0 0 1 1.62 7H10.4A13.7 13.7 0 0 1 12 4Zm-2.2.24a15.9 15.9 0 0 0-1.24 5H5.35a8.06 8.06 0 0 1 4.45-5ZM4.07 13h3.21a15.9 15.9 0 0 0 1.24 5 8.06 8.06 0 0 1-4.45-5Zm5.33 0h3.22a13.9 13.9 0 0 1-1.62 7 13.7 13.7 0 0 1-1.6-7Zm5.53 0h3a8.06 8.06 0 0 1-4.45 5 15.9 15.9 0 0 0 1.45-5Z" />
        </svg>

        <span className="lang-current">
          {LANGS.find(l => l.code === current)?.label ?? 'English'}
        </span>

        <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" className="chev">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className="lang-menu" role="listbox">
          {LANGS.map(l => (
            <li key={l.code}>
              <a href={l.href} className={l.code === current ? 'is-active' : ''}>
                <span className="lang-label">{l.label}</span>
                {l.code === current && <span className="pill">Current</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
