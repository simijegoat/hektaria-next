import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Výkup zemědělské půdy: Jak prodat pozemek rychle a za férovou cenu | HEKTARIA',
  description: 'Kompletní průvodce výkupem zemědělské půdy: jak stanovit cenu, co jsou BPEJ, předkupní právo nájemce, daňové povinnosti a jak bezpečně prodat pozemek.',
  alternates: { canonical: '/blog/vykup-zemedelske-pudy' },
}

export default function VykupZemedelskePudy() {
  return (
    <article style={{ background: 'var(--bone)' }}>
      {/* Article hero */}
      <div style={{
        background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 100%)',
        color: 'var(--cream)',
        padding: '70px 5% 60px',
      }}>
        <div style={{ maxWidth: 760, margin: '0 auto' }}>
          <Link href="/blog" style={{ color: 'var(--wheat)', textDecoration: 'none', fontSize: '0.85rem', fontFamily: 'var(--font-mono)' }}>← Blog</Link>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--wheat)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '16px 0 12px' }}>Průvodce · 8 minut čtení</div>
          <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2rem, 5vw, 3rem)', lineHeight: 1.15, marginBottom: 20 }}>
            Výkup zemědělské půdy: Jak prodat pozemek rychle, bezpečně a za férovou cenu
          </h1>
          <div style={{ display: 'flex', gap: 20, fontSize: '0.82rem', color: 'rgba(244,236,220,0.6)', fontFamily: 'var(--font-mono)' }}>
            <span>Červen 2026</span>
            <span>Tým Hektaria</span>
          </div>
        </div>
      </div>

      {/* Article content */}
      <div style={{ maxWidth: 760, margin: '0 auto', padding: '56px 5%' }}>
        <div style={{ fontSize: '1.05rem', lineHeight: 1.85, color: '#333' }}>

          <p>Vlastníte zemědělský pozemek a uvažujete o prodeji? Možná jste zdědili pole, které nevyužijete, nebo chcete zpeněžit investici do půdy. Výkup zemědělské půdy má svá specifika — od stanovení správné ceny přes předkupní právo nájemce až po daňové povinnosti.</p>

          <p style={{ marginTop: 20 }}>Tento průvodce vás provede celým procesem, abyste dostali co nejlepší cenu a celý převod proběhl hladce a bezpečně.</p>

          <div style={{
            background: 'rgba(45,74,43,0.07)',
            border: '1.5px solid rgba(45,74,43,0.2)',
            borderRadius: 14, padding: '20px 24px',
            margin: '32px 0', fontSize: '0.95rem',
          }}>
            <strong style={{ color: 'var(--forest-deep)' }}>Klíčové informace:</strong><br />
            Průměrná cena zemědělské půdy v ČR se pohybuje mezi 8 000 a 35 000 Kč/ha v závislosti na bonitě, poloze a kraji. Prodej může proběhnout do 30 dní od první poptávky, pokud vše funguje bez překážek.
          </div>

          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--forest-deep)', margin: '40px 0 16px' }}>
            Jak zjistit, kolik váš pozemek stojí?
          </h2>
          <p>Cena zemědělské půdy závisí na několika faktorech, které se mohou dramaticky lišit region od regionu:</p>
          <ul style={{ margin: '16px 0 16px 24px', lineHeight: 2 }}>
            <li><strong>Bonita půdy (BPEJ)</strong> — Bonitovaná ekologicky významná jednotka vyjadřuje kvalitu půdy. Výborná orná půda v jižní Moravě nebo na Hané může dosahovat trojnásobku průměru.</li>
            <li><strong>Lokalita a přístup</strong> — Parcela s příjezdovou cestou a dobrou infrastrukturou je vždy cennější.</li>
            <li><strong>Nájemní vztah</strong> — Pozemek s dlouhodobým nájemcem (typicky zemědělský podnik) může mít nižší tržní cenu, ale garantuje stabilní příjem.</li>
            <li><strong>Rozloha a tvar</strong> — Velké, pravidelné celky jsou likvidnější než malé nebo nepravidelné parcely.</li>
          </ul>

          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--forest-deep)', margin: '40px 0 16px' }}>
            Předkupní právo nájemce — co to znamená?
          </h2>
          <p>Pokud je váš pozemek pronajat, má nájemce ze zákona předkupní právo. To znamená, že mu musíte nabídnout pozemek za stejných podmínek, za jakých ho prodáváte třetí straně. Nájemce má typicky 30 dnů na rozhodnutí.</p>
          <p style={{ marginTop: 16 }}>Pokud předkupní právo nájemce ignorujete, může nájemce žádat soud o neplatnost převodu. Proto je správný postup klíčový — a my se o něj postaráme za vás.</p>

          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--forest-deep)', margin: '40px 0 16px' }}>
            Jak probíhá prodej přes HEKTARIA?
          </h2>
          <ol style={{ margin: '16px 0 16px 24px', lineHeight: 2.2 }}>
            <li>Pošlete nám parcelní číslo nebo zavolejte na 605 135 296</li>
            <li>Do 30 minut vám zavoláme zpět s nezávaznou nabídkou</li>
            <li>Domluvíme podmínky a připravíme kupní smlouvu</li>
            <li>Podáme návrh na vklad do katastru nemovitostí</li>
            <li>Do 48 hodin po vkladu máte peníze na účtu</li>
          </ol>

          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.6rem', color: 'var(--forest-deep)', margin: '40px 0 16px' }}>
            Daňové povinnosti při prodeji zemědělské půdy
          </h2>
          <p>Příjem z prodeje pozemku je obecně předmětem daně z příjmů fyzických osob. Existují však výjimky — například pokud jste pozemek vlastnili déle než 5 let (u pozemků nabytých jinak než darováním nebo dědictvím). Vždy doporučujeme konzultovat konkrétní případ s daňovým poradcem.</p>

          <div style={{
            background: 'var(--rust)',
            color: '#fff',
            borderRadius: 16, padding: '28px 28px',
            margin: '48px 0 0',
            textAlign: 'center',
          }}>
            <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.4rem', marginBottom: 10 }}>
              Chcete zjistit cenu svého pozemku?
            </h3>
            <p style={{ opacity: 0.9, marginBottom: 20 }}>Ocenění zdarma do 30 minut, bez závazků.</p>
            <Link href="/#nabidka" style={{
              background: '#fff', color: 'var(--rust)',
              padding: '12px 28px', borderRadius: 100,
              fontWeight: 700, textDecoration: 'none', fontSize: '0.95rem',
            }}>
              Získat nabídku zdarma →
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}
