'use client';

import { useEffect, useRef, useState } from 'react';

type Lang = { code: 'en' | 'pt' | 'fr'; label: string; href: string };

const LANGS: Lang[] = [
  { code: 'en', label: 'English',   href: '/'   },
  { code: 'pt', label: 'Português', href: '/pt' },
  { code: 'fr', label: 'Français',  href: '/fr' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // fecha o menu ao clicar fora ou apertar Esc
  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    function onEsc(e: KeyboardEvent) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('mousedown', onClickOutside);
    document.addEventListener('keydown', onEsc);
    return () => {
      document.removeEventListener('mousedown', onClickOutside);
      document.removeEventListener('keydown', onEsc);
    };
  }, []);

  // Detecta idioma atual pelo path base
  const current =
    typeof window !== 'undefined'
      ? window.location.pathname.startsWith('/pt')
        ? LANGS[1]
        : window.location.pathname.startsWith('/fr')
        ? LANGS[2]
        : LANGS[0]
      : LANGS[0];

  return (
    <div ref={ref} style={{ position: 'relative' }}>
      <button
        onClick={() => setOpen((v) => !v)}
        style={{
          display: 'flex',
          alignItems: 'center',
          padding: '10px 14px',
          background: '#eef8e5',
          border: '1px solid #cfe7b8',
          color: '#0f172a',
          borderRadius: 999,
          cursor: 'pointer',
          fontSize: 14,
        }}
      >
        🌐 {current.label}
      </button>

      {open && (
        <div
          style={{
            position: 'absolute',
            top: 'calc(100% + 8px)',
            right: 0,
            minWidth: 180,
            background: '#fff',
            borderRadius: 12,
            boxShadow: '0 8px 20px rgba(0,0,0,.08)',
            padding: '8px 0',
            zIndex: 20,
          }}
        >
          {LANGS.map((lang) => (
            <a
              key={lang.code}
              href={lang.href}
              onClick={() => setOpen(false)}
              style={{
                display: 'block',
                padding: '10px 16px',
                color: '#0f172a',
                textDecoration: 'none',
                fontWeight: lang.code === current.code ? 600 : 400,
              }}
              onMouseEnter={(e) => (e.currentTarget.style.background = '#f7f7f9')}
              onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
            >
              {lang.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}
