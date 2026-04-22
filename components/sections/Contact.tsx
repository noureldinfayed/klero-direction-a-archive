'use client'

import { useState } from 'react'
import Reveal from '@/components/ui/Reveal'

type Status = 'idle' | 'sending' | 'sent' | 'error'

const FIELD_CLASS =
  'w-full border-0 border-b border-rule bg-transparent px-0 py-3 text-[16px] text-ink placeholder:text-ink-muted/70 focus:border-ink focus:outline-none transition-colors'

const LABEL_CLASS =
  'block font-mono text-[10px] uppercase tracking-[0.18em] text-ink-muted'

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [error, setError] = useState<string>('')

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (status === 'sending') return

    const form = e.currentTarget
    const data = new FormData(form)
    const payload = {
      name: `${data.get('firstName') ?? ''} ${data.get('lastName') ?? ''}`.trim(),
      email: String(data.get('email') ?? ''),
      phone: String(data.get('phone') ?? ''),
      message: String(data.get('message') ?? ''),
    }

    setStatus('sending')
    setError('')
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (!res.ok) {
        const j = await res.json().catch(() => ({}))
        throw new Error(j.error || `Erreur ${res.status}`)
      }
      setStatus('sent')
      form.reset()
    } catch (err) {
      setStatus('error')
      setError(err instanceof Error ? err.message : 'Erreur inconnue')
    }
  }

  return (
    <section
      id="contact"
      className="border-y border-rule bg-cream py-20 kl:py-[120px]"
    >
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
              VII.
              <small className="mt-2 block font-mono text-[10px] not-italic uppercase tracking-[0.2em] text-ink-muted">
                Nous contacter
              </small>
            </div>
          </Reveal>
          <Reveal delay={1}>
            <h2 className="section-title max-w-[720px]">
              Une prise de contact <em>simple, confidentielle,</em> sans engagement.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 gap-12 kl:grid-cols-[1fr_1.5fr] kl:gap-20">
          {/* Coordonnées */}
          <Reveal>
            <div className="border-t border-ink pt-8">
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                Coordonnées · Cabinet de Paris
              </div>

              <div className="space-y-6">
                <div>
                  <div className={LABEL_CLASS}>Téléphone</div>
                  <a
                    href="tel:0173711363"
                    className="mt-2 block text-ink no-underline transition-colors hover:text-accent"
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 28,
                      fontWeight: 400,
                      letterSpacing: '-0.01em',
                    }}
                  >
                    01 73 71 13 63
                  </a>
                </div>

                <div>
                  <div className={LABEL_CLASS}>Courriel</div>
                  <a
                    href="mailto:accueil@klero.fr"
                    className="mt-2 block text-ink no-underline transition-colors hover:text-accent"
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 22,
                      fontWeight: 400,
                      fontStyle: 'italic',
                    }}
                  >
                    accueil@klero.fr
                  </a>
                </div>

                <div>
                  <div className={LABEL_CLASS}>Adresse</div>
                  <p
                    className="mt-2 text-ink"
                    style={{
                      fontFamily: 'var(--font-cormorant), serif',
                      fontSize: 20,
                      fontWeight: 400,
                      lineHeight: 1.4,
                    }}
                  >
                    295 Rue Saint-Jacques
                    <br />
                    75005 Paris · V<sup>e</sup> arrondissement
                  </p>
                </div>

                <div className="border-t border-dashed border-rule pt-5">
                  <p className="text-[13px] leading-[1.65] text-ink-soft">
                    Réponse sous 48 heures. Aucun contact le dimanche ni les jours fériés —
                    nous nous y interdisons par déontologie.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={1}>
            <form
              onSubmit={handleSubmit}
              className="border-t border-ink pt-8"
              noValidate
            >
              <div className="mb-6 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
                Formulaire · Dossier no. à attribuer
              </div>

              <div className="grid grid-cols-1 gap-x-8 gap-y-6 kl:grid-cols-2">
                <div>
                  <label htmlFor="firstName" className={LABEL_CLASS}>
                    Prénom
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    required
                    autoComplete="given-name"
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className={LABEL_CLASS}>
                    Nom
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    required
                    autoComplete="family-name"
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="email" className={LABEL_CLASS}>
                    Courriel
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className={FIELD_CLASS}
                  />
                </div>
                <div>
                  <label htmlFor="phone" className={LABEL_CLASS}>
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    className={FIELD_CLASS}
                  />
                </div>
              </div>

              <div className="mt-6">
                <label htmlFor="message" className={LABEL_CLASS}>
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className={`${FIELD_CLASS} resize-none`}
                  placeholder="Si vous avez été contacté, indiquez le numéro de dossier transmis."
                />
              </div>

              <div className="mt-8 flex flex-col-reverse items-start gap-4 kl:flex-row kl:items-center kl:justify-between">
                <p className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink-muted">
                  RGPD · Données supprimées à la clôture
                </p>
                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="cursor-pointer border-none bg-accent px-7 py-[14px] text-[13px] uppercase tracking-[0.06em] text-cream transition-colors hover:bg-ink disabled:cursor-wait disabled:opacity-60"
                >
                  {status === 'sending' ? 'Envoi en cours…' : 'Envoyer le formulaire'}
                </button>
              </div>

              {status === 'sent' && (
                <p className="mt-6 border-t border-rule pt-4 text-[14px] italic text-ink-soft" style={{ fontFamily: 'var(--font-cormorant), serif' }}>
                  Merci. Votre message est arrivé. Un membre de l&apos;équipe vous répondra sous 48 heures.
                </p>
              )}
              {status === 'error' && (
                <p className="mt-6 border-t border-accent pt-4 text-[13px] text-accent">
                  {error || "Une erreur est survenue. Merci de réessayer ou de nous appeler directement."}
                </p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
