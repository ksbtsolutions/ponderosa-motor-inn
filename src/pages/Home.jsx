import React from 'react'
import { Link } from 'react-router-dom'
import { HeroMedia } from '../components/HeroMedia'
import { BookingWidget } from '../components/BookingWidget'
import { ReviewSlider } from '../components/ReviewSlider'
import { MountainDivider } from '../components/MountainDivider'
import { AnimateIn } from '../components/AnimateIn'

const HERO_IMG = 'https://images.unsplash.com/photo-1587381419916-78fc843a36f8'
const HERO_SRCSET = `${HERO_IMG}?w=640&q=80 640w, ${HERO_IMG}?w=1080&q=85 1080w, ${HERO_IMG}?w=1920&q=85 1920w`

const AMENITIES = [
  { icon: '📶', label: 'Free High-Speed WiFi' },
  { icon: '🚗', label: 'Free Parking' },
  { icon: '🐾', label: 'Pet Friendly Rooms' },
  { icon: '❄️', label: 'Air Conditioning' },
  { icon: '☕', label: 'In-Room Coffee' },
  { icon: '🧊', label: 'Mini Fridge & Microwave' },
  { icon: '📺', label: 'Flat Screen TV' },
  { icon: '🔥', label: 'Mountain View Rooms' },
]

const FEATURES = [
  {
    title: 'Ideal Location',
    desc: 'Central Golden address puts you 15 minutes from Kicking Horse Mountain and walking distance from restaurants, shops, and the Columbia River Wetlands.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/>
      </svg>
    )
  },
  {
    title: 'Genuine Value',
    desc: 'Competitive rates with no hidden resort fees. What you see is what you pay — and we\'ll always try to match or beat any comparable rate you find.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6"/>
      </svg>
    )
  },
  {
    title: 'Local Expertise',
    desc: 'Our team knows every trail, rapid, and powder run in the region. Ask us anything — from avalanche conditions to where locals actually eat dinner.',
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
]

const ACTIVITIES_PREVIEW = [
  { season: 'Winter', title: 'Kicking Horse Mountain', desc: 'World-class powder, 4 alpine bowls, and one of Canada\'s steepest vertical drops. 20 min drive.', img: 'https://images.unsplash.com/photo-1551882547-ff40c4eacbf1?w=600&q=80', link: '/activities' },
  { season: 'Summer', title: 'Golden Skybridge', desc: 'Canada\'s highest suspension bridge with two spans above a canyon — just 12 minutes away.', img: 'https://images.unsplash.com/photo-1470114716159-e389f8712fda?w=600&q=80', link: '/activities' },
  { season: 'Year Round', title: 'Glacier National Park', desc: 'Iconic Rogers Pass, dramatic alpine terrain, and over 400 glaciers on your doorstep.', img: 'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80', link: '/activities' },
]

export default function Home() {
  return (
    <main>
      {/* ── HERO ── */}
      <HeroMedia
        imgSrc={`${HERO_IMG}?w=1080&q=85`}
        imgSrcSet={HERO_SRCSET}
        alt="Canadian Rockies near Golden, BC"
        minHeight="100svh"
      >
        <div className="container" style={{ paddingTop: '8rem', paddingBottom: '4rem' }}>
          <div style={{ maxWidth: 640, marginBottom: '3rem' }}>
            <span style={{ display: 'inline-block', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--amber-lite)', marginBottom: '1.25rem', padding: '0.35rem 0.875rem', border: '1px solid rgba(196,135,42,0.5)', borderRadius: 99 }}>
              Golden, British Columbia
            </span>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.75rem, 8vw, 5.5rem)', fontWeight: 700, color: '#fff', lineHeight: 1.05, marginBottom: '1.5rem' }}>
              Your Base Camp<br />
              <em style={{ fontStyle: 'italic', color: 'var(--amber-lite)' }}>in the Rockies</em>
            </h1>
            <p style={{ fontSize: 'clamp(1rem, 2.5vw, 1.2rem)', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, marginBottom: '2rem', maxWidth: '46ch' }}>
              Comfortable, affordable rooms in the heart of Golden — minutes from Kicking Horse Mountain, the Skybridge, and Glacier National Park.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.875rem', alignItems: 'center' }}>
              <Link to="/accommodations" className="btn btn-primary btn-lg">View Rooms & Rates</Link>
              <Link to="/activities" className="btn btn-ghost btn-lg">Explore Activities</Link>
            </div>
          </div>

          {/* Floating trust bar */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem 2rem', marginTop: '1rem' }}>
            {['Free WiFi & Parking', 'Pet Friendly', 'Check-in from 3 PM', '⭐ 4.4 on Booking.com'].map(item => (
              <span key={item} style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.75)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                <span style={{ color: 'var(--amber-lite)' }}>✓</span> {item}
              </span>
            ))}
          </div>
        </div>
      </HeroMedia>

      {/* ── BOOKING WIDGET ── */}
      <div style={{ background: 'var(--forest)', padding: '3rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <BookingWidget />
        </div>
      </div>

      <MountainDivider topColor="var(--forest)" bottomColor="var(--parchment)" flip />

      {/* ── WHY PONDEROSA ── */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ marginBottom: '3.5rem' }}>
              <span className="eyebrow">Why Stay With Us</span>
              <div className="rule-amber" />
              <h2 className="section-title">Straightforward comfort,<br />honest prices</h2>
              <p className="section-subtitle" style={{ marginTop: '1rem' }}>
                We're a locally owned motor inn in a town that takes outdoor adventure seriously. No frills you don't need — just clean rooms, reliable service, and a team that genuinely wants your trip to be great.
              </p>
            </div>
          </AnimateIn>

          <div className="grid-3" style={{ gap: '2rem' }}>
            {FEATURES.map((f, i) => (
              <AnimateIn key={f.title} delay={i + 1}>
                <div style={{ padding: '2rem', background: 'var(--cream)', borderRadius: 'var(--radius-lg)', height: '100%', boxShadow: 'var(--shadow-sm)' }}>
                  <div style={{ color: 'var(--amber)', marginBottom: '1.25rem' }}>{f.icon}</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.75rem' }}>{f.title}</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, fontSize: '0.9375rem' }}>{f.desc}</p>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── AMENITIES ── */}
      <section style={{ background: 'var(--forest)', padding: 'var(--space-16) 0' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              <span className="eyebrow">Room Amenities</span>
              <h2 className="section-title" style={{ color: '#fff' }}>Everything you need included</h2>
            </div>
          </AnimateIn>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1rem' }}>
            {AMENITIES.map((a, i) => (
              <AnimateIn key={a.label} delay={i % 4 + 1}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.25rem', background: 'rgba(255,255,255,0.07)', borderRadius: 'var(--radius-md)', border: '1px solid rgba(255,255,255,0.1)' }}>
                  <span style={{ fontSize: '1.25rem' }}>{a.icon}</span>
                  <span style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(255,255,255,0.85)' }}>{a.label}</span>
                </div>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      <MountainDivider topColor="var(--forest)" bottomColor="var(--parchment)" />

      {/* ── ACTIVITIES PREVIEW ── */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <div>
                <span className="eyebrow">The Region</span>
                <div className="rule-amber" />
                <h2 className="section-title">Golden's backyard<br />is spectacular</h2>
              </div>
              <Link to="/activities" className="btn btn-secondary">All Activities →</Link>
            </div>
          </AnimateIn>

          <div className="grid-3" style={{ gap: '1.5rem' }}>
            {ACTIVITIES_PREVIEW.map((a, i) => (
              <AnimateIn key={a.title} delay={i + 1}>
                <Link to={a.link} className="card" style={{ display: 'block', textDecoration: 'none' }}>
                  <div style={{ position: 'relative', height: 220, overflow: 'hidden' }}>
                    <img
                      src={a.img}
                      alt={a.title}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 500ms ease' }}
                      onMouseEnter={e => e.currentTarget.style.transform = 'scale(1.05)'}
                      onMouseLeave={e => e.currentTarget.style.transform = 'scale(1)'}
                    />
                    <span className="badge badge-amber" style={{ position: 'absolute', top: 12, left: 12 }}>{a.season}</span>
                  </div>
                  <div className="card-body">
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.5rem' }}>{a.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{a.desc}</p>
                  </div>
                </Link>
              </AnimateIn>
            ))}
          </div>
        </div>
      </section>

      {/* ── REVIEWS ── */}
      <section style={{ background: 'var(--cream)', padding: 'var(--space-20) 0' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
              <span className="eyebrow">Guest Reviews</span>
              <div className="rule-amber" style={{ margin: '0 auto 1rem' }} />
              <h2 className="section-title">What our guests say</h2>
              <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginTop: '1rem', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '2rem', fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--forest)' }}>4.4</span>
                <div>
                  <div className="stars">{'★★★★½'.split('').map((s, i) => <span key={i}>{s}</span>)}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: 2 }}>Based on 180+ reviews</div>
                </div>
                <span style={{ color: 'var(--parchment-d)' }}>·</span>
                <span style={{ fontSize: '0.875rem', color: 'var(--text-muted)' }}>Booking.com · Expedia · TripAdvisor</span>
              </div>
            </div>
          </AnimateIn>
          <AnimateIn>
            <ReviewSlider />
          </AnimateIn>
        </div>
      </section>

      {/* ── CTA STRIP ── */}
      <section style={{ background: 'var(--amber)', padding: '3.5rem 0' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', fontWeight: 700, color: '#fff', marginBottom: '1rem' }}>
            Ready to explore Golden?
          </h2>
          <p style={{ color: 'rgba(255,255,255,0.85)', marginBottom: '2rem', fontSize: '1.0625rem' }}>
            Book directly or call us — we're happy to help plan your stay.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/accommodations" className="btn btn-lg" style={{ background: '#fff', color: 'var(--amber-dark)' }}>Browse Rooms</Link>
            <a href="tel:+12503440047" className="btn btn-ghost btn-lg">Call +1 (250) 344-0047</a>
          </div>
        </div>
      </section>
    </main>
  )
}
