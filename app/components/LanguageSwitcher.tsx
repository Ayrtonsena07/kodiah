'use client';

import { useEffect, useRef, useState } from 'react';

type Lang = { code: 'de' | 'en' | 'es' | 'fr' | 'pt' | 'ja'; label: string; href: string };

const LANGS: Lang[] = [
  { code: 'de', label: 'Deutsch', href: '/de' },
  { code: 'en', label: 'English', href: '/' },
  { code: 'es', label: 'Español', href: '/es' },
  { code: 'fr', label: 'Français', href: '/fr' },
  { code: 'pt', label: 'Português', href: '/pt' },
  { code: 'ja', label: '日本語', href: '/ja' },
];

export default function LanguageSwitcher() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // fecha ao clicar fora e ao pressionar ESC
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

  // idioma atual pela URL
  const current =
    LANGS.find((l) =>
      l.code === 'en' ? location.pathname === '/' : location.pathname.startsWith(`/${l.code}`)
    ) ?? LANGS[1]; // default: en

  function go(href: string) {
    if (href === '/') {
      location.href = '/';
    } else {
      location.href = href;
    }
  }

  return (
    <div ref={ref} className="relative">
      {/* Botão */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-zinc-200 backdrop-blur transition hover:bg-white/10"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        {/* Ícone globo */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          className="text-zinc-300"
          fill="
