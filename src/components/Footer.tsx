import Link from 'next/link'

export default function Footer() {
  return (
    <footer style={{ background: 'var(--forest-deep)', color: 'var(--cream)', padding: '60px 5% 40px' }}>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
        gap: 40,
        marginBottom: 48,
      }}>
        {/* Brand */}
        <div>
          <div style={{ marginBottom: 18 }}>
            <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 24, color: 'var(--cream)' }}>Hektaria</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.3em', color: 'var(--wheat)', textTransform: 'uppercase' }}>Výkup pozemků</div>
          </div>
          <p style={{ fontSize: '0.88rem', color: 'var(--sage)', lineHeight: 1.7, marginBottom: 16 }}>
            Specialisté na výkup pozemků po celé republice. Vykupujeme pole, lesy, louky, sady i stavební parcely. Rychlá výplata na účtu.
          </p>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.8 }}>
            📞 605 135 296<br />
            ✉ vykuphektaria@gmail.com
          </p>
        </div>

        {/* Kupujeme */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1rem', color: 'var(--wheat)', marginBottom: 16, letterSpacing: '0.05em' }}>Kupujeme</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/#co-kupujeme', 'Výkup polí'],
              ['/#co-kupujeme', 'Výkup lesů'],
              ['/#co-kupujeme', 'Výkup luk'],
              ['/#co-kupujeme', 'Výkup sadů'],
              ['/#co-kupujeme', 'Stavební parcely'],
              ['/#co-kupujeme', 'Spoluvlastnické podíly'],
            ].map(([href, label]) => (
              <li key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ color: 'var(--sage)', textDecoration: 'none', fontSize: '0.88rem' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Společnost */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1rem', color: 'var(--wheat)', marginBottom: 16, letterSpacing: '0.05em' }}>Společnost</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/o-nas', 'O nás'],
              ['/#postup', 'Jak prodej probíhá'],
              ['/#faq', 'Časté dotazy'],
              ['/blog', 'Blog a články'],
              ['/kontakt', 'Kontakt'],
            ].map(([href, label]) => (
              <li key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ color: 'var(--sage)', textDecoration: 'none', fontSize: '0.88rem' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Právo */}
        <div>
          <h4 style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 700, fontSize: '1rem', color: 'var(--wheat)', marginBottom: 16, letterSpacing: '0.05em' }}>Právo</h4>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {[
              ['/ochrana-osobnich-udaju', 'Ochrana osobních údajů'],
              ['/cookies', 'Cookies'],
              ['/obchodni-podminky', 'Obchodní podmínky'],
              ['/ochrana-osobnich-udaju', 'GDPR'],
            ].map(([href, label]) => (
              <li key={label} style={{ marginBottom: 10 }}>
                <Link href={href} style={{ color: 'var(--sage)', textDecoration: 'none', fontSize: '0.88rem' }}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div style={{
        borderTop: '1px solid rgba(255,255,255,0.08)',
        paddingTop: 24,
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 12,
        fontSize: '0.8rem',
        color: 'var(--sage)',
      }}>
        <div>© 2026 HEKTARIA s.r.o.</div>
        <div>Česká republika 🌿</div>
      </div>
    </footer>
  )
}
