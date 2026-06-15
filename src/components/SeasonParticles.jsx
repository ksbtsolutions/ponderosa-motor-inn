import React, { useEffect, useRef } from 'react'

// ── Shared canvas particle engine ──────────────────────────
function useCanvas(draw, deps = []) {
  const canvasRef = useRef(null)
  const rafRef    = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    const resize = () => {
      canvas.width  = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize, { passive: true })

    const loop = () => {
      draw(ctx, canvas)
      rafRef.current = requestAnimationFrame(loop)
    }
    rafRef.current = requestAnimationFrame(loop)

    return () => {
      cancelAnimationFrame(rafRef.current)
      window.removeEventListener('resize', resize)
    }
  }, deps)

  return canvasRef
}

// ── Snow ──────────────────────────────────────────────────
function makeFlakes(n) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 3 + 1,
    speed: Math.random() * 0.8 + 0.3,
    drift: Math.random() * 0.4 - 0.2,
    opacity: Math.random() * 0.5 + 0.3,
  }))
}

export function SnowCanvas() {
  const flakes = useRef(makeFlakes(80))
  const ref = useCanvas((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    flakes.current.forEach(f => {
      ctx.beginPath()
      ctx.arc(f.x, f.y, f.r, 0, Math.PI * 2)
      ctx.fillStyle = `rgba(220, 235, 255, ${f.opacity})`
      ctx.fill()
      f.y += f.speed
      f.x += f.drift
      if (f.y > canvas.height + 10) { f.y = -10; f.x = Math.random() * canvas.width }
      if (f.x > canvas.width + 10)  f.x = -10
      if (f.x < -10)                 f.x = canvas.width + 10
    })
  })
  return <canvas ref={ref} style={CANVAS_STYLE} aria-hidden="true" />
}

// ── Leaves ────────────────────────────────────────────────
const LEAF_COLORS = ['#C4531A','#D4691A','#E07030','#A03A0A','#C48030','#8B2500']

function makeLeaves(n) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * -window.innerHeight,
    r: Math.random() * 8 + 5,
    speed: Math.random() * 1 + 0.5,
    drift: Math.random() * 1.5 - 0.75,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.08,
    color: LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
    opacity: Math.random() * 0.4 + 0.4,
    wobble: Math.random() * Math.PI * 2,
  }))
}

export function LeafCanvas() {
  const leaves = useRef(makeLeaves(35))
  const ref = useCanvas((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    leaves.current.forEach(l => {
      ctx.save()
      ctx.translate(l.x, l.y)
      ctx.rotate(l.rot)
      ctx.globalAlpha = l.opacity
      // Simple leaf shape
      ctx.beginPath()
      ctx.ellipse(0, 0, l.r, l.r * 0.55, 0, 0, Math.PI * 2)
      ctx.fillStyle = l.color
      ctx.fill()
      ctx.restore()

      l.y += l.speed
      l.wobble += 0.04
      l.x += l.drift + Math.sin(l.wobble) * 0.6
      l.rot += l.rotSpeed
      if (l.y > canvas.height + 20) {
        l.y = -20
        l.x = Math.random() * canvas.width
      }
    })
  })
  return <canvas ref={ref} style={CANVAS_STYLE} aria-hidden="true" />
}

// ── Petals ────────────────────────────────────────────────
const PETAL_COLORS = ['#FFB7C5','#FFC8D3','#FFD6DF','#F9A8B8','#FADADD']

function makePetals(n) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * -window.innerHeight,
    size: Math.random() * 7 + 3,
    speed: Math.random() * 0.7 + 0.3,
    drift: Math.random() * 0.8 - 0.4,
    rot: Math.random() * Math.PI * 2,
    rotSpeed: (Math.random() - 0.5) * 0.05,
    color: PETAL_COLORS[Math.floor(Math.random() * PETAL_COLORS.length)],
    opacity: Math.random() * 0.45 + 0.3,
    wobble: Math.random() * Math.PI * 2,
  }))
}

export function PetalCanvas() {
  const petals = useRef(makePetals(40))
  const ref = useCanvas((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    petals.current.forEach(p => {
      ctx.save()
      ctx.translate(p.x, p.y)
      ctx.rotate(p.rot)
      ctx.globalAlpha = p.opacity
      ctx.beginPath()
      ctx.ellipse(0, 0, p.size, p.size * 0.45, 0, 0, Math.PI * 2)
      ctx.fillStyle = p.color
      ctx.fill()
      ctx.restore()

      p.y += p.speed
      p.wobble += 0.03
      p.x += p.drift + Math.sin(p.wobble) * 0.5
      p.rot += p.rotSpeed
      if (p.y > canvas.height + 20) {
        p.y = -20
        p.x = Math.random() * canvas.width
      }
    })
  })
  return <canvas ref={ref} style={CANVAS_STYLE} aria-hidden="true" />
}

// ── Fireflies (summer) ────────────────────────────────────
function makeFireflies(n) {
  return Array.from({ length: n }, () => ({
    x: Math.random() * window.innerWidth,
    y: Math.random() * window.innerHeight,
    r: Math.random() * 2 + 1,
    phase: Math.random() * Math.PI * 2,
    speed: Math.random() * 0.003 + 0.001,
    dx: (Math.random() - 0.5) * 0.4,
    dy: (Math.random() - 0.5) * 0.4,
  }))
}

export function FireflyCanvas() {
  const flies = useRef(makeFireflies(25))
  const tick  = useRef(0)
  const ref = useCanvas((ctx, canvas) => {
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    tick.current += 0.016
    flies.current.forEach(f => {
      const glow = (Math.sin(f.phase + tick.current * f.speed * 60) + 1) / 2
      const opacity = glow * 0.7 + 0.05
      const gradient = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.r * 4)
      gradient.addColorStop(0, `rgba(255, 240, 120, ${opacity})`)
      gradient.addColorStop(1, 'rgba(255, 200, 50, 0)')
      ctx.beginPath()
      ctx.arc(f.x, f.y, f.r * 4, 0, Math.PI * 2)
      ctx.fillStyle = gradient
      ctx.fill()

      f.x += f.dx; f.y += f.dy
      if (f.x < 0 || f.x > canvas.width)  f.dx *= -1
      if (f.y < 0 || f.y > canvas.height) f.dy *= -1
    })
  })
  return <canvas ref={ref} style={CANVAS_STYLE} aria-hidden="true" />
}

const CANVAS_STYLE = {
  position: 'fixed',
  top: 0, left: 0,
  width: '100%', height: '100%',
  pointerEvents: 'none',
  zIndex: 5,
}

export function SeasonParticles({ season }) {
  if (season === 'winter') return <SnowCanvas />
  if (season === 'autumn') return <LeafCanvas />
  if (season === 'spring') return <PetalCanvas />
  if (season === 'summer') return <FireflyCanvas />
  return null
}
