import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { Cormorant_Garamond, Inter, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'optional',
})

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  title: {
    default: "Klero Généalogie — L'Archive",
    template: '%s | Klero Généalogie',
  },
  description:
    "Depuis quarante ans, Klero retrouve les successions oubliées des familles françaises — avec la rigueur du notariat, la patience de l'archiviste.",
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    siteName: 'Klero Généalogie',
    title: "Klero Généalogie — L'Archive",
    description:
      "Généalogie successorale française. Un héritage vous attend.",
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="fr"
      className={`${cormorant.variable} ${inter.variable} ${jetbrains.variable} antialiased`}
    >
      <body className="font-sans bg-paper text-ink">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
