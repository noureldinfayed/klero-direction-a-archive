# Handoff: Klero — Direction A · L'Archive

## Overview
Marketing landing page for **Klero Généalogie**, a French genealogical succession firm (est. 1984). Audience: 40+ French-speaking prospects who may have a forgotten inheritance. Goal: trust + conversion on "Ouvrir un dossier" (open a case file).

Direction A is the **editorial / notarial archive** aesthetic — cream paper, Cormorant Garamond serif, oxblood accents, dossier-style composition with case numbers, seals, and archival rules.

## About the Design Files
`direction-a-archive.html` is a **design reference created in HTML** — a prototype showing final look, copy, and behavior. It is **not production code to copy directly**.

**Your task:** recreate this design in **Next.js 14+ (App Router) + Tailwind CSS**, using the target codebase's patterns (component structure, naming, utility conventions). Treat the HTML as visual + behavioral source of truth, and **open it in a browser** to verify interactions before porting.

## Fidelity
**High-fidelity.** Match colors, typography, spacing, and interactions exactly. The HTML is the spec.

## Tech stack
- Next.js 14+, **App Router** (`app/` directory)
- **Tailwind CSS** — configure tokens in `tailwind.config.ts` (see Design Tokens below)
- Fonts via `next/font/google`: **Cormorant Garamond** (400/500, ital), **Inter** (300/400/500/600), **JetBrains Mono** (400/500)
- French (`<html lang="fr">`)
- Single breakpoint at 900px in the HTML → use Tailwind `lg:` (1024) OR customize `md` to 900 to match
- Fully responsive (desktop + mobile)

## Design Tokens

Add to `tailwind.config.ts` under `theme.extend`:

```ts
colors: {
  paper:     '#f4efe6',   // hero bg
  'paper-2': '#ebe4d5',   // shadow-card offset
  cream:     '#faf6ee',   // stat card, buttons text
  ink:       '#1a1612',   // primary text
  'ink-soft':'#3a332b',   // body text
  'ink-muted':'#6b6056',  // captions / meta
  rule:      '#c9bfae',   // borders + dashed dividers
  accent:    '#7a1f1f',   // oxblood — primary CTA, highlights, seal
  gold:      '#a8884a',   // amp/ornament
},
fontFamily: {
  serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
  sans:  ['var(--font-inter)', 'system-ui', 'sans-serif'],
  mono:  ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
},
fontSize: {
  // Fluid hero/section titles — use clamp() inline or CSS vars
},
```

Body base: `bg-paper text-ink font-sans text-base leading-[1.5]`.
Apply noise texture on `<body>`:
```css
background-image:
  radial-gradient(ellipse at 20% 10%, rgba(168,136,74,.08), transparent 40%),
  radial-gradient(ellipse at 80% 90%, rgba(122,31,31,.04), transparent 50%),
  url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='200' height='200'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/><feColorMatrix values='0 0 0 0 0.1  0 0 0 0 0.08  0 0 0 0 0.06  0 0 0 0.04 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>");
background-size: auto, auto, 200px;
```

## Page structure

Single route: `app/page.tsx`, long-scroll landing. Break into components under `app/_components/`:

```
app/
  layout.tsx            # fonts, <html lang="fr">, body noise bg
  page.tsx              # composes the sections below
  globals.css           # body bg + reveal keyframes
  _components/
    Chrome.tsx          # sticky header
    Hero.tsx            # meta bar + title + stat card + hero index
    StatCard.tsx        # 7% card with seal (used inside Hero)
    Method.tsx          # "II. La méthode" — 3 steps strip
    Cases.tsx           # "III. Dossiers" — 3 case articles
    FooterCta.tsx       # "Votre nom figure peut-être..."
    SiteFooter.tsx
    Reveal.tsx          # IntersectionObserver wrapper w/ d1..d4 delays
```

### Sections (top to bottom)
All content, copy, layouts, dimensions, colors, SVG illustrations, and animations are in the HTML. Reference `direction-a-archive.html` section-by-section:

1. **`<header class="chrome">`** — sticky top, brand lockup (34px circle "K", wordmark "Kléro", subline "Généalogie · Est. 1984"), nav (desktop), hamburger (mobile).
2. **`<section class="hero">`** — meta bar with pulsing dot, 2-col grid: giant title `Un héritage vous attend.` (italic `vous attend.` in accent), lede, buttons, + Stat card (7% with `<section>` seal, striped top-edge, `20px 20px` layered shadow).
3. **`<section class="section" id="process">`** — "II." big italic numeral, section title "Trois actes, une certitude…", 3-col steps strip with top+bottom ink border, mini illustrations per step.
4. **`<section class="cases-wrap" id="cases">`** — cream bg, alternating 2-col case articles (portrait / body), each with dossier number badge, quote, story, stats row.
5. **`<section class="footer-cta">`** — huge centered title "Votre nom figure peut-être *dans nos archives.*", divider rule, sub, buttons.
6. **`<footer>`** — mono rule with address + notarial line.

### Animations
- **Pulse** on meta-bar dot: `@keyframes pulse { 0%,100%{opacity:.4} 50%{opacity:1} }`, duration 2.4s infinite.
- **Reveal on scroll**: elements with `.reveal` start `opacity:0; transform: translateY(16px)`; add `.in` via IntersectionObserver (threshold 0.12) → `opacity:1; transform:none`, transition 0.9s `cubic-bezier(.2,.7,.3,1)`. Stagger with `.d1`..`.d4` (delays 120/240/360/480ms). Build as a `<Reveal delay={1}>` client component.

### Buttons

```tsx
// Primary — oxblood → ink on hover
<button className="bg-accent text-cream px-7 py-3.5 text-[13px] tracking-[.06em] uppercase hover:bg-ink transition-colors">
  Ouvrir un dossier
</button>

// Ghost — outlined ink → fills on hover
<button className="border border-ink text-ink px-7 py-3.5 text-[13px] tracking-[.06em] uppercase hover:bg-ink hover:text-cream transition-colors">
  J'ai été contacté →
</button>
```

### Stat card (hero right) — key composition

```tsx
<article className="relative bg-cream border border-rule p-9"
  style={{ boxShadow: '0 1px 0 #c9bfae, 20px 20px 0 -1px #ebe4d5, 20px 20px 0 0 #c9bfae' }}>
  {/* striped top edge */}
  <div className="absolute -top-px left-0 right-0 h-1"
       style={{ background: 'repeating-linear-gradient(90deg,#1a1612 0 12px,transparent 12px 20px)' }} />
  {/* seal */}
  <div className="absolute -top-7 -right-7 w-32 h-32 rounded-full border-2 border-accent text-accent
                  bg-cream grid place-items-center -rotate-[8deg]">
    <div className="absolute inset-1.5 rounded-full border border-accent" />
    <div className="font-serif italic text-sm leading-tight text-center px-2">
      <b className="block text-[28px] not-italic font-medium -tracking-[.02em]">N° 7</b>
      certifié<br/>par notaire
    </div>
  </div>
  {/* … label / number 7% / body / footer per HTML */}
</article>
```

### SVG step illustrations
Three inline illustrations in the Method section — see HTML `.illo-search`, `.illo-team`, `.illo-restitute`. Reproduce as static JSX (no runtime state).

## Content / copy
All French copy is finalized. Do not translate or reword. Everything is in the HTML — including case studies (Lefèvre, Caron, Moretti), amounts, dossier numbers, dates, and quotes.

## Responsive behavior
Single breakpoint at 900px:
- Below 900px: nav hidden, hamburger shown, top CTA hidden
- Hero grid stacks; stat card moves above title (order changes)
- Method steps stack vertically with bottom dividers instead of right
- Case articles stack (image above body)
- Type scales reduce (stat number 140 → 104, seal 128 → 104, etc.)

All breakpoint rules are in the HTML's `@media (max-width: 900px)` block — port them directly.

## Accessibility notes
- Semantic landmarks: `<header>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Hamburger needs `aria-label="Menu"`, `aria-expanded`, and actual menu implementation (HTML only stubs the button)
- Pulsing dot is decorative — `aria-hidden="true"`
- CTAs are `<button>` in HTML; wire them to actual routes or form opens in Next
- Ensure sufficient contrast: `#3a332b` on `#f4efe6` passes AA; `#6b6056` on `#f4efe6` is borderline for small text — only use on 12px+ uppercase per HTML
- `prefers-reduced-motion`: disable pulse + reveal animations

## Files in this bundle
- `direction-a-archive.html` — the complete design reference (all styles, copy, SVG inline). Open in a browser first; this is the source of truth.
- `README.md` — this document.

## Assets
No external assets. Portraits in case cards are CSS-inlined placeholder SVGs (radial gradient "silhouettes") — swap for real photography when available. Brand mark "K" is typographic (no logo file).
