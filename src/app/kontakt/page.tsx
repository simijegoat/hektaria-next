import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kontakt | HEKTARIA — výkup pozemků',
  description: 'Kontaktujte nás — odpovídáme do 30 minut. Telefon: 605 135 296. E-mail: vykuphektaria@gmail.com.',
  alternates: { canonical: '/kontakt' },
}

export default function Kontakt() {
  return (
    <>
      <section style={{
        background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 100%)',
        color: 'var(--cream)',
        padding: '80px 5% 70px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--wheat)', textTransform: 'uppercase', marginBottom: 16 }}>Kontakt</div>
        <h1 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2.4rem, 5vw, 3.5rem)', marginBottom: 20 }}>
          Jsme tady pro vás
        </h1>
        <p style={{ fontSize: '1.05rem', color: 'rgba(244,236,220,0.8)', maxWidth: 480, margin: '0 auto' }}>
          Odpovídáme v pracovní dny zpravidla do 30 minut. Volejte nebo napište — rádi poradíme.
        </p>
      </section>

      <section style={{ padding: '72px 5%', background: 'var(--bone)' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 40 }}>

          {/* Kontaktní info */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 28 }}>
            {[
              {
                icon: '📞',
                title: 'Telefon',
                main: '+420 605 135 296',
                href: 'tel:+420605135296',
                note: '🟢 Po–Pá 7:00–20:00',
              },
              {
                icon: '✉️',
                title: 'E-mail',
                main: 'vykuphektaria@gmail.com',
                href: 'mailto:vykuphektaria@gmail.com',
                note: 'Odpovídáme do 30 minut v pracovní době',
              },
              {
                icon: '📍',
                title: 'Sídlo',
                main: 'Česká republika',
                href: null,
                note: 'Působíme po celé ČR, dojezdnost není problém',
              },
            ].map((item) => (
              <div key={item.title} style={{
                background: '#fff',
                border: '1.5px solid rgba(45,74,43,0.1)',
                borderRadius: 18,
                padding: '24px 24px',
                display: 'flex',
                gap: 18,
                alignItems: 'flex-start',
              }}>
                <div style={{ fontSize: '1.8rem', lineHeight: 1 }}>{item.icon}</div>
                <div>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--sage)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 6 }}>{item.title}</div>
                  {item.href ? (
                    <a href={item.href} style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--forest-deep)', textDecoration: 'none' }}>{item.main}</a>
                  ) : (
                    <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--forest-deep)' }}>{item.main}</div>
                  )}
                  <div style={{ fontSize: '0.8rem', color: '#888', marginTop: 4 }}>{item.note}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Rychlý formulář */}
          <div style={{
            background: '#fff',
            border: '1.5px solid rgba(45,74,43,0.1)',
            borderRadius: 20,
            padding: '36px 32px',
          }}>
            <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.4rem', color: 'var(--forest-deep)', marginBottom: 8 }}>Napište nám</h2>
            <p style={{ fontSize: '0.88rem', color: '#777', marginBottom: 24 }}>Odpoví osobně do 30 minut.</p>

            <form action="https://formspree.io/f/mrevzgzn" method="POST" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              <input type="hidden" name="_subject" value="Zpráva přes kontaktní formulář — Hektaria" />
              <input type="text" name="_gotcha" style={{ display: 'none' }} />

              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>Jméno *</label>
                <input type="text" name="jmeno" required placeholder="Jan Novák" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>Telefon *</label>
                <input type="tel" name="telefon" required placeholder="+420 xxx xxx xxx" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>E-mail</label>
                <input type="email" name="email" placeholder="vas@email.cz" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>Zpráva *</label>
                <textarea name="zprava" rows={4} required placeholder="Popište váš pozemek nebo dotaz…" style={{ ...inputStyle, resize: 'vertical' }} />
              </div>
              <button type="submit" style={{
                background: 'var(--forest-deep)', color: 'var(--cream)',
                border: 'none', padding: '13px 24px',
                borderRadius: 100, fontWeight: 700, fontSize: '0.95rem',
                cursor: 'pointer',
              }}>
                Odeslat zprávu →
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '11px 14px',
  border: '1.5px solid rgba(45,74,43,0.2)',
  borderRadius: 10, fontFamily: 'var(--font-inter)',
  fontSize: '0.9rem', color: 'var(--forest-deep)',
  background: 'var(--bone)', outline: 'none',
}
