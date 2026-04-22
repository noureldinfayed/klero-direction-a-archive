import Reveal from '@/components/ui/Reveal'
import StatCard from '@/components/sections/StatCard'

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-12 pt-6 kl:pb-20 kl:pt-10">
      <div className="mx-auto max-w-[1280px] px-5 kl:px-8">
        {/* meta bar */}
        <div className="mb-12 flex items-center justify-between border-b border-rule pb-[18px] font-mono text-[11px] uppercase tracking-[0.12em] text-ink-muted">
          <div>
            <span
              aria-hidden="true"
              className="klero-pulse mr-2 inline-block h-[6px] w-[6px] rounded-full bg-accent align-middle"
            />
            Dossier ouvert · Paris · V<sup>e</sup>
          </div>
          <div>Édition MMXXVI · N° 04.287</div>
        </div>

        <div className="grid grid-cols-1 items-start gap-12 kl:grid-cols-2 kl:items-end kl:gap-20">
          {/* left — copy */}
          <div className="order-2 kl:order-1">
            <Reveal>
              <div className="mb-7 flex items-center gap-[14px] font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                <span className="block h-px w-8 bg-accent" />
                Généalogie successorale
              </div>
            </Reveal>

            <Reveal delay={1}>
              <h1 className="hero-title">
                Un héritage<br />
                <em>vous attend.</em>
              </h1>
            </Reveal>

            <Reveal delay={2}>
              <p
                className="mt-8 max-w-[460px] text-ink-soft"
                style={{
                  fontFamily: 'var(--font-cormorant), Georgia, serif',
                  fontStyle: 'italic',
                  fontSize: 22,
                  lineHeight: 1.4,
                  fontWeight: 400,
                }}
              >
                Depuis quarante ans, nous retrouvons les successions oubliées des familles françaises —
                avec la rigueur du notariat, la patience de l&apos;archiviste.
              </p>
            </Reveal>

            <Reveal delay={3}>
              <div className="mt-10 flex flex-wrap gap-[14px]">
                <button
                  type="button"
                  className="cursor-pointer border-none bg-accent px-7 py-[14px] text-[13px] uppercase tracking-[0.06em] text-cream transition-colors hover:bg-ink"
                >
                  Ouvrir un dossier
                </button>
                <button
                  type="button"
                  className="cursor-pointer border border-ink bg-transparent px-7 py-[14px] text-[13px] uppercase tracking-[0.06em] text-ink transition-colors hover:bg-ink hover:text-cream"
                >
                  J&apos;ai été contacté →
                </button>
              </div>
            </Reveal>
          </div>

          {/* right — stat card */}
          <Reveal delay={2} className="order-1 kl:order-2 relative">
            <StatCard />
          </Reveal>
        </div>

        {/* hero index — desktop only */}
        <div className="hidden kl:flex absolute bottom-6 left-8 items-center gap-[14px] text-[14px] italic text-ink-muted" style={{ fontFamily: 'var(--font-cormorant), Georgia, serif' }}>
          <span className="block h-px w-20 bg-rule" />
          <span>I · Introduction</span>
          <span>II · Méthode</span>
          <span>III · Dossiers</span>
        </div>
      </div>
    </section>
  )
}
