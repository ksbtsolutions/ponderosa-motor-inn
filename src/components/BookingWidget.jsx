import { useState } from 'react';

const PLATFORMS = [
  { key: 'booking', name: 'Booking.com', color: '#003580', textColor: '#fff' },
  { key: 'expedia', name: 'Expedia',     color: '#ffcc00', textColor: '#111' },
  { key: 'kayak',   name: 'KAYAK',       color: '#FF690F', textColor: '#fff' },
  { key: 'hotels',  name: 'Hotels.com',  color: '#d4222a', textColor: '#fff' },
];

export default function BookingWidget() {
  const today = new Date().toISOString().split('T')[0];
  const tomorrow = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  const [checkin,  setCheckin]  = useState('');
  const [checkout, setCheckout] = useState('');
  const [guests,   setGuests]   = useState('2');
  const [loading,  setLoading]  = useState(false);
  const [links,    setLinks]    = useState(null);
  const [error,    setError]    = useState('');

  const nights = checkin && checkout
    ? Math.round((new Date(checkout) - new Date(checkin)) / (1000 * 60 * 60 * 24))
    : 0;

  async function checkAvailability(e) {
    e.preventDefault();
    if (!checkin || !checkout) { setError('Please select check-in and check-out dates.'); return; }
    if (nights <= 0) { setError('Check-out must be after check-in.'); return; }
    setError('');
    setLoading(true);
    try {
      const params = new URLSearchParams({ checkin, checkout, guests });
      const res = await fetch(`/api/availability?${params}`);
      const data = await res.json();
      setLinks(data.links);
    } catch {
      setError('Something went wrong — try calling us directly at 1-800-881-4233.');
    } finally {
      setLoading(false);
    }
  }

  const inp = {
    width: '100%', padding: '0.75rem 1rem',
    border: '1px solid rgba(255,255,255,0.2)', borderRadius: 3,
    fontSize: '0.9rem', color: '#fff',
    background: 'rgba(255,255,255,0.1)',
    outline: 'none', boxSizing: 'border-box',
    fontFamily: 'Inter, sans-serif',
    colorScheme: 'dark',
  };
  const lbl = {
    display: 'block', fontSize: '0.65rem', letterSpacing: '0.12em',
    textTransform: 'uppercase', color: 'rgba(255,255,255,0.55)',
    fontWeight: 600, marginBottom: '0.4rem',
  };

  return (
    <div style={{
      background: '#1A2B1A',
      border: '1px solid rgba(255,255,255,0.08)',
      borderRadius: 6, overflow: 'hidden',
    }}>
      {/* Header */}
      <div style={{ background: 'rgba(196,135,42,0.15)', padding: '1.25rem 1.5rem', borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
        <div style={{ fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: '#E5A83E', fontWeight: 600, marginBottom: '0.3rem' }}>
          Check Availability
        </div>
        <p style={{ color: 'rgba(255,255,255,0.65)', fontSize: '0.8rem', lineHeight: 1.5 }}>
          Enter your dates to see live rates on all platforms — or call us at <a href="tel:18008814233" style={{ color: '#E5A83E', fontWeight: 600, textDecoration: 'none' }}>1-800-881-4233</a>.
        </p>
      </div>

      {/* Form */}
      <form onSubmit={checkAvailability} style={{ padding: '1.5rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(140px, 1fr))', gap: '1rem', marginBottom: '1rem' }}>
          <div>
            <label style={lbl}>Check-in</label>
            <input type="date" style={inp} min={today}
              value={checkin} onChange={e => { setCheckin(e.target.value); setLinks(null); }}
              required />
          </div>
          <div>
            <label style={lbl}>Check-out</label>
            <input type="date" style={inp} min={checkin || tomorrow}
              value={checkout} onChange={e => { setCheckout(e.target.value); setLinks(null); }}
              required />
          </div>
          <div>
            <label style={lbl}>Guests</label>
            <select style={inp} value={guests} onChange={e => { setGuests(e.target.value); setLinks(null); }}>
              {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} guest{n !== 1 ? 's' : ''}</option>)}
            </select>
          </div>
        </div>

        {nights > 0 && (
          <div style={{ fontSize: '0.75rem', color: '#E5A83E', marginBottom: '0.9rem' }}>
            {nights} night{nights !== 1 ? 's' : ''} selected
          </div>
        )}

        {error && (
          <div style={{ background: 'rgba(220,50,50,0.15)', border: '1px solid rgba(220,50,50,0.3)', borderRadius: 3, padding: '0.6rem 0.9rem', fontSize: '0.82rem', color: '#ff9999', marginBottom: '1rem' }}>
            {error}
          </div>
        )}

        <button type="submit" disabled={loading}
          style={{
            width: '100%', background: '#C4872A', color: '#fff',
            border: 'none', borderRadius: 3, padding: '0.85rem',
            fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.08em',
            textTransform: 'uppercase', cursor: loading ? 'wait' : 'pointer',
            opacity: loading ? 0.7 : 1, transition: 'opacity 0.2s',
          }}>
          {loading ? 'Checking…' : 'Check Availability →'}
        </button>
      </form>

      {/* Results — platform links */}
      {links && (
        <div style={{ padding: '0 1.5rem 1.5rem' }}>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: '1.25rem', marginBottom: '1rem' }}>
            <div style={{ fontSize: '0.65rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)', marginBottom: '0.9rem' }}>
              Book on your preferred platform — same room, compare prices:
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              {PLATFORMS.map(p => (
                <a key={p.key} href={links[p.key]} target="_blank" rel="noopener noreferrer"
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    background: p.color, color: p.textColor,
                    padding: '0.75rem 1.1rem', borderRadius: 3,
                    textDecoration: 'none', transition: 'opacity 0.15s',
                  }}
                  onMouseEnter={e => e.currentTarget.style.opacity = '0.88'}
                  onMouseLeave={e => e.currentTarget.style.opacity = '1'}
                >
                  <span style={{ fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.03em' }}>{p.name}</span>
                  <span style={{ fontSize: '0.75rem', opacity: 0.85 }}>
                    {checkin && checkout ? `${checkin} → ${checkout} · ${guests} guest${guests !== '1' ? 's' : ''}` : 'View rates'} →
                  </span>
                </a>
              ))}
            </div>
          </div>
          <div style={{ textAlign: 'center', fontSize: '0.72rem', color: 'rgba(255,255,255,0.35)', lineHeight: 1.6 }}>
            Rates may vary by platform. Call us for price matching:<br/>
            <a href="tel:18008814233" style={{ color: '#E5A83E', textDecoration: 'none', fontWeight: 600 }}>1-800-881-4233</a>
          </div>
        </div>
      )}
    </div>
  );
}
