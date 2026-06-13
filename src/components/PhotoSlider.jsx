import { useState, useEffect, useRef, useCallback } from 'react';
import { proxyUrl } from './scenes.js';

export default function PhotoSlider({ photos }) {
  const [idx, setIdx] = useState(0);
  const timer = useRef(null);

  const go = useCallback((n) => setIdx(i => (i + n + photos.length) % photos.length), [photos.length]);
  const startTimer = useCallback(() => { clearInterval(timer.current); timer.current = setInterval(() => go(1), 4500); }, [go]);

  useEffect(() => { startTimer(); return () => clearInterval(timer.current); }, [startTimer]);

  return (
    <div className="photo-slider" onMouseEnter={() => clearInterval(timer.current)} onMouseLeave={startTimer}>
      {photos.map((p, i) => (
        <div key={i} style={{ position:'absolute', inset:0, opacity:i===idx?1:0, transition:'opacity 0.7s ease' }}>
          <img
            src={proxyUrl(p.url)}
            alt={p.label}
            style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
            onError={e => { if (p.fallback && e.target.src !== p.fallback) { e.target.src = p.fallback; } }}
            loading={i === 0 ? 'eager' : 'lazy'}
          />
          <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent,rgba(0,0,0,0.6))', padding:'2rem 1.25rem 1rem' }}>
            <span style={{ color:'rgba(255,255,255,0.9)', fontSize:'0.78rem', letterSpacing:'0.06em' }}>{p.label}</span>
          </div>
        </div>
      ))}
      {[-1,1].map(dir => (
        <button key={dir} onClick={() => { go(dir); startTimer(); }}
          style={{ position:'absolute', top:'50%', transform:'translateY(-50%)', [dir===-1?'left':'right']:'0.75rem', background:'rgba(0,0,0,0.45)', border:'none', color:'#fff', width:38, height:38, borderRadius:'50%', cursor:'pointer', fontSize:'1.1rem', display:'flex', alignItems:'center', justifyContent:'center', transition:'background 0.2s', zIndex:2 }}
          onMouseEnter={e => e.currentTarget.style.background='rgba(196,135,42,0.85)'}
          onMouseLeave={e => e.currentTarget.style.background='rgba(0,0,0,0.45)'}
          aria-label={dir===-1?'Previous photo':'Next photo'}>
          {dir===-1?'‹':'›'}
        </button>
      ))}
      <div style={{ position:'absolute', bottom:'0.8rem', left:'50%', transform:'translateX(-50%)', display:'flex', gap:6, zIndex:2 }}>
        {photos.map((_,i) => (
          <button key={i} onClick={() => { setIdx(i); startTimer(); }}
            style={{ width:i===idx?20:8, height:8, borderRadius:4, border:'none', background:i===idx?'#E5A83E':'rgba(255,255,255,0.4)', cursor:'pointer', transition:'all 0.3s', padding:0 }}
            aria-label={`Photo ${i+1}`}/>
        ))}
      </div>
    </div>
  );
}
