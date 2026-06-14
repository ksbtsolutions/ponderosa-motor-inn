import React, { useState, useEffect, useRef } from 'react'

const REVIEWS = [
  { name: 'Sarah M.', location: 'Calgary, AB', rating: 5, text: 'Perfect base for our Kicking Horse ski trip. Rooms were spotless, beds incredibly comfortable, and the staff went above and beyond helping us plan our days. Unbeatable value in Golden.', date: 'February 2024' },
  { name: 'James T.', location: 'Vancouver, BC', rating: 5, text: 'We stayed here on our way through to Banff and ended up extending our trip just to explore more of Golden. The proximity to the Skybridge and hiking was perfect. Will absolutely return.', date: 'July 2024' },
  { name: 'Marie-Claire B.', location: 'Montréal, QC', rating: 4, text: 'Très bonne expérience. Clean, quiet rooms and friendly front desk. The free parking was a bonus when travelling with our bikes and gear. Great location near downtown Golden.', date: 'August 2024' },
  { name: 'David & Karen L.', location: 'Seattle, WA', rating: 5, text: 'Third year staying here for our annual rafting trip on the Kicking Horse River. The inn has become like home — the owners remember us by name. Genuine hospitality is rare.', date: 'June 2024' },
  { name: 'Tomás R.', location: 'Edmonton, AB', rating: 5, text: 'Stopped here during a cycling tour and could not have picked better. Staff helped arrange bike storage, gave local trail tips, and the beds were exactly what sore legs needed.', date: 'September 2024' },
]

function Stars({ count }) {
  return (
    <div className="stars" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill={i < count ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ))}
    </div>
  )
}

export function ReviewSlider() {
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => setActive(a => (a + 1) % REVIEWS.length), 5500)
    return () => clearInterval(timerRef.current)
  }, [paused])

  const go = (i) => { setActive(i); setPaused(true) }

  return (
    <div style={{ maxWidth: 720, margin: '0 auto' }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div style={{ position: 'relative', minHeight: 200 }}>
        {REVIEWS.map((r, i) => (
          <div key={i} style={{
            position: i === 0 ? 'relative' : 'absolute',
            top: 0, left: 0, width: '100%',
            opacity: active === i ? 1 : 0,
            transform: active === i ? 'translateY(0)' : 'translateY(8px)',
            transition: 'opacity 400ms ease, transform 400ms ease',
            pointerEvents: active === i ? 'auto' : 'none',
          }}>
            <blockquote style={{ textAlign: 'center' }}>
              <Stars count={r.rating} />
              <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.1rem, 3vw, 1.35rem)', fontStyle: 'italic', lineHeight: 1.7, color: 'var(--forest)', margin: '1.25rem 0', padding: '0 1rem' }}>
                "{r.text}"
              </p>
              <footer style={{ fontSize: '0.875rem' }}>
                <strong style={{ color: 'var(--forest)' }}>{r.name}</strong>
                <span style={{ color: 'var(--text-muted)', marginLeft: '0.5rem' }}>· {r.location}</span>
                <span style={{ color: 'var(--stone-lite)', marginLeft: '0.5rem', fontSize: '0.8rem' }}>· {r.date}</span>
              </footer>
            </blockquote>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div style={{ display: 'flex', justifyContent: 'center', gap: '0.5rem', marginTop: '2rem' }} role="tablist" aria-label="Review navigation">
        {REVIEWS.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={active === i}
            aria-label={`Review ${i + 1}`}
            onClick={() => go(i)}
            style={{
              width: active === i ? 24 : 8,
              height: 8,
              borderRadius: 4,
              background: active === i ? 'var(--amber)' : 'var(--parchment-d)',
              border: 'none',
              cursor: 'pointer',
              transition: 'width 300ms, background 300ms',
              padding: 0,
            }}
          />
        ))}
      </div>
    </div>
  )
}
