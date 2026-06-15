import React, { useState, useEffect, useRef, useCallback } from 'react'

// ── SVG characters ─────────────────────────────────────────

function BearSVG({ flipped }) {
  return (
    <svg viewBox="0 0 80 60" width="80" height="60" xmlns="http://www.w3.org/2000/svg"
      style={{ transform: flipped ? 'scaleX(-1)' : 'none', display: 'block' }}>
      {/* Body */}
      <ellipse cx="40" cy="40" rx="22" ry="18" fill="#6B4423" />
      {/* Head */}
      <circle cx="40" cy="20" r="14" fill="#6B4423" />
      {/* Ears */}
      <circle cx="29" cy="9"  r="6" fill="#6B4423" />
      <circle cx="51" cy="9"  r="6" fill="#6B4423" />
      <circle cx="29" cy="9"  r="3" fill="#8B5E3C" />
      <circle cx="51" cy="9"  r="3" fill="#8B5E3C" />
      {/* Face */}
      <ellipse cx="40" cy="24" rx="7" ry="5" fill="#8B5E3C" />
      {/* Eyes */}
      <circle cx="35" cy="18" r="2.5" fill="#1A0A00" />
      <circle cx="45" cy="18" r="2.5" fill="#1A0A00" />
      <circle cx="35.8" cy="17.2" r="0.8" fill="white" />
      <circle cx="45.8" cy="17.2" r="0.8" fill="white" />
      {/* Nose */}
      <ellipse cx="40" cy="23" rx="2.5" ry="1.8" fill="#1A0A00" />
      {/* Legs */}
      <ellipse cx="28" cy="55" rx="7" ry="5" fill="#6B4423" />
      <ellipse cx="52" cy="55" rx="7" ry="5" fill="#6B4423" />
    </svg>
  )
}

function GoatSVG() {
  return (
    <svg viewBox="0 0 90 70" width="90" height="70" xmlns="http://www.w3.org/2000/svg">
      {/* Body */}
      <ellipse cx="45" cy="48" rx="24" ry="16" fill="#F0EDE8" />
      {/* Head */}
      <ellipse cx="72" cy="32" rx="14" ry="12" fill="#F0EDE8" />
      {/* Horns */}
      <path d="M66 22 Q60 10 63 6" stroke="#C8C0B0" strokeWidth="3" fill="none" strokeLinecap="round" />
      <path d="M72 21 Q70 8 74 5" stroke="#C8C0B0" strokeWidth="3" fill="none" strokeLinecap="round" />
      {/* Ear */}
      <ellipse cx="84" cy="30" rx="5" ry="3" fill="#F0EDE8" transform="rotate(-20 84 30)" />
      {/* Eye */}
      <ellipse cx="76" cy="30" rx="2.5" ry="2" fill="#3A2800" />
      <circle cx="77" cy="29.3" r="0.7" fill="white" />
      {/* Nose */}
      <ellipse cx="83" cy="36" rx="3" ry="2" fill="#E8DDD0" />
      <circle cx="82" cy="36" r="0.8" fill="#A09080" />
      <circle cx="84" cy="36" r="0.8" fill="#A09080" />
      {/* Beard */}
      <path d="M80 38 Q82 44 80 46" stroke="#D8D0C0" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <rect x="30" y="60" width="6" height="10" rx="3" fill="#E0DBD3" />
      <rect x="44" y="60" width="6" height="10" rx="3" fill="#E0DBD3" />
      <rect x="56" y="60" width="6" height="10" rx="3" fill="#E0DBD3" />
    </svg>
  )
}

function MooseSVG() {
  return (
    <svg viewBox="0 0 100 80" width="100" height="80" xmlns="http://www.w3.org/2000/svg">
      {/* Antlers */}
      <path d="M38 18 Q30 8 22 4 Q26 10 24 14" stroke="#5C3A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M38 18 Q34 6 28 2" stroke="#5C3A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M55 18 Q63 8 71 4 Q67 10 69 14" stroke="#5C3A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      <path d="M55 18 Q59 6 65 2" stroke="#5C3A1A" strokeWidth="3" fill="none" strokeLinecap="round"/>
      {/* Body */}
      <ellipse cx="50" cy="58" rx="28" ry="18" fill="#5C3A1A" />
      {/* Head */}
      <ellipse cx="50" cy="30" rx="16" ry="13" fill="#5C3A1A" />
      {/* Big moose nose */}
      <ellipse cx="50" cy="40" rx="8" ry="6" fill="#4A2E12" />
      {/* Eyes */}
      <circle cx="43" cy="26" r="3" fill="#1A0A00" />
      <circle cx="57" cy="26" r="3" fill="#1A0A00" />
      <circle cx="44" cy="25" r="1" fill="white" />
      <circle cx="58" cy="25" r="1" fill="white" />
      {/* Nostrils */}
      <circle cx="47" cy="40" r="1.5" fill="#2A1A06" />
      <circle cx="53" cy="40" r="1.5" fill="#2A1A06" />
      {/* Legs */}
      <rect x="30" y="72" width="7" height="14" rx="3" fill="#4A2E12" />
      <rect x="44" y="72" width="7" height="14" rx="3" fill="#4A2E12" />
      <rect x="58" y="72" width="7" height="14" rx="3" fill="#4A2E12" />
    </svg>
  )
}

// ── Wandering Bear ──────────────────────────────────────────
export function WanderingBear() {
  const [visible, setVisible] = useState(false)
  const [pos, setPos]         = useState({ x: -100, y: 0 })
  const [flipped, setFlipped] = useState(false)
  const timerRef = useRef(null)

  const runBear = useCallback(() => {
    const fromLeft = Math.random() > 0.5
    const y = 60 + Math.random() * 30 // percentage from top (60–90%)
    setFlipped(!fromLeft)
    setPos({ x: fromLeft ? -120 : window.innerWidth + 20, y })
    setVisible(true)

    const target = fromLeft ? window.innerWidth + 120 : -120
    const duration = 6000 + Math.random() * 4000
    const start = performance.now()
    const startX = fromLeft ? -120 : window.innerWidth + 20

    const step = (now) => {
      const t = Math.min((now - start) / duration, 1)
      setPos({ x: startX + (target - startX) * t, y })
      if (t < 1) requestAnimationFrame(step)
      else setVisible(false)
    }
    requestAnimationFrame(step)
  }, [])

  useEffect(() => {
    // First appearance: 8–20 seconds after load
    const first = setTimeout(() => {
      runBear()
      // Then every 45–90 seconds
      timerRef.current = setInterval(runBear, 45000 + Math.random() * 45000)
    }, 8000 + Math.random() * 12000)

    return () => { clearTimeout(first); clearInterval(timerRef.current) }
  }, [runBear])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        left: pos.x,
        top: `${pos.y}vh`,
        zIndex: 200,
        pointerEvents: 'none',
        filter: 'drop-shadow(2px 4px 6px rgba(0,0,0,0.3))',
        transition: 'none',
      }}
      aria-hidden="true"
    >
      <BearSVG flipped={flipped} />
    </div>
  )
}

// ── Peeking Goat ────────────────────────────────────────────
export function PeekingGoat() {
  const [peeking, setPeeking] = useState(false)
  const lastScroll = useRef(0)
  const cooldown   = useRef(false)

  useEffect(() => {
    let peekTimer = null
    const onScroll = () => {
      const now = window.scrollY
      const delta = now - lastScroll.current
      lastScroll.current = now

      // Peek when scrolling up quickly, not too often
      if (delta < -80 && !cooldown.current && now > 200) {
        cooldown.current = true
        setPeeking(true)
        peekTimer = setTimeout(() => {
          setPeeking(false)
          setTimeout(() => { cooldown.current = false }, 8000)
        }, 2800)
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => { window.removeEventListener('scroll', onScroll); clearTimeout(peekTimer) }
  }, [])

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: peeking ? 56 : -80,
        right: 80,
        zIndex: 950,
        transition: 'top 500ms cubic-bezier(0.34, 1.56, 0.64, 1)',
        pointerEvents: 'none',
        filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.25))',
      }}
    >
      <GoatSVG />
      {peeking && (
        <div style={{
          position: 'absolute', bottom: -28, left: '50%', transform: 'translateX(-50%)',
          background: 'rgba(26,43,26,0.85)', color: '#fff', fontSize: '0.7rem',
          padding: '3px 10px', borderRadius: 99, whiteSpace: 'nowrap',
          fontWeight: 500, letterSpacing: '0.04em',
        }}>
          Going back up?
        </div>
      )}
    </div>
  )
}

// ── Konami Code → Moose parade ──────────────────────────────
const KONAMI = ['ArrowUp','ArrowUp','ArrowDown','ArrowDown','ArrowLeft','ArrowRight','ArrowLeft','ArrowRight','b','a']

export function KonamiMoose() {
  const [moose, setMoose]   = useState([])
  const [toast, setToast]   = useState(false)
  const sequence            = useRef([])

  useEffect(() => {
    const onKey = (e) => {
      sequence.current = [...sequence.current, e.key].slice(-10)
      if (sequence.current.join(',') === KONAMI.join(',')) {
        sequence.current = []
        triggerParade()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const triggerParade = () => {
    setToast(true)
    setTimeout(() => setToast(false), 3000)

    const count = 6
    const parade = Array.from({ length: count }, (_, i) => ({
      id: Date.now() + i,
      delay: i * 600,
      y: 55 + Math.random() * 20,
    }))
    setMoose(parade)
    setTimeout(() => setMoose([]), count * 600 + 8000)
  }

  return (
    <>
      {/* Toast */}
      {toast && (
        <div aria-live="polite" style={{
          position: 'fixed', bottom: 24, left: '50%', transform: 'translateX(-50%)',
          background: 'var(--forest)', color: '#fff',
          padding: '0.75rem 1.5rem', borderRadius: 99,
          fontSize: '0.875rem', fontWeight: 600, zIndex: 9999,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)',
          animation: 'fadeSlideUp 300ms ease',
        }}>
          🫎 Moose parade unlocked!
        </div>
      )}

      {/* Moose */}
      {moose.map(m => (
        <MooseRunner key={m.id} delay={m.delay} y={m.y} />
      ))}

      <style>{`
        @keyframes fadeSlideUp { from { opacity:0; transform: translateX(-50%) translateY(12px) } to { opacity:1; transform: translateX(-50%) translateY(0) } }
        @keyframes mooseRun { from { left: -120px } to { left: calc(100vw + 120px) } }
      `}</style>
    </>
  )
}

function MooseRunner({ delay, y }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: 'fixed',
        top: `${y}vh`,
        zIndex: 300,
        pointerEvents: 'none',
        animation: `mooseRun ${5 + Math.random() * 2}s linear ${delay}ms forwards`,
        filter: 'drop-shadow(3px 5px 8px rgba(0,0,0,0.35))',
      }}
    >
      <MooseSVG />
    </div>
  )
}

// ── Idle easter egg: footprints trail ───────────────────────
export function FootprintTrail() {
  const [prints, setPrints] = useState([])
  const idle = useRef(null)
  const active = useRef(false)

  useEffect(() => {
    const resetIdle = () => {
      clearTimeout(idle.current)
      active.current = false
      idle.current = setTimeout(() => {
        active.current = true
      }, 20000) // after 20s idle
    }

    const onMove = (e) => {
      if (!active.current) return
      const id = Date.now()
      setPrints(p => [...p.slice(-12), { id, x: e.clientX, y: e.clientY }])
      setTimeout(() => setPrints(p => p.filter(pr => pr.id !== id)), 1500)
    }

    window.addEventListener('mousemove', resetIdle, { passive: true })
    window.addEventListener('mousemove', onMove, { passive: true })
    resetIdle()

    return () => {
      window.removeEventListener('mousemove', resetIdle)
      window.removeEventListener('mousemove', onMove)
      clearTimeout(idle.current)
    }
  }, [])

  return (
    <>
      {prints.map((p, i) => (
        <div key={p.id} aria-hidden="true" style={{
          position: 'fixed',
          left: p.x - 8,
          top: p.y - 8,
          width: 16, height: 16,
          zIndex: 9998,
          pointerEvents: 'none',
          fontSize: '14px',
          opacity: 0,
          animation: 'printFade 1.5s ease forwards',
        }}>
          🐾
        </div>
      ))}
      <style>{`
        @keyframes printFade {
          0%   { opacity: 0.8; transform: scale(1.2) }
          60%  { opacity: 0.5 }
          100% { opacity: 0; transform: scale(0.8) }
        }
      `}</style>
    </>
  )
}

// ── Season badge (shows current season + lets user switch) ──
export function SeasonBadge({ season, onSeasonChange }) {
  const [open, setOpen] = useState(false)
  const SEASONS = ['spring','summer','autumn','winter']
  const LABELS  = { spring:'Spring 🌸', summer:'Summer ☀️', autumn:'Autumn 🍂', winter:'Winter ❄️' }

  return (
    <div style={{ position: 'fixed', bottom: 20, right: 20, zIndex: 800 }}>
      {open && (
        <div style={{
          position: 'absolute', bottom: '110%', right: 0,
          background: 'var(--forest)', borderRadius: 12,
          padding: '0.75rem', display: 'flex', flexDirection: 'column', gap: 4,
          boxShadow: '0 8px 24px rgba(0,0,0,0.3)', minWidth: 140,
        }}>
          <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', padding: '0 4px 4px', borderBottom: '1px solid rgba(255,255,255,0.1)', marginBottom: 4 }}>
            Change Theme
          </div>
          {SEASONS.map(s => (
            <button key={s} onClick={() => { onSeasonChange(s); setOpen(false) }} style={{
              background: s === season ? 'rgba(255,255,255,0.15)' : 'transparent',
              border: 'none', color: '#fff', padding: '0.4rem 0.75rem',
              borderRadius: 8, cursor: 'pointer', fontSize: '0.8rem',
              fontWeight: s === season ? 700 : 400, textAlign: 'left',
              transition: 'background 150ms',
            }}>
              {LABELS[s]}
            </button>
          ))}
        </div>
      )}
      <button
        onClick={() => setOpen(o => !o)}
        title={`Season: ${season}. Click to change theme.`}
        style={{
          background: 'var(--forest)', border: '2px solid rgba(255,255,255,0.15)',
          borderRadius: '50%', width: 44, height: 44,
          cursor: 'pointer', fontSize: '1.25rem',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          boxShadow: '0 4px 12px rgba(0,0,0,0.25)',
          transition: 'transform 200ms',
        }}
        onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.1)'}
        onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
      >
        {{ spring:'🌸', summer:'☀️', autumn:'🍂', winter:'❄️' }[season]}
      </button>
    </div>
  )
}
