export default function StatCard() {
  return (
    <article className="stat-card relative bg-cream border border-rule p-7 kl:p-9">
      {/* striped top edge */}
      <div
        className="pointer-events-none absolute h-1"
        style={{
          top: -1,
          left: -1,
          right: -1,
          background:
            'repeating-linear-gradient(90deg, #1a1612 0 12px, transparent 12px 20px)',
        }}
      />

      {/* seal */}
      <div className="stat-seal grid place-items-center text-center bg-cream text-accent">
        <div
          className="absolute"
          style={{ inset: 6, borderRadius: '50%', border: '1px solid #7a1f1f' }}
        />
        <div
          className="relative font-serif italic px-2"
          style={{ fontSize: 14, lineHeight: 1.1, zIndex: 1 }}
        >
          <b
            className="block not-italic"
            style={{ fontSize: 28, fontWeight: 500, letterSpacing: '-0.02em' }}
          >
            N°&nbsp;7
          </b>
          certifié
          <br />
          par notaire
        </div>
      </div>

      <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted mb-3">
        Statistique · INSEE / Klero 2025
      </div>

      <div className="stat-number flex items-start gap-1 text-ink font-serif">
        7<span className="pct text-accent">%</span>
      </div>

      <p className="mt-[18px] max-w-[320px] text-[15px] leading-[1.55] text-ink-soft">
        Sept Français sur cent héritent sans le savoir. Un oncle. Une tante éloignée.
        Un compte bancaire dormant depuis des décennies.{' '}
        <b className="font-medium">Vous êtes peut-être l&apos;un d&apos;eux.</b>
      </p>

      <div className="mt-7 flex items-center justify-between border-t border-dashed border-rule pt-[18px] font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
        <span>Source vérifiée</span>
        <span>→ Dossier complet</span>
      </div>
    </article>
  )
}
