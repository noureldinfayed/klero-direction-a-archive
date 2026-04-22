import Reveal from '@/components/ui/Reveal'

const PORTRAIT_DARK = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='300' height='400' viewBox='0 0 300 400'><defs><radialGradient id='g' cx='50%25' cy='35%25'><stop offset='0%25' stop-color='%23bfb19a'/><stop offset='100%25' stop-color='%236b6056'/></radialGradient></defs><rect width='300' height='400' fill='url(%23g)'/><circle cx='150' cy='160' r='62' fill='%231a1612' opacity='0.85'/><path d='M60 400 Q150 240 240 400 Z' fill='%231a1612' opacity='0.85'/></svg>`

const TEAM = [
  {
    name: 'Jean-Michel Branche',
    role: 'Président · Fondateur',
    bio: "Avocat au barreau de Paris depuis 1983. Il fonde Kléro pour rendre l'accès aux successions oubliées simple et confidentiel — sous contrôle notarial.",
  },
  {
    name: 'Louis Fleury',
    role: 'Associé · Directeur Général',
    bio: "Direction des opérations et de la cellule de recherche. Coordonne les généalogistes, juristes et notaires partenaires sur l'ensemble des dossiers en cours.",
  },
  {
    name: 'Sofia Toffetti',
    role: 'Dossiers internationaux',
    bio: "Responsable des dossiers italiens depuis Milan et Bergame. Spécialiste des filiations transfrontalières et des cadastres européens.",
  },
  {
    name: 'Salim Toumi',
    role: 'Relations notaires & pompes funèbres',
    bio: "Liaison opérationnelle avec les études notariales et les chambres mortuaires. Garant de la conformité des pièces et des transmissions d'actes.",
  },
]

function Portrait() {
  return (
    <div
      className="relative w-full border border-rule overflow-hidden"
      style={{
        aspectRatio: '4 / 5',
        background: `url("${PORTRAIT_DARK}") center/cover`,
      }}
    />
  )
}

export default function Team() {
  return (
    <section
      id="team"
      className="border-y border-rule bg-paper py-20 kl:py-[120px]"
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
              V.
              <small className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink-muted">
                L&apos;équipe Kléro
              </small>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title max-w-[720px]">
              Quatorze professionnels — <em>généalogistes, juristes, notaire en supervision.</em>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 kl:grid-cols-4 kl:gap-8">
          {TEAM.map((m, i) => (
            <Reveal key={m.name} delay={i as 0 | 1 | 2 | 3} className="flex flex-col">
              <Portrait />
              <div className="mt-5">
                <div
                  className="text-ink"
                  style={{
                    fontFamily: 'var(--font-cormorant), serif',
                    fontSize: 22,
                    fontWeight: 500,
                    lineHeight: 1.2,
                    letterSpacing: '-0.01em',
                  }}
                >
                  {m.name}
                </div>
                <div className="mt-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
                  {m.role}
                </div>
                <p className="mt-3 text-[13px] leading-[1.65] text-ink-soft">
                  {m.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-rule pt-6 font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted kl:flex-row kl:items-center">
          <span>— Cellule complète : 14 collaborateurs · sous supervision notariale</span>
          <a
            href="#contact"
            className="text-ink underline-offset-4 transition-colors hover:text-accent hover:underline"
          >
            Demander à rencontrer un responsable →
          </a>
        </div>
      </div>
    </section>
  )
}
