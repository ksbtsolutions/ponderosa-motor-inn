import { useState } from 'react';
import { proxyUrl } from './scenes.js';

export default function Gallery({ images }) {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fill,minmax(220px,1fr))', gap:'0.75rem' }}>
        {images.map((img, i) => (
          <div key={i} onClick={() => setLightbox(i)} style={{ position:'relative', borderRadius:4, overflow:'hidden', aspectRatio:'4/3', background:'#2a3d2a', cursor:'pointer', transition:'transform 0.2s' }}
            onMouseEnter={e => e.currentTarget.style.transform='scale(1.02)'}
            onMouseLeave={e => e.currentTarget.style.transform='scale(1)'}>
            <img
              src={proxyUrl(img.url)}
              alt={img.label}
              style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }}
              onError={e => { if (img.fallback) { e.target.src = img.fallback; } else { e.target.style.display='none'; } }}
              loading="lazy"
            />
            <div style={{ position:'absolute', bottom:0, left:0, right:0, background:'linear-gradient(transparent,rgba(0,0,0,0.65))', padding:'0.6rem 0.75rem' }}>
              <div style={{ fontSize:'0.68rem', color:'rgba(255,255,255,0.9)', letterSpacing:'0.05em' }}>{img.label}</div>
              {img.category && <div style={{ fontSize:'0.58rem', color:'#E5A83E', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:600 }}>{img.category}</div>}
            </div>
          </div>
        ))}
      </div>

      {lightbox !== null && (
        <div onClick={() => setLightbox(null)} style={{ position:'fixed', inset:0, background:'rgba(0,0,0,0.92)', zIndex:1000, display:'flex', alignItems:'center', justifyContent:'center', padding:'1rem' }}>
          <button onClick={e => { e.stopPropagation(); setLightbox(i => (i-1+images.length)%images.length); }}
            style={{ position:'absolute', left:'1rem', top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.12)', border:'none', color:'#fff', width:48, height:48, borderRadius:'50%', cursor:'pointer', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'center' }}>‹</button>
          <div style={{ maxWidth:900, width:'100%', textAlign:'center' }} onClick={e => e.stopPropagation()}>
            <img
              src={proxyUrl(images[lightbox].url)}
              alt={images[lightbox].label}
              style={{ maxWidth:'100%', maxHeight:'80vh', objectFit:'contain', borderRadius:4 }}
              onError={e => { if (images[lightbox].fallback) e.target.src = images[lightbox].fallback; }}
            />
            <p style={{ color:'rgba(255,255,255,0.7)', fontSize:'0.85rem', marginTop:'0.75rem' }}>{images[lightbox].label}</p>
          </div>
          <button onClick={e => { e.stopPropagation(); setLightbox(i => (i+1)%images.length); }}
            style={{ position:'absolute', right:'1rem', top:'50%', transform:'translateY(-50%)', background:'rgba(255,255,255,0.12)', border:'none', color:'#fff', width:48, height:48, borderRadius:'50%', cursor:'pointer', fontSize:'1.5rem', display:'flex', alignItems:'center', justifyContent:'center' }}>›</button>
          <button onClick={() => setLightbox(null)} style={{ position:'absolute', top:'1rem', right:'1rem', background:'rgba(255,255,255,0.12)', border:'none', color:'#fff', width:40, height:40, borderRadius:'50%', cursor:'pointer', fontSize:'1.1rem', display:'flex', alignItems:'center', justifyContent:'center' }}>✕</button>
        </div>
      )}
    </>
  );
}
