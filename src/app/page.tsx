import Link from 'next/link'
import CadastralMap from '@/components/CadastralMap'

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        background: 'linear-gradient(160deg, var(--forest-deep) 0%, var(--forest) 60%, var(--moss) 100%)',
        color: 'var(--cream)',
        padding: '100px 5% 80px',
        minHeight: '70vh',
        display: 'flex',
        alignItems: 'center',
      }}>
        <div style={{ maxWidth: 720 }}>
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 8,
            background: 'rgba(255,255,255,0.08)',
            border: '1px solid rgba(212,184,138,0.3)',
            borderRadius: 100,
            padding: '6px 16px',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.75rem',
            color: 'var(--wheat)',
            marginBottom: 32,
            letterSpacing: '0.05em',
          }}>
            <span style={{ width: 6, height: 6, background: '#4ade80', borderRadius: '50%', display: 'inline-block' }} />
            Přímý kupující · žádná realitka
          </div>

          <h1 style={{
            fontFamily: 'var(--font-fraunces)',
            fontWeight: 900,
            fontSize: 'clamp(2.4rem, 6vw, 4rem)',
            lineHeight: 1.1,
            marginBottom: 24,
            color: 'var(--cream)',
          }}>
            Koupíme váš<br />
            pozemek za <span style={{ color: 'var(--wheat)' }}>férovou cenu.</span><br />
            Hotovost do 48 h.
          </h1>

          <p style={{ fontSize: '1.1rem', lineHeight: 1.7, color: 'rgba(244,236,220,0.8)', marginBottom: 40, maxWidth: 580 }}>
            Přímý <strong style={{ color: 'var(--cream)' }}>výkup pozemků</strong> — pole, lesy, louky, sady i stavební parcely po celé republice. Ocenění do 30 minut zdarma, peníze na účtu rychle. Bez poplatků, bez realitky, bez výmluv.
          </p>

          <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
            <Link href="#nabidka" style={{
              background: 'var(--rust)',
              color: '#fff',
              padding: '14px 30px',
              borderRadius: 100,
              fontWeight: 700,
              fontSize: '1rem',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: 8,
            }}>
              Chci nezávaznou nabídku
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </Link>
            <Link href="tel:+420605135296" style={{
              border: '1.5px solid rgba(244,236,220,0.4)',
              color: 'var(--cream)',
              padding: '14px 30px',
              borderRadius: 100,
              fontWeight: 600,
              fontSize: '1rem',
              textDecoration: 'none',
            }}>
              📞 605 135 296
            </Link>
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 40, marginTop: 56, flexWrap: 'wrap' }}>
            {[
              ['30 min', 'Ocenění zdarma'],
              ['48 h', 'Výplata na účtu'],
              ['100%', 'Bez poplatků'],
            ].map(([num, label]) => (
              <div key={num}>
                <div style={{ fontFamily: 'var(--font-fraunces)', fontSize: '2rem', fontWeight: 900, color: 'var(--wheat)' }}>{num}</div>
                <div style={{ fontSize: '0.8rem', color: 'rgba(244,236,220,0.6)', fontFamily: 'var(--font-mono)', letterSpacing: '0.05em' }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CO KUPUJEME */}
      <section id="co-kupujeme" style={{ padding: '80px 5%', background: 'var(--bone)' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--rust)', textTransform: 'uppercase', marginBottom: 12 }}>Co od vás kupujeme</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--forest-deep)', marginBottom: 16 }}>
            Každý pozemek má u nás <span style={{ color: 'var(--rust)' }}>své místo.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', maxWidth: 600, margin: '0 auto', lineHeight: 1.7 }}>
            Specializujeme se na výkup zemědělských pozemků, lesů, luk i stavebních parcel jakéhokoli typu a velikosti v celé ČR.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {[
            {
              num: '01', title: 'Pole a orná půda',
              desc: 'Zemědělská půda všech bonit. Pronajatá i nepronajatá. Velké celky i malé parcely.',
              icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 36 Q12 30 20 32 Q28 34 36 30 Q42 28 44 30"/><path d="M4 40 Q12 34 20 36 Q28 38 36 34 Q42 32 44 34"/><path d="M4 44 Q12 38 20 40 Q28 42 36 38 Q42 36 44 38"/>
                  <line x1="14" y1="20" x2="14" y2="32"/><line x1="20" y1="14" x2="20" y2="33"/><line x1="26" y1="18" x2="26" y2="34"/><line x1="32" y1="12" x2="32" y2="32"/>
                </svg>
              ),
            },
            {
              num: '02', title: 'Lesy a lesní pozemky',
              desc: 'Jehličnaté, listnaté i smíšené. Porosty všech věkových tříd včetně kalamitních holin.',
              icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M24 4 L14 22 L19 22 L11 36 L17 36 L8 44 L40 44 L31 36 L37 36 L29 22 L34 22 Z"/>
                  <line x1="24" y1="44" x2="24" y2="38"/>
                </svg>
              ),
            },
            {
              num: '03', title: 'Louky a pastviny',
              desc: 'Trvalé travní porosty včetně pozemků v CHKO, Natura 2000 nebo záplavovém území.',
              icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M4 40 Q16 28 24 32 Q32 36 44 28"/><path d="M12 44 Q20 36 28 38 Q36 40 44 34"/>
                  <path d="M16 20 Q14 10 18 6 Q22 2 20 14"/><path d="M24 18 Q22 8 26 4 Q30 0 28 16"/>
                </svg>
              ),
            },
            {
              num: '04', title: 'Sady a vinice',
              desc: 'Ovocné sady, zahrady i vinohrady. Aktivní i zanedbaný porost — přebíráme vše.',
              icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="16" cy="20" r="8"/><circle cx="32" cy="20" r="8"/>
                  <line x1="16" y1="28" x2="16" y2="44"/><line x1="32" y1="28" x2="32" y2="44"/>
                  <line x1="8" y1="44" x2="40" y2="44"/>
                </svg>
              ),
            },
            {
              num: '05', title: 'Stavební parcely',
              desc: 'Pozemky určené k zástavbě v intravilánu i extravilánu, se sítěmi i bez nich.',
              icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <rect x="6" y="6" width="36" height="36" rx="2"/>
                  <line x1="6" y1="24" x2="42" y2="24"/><line x1="24" y1="6" x2="24" y2="42"/>
                </svg>
              ),
            },
            {
              num: '06', title: 'Spoluvlastnické podíly',
              desc: 'Ideální podíl na poli nebo lese? Nevadí — odkoupíme váš díl bez nutnosti souhlasu spoluvlastníků.',
              icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <circle cx="16" cy="16" r="8"/><circle cx="32" cy="32" r="8"/>
                  <line x1="22" y1="22" x2="26" y2="26"/>
                </svg>
              ),
            },
          ].map((card) => (
            <div key={card.num} style={{
              background: '#fff',
              border: '1.5px solid rgba(45,74,43,0.1)',
              borderRadius: 20,
              padding: '32px 28px',
              position: 'relative',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--sage)', marginBottom: 16 }}>{card.num}</div>
              <div style={{ color: 'var(--forest-deep)', marginBottom: 16 }}>{card.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--forest-deep)', marginBottom: 10 }}>{card.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* POSTUP */}
      <section id="postup" style={{ padding: '80px 5%', background: 'var(--forest-deep)', color: 'var(--cream)' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--wheat)', textTransform: 'uppercase', marginBottom: 12 }}>Jak prodej probíhá</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', marginBottom: 16 }}>
            Čtyři kroky. Žádné <span style={{ color: 'var(--wheat)' }}>papírování.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: 'rgba(244,236,220,0.7)', maxWidth: 560, margin: '0 auto', lineHeight: 1.7 }}>
            Celý proces bereme na sebe. Vy jen pošlete parcelní číslo nebo zavolejte. Zbytek vyřídíme za vás — od ocenění po peníze na účtu.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 24 }}>
          {[
            { num: 1, time: 'Den 0 · 5 minut', title: 'Pošlete parcelu', desc: 'Telefon, formulář nebo email. Stačí parcelní číslo nebo přibližná lokalita.' },
            { num: 2, time: 'Do 30 minut · zdarma', title: 'Bezplatné ocenění', desc: 'Zavoláme vám zpět s nezávaznou nabídkou do 30 minut. Žádné poplatky předem, žádné závazky.' },
            { num: 3, time: 'Den 1–7 · na místě dle dohody', title: 'Podpis smlouvy', desc: 'Domluvíme termín a místo. Smlouvu připravíme my. Vy jen podepíšete.' },
            { num: 4, time: 'Do 48 hodin · na váš účet', title: 'Peníze na účtu', desc: 'Po vkladu do katastru máte peníze na účtu do 48 hodin. Žádné čekání na hypotéku.' },
          ].map((step) => (
            <div key={step.num} style={{
              background: 'rgba(255,255,255,0.06)',
              border: '1px solid rgba(212,184,138,0.15)',
              borderRadius: 20,
              padding: '32px 28px',
            }}>
              <div style={{
                width: 48, height: 48,
                background: 'var(--rust)',
                borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 900, fontSize: '1.2rem',
                marginBottom: 16,
              }}>{step.num}</div>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.7rem', color: 'var(--wheat)', marginBottom: 8 }}>{step.time}</div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.1rem', marginBottom: 10 }}>{step.title}</h3>
              <p style={{ fontSize: '0.88rem', color: 'rgba(244,236,220,0.7)', lineHeight: 1.65 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROC MY */}
      <section id="proc-my" style={{ padding: '80px 5%', background: 'var(--bone)' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--rust)', textTransform: 'uppercase', marginBottom: 12 }}>Proč HEKTARIA</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--forest-deep)', marginBottom: 16 }}>
            Specialisté na výkup pozemků. <span style={{ color: 'var(--rust)' }}>Žádné výmluvy.</span>
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: 24 }}>
          {[
            { icon: '💰', title: 'Vlastní prostředky', desc: 'Nejsme zprostředkovatel. Kupujeme z vlastních zdrojů, takže nemusíte čekat na hypotéku nebo financování. Hotovost máte garantovaně.' },
            { icon: '⚡', title: 'Ocenění do 30 minut', desc: 'Voláme zpět do 30 minut. Bez čekání týdnů na znalecký posudek. Férová nabídka na základě aktuálních dat.' },
            { icon: '🗺️', title: 'Celá republika', desc: 'Vykupujeme pozemky po celé ČR — od Šumavy po Beskydy, od Krušnohoří po Bílé Karpaty. Dojezdnost není problém.' },
            { icon: '📋', title: 'Vše zařídíme za vás', desc: 'Smlouvu, katastrální přihlášky, geometrické plány — vše připravíme a zaplatíme mi. Vám zbyde jen podpis.' },
            { icon: '🤝', title: 'Bez skrytých poplatků', desc: 'Nabídnutá cena = přijatá částka. Žádné srážky za "zpracování", žádné provize, žádné cestovné.' },
            { icon: '⚖️', title: 'I komplikované případy', desc: 'Pozemky v exekuci, zástavní právo, neznámí spoluvlastníci, BPEJ — žádný případ není pro nás komplikovaný.' },
          ].map((card) => (
            <div key={card.title} style={{
              background: '#fff',
              border: '1.5px solid rgba(45,74,43,0.1)',
              borderRadius: 20,
              padding: '32px 28px',
            }}>
              <div style={{ fontSize: '2rem', marginBottom: 16 }}>{card.icon}</div>
              <h3 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1.15rem', color: 'var(--forest-deep)', marginBottom: 10 }}>{card.title}</h3>
              <p style={{ fontSize: '0.88rem', color: '#666', lineHeight: 1.65 }}>{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* NABÍDKA — mapa */}
      <section id="nabidka" style={{ padding: '80px 5%', background: 'var(--cream)' }}>
        <div style={{ textAlign: 'center', marginBottom: 48 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--rust)', textTransform: 'uppercase', marginBottom: 12 }}>Nezávazná poptávka</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--forest-deep)', marginBottom: 16 }}>
            Získejte cenu do <span style={{ color: 'var(--rust)' }}>30 minut.</span>
          </h2>
          <p style={{ fontSize: '1rem', color: '#666', maxWidth: 540, margin: '0 auto', lineHeight: 1.7 }}>
            Najděte váš pozemek na mapě, přidejte ho do výběru a pošlete nám poptávku. Zavoláme zpět do 30 minut.
          </p>
        </div>

        <CadastralMap />
      </section>

      {/* FAQ */}
      <section id="faq" style={{ padding: '80px 5%', background: 'var(--bone)' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', letterSpacing: '0.2em', color: 'var(--rust)', textTransform: 'uppercase', marginBottom: 12 }}>Časté dotazy</div>
          <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(2rem, 4vw, 2.8rem)', color: 'var(--forest-deep)' }}>
            Odpovědi na vaše <span style={{ color: 'var(--rust)' }}>otázky.</span>
          </h2>
        </div>

        <div style={{ maxWidth: 760, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 16 }}>
          {[
            { q: 'Jak rychle dostanu peníze za prodej pozemku?', a: 'Po podpisu smlouvy a vkladu do katastru máte peníze na účtu do 48 hodin. U standardních případů bývá celý proces hotový do 2–3 týdnů.' },
            { q: 'Jak dlouho trvá ocenění pozemku?', a: 'Ocenění pozemku a zpracování nezávazné nabídky zvládneme do 30 minut od vašeho prvního kontaktu. Stačí nám parcelní číslo nebo přibližná poloha.' },
            { q: 'Kolik stojí ocenění a prodej pozemku přes HEKTARIA?', a: 'Ocenění pozemku ani zpracování nabídky vás nic nestojí. Neúčtujeme provize, zprostředkovatelské poplatky ani cestovné — veškeré náklady jdou za námi.' },
            { q: 'Vykupujete pozemky s exekucí nebo zástavním právem?', a: 'Ano, i takové případy řešíme. Zástavní právo nebo exekuci vyřešíme z kupní ceny — vy dostanete zbytek. Kontaktujte nás a probereme váš konkrétní případ.' },
            { q: 'Vykupujete pozemky po celé České republice?', a: 'Ano, působíme po celé ČR — od pohraničních oblastí po střed republiky. Dojezdnost ani vzdálenost není překážkou.' },
          ].map((item) => (
            <details key={item.q} style={{
              background: '#fff',
              border: '1.5px solid rgba(45,74,43,0.1)',
              borderRadius: 16,
              padding: '20px 24px',
              cursor: 'pointer',
            }}>
              <summary style={{
                fontFamily: 'var(--font-fraunces)',
                fontWeight: 700,
                fontSize: '1.05rem',
                color: 'var(--forest-deep)',
                listStyle: 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                {item.q}
                <span style={{ color: 'var(--rust)', fontSize: '1.4rem', lineHeight: 1 }}>+</span>
              </summary>
              <p style={{ marginTop: 12, fontSize: '0.9rem', color: '#555', lineHeight: 1.7 }}>{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--rust)', color: '#fff', padding: '60px 5%', textAlign: 'center' }}>
        <h2 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 'clamp(1.8rem, 4vw, 2.6rem)', marginBottom: 16 }}>
          Prodáváte pozemek? Zavolejte hned.
        </h2>
        <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: 32 }}>Ocenění zdarma do 30 minut. Žádné závazky.</p>
        <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="tel:+420605135296" style={{
            background: '#fff',
            color: 'var(--rust)',
            padding: '14px 32px',
            borderRadius: 100,
            fontWeight: 700,
            fontSize: '1rem',
            textDecoration: 'none',
          }}>
            📞 605 135 296
          </Link>
          <Link href="#nabidka" style={{
            border: '2px solid rgba(255,255,255,0.6)',
            color: '#fff',
            padding: '14px 32px',
            borderRadius: 100,
            fontWeight: 600,
            fontSize: '1rem',
            textDecoration: 'none',
          }}>
            Vyplnit formulář
          </Link>
        </div>
      </section>

      {/* Mobile sticky CTA */}
      <style>{`
        @media (max-width: 768px) {
          #mobile-cta { display: flex !important; }
        }
        details[open] summary span { transform: rotate(45deg); display: inline-block; }
      `}</style>
      <Link href="tel:+420605135296" id="mobile-cta" style={{
        display: 'none',
        position: 'fixed',
        bottom: 20,
        left: '50%',
        transform: 'translateX(-50%)',
        background: 'var(--forest-deep)',
        color: 'var(--cream)',
        padding: '14px 28px',
        borderRadius: 100,
        fontWeight: 700,
        fontSize: '1rem',
        textDecoration: 'none',
        zIndex: 1000,
        boxShadow: '0 8px 32px rgba(0,0,0,0.25)',
        whiteSpace: 'nowrap',
        alignItems: 'center',
        gap: 8,
      }}>
        📞 Zavolat · 605 135 296
      </Link>
    </>
  )
}
