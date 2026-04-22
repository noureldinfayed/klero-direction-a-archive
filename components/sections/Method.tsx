import Reveal from '@/components/ui/Reveal'

const STEPS = [
  {
    no: 'i.',
    tag: 'Acte premier',
    title: 'Nous identifions les héritages non transmis.',
    body:
      "Croisement des bases bancaires, notariales et d'état civil. Notre cellule de recherche analyse les successions dormantes et remonte jusqu'aux ayants droit — même lorsque le lien paraît perdu.",
    illo: 'search' as const,
  },
  {
    no: 'ii.',
    tag: 'Acte deuxième',
    title: "Une équipe d'experts s'engage à vos côtés.",
    body:
      "Généalogistes diplômés, juristes en droit des successions, et un notaire en supervision. Nous réunissons le mandat, les actes et les pièces justificatives — en votre nom.",
    illo: 'team' as const,
  },
  {
    no: 'iii.',
    tag: 'Acte troisième',
    title: 'Nous vous restituons les actifs qui vous reviennent.',
    body:
      "Aucun frais d'avance. Aucun engagement si rien n'est retrouvé. Les versements sont supervisés par notaire, dans le respect strict des règles dévolutives.",
    illo: 'restitute' as const,
  },
]

function Illo({ kind }: { kind: 'search' | 'team' | 'restitute' }) {
  if (kind === 'search') {
    return (
      <div className="illo-search w-full max-w-[220px]">
        <div className="row" style={{ ['--w' as string]: '30%' } as React.CSSProperties} />
        <div className="row" style={{ ['--w' as string]: '65%' } as React.CSSProperties} />
        <div className="row hit" style={{ ['--w' as string]: '100%' } as React.CSSProperties} />
        <div className="row" style={{ ['--w' as string]: '45%' } as React.CSSProperties} />
        <div className="row" style={{ ['--w' as string]: '80%' } as React.CSSProperties} />
        <div className="row hit" style={{ ['--w' as string]: '92%' } as React.CSSProperties} />
        <div className="row" style={{ ['--w' as string]: '20%' } as React.CSSProperties} />
      </div>
    )
  }
  if (kind === 'team') {
    return (
      <div className="illo-team flex items-end gap-2">
        <div className="figure" style={{ height: 70 }} />
        <div className="figure" style={{ height: 86 }} />
        <div className="figure" style={{ height: 60 }} />
        <div className="figure" style={{ height: 76 }} />
      </div>
    )
  }
  return (
    <div className="flex flex-wrap items-center justify-center gap-2">
      <Coin>€</Coin>
      <Coin>€</Coin>
      <Coin>€</Coin>
      <Coin filled>✓</Coin>
    </div>
  )
}

function Coin({ children, filled }: { children: React.ReactNode; filled?: boolean }) {
  return (
    <span
      className="grid place-items-center"
      style={{
        width: 28,
        height: 28,
        borderRadius: '50%',
        border: '1.5px solid #7a1f1f',
        background: filled ? '#7a1f1f' : 'transparent',
        color: filled ? '#faf6ee' : '#7a1f1f',
        fontFamily: 'var(--font-cormorant), serif',
        fontStyle: 'italic',
        fontSize: 14,
      }}
    >
      {children}
    </span>
  )
}

export default function Method() {
  return (
    <section id="process" className="relative border-t border-rule py-20 kl:py-[120px]">
      <div className="mx-auto max-w-[1280px] px-5 kl:px-8">
        <div className="mb-10 grid grid-cols-1 items-start gap-4 kl:mb-[72px] kl:grid-cols-[220px_1fr] kl:gap-12">
          <Reveal>
            <div
              className="text-accent"
              style={{
                fontFamily: 'var(--font-cormorant), serif',
                fontStyle: 'italic',
                fontWeight: 300,
                fontSize: 'clamp(48px, 5vw, 72px)',
                lineHeight: 1,
                letterSpacing: '-0.03em',
              }}
            >
              II.
              <small className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink-muted">
                La méthode Kléro
              </small>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title max-w-[720px]">
              Trois actes, une <em>certitude</em> — votre héritage, retrouvé, vérifié, restitué.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 border-y border-ink kl:grid-cols-3">
          {STEPS.map((step, i) => (
            <Reveal
              key={step.no}
              delay={(i as 0 | 1 | 2)}
              className={[
                'relative px-5 py-9 kl:px-8 kl:pb-12 kl:pt-10',
                i < STEPS.length - 1 ? 'border-b border-rule kl:border-b-0 kl:border-r' : '',
              ].join(' ')}
            >
              <div className="mb-8 flex items-baseline justify-between border-b border-rule pb-4">
                <div
                  className="text-ink"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontStyle: 'italic',
                    fontSize: 56,
                    lineHeight: 1,
                  }}
                >
                  {step.no}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {step.tag}
                </div>
              </div>
              <h3
                className="mb-4 max-w-[260px]"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 28,
                  fontWeight: 400,
                  lineHeight: 1.15,
                  letterSpacing: '-0.01em',
                }}
              >
                {step.title}
              </h3>
              <p className="max-w-[280px] text-[14px] leading-[1.6] text-ink-soft">
                {step.body}
              </p>
              <div className="mt-7 flex h-[120px] items-center justify-center">
                <Illo kind={step.illo} />
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-8 flex flex-col gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted kl:flex-row kl:justify-between">
          <span>— Procédure conforme aux articles 730 et suivants du Code civil</span>
          <span>Durée moyenne · 4 à 11 mois</span>
        </div>
      </div>
    </section>
  )
}
