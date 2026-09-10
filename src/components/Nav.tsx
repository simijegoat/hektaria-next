'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Nav() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div style={{
        background: 'var(--forest-deep)',
        color: 'var(--cream)',
        padding: '10px 20px',
        textAlign: 'center',
        fontSize: 13,
        letterSpacing: '0.05em',
        fontFamily: 'var(--font-mono)',
      }}>
        <span style={{
          display: 'inline-block',
          width: 8, height: 8,
          background: '#4ade80',
          borderRadius: '50%',
          marginRight: 8,
          animation: 'pulse 2s infinite',
          verticalAlign: 'middle',
        }} />
        Právě zpracováváme poptávky &mdash; <strong style={{ color: 'var(--wheat)' }}>odpovídáme do 30 minut</strong>
      </div>

      <nav style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        background: 'rgba(250,246,237,0.92)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(45,74,43,0.1)',
        padding: '18px 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: 14, textDecoration: 'none' }}>
          <div>
            <div style={{ fontFamily: 'var(--font-fraunces)', fontWeight: 900, fontSize: 26, color: 'var(--forest-deep)', lineHeight: 1 }}>Hektaria</div>
            <div style={{ fontFamily: 'var(--font-mono)', fontSize: 8, letterSpacing: '0.3em', color: 'var(--moss)', textTransform: 'uppercase' }}>Výkup pozemků</div>
          </div>
          <svg width="46" height="38" viewBox="0 0 46 38" xmlns="http://www.w3.org/2000/svg" fill="none" aria-hidden="true">
            <path d="M 18.5 4 Q 16.5 8 16.5 14 L 16.5 22 Q 16.5 24 18.5 24 Q 20.5 24 20.5 22 L 20.5 14 Q 20.5 8 18.5 4 Z" fill="#1a2e1a"/>
            <path d="M 27.5 1 Q 25.5 5 25.5 12 L 25.5 22 Q 25.5 24 27.5 24 Q 29.5 24 29.5 22 L 29.5 12 Q 29.5 5 27.5 1 Z" fill="#1a2e1a"/>
            <path d="M 2 30 Q 14 22 23 24 Q 32 26 44 30" stroke="#b8542a" strokeWidth="2.2" strokeLinecap="round"/>
            <path d="M 4 33.5 Q 15 27 23 28 Q 31 29 42 33.5" stroke="#b8542a" strokeWidth="1.8" strokeLinecap="round" opacity="0.85"/>
            <path d="M 6 37 Q 16 32 23 32.5 Q 30 33 40 37" stroke="#b8542a" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
          </svg>
        </Link>

        <ul style={{ display: 'flex', gap: 28, listStyle: 'none', margin: 0, padding: 0 }} className="nav-links-desktop">
          {[
            ['#co-kupujeme', 'Co kupujeme'],
            ['#postup', 'Postup'],
            ['#proc-my', 'Proč my'],
            ['#nabidka', 'Ocenění'],
            ['/o-nas', 'O nás'],
            ['/blog', 'Blog'],
            ['/kontakt', 'Kontakt'],
          ].map(([href, label]) => (
            <li key={href}>
              <Link href={href} style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 500,
                fontSize: '0.88rem',
                color: 'var(--forest-deep)',
                textDecoration: 'none',
                letterSpacing: '0.01em',
              }}>
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="#nabidka" style={{
          background: 'var(--forest-deep)',
          color: 'var(--cream)',
          padding: '10px 22px',
          borderRadius: 100,
          fontWeight: 700,
          fontSize: '0.88rem',
          textDecoration: 'none',
          display: 'inline-flex',
          alignItems: 'center',
          gap: 8,
        }}>
          Chci nabídku
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
        </Link>
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .nav-links-desktop { display: none !important; }
        }
      `}</style>
    </>
  )
}
