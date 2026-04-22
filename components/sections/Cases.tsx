import Reveal from '@/components/ui/Reveal'

type CaseMeta = { k: string; v: React.ReactNode }
type Case = {
  dossier: string
  closedLabel: React.ReactNode
  location: string
  duration: string
  quote: string
  story: React.ReactNode
  meta: CaseMeta[]
}

const PORTRAIT_SVG = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'><defs><radialGradient id='g' cx='50%25' cy='35%25'><stop offset='0%25' stop-color='%23e8dcc3'/><stop offset='100%25' stop-color='%23897860'/></radialGradient></defs><rect width='300' height='400' fill='url(%23g)'/><circle cx='150' cy='160' r='62' fill='%234a3f31' opacity='0.85'/><path d='M60 400 Q150 240 240 400 Z' fill='%234a3f31' opacity='0.85'/><rect width='300' height='400' fill='%231a1612' opacity='0.12'/></svg>`

const CASES: Case[] = [
  {
    dossier: '04.118',
    closedLabel: (
      <>
        Clôturé · <b className="font-medium text-accent">Mars 2025</b>
      </>
    ),
    location: 'Lyon · Rhône',
    duration: 'Durée · 7 mois',
    quote:
      "Je n'avais jamais entendu parler de cette grand-tante. Kléro l'a retrouvée pour moi, et avec elle, une partie de mon histoire.",
    story: (
      <>
        Mme Lefèvre, 58 ans, institutrice à la retraite. Une succession ouverte en 1997 n&apos;avait
        jamais été close — un livret d&apos;épargne, un appartement dans le XV<sup>e</sup>, et une
        collection de lettres de la guerre. Quatre branches d&apos;héritiers localisées, un partage
        supervisé par M<sup>e</sup> Rambert, notaire associé.
      </>
    ),
    meta: [
      {
        k: 'Actifs restitués',
        v: (
          <>
            <em className="not-italic font-serif italic text-accent">184 200</em> €
          </>
        ),
      },
      { k: 'Héritiers identifiés', v: '4' },
      { k: 'Ancienneté', v: '28 ans' },
    ],
  },
  {
    dossier: '04.203',
    closedLabel: (
      <>
        Clôturé · <b className="font-medium text-accent">Septembre 2025</b>
      </>
    ),
    location: 'Bordeaux · Gironde',
    duration: 'Durée · 5 mois',
    quote:
      "Un simple appel. Je pensais à une arnaque. Six mois plus tard, notre famille recevait ce qui lui revenait — en toute transparence.",
    story: (
      <>
        M. et Mme Caron, artisans, n&apos;ont jamais rencontré leur cousin germain, décédé célibataire
        en 2018. La succession, dormante chez trois établissements bancaires, n&apos;avait pas de
        testament. Kléro a reconstitué la filiation sur cinq générations.
      </>
    ),
    meta: [
      {
        k: 'Actifs restitués',
        v: (
          <>
            <em className="not-italic font-serif italic text-accent">72 400</em> €
          </>
        ),
      },
      { k: 'Héritiers identifiés', v: '2' },
      { k: 'Générations reconstituées', v: '5' },
    ],
  },
  {
    dossier: '04.271',
    closedLabel: (
      <>
        Clôturé · <b className="font-medium text-accent">Février 2026</b>
      </>
    ),
    location: 'Marseille · Bouches-du-Rhône',
    duration: 'Durée · 11 mois',
    quote:
      "On nous avait dit que c'était perdu. Kléro a simplement dit : nous allons chercher.",
    story: (
      <>
        Famille Moretti, descendants d&apos;une immigration italienne de 1923. Une propriété rurale
        inscrite au cadastre sous un patronyme francisé avait échappé à trois notaires successifs.
        Le dossier mobilisé : 340 actes, 12 archives départementales, 2 recherches internationales.
      </>
    ),
    meta: [
      {
        k: 'Actifs restitués',
        v: (
          <>
            <em className="not-italic font-serif italic text-accent">312 800</em> €
          </>
        ),
      },
      { k: 'Héritiers identifiés', v: '7' },
      { k: 'Archives consultées', v: '12' },
    ],
  },
]

function Portrait({ dossier }: { dossier: string }) {
  return (
    <div
      className="relative max-w-[320px] kl:max-w-none border border-rule overflow-hidden"
      style={{
        aspectRatio: '4 / 5',
        background: 'linear-gradient(135deg,#d9cfba 0%, #b8a98a 100%)',
      }}
    >
      <div
        className="absolute inset-0"
        style={{ background: `url("${PORTRAIT_SVG}") center/cover` }}
      />
      <div className="absolute left-4 top-4 border border-rule bg-cream px-[10px] py-[6px] font-mono text-[10px] uppercase tracking-[0.15em] text-ink">
        Dossier {dossier}
      </div>
    </div>
  )
}

export default function Cases() {
  return (
    <section
      id="cases"
      className="border-y border-rule bg-cream py-20 kl:py-[120px]"
    >
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
              III.
              <small className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink-muted">
                Dossiers · Archives Kléro
              </small>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title max-w-[720px]">
              Des familles retrouvent ce qu&apos;elles <em>ignoraient posséder.</em>
            </h2>
          </Reveal>
        </div>

        {CASES.map((c, i) => {
          const reversed = i % 2 === 1
          const isLast = i === CASES.length - 1
          return (
            <Reveal
              key={c.dossier}
              as="article"
              className={[
                'grid grid-cols-1 items-center gap-8 py-10 kl:gap-16 kl:py-14',
                reversed
                  ? 'kl:grid-cols-[1.4fr_1fr]'
                  : 'kl:grid-cols-[1fr_1.4fr]',
                isLast ? '' : 'border-b border-rule',
              ].join(' ')}
            >
              <div className={reversed ? 'kl:order-2' : ''}>
                <Portrait dossier={c.dossier} />
              </div>
              <div className={reversed ? 'kl:order-1' : ''}>
                <div className="mb-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-[11px] uppercase tracking-[0.15em] text-ink-muted">
                  <span>{c.closedLabel}</span>
                  <span>{c.location}</span>
                  <span>{c.duration}</span>
                </div>
                <p className="case-quote mb-6">{c.quote}</p>
                <p className="mb-6 max-w-[540px] text-[15px] leading-[1.65] text-ink-soft">
                  {c.story}
                </p>
                <div className="flex flex-wrap gap-x-10 gap-y-4 border-t border-rule pt-5">
                  {c.meta.map((m) => (
                    <div key={m.k}>
                      <div className="mb-[6px] font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                        {m.k}
                      </div>
                      <div
                        className="text-ink"
                        style={{
                          fontFamily: 'var(--font-cormorant), serif',
                          fontSize: 22,
                          fontWeight: 500,
                        }}
                      >
                        {m.v}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          )
        })}

        <div className="mt-12 text-center">
          <a
            href="#faq"
            className="cursor-pointer border border-ink bg-transparent px-7 py-[14px] text-[13px] uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-ink hover:text-cream"
          >
            Consulter notre FAQ →
          </a>
        </div>
      </div>
    </section>
  )
}
