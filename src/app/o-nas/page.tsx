import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'O nás | Hektaria — výkup pozemků po celé ČR',
  description: 'Jsme česká společnost specializovaná na přímý výkup zemědělské půdy, lesů a pozemků po celé ČR. Poznejte tým Hektaria a náš přístup k férovému obchodu.',
  alternates: { canonical: '/o-nas' },
}

export default function ONas() {
  return (
    <>
      {/* Page hero */}
      <section style={{
        background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 100%)',
        color: 'var(--cream)',
        padding: '80px 5% 70px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--wheat)', textTransform: 'uppercase', marginBottom: 16 }}>O společnosti</div>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: 20, lineHeight: 1.1 }}>
          Výkup pozemků<br />s lidským přístupem
        </h1>
        <p style={{ fontSize: '1.1rem', color: 'rgba(244,236,220,0.8)', maxWidth: 560, margin: '0 auto' }}>
          Jsme česká firma, která věří, že prodej pozemku má být jednoduchý, transparentní a férový pro obě strany.
        </p>
      </section>

      {/* Kdo jsme */}
      <section style={{ padding: '72px 5%', background: 'var(--bone)' }}>
        <div style={{ maxWidth: 800, margin: '0 auto' }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--rust)', textTransform: 'uppercase', marginBottom: 16 }}>Kdo jsme</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--forest-deep)', marginBottom: 24 }}>
            Specialisté na pozemky,<br />ne generalisté na vše
          </h2>
          <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: '#444', marginBottom: 48 }}>
            Hektaria se od roku 2022 specializuje výhradně na přímý výkup zemědělské půdy, lesů a pozemků po celé republice. Nezabýváme se ničím jiným — díky tomu rozumíme trhu lépe než kdokoliv jiný a dokážeme nabídnout cenu, která odpovídá skutečné hodnotě vašeho pozemku.
          </p>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            {[
              ['2+', 'roky na trhu'],
              ['150+', 'spokojených prodejců'],
              ['30 min', 'ocenění zdarma'],
            ].map(([num, lbl]) => (
              <div key={num}>
                <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: '2.5rem', color: 'var(--rust)' }}>{num}</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: 'var(--moss)', letterSpacing: '0.05em' }}>{lbl}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Naše hodnoty */}
      <section style={{ padding: '72px 5%', background: '#fff' }}>
        <div style={{ textAlign: 'center', marginBottom: 52 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--rust)', textTransform: 'uppercase', marginBottom: 12 }}>Naše hodnoty</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', color: 'var(--forest-deep)' }}>
            Proč si vlastníci volí nás?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24, maxWidth: 1000, margin: '0 auto' }}>
          {[
            { icon: '⚡', title: 'Rychlost', desc: 'Ocenění do 30 minut od poptávky. Celý obchod od kontaktu po výplatu zvládáme zpravidla do 2–3 týdnů.' },
            { icon: '🤝', title: 'Férovost', desc: 'Nabízíme aktuální tržní cenu — ne zlomek hodnoty. Žádné skryté poplatky, žádné provize. Mluvíme na rovinu.' },
            { icon: '📋', title: 'Jednoduchost', desc: 'Veškeré papíry bereme na sebe. Vy nemusíte na úřad. Stačí podpis a pár dní trpělivosti.' },
            { icon: '🗺️', title: 'Celá ČR', desc: 'Působíme ve všech 14 krajích. Většinu případů řešíme korespondenčně bez nutnosti osobní schůzky.' },
            { icon: '✅', title: 'Bez podmínek', desc: 'Pronajatý pozemek, exekuce, spoluvlastnický podíl — nevybíráme si jen jednoduché případy. Zvládneme i to složité.' },
            { icon: '💰', title: 'Jistota výplaty', desc: 'Kupní cenu obdržíte na bankovní účet okamžitě po podpisu. Žádné čekání na kupce z inzerátu.' },
          ].map((card) => (
            <div key={card.title} style={{
              background: 'var(--bone)',
              border: '1.5px solid rgba(45,74,43,0.1)',
              borderRadius: 20,
              padding: '28px 24px',
            }}>
              <div style={{ fontSize: '1.8rem', marginBottom: 12 }}>{card.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.1rem', color: 'var(--forest-deep)', marginBottom: 8 }}>{card.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#555', lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: 'var(--rust)', color: '#fff', padding: '60px 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.4rem)', marginBottom: 16 }}>
          Chcete zjistit, kolik váš pozemek stojí?
        </h2>
        <p style={{ opacity: 0.9, marginBottom: 32 }}>Ocenění je zdarma, nezávazné a do 30 minut.</p>
        <Link href="/#nabidka" style={{
          background: '#fff', color: 'var(--rust)',
          padding: '14px 32px', borderRadius: 100,
          fontWeight: 700, fontSize: '1rem', textDecoration: 'none',
          display: 'inline-flex', alignItems: 'center', gap: 8,
        }}>
          Získat nabídku zdarma
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </section>
    </>
  )
}
