import type { Metadata } from 'next'
import { Inter, Fraunces, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin', 'latin-ext'], variable: '--font-inter' })
const fraunces = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', axes: ['opsz'] })
const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono' })

export const metadata: Metadata = {
  title: 'Výkup pozemků | Ocenění do 30 min, rychlá výplata — HEKTARIA',
  description: 'Vykupujeme pole, les, louku i stavební parcelu po celé ČR. Ocenění zdarma do 30 minut, rychlá výplata na účtu. Bez poplatků. Zavolejte: 605 135 296.',
  metadataBase: new URL('https://hektaria.cz'),
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'cs_CZ',
    url: 'https://hektaria.cz',
    siteName: 'HEKTARIA',
    title: 'Výkup pozemků — ocenění do 30 minut, rychlá výplata | HEKTARIA',
    description: 'Přímý výkup zemědělských pozemků, lesů a parcel po celé ČR. Ocenění do 30 minut, hotovost do 48 hodin.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'HEKTARIA — výkup pozemků' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Výkup pozemků — ocenění do 30 minut | HEKTARIA',
    description: 'Přímý výkup zemědělských pozemků, lesů a parcel po celé ČR.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="cs">
      <body className={`${inter.variable} ${fraunces.variable} ${jetbrainsMono.variable}`}>
        <Nav />
        <main id="main-content">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
