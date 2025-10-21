'use client';

import { useEffect, useRef, useState } from 'react';
import './language-switcher.css';

type Lang = { code: string; label: string; href: string };

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch',  href: '/de' },
  { code: 'en', label: 'English',  href: '/'   },
  { code: 'es', label: 'Español',  href: '/es' },
  { code: 'fr', label: 'Français', href: '/fr' },
  { code: 'pt', label: 'Português',href: '/pt' },
  { code: 'ja', label: '日本語',     href: '/ja' },
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

  return (
    <div className="lang" ref={ref}>
      <button
        className="lang__btn"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="lang__icon">🌐</span>
        <span className="lang__current">Language</span>
        <svg className={`lang__caret ${open ? 'is-open' : ''}`} width="16" height="16" viewBox="0 0 24 24">
          <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" />
        </svg>
      </button>

      {open && (
        <ul className="lang__menu" role="listbox">
          {LANGS.map((l) => (
            <li key={l.code}>
              <a className="lang__item" href={l.href} role="option">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
