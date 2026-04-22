'use client'

import Image from 'next/image'
import { useState } from 'react'

const NAV_LINKS = [
  { href: '#process', label: 'Méthode' },
  { href: '#cases', label: 'Dossiers' },
  { href: '#team', label: 'Équipe' },
  { href: '#faq', label: 'FAQ' },
  { href: '#contact', label: 'Contact' },
]

export default function Chrome() {
  const [open, setOpen] = useState(false)

  return (
    <header
      className="sticky top-0 z-40 border-b border-rule"
      style={{
        background: 'rgba(244,239,230,.86)',
        backdropFilter: 'blur(14px) saturate(120%)',
        WebkitBackdropFilter: 'blur(14px) saturate(120%)',
      }}
    >
      <div className="mx-auto max-w-[1800px] px-5 kl:px-8">
        <div className="flex h-24 items-center justify-between kl:h-28">
          <a href="#top" className="flex items-center gap-4" aria-label="Klero Généalogie — accueil">
            <Image
              src="/images/klero-logo.png"
              alt="Klero Généalogie"
              width={1536}
              height={1024}
              priority
              className="h-16 w-auto kl:h-20"
              style={{ filter: 'brightness(0)' }}
            />
            <span className="hidden kl:inline-block ml-1 border-l border-rule pl-4 text-[10px] uppercase tracking-[0.25em] text-ink-muted">
              Est. 1984
            </span>
          </a>

          <nav className="hidden kl:flex items-center gap-9">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] tracking-[0.02em] text-ink-soft transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="cursor-pointer rounded-[2px] bg-ink px-[18px] py-[10px] text-[13px] uppercase tracking-[0.06em] text-cream no-underline transition-colors hover:bg-accent"
            >
              Nous contacter
            </a>
          </nav>

          <button
            type="button"
            className="kl:hidden cursor-pointer border-none bg-transparent p-2 text-ink"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <>
                  <line x1="5" y1="5" x2="19" y2="19" />
                  <line x1="19" y1="5" x2="5" y2="19" />
                </>
              ) : (
                <>
                  <line x1="3" y1="8" x2="21" y2="8" />
                  <line x1="3" y1="16" x2="21" y2="16" />
                </>
              )}
            </svg>
          </button>
        </div>

        {open && (
          <nav className="kl:hidden flex flex-col gap-1 border-t border-rule py-3">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="px-1 py-3 text-[14px] tracking-[0.02em] text-ink-soft transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 cursor-pointer rounded-[2px] bg-ink px-[18px] py-[12px] text-[13px] uppercase tracking-[0.06em] text-cream no-underline transition-colors hover:bg-accent"
            >
              Nous contacter
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}
