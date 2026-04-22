import Reveal from '@/components/ui/Reveal'

const VALUE_PROPS = [
  {
    no: '01',
    label: 'Tout-en-un',
    title: 'Un service expert, intégralement pris en charge.',
    body:
      "Recherche, vérification, mandat, restitution. Vous n'écrivez pas une lettre, ne déplacez pas un dossier. Notre cellule s'occupe de chaque acte — du croisement des bases à la signature notariale.",
  },
  {
    no: '02',
    label: 'Zéro frais sans résultat',
    title: "Aucun engagement tant que rien n'est retrouvé.",
    body:
      "Si nous ne retrouvons aucun actif, votre dossier est officiellement classé sans suite. Aucune commission, aucun frais d'ouverture. Nos honoraires sont prélevés exclusivement sur les sommes restituées.",
  },
  {
    no: '03',
    label: 'Démarches optimisées',
    title: 'Une procédure éprouvée sur des centaines de successions.',
    body:
      'Plus de mille dossiers traités chaque année. Nos équipes — généalogistes, juristes, notaires — ont rationalisé les démarches pour vous éviter l\'attente, la complexité, et les pièges administratifs.',
  },
]

export default function Why() {
  return (
    <section id="why" className="relative border-t border-rule py-20 kl:py-[120px]">
      <div className="mx-auto max-w-[1800px] px-5 kl:px-8">
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
              IV.
              <small className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink-muted">
                Pourquoi Kléro
              </small>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title max-w-[720px]">
              Trois raisons que les familles nous donnent — <em>après</em> avoir confié leur dossier.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-0 kl:grid-cols-3">
          {VALUE_PROPS.map((p, i) => (
            <Reveal
              key={p.no}
              delay={i as 0 | 1 | 2}
              className={[
                'relative px-5 py-9 kl:px-8 kl:py-10',
                i < VALUE_PROPS.length - 1 ? 'border-b border-rule kl:border-b-0 kl:border-r' : '',
              ].join(' ')}
            >
              <div className="mb-6 flex items-baseline justify-between border-b border-rule pb-3">
                <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                  N° {p.no}
                </div>
                <div className="font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted">
                  {p.label}
                </div>
              </div>
              <h3
                className="mb-4 max-w-[280px]"
                style={{
                  fontFamily: 'var(--font-cormorant), serif',
                  fontSize: 26,
                  fontWeight: 400,
                  lineHeight: 1.2,
                  letterSpacing: '-0.01em',
                }}
              >
                {p.title}
              </h3>
              <p className="max-w-[300px] text-[14px] leading-[1.65] text-ink-soft">
                {p.body}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
