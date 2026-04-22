export default function SiteFooter() {
  return (
    <footer className="border-t border-rule py-10 font-mono text-[12px] tracking-[0.08em] text-ink-muted">
      <div className="mx-auto max-w-[1280px] px-5 kl:px-8">
        <div className="flex flex-wrap justify-between gap-4 uppercase">
          <div>
            © MMXXVI · Klero Généalogie · 295 Rue Saint-Jacques, Paris V<sup>e</sup>
          </div>
          <div>
            Sous contrôle notarial — M<sup>e</sup> Rambert &amp; associés
          </div>
        </div>
        <div className="mt-6 flex flex-wrap justify-end gap-4 text-[10px] uppercase tracking-[0.12em] text-ink-muted/70">
          <span>Architected &amp; Engineered by Fayed Intelligence</span>
        </div>
      </div>
    </footer>
  )
}
