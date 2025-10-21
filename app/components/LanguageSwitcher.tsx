'use client';

import { useEffect, useRef, useState } from 'react';
import './language-switcher.css';

type Lang = { code: 'en' | 'pt' | 'fr' | 'es' | 'de' | 'ja'; label: string; href: string };

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch',   href: '/de' },
  { code: 'en', label: 'English',   href: '/'   },
  { code: 'es', label: 'Español',   href: '/es' },
  { code: 'fr', label: 'Français',  href: '/fr' },
  { code: 'pt', label: 'Português', href: '/pt' },
  { code: 'ja', label: '日本語',       href: '/ja' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fecha ao clicar fora ou pressionar ESC
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    document.addEventListener('click', onClick);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  // Detecta idioma atual pela URL
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';
  const current =
    LANGS.find(l => (l.href === '/' ? path === '/' || !/^\/(pt|fr|es|de|ja)(\/|$)/.test(path) : path.startsWith(l.href))) ??
    LANGS.find(l => l.code === 'en')!;

  return (
    <div className="ls-root" ref={ref}>
      <button
        className="ls-trigger"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(o => !o)}
      >
        <GlobeIcon className="ls-globe" />
        <span className="ls-current">{current.label}</span>
        <svg
          className={`ls-caret ${open ? 'open' : ''}`}
          width="10"
          height="10"
          viewBox="0 0 10 10"
          aria-hidden="true"
        >
          <path d="M2 3l3 3 3-3" stroke="currentColor" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <ul className="ls-menu" role="listbox">
          {LANGS.map(l => (
            <li key={l.code}>
              <a
                className={`ls-item ${l.code === current.code ? 'active' : ''}`}
                href={l.href}
                lang={l.code}
                onClick={() => setOpen(false)}
              >
                <span className="ls-item-label">{l.label}</span>
                {l.code === current.code && <span className="ls-badge">Current</span>}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function GlobeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
      {/* leve “glow” */}
      <path
        d="M12 2a10 10 0 1 0 .001 20.001A10 10 0 0 0 12 2Zm0 0c3.866 0 7 3.134 7 7 0 3.114-1.996 5.76-4.77 6.68.06-.3.09-.613.09-.936 0-2.41-1.95-4.36-4.36-4.36-.765 0-1.486.2-2.11.55-.21-.66-.32-1.37-.32-2.1 0-3.866 3.134-7 7-7Z"
        fill="currentColor"
        opacity=".20"
      />
      {/* linhas do globo */}
      <path
        d="M3 12h18M12 3v18M4.7 5.8a9.6 9.6 0 0 0 14.6 0M19.3 18.2a9.6 9.6 0 0 0-14.6 0"
        stroke="currentColor"
        strokeWidth="1.2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}
