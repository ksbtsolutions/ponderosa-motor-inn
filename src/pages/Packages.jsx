import React from 'react'
import { Link } from 'react-router-dom'
import { HeroMedia } from '../components/HeroMedia'
import { AnimateIn } from '../components/AnimateIn'

const PACKAGES = [
  {
    name: 'Ski & Stay',
    emoji: '⛷️',
    season: 'Winter',
    from: 259,
    nights: 2,
    highlight: 'Perfect for Kicking Horse weekenders',
    includes: [
      '2 nights in a Double Queen room',
      'Early check-in at 1 PM (subject to availability)',
      'Hot breakfast delivery to your room',
      'Local ski area map & trail guide',
      'Equipment storage in locked area',
      'Complimentary hot chocolate on arrival',
    ],
    cta: 'Book Ski Package',
    note: 'Lift passes not included. Kicking Horse day passes available at resort.',
    color: '#1A2B1A',
  },
  {
    name: 'Rockies Explorer',
    emoji: '🏔️',
    season: 'Summer',
    from: 329,
    nights: 3,
    highlight: 'Best value for a 3-day adventure stay',
    includes: [
      '3 nights in a King Suite room',
      'National Parks Discovery Pass (7-day)',
      'Curated activity guide for the region',
      'Late check-out at 1 PM',
      'Welcome basket with local snacks',
      'Packed lunch voucher for one day trip',
    ],
    cta: 'Book Explorer Package',
    note: 'Parks pass covers Glacier, Yoho, Kootenay, and Banff/Jasper.',
    color: '#C4872A',
    featured: true,
  },
  {
    name: 'Family Adventure',
    emoji: '👨‍👩‍👧‍👦',
    season: 'Year Round',
    from: 199,
    nights: 2,
    highlight: 'Kids 12 and under stay free',
    includes: [
      '2 nights in a Double Queen room',
      'Kids\' activity booklet for Golden area',
      'Skybridge admission for 2 adults',
      'Late check-out at noon',
      'Kids\' welcome kit on arrival',
      'Free crib or rollaway bed',
    ],
    cta: 'Book Family Package',
    note: 'Children 12 and under stay free. Maximum 2 children per package.',
    color: '#1A2B1A',
  },
  {
    name: 'Romantic Getaway',
    emoji: '🌙',
    season: 'Year Round',
    from: 249,
    nights: 2,
    highlight: 'For couples escaping the city',
    includes: [
      '2 nights in a King Suite',
      'Bottle of BC wine on arrival',
      'Late check-out at 1 PM',
      'In-room breakfast on one morning',
      'Suggested restaurant reservations',
      'Scenic drive itinerary',
    ],
    cta: 'Book Romantic Package',
    note: 'Advance booking of 7+ days recommended for best room selection.',
    color: '#1A2B1A',
  },
]

export default function Packages() {
  return (
    <main>
      <HeroMedia
        imgSrc="https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=1080&q=85"
        alt="Snowy mountains near Golden BC"
        minHeight="45vh"
      >
        <div className="container" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <span className="eyebrow">Special Packages</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginTop: '0.75rem' }}>
            More value,<br /><em>less to plan</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem', maxWidth: '44ch', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Our packages bundle the essentials so you can spend less time organizing and more time exploring.
          </p>
        </div>
      </HeroMedia>

      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ marginBottom: '3rem' }}>
              <span className="eyebrow">Current Offers</span>
              <div className="rule-amber" />
              <h2 className="section-title">Packages & deals</h2>
              <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
                All packages require advance booking. Call us or send an enquiry to reserve — we'll confirm availability and send a booking link.
              </p>
            </div>
          </AnimateIn>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {PACKAGES.map((pkg, i) => (
              <AnimateIn key={pkg.name} delay={i % 2 + 1}>
                <div style={{ position: 'relative', background: 'var(--cream)', borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: pkg.featured ? 'var(--shadow-xl)' : 'var(--shadow-md)', border: pkg.featured ? '2px solid var(--amber)' : '1px solid transparent' }}>
                  {pkg.featured && (
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, background: 'var(--amber)', color: '#fff', textAlign: 'center', padding: '0.4rem', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                      Best Value
                    </div>
                  )}

                  <div style={{ padding: pkg.featured ? '3rem 2rem 2rem' : '2rem', paddingTop: pkg.featured ? '3rem' : '2rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                      <div>
                        <span style={{ fontSize: '2rem' }}>{pkg.emoji}</span>
                        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--forest)', marginTop: '0.5rem' }}>{pkg.name}</h2>
                        <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{pkg.highlight}</p>
                      </div>
                      <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '1rem' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>from</div>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--forest)', lineHeight: 1.1 }}>${pkg.from}</div>
                        <div style={{ fontSize: '0.7rem', color: 'var(--text-light)' }}>for {pkg.nights} nights</div>
                      </div>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1.25rem' }}>
                      <span className="badge badge-amber">{pkg.season}</span>
                      <span className="badge badge-forest">{pkg.nights} nights</span>
                    </div>

                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', marginBottom: '1.5rem' }}>
                      {pkg.includes.map(item => (
                        <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.625rem', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                          <span style={{ color: 'var(--amber)', fontWeight: 700, flexShrink: 0, marginTop: 1 }}>✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <p style={{ fontSize: '0.75rem', color: 'var(--stone)', lineHeight: 1.6, marginBottom: '1.5rem', padding: '0.75rem', background: 'var(--parchment)', borderRadius: 'var(--radius-md)' }}>
                      ℹ️ {pkg.note}
                    </p>

                    <Link to="/contact" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                      {pkg.cta}
                    </Link>
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div style={{ marginTop: '3.5rem', textAlign: 'center', padding: '2rem', background: 'var(--parchment-d)', borderRadius: 'var(--radius-lg)' }}>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
                <strong style={{ color: 'var(--forest)' }}>Need something custom?</strong> Groups, extended stays, or special occasions — we're happy to put together a tailored package. Just call or email us.
              </p>
              <div style={{ display: 'flex', gap: '0.875rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="tel:+12503440047" className="btn btn-primary">Call +1 (250) 344-0047</a>
                <Link to="/contact" className="btn btn-secondary">Send an Enquiry</Link>
              </div>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  )
}
