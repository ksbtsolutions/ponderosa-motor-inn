import React, { useState } from 'react'
import './BookingWidget.css'

function today() {
  return new Date().toISOString().split('T')[0]
}
function tomorrow() {
  const d = new Date(); d.setDate(d.getDate() + 1)
  return d.toISOString().split('T')[0]
}
function addDays(dateStr, n) {
  const d = new Date(dateStr); d.setDate(d.getDate() + n)
  return d.toISOString().split('T')[0]
}

export function BookingWidget({ compact = false }) {
  const [checkin, setCheckin]   = useState(today())
  const [checkout, setCheckout] = useState(tomorrow())
  const [guests, setGuests]     = useState(2)
  const [rooms, setRooms]       = useState(1)
  const [links, setLinks]       = useState(null)
  const [loading, setLoading]   = useState(false)
  const [error, setError]       = useState(null)

  const nights = Math.max(1, Math.round((new Date(checkout) - new Date(checkin)) / 86400000))

  const handleCheckinChange = (val) => {
    setCheckin(val)
    if (val >= checkout) setCheckout(addDays(val, 1))
    setLinks(null)
  }

  const handleCheckoutChange = (val) => {
    if (val <= checkin) return
    setCheckout(val)
    setLinks(null)
  }

  const handleSearch = async () => {
    setError(null)
    setLoading(true)
    try {
      const res = await fetch(`/api/availability?checkin=${checkin}&checkout=${checkout}&guests=${guests}&rooms=${rooms}`)
      if (!res.ok) throw new Error('Could not fetch availability')
      const data = await res.json()
      setLinks(data.links || data)
    } catch (err) {
      // Fallback: generate links client-side
      setLinks(buildLinks(checkin, checkout, guests, rooms))
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className={`bw ${compact ? 'bw--compact' : ''}`}>
      {!compact && (
        <div className="bw__header">
          <span className="eyebrow">Check Availability</span>
          <h2 className="bw__title">Find Your Room</h2>
        </div>
      )}

      <div className="bw__fields">
        <div className="form-group">
          <label className="form-label" htmlFor="bw-checkin">
            <span>Check-in</span>
          </label>
          <input
            id="bw-checkin"
            type="date"
            className="form-input"
            value={checkin}
            min={today()}
            onChange={e => handleCheckinChange(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bw-checkout">
            <span>Check-out</span>
            {nights > 0 && <span className="bw__nights">{nights} night{nights !== 1 ? 's' : ''}</span>}
          </label>
          <input
            id="bw-checkout"
            type="date"
            className="form-input"
            value={checkout}
            min={addDays(checkin, 1)}
            onChange={e => handleCheckoutChange(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bw-guests">Guests</label>
          <select id="bw-guests" className="form-select" value={guests} onChange={e => { setGuests(Number(e.target.value)); setLinks(null) }}>
            {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
          </select>
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor="bw-rooms">Rooms</label>
          <select id="bw-rooms" className="form-select" value={rooms} onChange={e => { setRooms(Number(e.target.value)); setLinks(null) }}>
            {[1,2,3].map(n => <option key={n} value={n}>{n} room{n !== 1 ? 's' : ''}</option>)}
          </select>
        </div>

        <button
          className="btn btn-primary bw__search-btn"
          onClick={handleSearch}
          disabled={loading}
          aria-busy={loading}
        >
          {loading ? (
            <><Spinner /> Searching…</>
          ) : 'Check Availability'}
        </button>
      </div>

      {error && <p className="bw__error" role="alert">{error}</p>}

      {links && (
        <div className="bw__results">
          <p className="bw__results-label">Book on your preferred platform:</p>
          <div className="bw__ota-grid">
            {links.map(link => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bw__ota-btn"
              >
                <span className="bw__ota-name">{link.name}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3"/></svg>
              </a>
            ))}
          </div>
          <p className="bw__note">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
            Call us at <a href="tel:+12503440047">+1 (250) 344-0047</a> for direct booking discounts.
          </p>
        </div>
      )}
    </div>
  )
}

function buildLinks(checkin, checkout, guests, rooms) {
  const ci = checkin.replace(/-/g, '')
  const co = checkout.replace(/-/g, '')
  return [
    {
      name: 'Booking.com',
      url: `https://www.booking.com/searchresults.html?ss=Ponderosa+Motor+Inn+Golden+BC&checkin=${checkin}&checkout=${checkout}&group_adults=${guests}&no_rooms=${rooms}`
    },
    {
      name: 'Expedia',
      url: `https://www.expedia.ca/Hotels-Search?destination=Ponderosa+Motor+Inn+Golden+BC&startDate=${checkin}&endDate=${checkout}&adults=${guests}&rooms=${rooms}`
    },
    {
      name: 'Hotels.com',
      url: `https://www.hotels.com/search.do?q-destination=Golden+BC+Canada&q-check-in=${checkin}&q-check-out=${checkout}&q-rooms=${rooms}&q-room-0-adults=${guests}`
    },
    {
      name: 'KAYAK',
      url: `https://www.kayak.ca/hotels/Golden,BC,Canada/${checkin}/${checkout}/${guests}adults/${rooms}rooms`
    },
  ]
}

function Spinner() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ animation: 'spin 0.8s linear infinite' }}>
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  )
}
