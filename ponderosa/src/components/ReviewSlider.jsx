import { useState, useEffect, useRef, useCallback } from 'react';
import { Stars } from './UI.jsx';

const PLATFORM_COLORS = {
  TripAdvisor: { bg: '#00aa6c', label: 'TRIPADVISOR' },
  'Booking.com': { bg: '#003580', label: 'BOOKING.COM' },
};

function ReviewCard({ r }) {
  const pc = PLATFORM_COLORS[r.platform] || { bg: '#555', label: r.platform.toUpperCase() };
  return (
    <div style={{ background: '#fff', borderRadius: 4, padding: '1.6rem', border: '1px solid #e5dfd5', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%' }}>
      <div style={{ fontSize: '2rem', color: '#e8e2d8', lineHeight: 1, marginBottom: '0.4rem', fontFamily: 'Georgia,serif' }}>"</div>
      <Stars n={r.stars} />
      <p style={{ fontSize: '0.85rem', color: '#2E2E2E', lineHeight: 1.7, flex: 1, marginBottom: '1rem', fontStyle: 'italic' }}>"{r.text}"</p>
      <div style={{ borderTop: '1px solid #f0ece6', paddingTop: '0.85rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '0.5rem' }}>
          <div>
            <div style={{ fontWeight: 600, color: '#1A2B1A', fontSize: '0.85rem' }}>{r.name}</div>
            <div style={{ fontSize: '0.72rem', color: '#6B6456' }}>{r.date}</div>
          </div>
          <div style={{ background: pc.bg, color: '#fff', fontSize: '0.58rem', fontWeight: 700, padding: '0.2rem 0.5rem', borderRadius: 2, letterSpacing: '0.06em' }}>{pc.label}</div>
        </div>
        <div style={{ marginTop: '0.4rem', fontSize: '0.7rem', color: '#C4872A', fontWeight: 600 }}>✦ {r.highlight}</div>
      </div>
    </div>
  );
}

export default function ReviewSlider({ reviews }) {
  const [page, setPage] = useState(0);
  const [cols, setCols] = useState(3);
  const timer = useRef(null);

  useEffect(() => {
    const check = () => setCols(window.innerWidth < 600 ? 1 : window.innerWidth < 900 ? 2 : 3);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  const total = Math.ceil(reviews.length / cols);
  const go = useCallback((n) => setPage(p => (p + n + total) % total), [total]);

  const startTimer = useCallback(() => {
    clearInterval(timer.current);
    timer.current = setInterval(() => go(1), 6000);
  }, [go]);

  useEffect(() => { startTimer(); return () => clearInterval(timer.current); }, [startTimer]);

  const visible = reviews.slice(page * cols, page * cols + cols);

  return (
    <div onMouseEnter={() => clearInterval(timer.current)} onMouseLeave={startTimer}>
      <div style={{ display: 'grid', gridTemplateColumns: `repeat(${cols}, 1fr)`, gap: '1.25rem', minHeight: 240 }}>
        {visible.map((r, i) => <ReviewCard key={i} r={r} />)}
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '1rem', marginTop: '1.75rem' }}>
        <button onClick={() => { go(-1); startTimer(); }}
          style={{ background: 'none', border: '1px solid #C4872A', color: '#C4872A', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>‹</button>
        <div style={{ display: 'flex', gap: 6 }}>
          {Array.from({ length: total }).map((_, i) => (
            <button key={i} onClick={() => { setPage(i); startTimer(); }}
              style={{ width: i === page ? 20 : 8, height: 8, borderRadius: 4, border: 'none', background: i === page ? '#C4872A' : '#d5cfc4', cursor: 'pointer', transition: 'all 0.3s', padding: 0 }} />
          ))}
        </div>
        <button onClick={() => { go(1); startTimer(); }}
          style={{ background: 'none', border: '1px solid #C4872A', color: '#C4872A', width: 36, height: 36, borderRadius: '50%', cursor: 'pointer', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>›</button>
      </div>
      <p style={{ textAlign: 'center', fontSize: '0.7rem', color: '#6B6456', marginTop: '1rem' }}>
        Reviews sourced from TripAdvisor and Booking.com
      </p>
    </div>
  );
}
