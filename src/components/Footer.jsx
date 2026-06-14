import React from 'react'
import { Link } from 'react-router-dom'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer style={{ background: 'var(--forest)', color: 'rgba(255,255,255,0.75)', paddingTop: '4rem', paddingBottom: '2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>

          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.625rem', marginBottom: '1rem' }}>
              <div style={{ width: 36, height: 36, background: 'var(--amber)', borderRadius: 6, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.1rem', color: '#fff', flexShrink: 0 }}>P</div>
              <div>
                <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, color: '#fff', fontSize: '1rem' }}>Ponderosa Motor Inn</div>
                <div style={{ fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', opacity: 0.5, marginTop: 1 }}>Golden, British Columbia</div>
              </div>
            </div>
            <p style={{ fontSize: '0.875rem', lineHeight: 1.7, maxWidth: '26ch' }}>
              Your base camp in the Canadian Rockies. Affordable comfort, genuine hospitality.
            </p>
            {/* Social */}
            <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1.25rem' }}>
              {[
                { label: 'Facebook', href: 'https://facebook.com', path: 'M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z' },
                { label: 'Instagram', href: 'https://instagram.com', path: 'M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01M6.5 19.5h11a3 3 0 003-3v-11a3 3 0 00-3-3h-11a3 3 0 00-3 3v11a3 3 0 003 3z' },
              ].map(s => (
                <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'background 200ms' }}
                  onMouseEnter={e => e.currentTarget.style.background = 'rgba(196,135,42,0.4)'}
                  onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d={s.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.5 }}>Navigate</h3>
            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {[
                { to: '/accommodations', label: 'Rooms & Rates' },
                { to: '/packages', label: 'Packages & Deals' },
                { to: '/activities', label: 'Things to Do' },
                { to: '/location', label: 'How to Find Us' },
                { to: '/contact', label: 'Contact' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{ fontSize: '0.875rem', transition: 'color 150ms' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'var(--amber-lite)'}
                    onMouseLeave={e => e.currentTarget.style.color = ''}
                  >{label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.5 }}>Find Us</h3>
            <address style={{ fontStyle: 'normal', fontSize: '0.875rem', lineHeight: 2 }}>
              <a href="tel:+12503440047" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 150ms' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--amber-lite)'}
                onMouseLeave={e => e.currentTarget.style.color = ''}
              >
                <PhoneIcon /> +1 (250) 344-0047
              </a>
              <a href="mailto:info@ponderosa-inn.com" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', transition: 'color 150ms' }}
                onMouseEnter={e => e.currentTarget.style.color = 'var(--amber-lite)'}
                onMouseLeave={e => e.currentTarget.style.color = ''}
              >
                <MailIcon /> info@ponderosa-inn.com
              </a>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.5rem' }}>
                <MapPinIcon style={{ marginTop: 3, flexShrink: 0 }} />
                <span>1025 11th Ave S<br />Golden, BC V0A 1H0</span>
              </div>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h3 style={{ color: '#fff', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', marginBottom: '1rem', opacity: 0.5 }}>Hours</h3>
            <div style={{ fontSize: '0.875rem', lineHeight: 2.2 }}>
              <div><span style={{ color: 'rgba(255,255,255,0.5)', marginRight: 8 }}>Check-in</span> 3:00 PM</div>
              <div><span style={{ color: 'rgba(255,255,255,0.5)', marginRight: 8 }}>Check-out</span> 11:00 AM</div>
              <div style={{ marginTop: '0.75rem', padding: '0.625rem 0.875rem', background: 'rgba(196,135,42,0.15)', borderRadius: 6, borderLeft: '3px solid var(--amber)', lineHeight: 1.5 }}>
                Front desk open<br />7:00 AM – 10:00 PM daily
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.75rem', opacity: 0.45 }}>
          <span>© {year} Ponderosa Motor Inn. All rights reserved.</span>
          <span>Golden, British Columbia, Canada</span>
        </div>
      </div>
    </footer>
  )
}

function PhoneIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012.18 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.1a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
}
function MailIcon() {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
}
function MapPinIcon({ style = {} }) {
  return <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, ...style }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
}
