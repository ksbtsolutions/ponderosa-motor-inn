import React, { useEffect, useRef } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { Nav } from './components/Nav'
import { Footer } from './components/Footer'
import Home from './pages/Home'
import Accommodations from './pages/Accommodations'
import Activities from './pages/Activities'
import Location from './pages/Location'
import Packages from './pages/Packages'
import Contact from './pages/Contact'

const PAGE_META = {
  '/': {
    title: 'Ponderosa Motor Inn – Golden, BC | Budget Motel Near Kicking Horse',
    description: 'Affordable, comfortable rooms in Golden, British Columbia. Minutes from Kicking Horse Mountain Resort, Glacier National Park, and the Golden Skybridge.',
  },
  '/accommodations': {
    title: 'Rooms & Rates – Ponderosa Motor Inn, Golden BC',
    description: 'Browse our clean, comfortable rooms from $119/night. Queen, Double Queen, King Suite, and pet-friendly rooms. Free WiFi & parking included.',
  },
  '/activities': {
    title: 'Things To Do Near Golden BC – Ponderosa Motor Inn',
    description: 'Kicking Horse Mountain, Golden Skybridge, Glacier National Park, whitewater rafting, mountain biking — explore the best of the Canadian Rockies from Golden.',
  },
  '/packages': {
    title: 'Packages & Special Deals – Ponderosa Motor Inn, Golden BC',
    description: 'Ski & Stay, Rockies Explorer, Family Adventure, and Romantic Getaway packages. Book direct for the best value.',
  },
  '/location': {
    title: 'How to Get Here – Ponderosa Motor Inn, Golden BC',
    description: 'Find us at 1025 11th Ave S, Golden, BC. Detailed driving directions from Calgary, Vancouver, Kelowna, and Revelstoke. Free parking on site.',
  },
  '/contact': {
    title: 'Contact Us – Ponderosa Motor Inn, Golden BC',
    description: 'Get in touch with the Ponderosa Motor Inn. Call +1 (250) 344-0047 or send us an enquiry. Front desk open 7 AM – 10 PM daily.',
  },
}

function PageWrapper({ children }) {
  const location = useLocation()
  const ref = useRef(null)

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'instant' })

    // Update meta per page
    const meta = PAGE_META[location.pathname]
    if (meta) {
      document.title = meta.title
      let desc = document.querySelector('meta[name="description"]')
      if (desc) desc.setAttribute('content', meta.description)
    }

    // Fade in transition
    const el = ref.current
    if (!el) return
    el.style.opacity = '0'
    el.style.transform = 'translateY(10px)'
    requestAnimationFrame(() => {
      el.style.transition = 'opacity 280ms ease, transform 280ms ease'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0)'
    })
  }, [location.pathname])

  return <div ref={ref}>{children}</div>
}

export default function App() {
  return (
    <>
      <a href="#main-content" style={{ position: 'absolute', left: -9999, top: 0, zIndex: 9999, padding: '0.5rem 1rem', background: 'var(--amber)', color: '#fff', fontWeight: 600 }}
        onFocus={e => { e.currentTarget.style.left = '0' }}
        onBlur={e => { e.currentTarget.style.left = '-9999px' }}
      >
        Skip to main content
      </a>

      <Nav />

      <div id="main-content">
        <PageWrapper>
          <Routes>
            <Route path="/"               element={<Home />} />
            <Route path="/accommodations" element={<Accommodations />} />
            <Route path="/activities"     element={<Activities />} />
            <Route path="/location"       element={<Location />} />
            <Route path="/packages"       element={<Packages />} />
            <Route path="/contact"        element={<Contact />} />
            <Route path="*"               element={<NotFound />} />
          </Routes>
        </PageWrapper>
      </div>

      <Footer />
    </>
  )
}

function NotFound() {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '4rem 2rem' }}>
      <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🏔️</div>
      <h1 style={{ fontFamily: 'var(--font-display)', fontSize: '2.5rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '1rem' }}>Trail not found</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', maxWidth: '36ch' }}>
        This page seems to have wandered off into the backcountry. Let's get you back on track.
      </p>
      <a href="/" className="btn btn-primary btn-lg">Back to Home</a>
    </div>
  )
}
