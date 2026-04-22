import Reveal from '@/components/ui/Reveal'

export default function FooterCta() {
  return (
    <section className="relative px-5 py-20 text-center kl:px-0 kl:pb-20 kl:pt-[120px]">
      <div className="mx-auto max-w-[1800px] kl:px-8">
        <Reveal>
          <h2 className="footer-cta-big mb-10">
            Votre nom figure
            <br />
            peut-être
            <br />
            <em>dans nos archives.</em>
          </h2>
        </Reveal>
        <span className="mx-auto my-6 block h-px w-[60px] bg-rule" />
        <Reveal delay={1}>
          <p
            className="mx-auto mb-10 max-w-[520px] text-ink-soft"
            style={{
              fontFamily: 'var(--font-cormorant), Georgia, serif',
              fontStyle: 'italic',
              fontSize: 22,
            }}
          >
            Une prise de contact simple, confidentielle, sans engagement. Nous vous répondons sous 48 heures.
          </p>
        </Reveal>
        <Reveal delay={2}>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="#contact"
              className="cursor-pointer border-none bg-accent px-7 py-[14px] text-[13px] uppercase tracking-[0.06em] text-cream no-underline transition-colors hover:bg-ink"
            >
              Ouvrir un dossier
            </a>
            <a
              href="tel:0173711363"
              className="cursor-pointer border border-ink bg-transparent px-7 py-[14px] text-[13px] uppercase tracking-[0.06em] text-ink no-underline transition-colors hover:bg-ink hover:text-cream"
            >
              01 73 71 13 63
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
