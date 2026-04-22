'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'

type Q = { q: string; a: React.ReactNode }

const FAQS: Q[] = [
  {
    q: 'Qui sommes-nous ? Comment être certain de votre légitimité ?',
    a: (
      <>
        Kléro a été fondée par un ancien avocat du barreau de Paris, et est enregistrée au tribunal
        de commerce de Paris (SIREN 947 791 927). Nous sommes accrédités par le Ministère de la Culture
        pour consulter les registres d&apos;État civil. Chaque dossier est supervisé par notaire — le
        nôtre, M<sup>e</sup> Rambert &amp; associés.
      </>
    ),
  },
  {
    q: 'Quel peut être l\'héritage que vous avez identifié ?',
    a: (
      <>
        Un compte bancaire non clôturé, un livret d&apos;épargne oublié (Livret A, PEL, PEE), une
        assurance-vie souscrite par le défunt, ou un actif immobilier non transmis. Les sources sont
        variées — la constante est qu&apos;ils dorment, parfois depuis des décennies, sans héritier
        identifié.
      </>
    ),
  },
  {
    q: 'Comment avez-vous réussi à nous retrouver comme héritiers ?',
    a: (
      <>
        Trois étapes : récupération des actes de décès via notre accréditation, identification des
        héritiers à partir des liens de filiation, prise de contact via le notaire, la mairie, les
        pompes funèbres, ou les bases de données publiques.
      </>
    ),
  },
  {
    q: 'Quel est le montant moyen des actifs retrouvés ?',
    a: (
      <>
        Environ 500 € en moyenne, sur près de mille dossiers traités annuellement. Mais la fourchette
        est large : de quelques dizaines d&apos;euros à plus de 10 000 €. Nos plus gros dossiers
        dépassent 300 000 €.
      </>
    ),
  },
  {
    q: 'Quelle est la procédure pour débloquer les fonds ?',
    a: (
      <>
        Un premier contact téléphonique. La signature de deux documents — contrat de recouvrement et
        mandat notarial. Puis le déblocage et le partage des fonds. Le contrat respecte la
        réglementation sur le démarchage à domicile, vous offrant un droit de rétractation de 15 jours.
      </>
    ),
  },
  {
    q: 'Quels documents dois-je fournir ?',
    a: (
      <>
        Une pièce d&apos;identité valide. Et selon le cas, une attestation dévolutive ou un acte de
        notoriété si la succession est déjà ouverte chez un notaire. Sinon, des documents prouvant la
        parenté : livret de famille, actes de naissance ou de mariage.
      </>
    ),
  },
  {
    q: 'Quelle est la durée moyenne du processus ?',
    a: (
      <>
        Notre objectif est de finaliser chaque dossier dans un délai maximum de 6 mois — évaluation,
        identification des actifs, communication des résultats, restitution des fonds. Les dossiers
        plus anciens ou internationaux peuvent demander jusqu&apos;à 11 mois.
      </>
    ),
  },
  {
    q: 'Quels sont les frais associés ?',
    a: (
      <>
        Aucun paiement direct au début du processus. Nos honoraires sont prélevés exclusivement sur
        les fonds récupérés, selon les termes du contrat signé. Si rien n&apos;est retrouvé,
        aucune commission n&apos;est facturée.
      </>
    ),
  },
  {
    q: 'Comment garantissez-vous la confidentialité ?',
    a: (
      <>
        Nous respectons rigoureusement le RGPD. Vos données sont supprimées après clôture du dossier.
        Nous ne contactons jamais le dimanche ni les jours fériés, et nous nous interdisons toute
        forme de relance harcelante.
      </>
    ),
  },
]

function FaqItem({ q, a, index }: Q & { index: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-rule">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full cursor-pointer items-start justify-between gap-6 py-6 text-left transition-colors hover:text-accent"
      >
        <span className="flex items-baseline gap-5">
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="block text-ink"
            style={{
              fontFamily: 'var(--font-cormorant), serif',
              fontSize: 'clamp(20px, 2vw, 26px)',
              fontWeight: 400,
              lineHeight: 1.25,
              letterSpacing: '-0.01em',
            }}
          >
            {q}
          </span>
        </span>
        <span
          aria-hidden="true"
          className="mt-2 inline-block flex-shrink-0 text-accent transition-transform"
          style={{ transform: open ? 'rotate(45deg)' : 'rotate(0deg)' }}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.2">
            <line x1="9" y1="2" x2="9" y2="16" />
            <line x1="2" y1="9" x2="16" y2="9" />
          </svg>
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300 ease-out"
        style={{
          maxHeight: open ? 600 : 0,
          opacity: open ? 1 : 0,
        }}
      >
        <div className="pb-6 pl-0 kl:pl-12">
          <p className="max-w-[640px] text-[15px] leading-[1.7] text-ink-soft">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Faq() {
  return (
    <section id="faq" className="border-t border-rule py-20 kl:py-[120px]">
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
              VI.
              <small className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink-muted">
                Questions fréquentes
              </small>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title max-w-[720px]">
              Les neuf questions que <em>chaque famille</em> nous pose.
            </h2>
          </Reveal>
        </div>

        <Reveal className="border-t border-rule">
          {FAQS.map((item, i) => (
            <FaqItem key={item.q} q={item.q} a={item.a} index={i} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
