import React from 'react'
import { HeroMedia } from '../components/HeroMedia'
import { AnimateIn } from '../components/AnimateIn'

const FROM = [
  { city: 'Calgary, AB', time: '2.5 hrs', km: '260 km', dir: 'West on Trans-Canada (Hwy 1), through Banff and Lake Louise, continue west past Field.' },
  { city: 'Vancouver, BC', time: '6.5 hrs', km: '720 km', dir: 'East on Trans-Canada (Hwy 1) through Hope and Kamloops, or take Hwy 99 through Whistler to Hwy 97 North.' },
  { city: 'Kelowna, BC', time: '3 hrs', km: '300 km', dir: 'North on Hwy 97 to Vernon, east on Hwy 6 to Nakusp, or north on Hwy 23 to Revelstoke, then east on Hwy 1.' },
  { city: 'Revelstoke, BC', time: '1.5 hrs', km: '148 km', dir: 'East on Trans-Canada Hwy 1. Straight shot through Rogers Pass — allow extra time in winter.' },
]

export default function Location() {
  return (
    <main>
      <HeroMedia
        imgSrc="https://images.unsplash.com/photo-1502472584811-0a2f2feb8968?w=1080&q=85"
        alt="Trans-Canada Highway through the Rockies"
        minHeight="45vh"
      >
        <div className="container" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <span className="eyebrow">Getting Here</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginTop: '0.75rem' }}>
            Find us in<br /><em>Golden, BC</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem', maxWidth: '44ch', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Right on the Trans-Canada Highway — easy to find, with free on-site parking.
          </p>
        </div>
      </HeroMedia>

      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'start' }}>

            <AnimateIn>
              <div>
                <span className="eyebrow">Our Address</span>
                <div className="rule-amber" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '1.5rem' }}>Ponderosa Motor Inn</h2>

                <address style={{ fontStyle: 'normal', marginBottom: '2.5rem' }}>
                  <p style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--forest)', marginBottom: '0.25rem' }}>1025 11th Ave South</p>
                  <p style={{ fontSize: '1.125rem', fontWeight: 500, color: 'var(--forest)', marginBottom: '1.5rem' }}>Golden, BC V0A 1H0, Canada</p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <a href="tel:+12503440047" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--forest)', fontWeight: 500, fontSize: '1.0625rem' }}>
                      📞 +1 (250) 344-0047
                    </a>
                    <a href="mailto:info@ponderosa-inn.com" style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', color: 'var(--forest)', fontWeight: 500 }}>
                      📧 info@ponderosa-inn.com
                    </a>
                  </div>
                </address>

                <div style={{ display: 'flex', gap: '0.875rem', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
                  <a
                    href="https://maps.apple.com/?q=Ponderosa+Motor+Inn+Golden+BC"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-primary btn-sm"
                  >
                    Apple Maps
                  </a>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=Ponderosa+Motor+Inn+Golden+BC"
                    target="_blank" rel="noopener noreferrer"
                    className="btn btn-secondary btn-sm"
                  >
                    Google Maps
                  </a>
                </div>

                {/* Nearby landmarks */}
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--forest)', marginBottom: '1rem', fontSize: '1.25rem' }}>Distance to attractions</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                  {[
                    { place: 'Golden Town Centre', dist: '5 min walk' },
                    { place: 'Golden Skybridge', dist: '12 min drive' },
                    { place: 'Kicking Horse Mountain', dist: '20 min drive' },
                    { place: 'Kicking Horse River (rafting)', dist: '10 min drive' },
                    { place: 'Glacier National Park', dist: '65 km east' },
                    { place: 'Yoho National Park', dist: '57 km east' },
                    { place: 'Golden Airport (CYGE)', dist: '7 min drive' },
                  ].map(item => (
                    <div key={item.place} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.625rem 0', borderBottom: '1px solid var(--parchment-d)', fontSize: '0.9rem' }}>
                      <span style={{ color: 'var(--text-muted)' }}>{item.place}</span>
                      <span style={{ fontWeight: 600, color: 'var(--forest)' }}>{item.dist}</span>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>

            <AnimateIn delay={1}>
              <div>
                {/* Google Map */}
                <div style={{ borderRadius: 'var(--radius-xl)', overflow: 'hidden', boxShadow: 'var(--shadow-lg)', marginBottom: '2rem' }}>
                  <iframe
                    title="Ponderosa Motor Inn location map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8763548349386!2d-116.96648168717327!3d51.29856097176388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e43e2f1b21285%3A0x7f3d33dfbbfc8bdc!2sPonderosa+Motor+Inn!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%"
                    height="400"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>

                {/* Driving directions */}
                <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: 'var(--forest)', marginBottom: '1.25rem', fontSize: '1.25rem' }}>Driving from nearby cities</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {FROM.map(f => (
                    <div key={f.city} style={{ padding: '1rem 1.25rem', background: 'var(--cream)', borderRadius: 'var(--radius-md)', borderLeft: '3px solid var(--amber)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.375rem' }}>
                        <strong style={{ color: 'var(--forest)', fontWeight: 600 }}>{f.city}</strong>
                        <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{f.time} · {f.km}</span>
                      </div>
                      <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{f.dir}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  )
}
