'use client';

import { useEffect, useRef, useState } from 'react';

type Lang = { code: 'en' | 'pt' | 'fr' | 'es' | 'de' | 'ja'; label: string; href: string };

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch',  href: '/de' },
  { code: 'en', label: 'English',  href: '/'   },
  { code: 'es', label: 'Español',  href: '/es' },
  { code: 'fr', label: 'Français', href: '/fr' },
  { code: 'pt', label: 'Português', href: '/pt' },
  { code: 'ja', label: '日本語', href: '/ja' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  const segment = (typeof window !== 'undefined' && location.pathname.split('/')[1]) || '';
  const currentCode = (segment === '' ? 'en' : (segment as Lang['code']));
  const currentLang = LANGS.find(l => l.code === currentCode) || LANGS[1]; // fallback en

  return (
    <div ref={ref} style={{ position: 'relative', display: 'inline-block' }}>
      <button
        type="button"
        aria-haspopup="listbox"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
          padding: '6px 10px',
          borderRadius: 999,
          background: 'rgba(255,255,255,0.06)',
          border: '1px solid rgba(255,255,255,0.12)',
          color: 'inherit',
          cursor: 'pointer',
          outline: 'none',
        }}
      >
        {/* Globo (aspas R-E-T-A-S) */}
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle cx="12" cy="12" r="9" stroke="currentColor" opacity="0.6" />
          <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" stroke="currentColor" opacity="0.6" />
        </svg>
        <span style={{ fontSize: 14 }}>{currentLang.label}</span>
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M7 10l5 5 5-5" stroke="currentColor" />
        </svg>
      </button>

      {open && (
        <div
          role="listbox"
          style={{
            position: 'absolute',
            right: 0,
            marginTop: 10,
            width: 260,
            padding: 10,
            borderRadius: 16,
            background: 'rgba(13,13,18,0.95)',
            border: '1px solid rgba(255,255,255,0.12)',
            boxShadow: '0 12px 40px rgba(0,0,0,0.4)',
            backdropFilter: 'blur(8px)',
          }}
        >
          {LANGS.map(lang => {
            const isActive = lang.code === currentLang.code;
            return (
              <a
                key={lang.code}
                href={lang.href}
                onClick={() => setOpen(false)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: 12,
                  padding: '10px 12px',
                  borderRadius: 12,
                  textDecoration: 'none',
                  color: 'inherit',
                  background: isActive ? 'rgba(88,101,242,0.16)' : 'transparent',
                  border: isActive ? '1px solid rgba(88,101,242,0.35)' : '1px solid transparent',
                  transition: 'background .15s ease, border-color .15s ease, transform .12s ease',
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-1px)'; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(0)'; }}
              >
                <span
                  aria-hidden="true"
                  style={{
                    display: 'inline-flex',
                    width: 28,
                    height: 28,
                    borderRadius: 999,
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    fontSize: 12,
                    letterSpacing: 0.5,
                    opacity: 0.9,
                  }}
                >
                  {lang.code.toUpperCase()}
                </span>
                <span style={{ fontSize: 16 }}>{lang.label}</span>
                {isActive && (
                  <span
                    style={{
                      marginLeft: 'auto',
                      fontSize: 12,
                      padding: '4px 8px',
                      borderRadius: 999,
                      background: 'rgba(88,101,242,0.18)',
                      border: '1px solid rgba(88,101,242,0.45)',
                    }}
                  >
                    Current
                  </span>
                )}
              </a>
            );
          })}
        </div>
      )}
    </div>
  );
}
