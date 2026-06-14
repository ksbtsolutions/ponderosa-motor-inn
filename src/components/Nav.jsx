import React, { useState, useEffect, useCallback } from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'

const LINKS = [
  { to: '/',               label: 'Home' },
  { to: '/accommodations', label: 'Rooms' },
  { to: '/packages',       label: 'Packages' },
  { to: '/activities',     label: 'Activities' },
  { to: '/location',       label: 'Location' },
  { to: '/contact',        label: 'Contact' },
]

export function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  const closeMenu = useCallback(() => setMenuOpen(false), [])

  // Lock body scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  return (
    <>
      <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`} role="navigation" aria-label="Main navigation">
        <div className="nav__inner container">
          {/* Logo */}
          <Link to="/" className="nav__logo" onClick={closeMenu} aria-label="Ponderosa Motor Inn Home">
            <span className="nav__logo-mark">P</span>
            <span className="nav__logo-text">
              <span className="nav__logo-name">Ponderosa</span>
              <span className="nav__logo-sub">Motor Inn · Golden, BC</span>
            </span>
          </Link>

          {/* Desktop links */}
          <ul className="nav__links" role="list">
            {LINKS.map(({ to, label }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) => `nav__link ${isActive ? 'nav__link--active' : ''}`}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Book CTA */}
          <Link to="/accommodations" className="btn btn-primary btn-sm nav__cta" onClick={closeMenu}>
            Book Now
          </Link>

          {/* Hamburger */}
          <button
            className={`nav__hamburger ${menuOpen ? 'is-open' : ''}`}
            onClick={() => setMenuOpen(o => !o)}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        className={`nav__drawer ${menuOpen ? 'is-open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <ul role="list">
          {LINKS.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => `nav__drawer-link ${isActive ? 'is-active' : ''}`}
                onClick={closeMenu}
              >
                {label}
              </NavLink>
            </li>
          ))}
          <li>
            <Link to="/accommodations" className="btn btn-primary" style={{ marginTop: '1rem', width: '100%', justifyContent: 'center' }} onClick={closeMenu}>
              Book Now
            </Link>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {menuOpen && (
        <div className="nav__backdrop" onClick={closeMenu} aria-hidden="true" />
      )}
    </>
  )
}
