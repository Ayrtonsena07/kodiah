'use client';

import { useEffect, useRef, useState } from 'react';
import './language-switcher.css';

type Lang = {
  code: 'en' | 'pt' | 'fr' | 'de' | 'es' | 'ja';
  label: string;
  href: string;
  native?: string; // opcional, para mostrar o nome local
};

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch',   native: 'Deutsch',   href: '/de'  },
  { code: 'en', label: 'English',   native: 'English',   href: '/'    },
  { code: 'es', label: 'Español',   native: 'Español',   href: '/es'  },
  { code: 'fr', label: 'Français',  native: 'Français',  href: '/fr'  },
  { code: 'pt', label: 'Português', native: 'Português', href: '/pt'  },
  { code: 'ja', label: '日本語',       native: '日本語',        href: '/ja'  },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Fechar ao clicar fora
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', onClickOutside);
    return () => document.removeEventListener('mousedown', onClickOutside);
  }, []);

  // Fechar com ESC
  useEffect(() => {
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', onEsc);
    return () => document.removeEventListener('keydown', onEsc);
  }, []);

  // Idioma atual pela URL base (/ , /pt, /fr, /de, /es, /ja)
  const current = (() => {
    if (typeof window === 'undefined') return 'en';
    const seg = window.location.pathname.split('/')[1];
    if (['pt', 'fr', 'de', 'es', 'ja'].includes(seg)) return seg as Lang['code'];
    return 'en';
  })();

  const active = LANGS.find(l => l.code === current) ?? LANGS[1]; // fallback en

  return (
    <div className="langwrap" ref={ref}>
      <button
        className="lang-btn"
        aria-label="Select language"
        aria-haspopup="true"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        {/* Globo minimalista */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6"/>
          <path d="M3 12h18M12 3c3 4 3 14 0 18M12 3c-3 4-3 14 0 18" stroke="currentColor" strokeWidth="1.3" />
        </svg>
        <span className="lang-current">{active.label}</span>
        <svg className={`chev ${open ? 'up' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </button>

      {open && (
        <div className="lang-pop" role="menu" tabIndex={-1}>
          {LANGS.map(lang => {
            const isActive = lang.code === current;
            return (
              <a
                key={lang.code}
                href={lang.href}
                className={`lang-item ${isActive ? 'active' : ''}`}
                role="menuitem"
                onClick={() => setOpen(false)}
              >
                <span className="lang-label">{lang.label}</span>
                <span className="lang-native">{lang.native ?? lang.label}</span>
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}

