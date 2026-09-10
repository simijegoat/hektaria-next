import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Blog | Rady k prodeji pozemků — HEKTARIA',
  description: 'Vše, co potřebujete vědět o výkupu zemědělské půdy, lesů a stavebních parcel. Bez zbytečného žargonu.',
  alternates: { canonical: '/blog' },
}

const articles = [
  {
    slug: 'vykup-zemedelske-pudy',
    tag: 'Průvodce · 8 minut čtení',
    title: 'Výkup zemědělské půdy: Jak prodat pozemek rychle, bezpečně a za férovou cenu',
    excerpt: 'Prodej zemědělské půdy nemusí být složitý. Přinášíme kompletní průvodce: jak postupovat, co zjistit předem, jak poznat férovost nabídky a čeho se vyvarovat.',
    date: '2026-06-01',
    featured: true,
  },
]

export default function Blog() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 100%)',
        color: 'var(--cream)',
        padding: '80px 5% 70px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--wheat)', textTransform: 'uppercase', marginBottom: 16 }}>Blog</div>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: 20 }}>
          Rady k prodeji pozemků
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(244,236,220,0.8)', maxWidth: 520, margin: '0 auto' }}>
          Vše, co potřebujete vědět o výkupu zemědělské půdy, lesů a stavebních parcel. Bez zbytečného žargonu.
        </p>
      </section>

      <section style={{ padding: '72px 5%', background: 'var(--bone)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gap: 28 }}>
          {articles.map((art) => (
            <Link key={art.slug} href={`/blog/${art.slug}`} style={{ textDecoration: 'none' }}>
              <div style={{
                background: '#fff',
                border: '1.5px solid rgba(45,74,43,0.1)',
                borderRadius: 20,
                padding: '36px 32px',
                transition: 'box-shadow 0.2s',
              }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--rust)', marginBottom: 12, letterSpacing: '0.05em' }}>{art.tag}</div>
                <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--forest-deep)', marginBottom: 12, lineHeight: 1.3 }}>{art.title}</h2>
                <p style={{ fontSize: '0.9rem', color: '#666', lineHeight: 1.7, marginBottom: 20 }}>{art.excerpt}</p>
                <span style={{
                  display: 'inline-flex', alignItems: 'center', gap: 6,
                  color: 'var(--rust)', fontWeight: 600, fontSize: '0.88rem',
                }}>
                  Číst článek
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </span>
              </div>
            </Link>
          ))}

          {/* Placeholder for future articles */}
          <div style={{
            background: 'rgba(45,74,43,0.04)',
            border: '1.5px dashed rgba(45,74,43,0.2)',
            borderRadius: 20, padding: '36px 32px',
            textAlign: 'center', color: '#aaa',
          }}>
            <div style={{ fontSize: '2rem', marginBottom: 12 }}>✍️</div>
            <p style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1rem' }}>Další články připravujeme…</p>
          </div>
        </div>
      </section>
    </>
  )
}
