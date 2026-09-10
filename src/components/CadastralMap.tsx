'use client'

import { useEffect, useRef, useState } from 'react'

interface Parcel {
  cislo: string
  ku: string
  vymera: number
  druh: string
}

interface BasketItem extends Parcel {
  layerId: number
}

const DRUHY: Record<number, string> = {
  2: 'Orná půda', 3: 'Chmelnice', 4: 'Vinice', 5: 'Zahrada',
  6: 'Ovocný sad', 7: 'Trvalý travní porost', 8: 'Trvalý travní porost',
  10: 'Lesní pozemek', 11: 'Vodní plocha',
  13: 'Zastavěná plocha a nádvoří', 14: 'Ostatní plocha',
}

export default function CadastralMap() {
  const mapRef = useRef<HTMLDivElement>(null)
  const mapInstance = useRef<any>(null)
  const highlightRef = useRef<any>(null)
  const markerRef = useRef<any>(null)
  const basketLayers = useRef<Map<number, any>>(new Map())
  const layerIdRef = useRef(0)

  const [selected, setSelected] = useState<Parcel | null>(null)
  const [basket, setBasket] = useState<BasketItem[]>([])
  const [loading, setLoading] = useState(false)
  const [hint, setHint] = useState('Klikněte na váš pozemek')
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (mapInstance.current || !mapRef.current) return
    import('leaflet').then((L) => {
      const map = L.map(mapRef.current!, { zoomControl: true }).setView([49.8, 15.5], 7)
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '© OpenStreetMap',
        maxZoom: 20,
      }).addTo(map)
      ;(L.tileLayer as any).wms('https://services.cuzk.cz/wms/wms.asp', {
        layers: 'KN', format: 'image/png', transparent: true, opacity: 0.55, maxZoom: 20,
      }).addTo(map)

      map.on('click', async (e: any) => {
        const { lat, lng } = e.latlng
        setLoading(true)
        setHint('')
        try {
          const r = await fetch(
            `https://ags.cuzk.cz/arcgis/rest/services/RUIAN/MapServer/5/query?geometry=${lng},${lat}&geometryType=esriGeometryPoint&inSR=4326&spatialRel=esriSpatialRelIntersects&outFields=*&returnGeometry=true&outSR=4326&f=json`
          )
          const d = await r.json()
          if (!d.features?.length) { setHint('Parcela nenalezena. Klikněte přesněji.'); setLoading(false); return }

          const a = d.features[0].attributes
          const kuKod = a.katastralniuzemi
          const kr = await fetch(`https://ags.cuzk.cz/arcgis/rest/services/RUIAN/MapServer/7/query?where=kod%3D${kuKod}&outFields=nazev&f=json`)
          const kd = await kr.json()
          const kuNazev = kd.features?.[0]?.attributes?.nazev || String(kuKod)

          const parcel: Parcel = {
            cislo: a.cisloparcely,
            ku: kuNazev,
            vymera: Math.round(a.vymeraparcely || 0),
            druh: DRUHY[a.druhpozemkukod] || (a.druhpozemkukod ? `Kód ${a.druhpozemkukod}` : 'Neuvedeno'),
          }
          setSelected(parcel)

          if (markerRef.current) map.removeLayer(markerRef.current)
          markerRef.current = (L.circleMarker as any)([lat, lng], {
            radius: 7, fillColor: '#b8542a', color: '#fff', weight: 2, fillOpacity: 1,
          }).addTo(map)

          if (highlightRef.current) map.removeLayer(highlightRef.current)
          if (d.features[0].geometry?.rings) {
            const rings = d.features[0].geometry.rings
            const latlngs = rings.map((rg: number[][]) => rg.map((pt) => [pt[1], pt[0]]))
            highlightRef.current = L.polygon(latlngs, {
              color: '#b8542a', weight: 3, fillColor: '#d4b88a', fillOpacity: 0.35,
            }).addTo(map)
            map.fitBounds(highlightRef.current.getBounds(), { padding: [20, 20], maxZoom: 18 })
          }
          setHint('Přidejte do výběru nebo klikněte na jiný pozemek')
        } catch {
          setHint('Chyba — zkuste znovu.')
        }
        setLoading(false)
      })

      mapInstance.current = map
    })

    return () => {
      if (mapInstance.current) {
        mapInstance.current.remove()
        mapInstance.current = null
      }
    }
  }, [])

  const addToBasket = () => {
    if (!selected) return
    const map = mapInstance.current
    if (basket.some((p) => p.cislo === selected.cislo && p.ku === selected.ku)) return
    const id = ++layerIdRef.current
    if (highlightRef.current && map) {
      basketLayers.current.set(id, highlightRef.current)
      highlightRef.current = null
    }
    setBasket((prev) => [...prev, { ...selected, layerId: id }])
    setSelected(null)
    setHint('Pozemek přidán. Klikněte na další nebo vyplňte formulář.')
  }

  const removeFromBasket = (item: BasketItem) => {
    const map = mapInstance.current
    const layer = basketLayers.current.get(item.layerId)
    if (layer && map) { map.removeLayer(layer); basketLayers.current.delete(item.layerId) }
    setBasket((prev) => prev.filter((p) => p.layerId !== item.layerId))
  }

  const doSearch = async () => {
    if (!search.trim() || !mapInstance.current) return
    const r = await fetch(
      `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(search + ', Česká republika')}&format=json&limit=1`
    )
    const d = await r.json()
    if (d[0]) {
      mapInstance.current.setView([parseFloat(d[0].lat), parseFloat(d[0].lon)], 13)
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (basket.length === 0) { alert('Přidejte alespoň jeden pozemek do výběru.'); return }
    setSubmitting(true)
    const form = e.currentTarget
    const data = new FormData(form)

    basket.forEach((p, i) => {
      data.append(`pozemek_${i + 1}`, `Parc. č. ${p.cislo}, k.ú. ${p.ku}, ${p.vymera.toLocaleString('cs-CZ')} m², ${p.druh}`)
    })
    data.set('pocet_pozemku', String(basket.length))
    data.set('celkova_vymera_m2', String(basket.reduce((s, p) => s + p.vymera, 0)))

    const jmeno = (form.querySelector('[name="jmeno"]') as HTMLInputElement)?.value || 'Zákazník'
    data.set('_subject', `Poptávka z mapy — ${jmeno} — ${basket.length} pozemk${basket.length === 1 ? 'a' : basket.length < 5 ? 'y' : 'ů'}`)

    try {
      const res = await fetch('https://formspree.io/f/mrevzgzn', {
        method: 'POST', body: data, headers: { Accept: 'application/json' },
      })
      if (res.ok) setSubmitted(true)
      else throw new Error()
    } catch {
      alert('Něco se pokazilo. Zavolejte nám prosím na 605 135 296.')
    }
    setSubmitting(false)
  }

  const totalVymera = basket.reduce((s, p) => s + p.vymera, 0)

  return (
    <>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.css" />

      <div style={{ maxWidth: 860, margin: '0 auto' }}>
        {/* Search bar */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 12 }}>
          <input
            type="text"
            placeholder="Zadejte obec nebo adresu…"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && doSearch()}
            style={{
              flex: 1, padding: '10px 16px', borderRadius: 100,
              border: '1.5px solid rgba(45,74,43,0.2)',
              fontFamily: 'var(--font-inter)', fontSize: '0.9rem',
              background: '#fff', outline: 'none',
            }}
          />
          <button onClick={doSearch} style={{
            background: 'var(--forest-deep)', color: 'var(--cream)',
            border: 'none', borderRadius: 100, padding: '10px 20px',
            cursor: 'pointer', fontWeight: 600, fontSize: '0.88rem',
          }}>
            Hledat
          </button>
        </div>

        {/* Map */}
        <div style={{ position: 'relative', marginBottom: 16 }}>
          <div ref={mapRef} style={{ height: 400, width: '100%', borderRadius: 16, overflow: 'hidden', border: '2px solid rgba(45,74,43,0.15)' }} />
          {loading && (
            <div style={{
              position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)',
              background: 'rgba(250,246,237,0.95)', padding: '10px 18px', borderRadius: 12,
              fontWeight: 600, fontSize: '0.85rem', color: 'var(--forest-deep)',
              display: 'flex', alignItems: 'center', gap: 10,
              boxShadow: '0 4px 20px rgba(0,0,0,0.1)', zIndex: 500,
            }}>
              <span style={{ width: 16, height: 16, border: '2.5px solid var(--forest-deep)', borderTopColor: 'transparent', borderRadius: '50%', display: 'inline-block', animation: 'spin 0.8s linear infinite' }} />
              Načítám parcelu…
            </div>
          )}
          {hint && (
            <div style={{
              position: 'absolute', bottom: 10, left: '50%', transform: 'translateX(-50%)',
              background: 'rgba(26,46,26,.85)', color: 'var(--cream)',
              padding: '7px 14px', borderRadius: 100,
              fontSize: '0.75rem', fontFamily: 'var(--font-mono)',
              pointerEvents: 'none', zIndex: 400, whiteSpace: 'nowrap',
              backdropFilter: 'blur(8px)',
            }}>
              {hint}
            </div>
          )}
        </div>

        {/* Parcel preview */}
        {selected && (
          <div style={{
            background: '#fff', border: '2px solid var(--wheat)',
            borderRadius: 14, padding: '16px 20px', marginBottom: 16,
          }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
              <strong style={{ fontFamily: 'var(--font-fraunces)', fontSize: '1rem', color: 'var(--forest-deep)' }}>Nalezená parcela</strong>
              <span style={{
                background: 'var(--cream)', color: 'var(--rust)',
                fontFamily: 'var(--font-mono)', fontSize: '0.68rem',
                padding: '3px 10px', borderRadius: 100, fontWeight: 700,
              }}>{selected.druh}</span>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 12, marginBottom: 16 }}>
              {[
                ['Parcelní číslo', selected.cislo],
                ['Katastr. území', selected.ku],
                ['Výměra', `${selected.vymera.toLocaleString('cs-CZ')} m²`],
                ['Druh pozemku', selected.druh],
              ].map(([label, val]) => (
                <div key={label}>
                  <div style={{ fontSize: '0.7rem', fontWeight: 700, color: '#aaa', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 2 }}>{label}</div>
                  <div style={{ fontWeight: 700, color: 'var(--forest-deep)' }}>{val}</div>
                </div>
              ))}
            </div>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={addToBasket} style={{
                flex: 1, background: 'var(--forest-deep)', color: 'var(--cream)',
                border: 'none', padding: 11, borderRadius: 100,
                fontFamily: 'var(--font-inter)', fontSize: '0.88rem',
                fontWeight: 700, cursor: 'pointer',
              }}>
                {basket.some((p) => p.cislo === selected.cislo && p.ku === selected.ku)
                  ? '✓ Již ve výběru'
                  : '+ Přidat do výběru'}
              </button>
            </div>
          </div>
        )}

        {/* Basket */}
        {basket.length > 0 && (
          <div style={{ background: '#fff', border: '1.5px solid rgba(45,74,43,0.12)', borderRadius: 14, overflow: 'hidden', marginBottom: 24 }}>
            <div style={{ padding: '12px 18px', borderBottom: '1px solid rgba(45,74,43,0.08)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <strong style={{ fontFamily: 'var(--font-fraunces)', color: 'var(--forest-deep)' }}>Výběr pozemků</strong>
              <span style={{
                background: 'var(--wheat)', color: 'var(--forest-deep)',
                fontFamily: 'var(--font-mono)', fontSize: '0.7rem',
                fontWeight: 700, padding: '2px 9px', borderRadius: 100,
              }}>{basket.length}</span>
            </div>
            {basket.map((item) => (
              <div key={item.layerId} style={{ padding: '10px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(45,74,43,0.06)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--forest-deep)' }}>Parc. č. {item.cislo}</div>
                  <div style={{ fontSize: '0.78rem', color: '#888' }}>{item.ku} · {item.vymera.toLocaleString('cs-CZ')} m² · {item.druh}</div>
                </div>
                <button onClick={() => removeFromBasket(item)} style={{
                  background: 'none', border: 'none', color: '#bbb',
                  cursor: 'pointer', fontSize: '1.2rem', lineHeight: 1,
                }} title="Odebrat">×</button>
              </div>
            ))}
            <div style={{ padding: '8px 18px', fontSize: '0.78rem', color: '#888', background: 'var(--bone)' }}>
              Celková výměra: <strong>{totalVymera.toLocaleString('cs-CZ')} m²</strong> ({(totalVymera / 10000).toFixed(2)} ha)
            </div>
          </div>
        )}

        {/* Contact form */}
        {submitted ? (
          <div style={{
            background: '#e8f5e9', border: '1px solid #4caf50',
            borderRadius: 12, padding: 24, color: '#2e7d32',
            fontWeight: 600, textAlign: 'center', fontSize: '1rem',
          }}>
            ✓ Poptávka odeslána! Ozveme se vám do 30 minut.
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            <input type="hidden" name="_subject" value="Nová poptávka z mapy — Hektaria" />
            <input type="text" name="_gotcha" style={{ display: 'none' }} />

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>Jméno a příjmení *</label>
                <input type="text" name="jmeno" required placeholder="Jan Novák" style={inputStyle} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>Telefon *</label>
                <input type="tel" name="telefon" required placeholder="+420 xxx xxx xxx" style={inputStyle} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>E-mail</label>
              <input type="email" name="email" placeholder="vas@email.cz" style={inputStyle} />
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 600, color: 'var(--forest-deep)', marginBottom: 6 }}>Poznámka</label>
              <textarea name="poznamka" rows={2} placeholder="Stav pozemku, nájemní vztahy, důvod prodeje…" style={{ ...inputStyle, resize: 'vertical' }} />
            </div>

            <label style={{ display: 'flex', alignItems: 'flex-start', gap: 10, fontSize: '0.82rem', color: '#555', cursor: 'pointer' }}>
              <input type="checkbox" name="gdpr_souhlas" required style={{ marginTop: 2, accentColor: 'var(--forest-deep)' }} />
              Souhlasím se zpracováním osobních údajů za účelem odpovědi na mou poptávku.
            </label>

            <button type="submit" disabled={submitting} style={{
              background: 'var(--rust)', color: '#fff',
              border: 'none', padding: '14px 28px',
              borderRadius: 100, fontWeight: 700, fontSize: '1rem',
              cursor: submitting ? 'not-allowed' : 'pointer',
              opacity: submitting ? 0.7 : 1,
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
            }}>
              {submitting ? 'Odesílám…' : 'Odeslat poptávku · odpovíme do 30 min'}
              {!submitting && <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M13 5l7 7-7 7"/></svg>}
            </button>
          </form>
        )}
      </div>
    </>
  )
}

const inputStyle: React.CSSProperties = {
  width: '100%', padding: '12px 14px',
  border: '1.5px solid rgba(45,74,43,0.2)',
  borderRadius: 12, fontFamily: 'var(--font-inter)',
  fontSize: '0.9rem', color: 'var(--forest-deep)',
  background: 'var(--bone)', outline: 'none',
}
