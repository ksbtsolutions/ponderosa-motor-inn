import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/accommodations', label: 'Rooms' },
  { to: '/packages', label: 'Packages' },
  { to: '/activities', label: 'Activities' },
  { to: '/location', label: 'Location' },
  { to: '/contact', label: 'Contact' },
];

export default function Nav() {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav style={{ position:'fixed', top:0, left:0, right:0, zIndex:200, background:'#1A2B1A', height:64, display:'flex', alignItems:'center', justifyContent:'space-between', padding:'0 1.5rem', borderBottom:'1px solid rgba(255,255,255,0.06)' }}>
        <Link to="/" onClick={() => setOpen(false)} style={{ textDecoration:'none', flexShrink:0 }}>
          <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.05rem', color:'#E5A83E', lineHeight:1.2 }}>Ponderosa Motor Inn</div>
          <div style={{ fontSize:'0.58rem', color:'#6a7a4a', letterSpacing:'0.14em', textTransform:'uppercase', fontWeight:300 }}>Golden, British Columbia</div>
        </Link>

        <div className="nav-desktop-links" style={{ display:'flex', alignItems:'center', gap:'1.4rem' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} style={{ color:pathname===l.to?'#E5A83E':'#bbb', textDecoration:'none', fontSize:'0.74rem', letterSpacing:'0.08em', textTransform:'uppercase', fontWeight:500, borderBottom:pathname===l.to?'1px solid #C4872A':'1px solid transparent', paddingBottom:'2px', whiteSpace:'nowrap' }}>{l.label}</Link>
          ))}
          <Link to="/contact" style={{ background:'#C4872A', color:'#fff', padding:'0.45rem 1rem', borderRadius:3, textDecoration:'none', fontSize:'0.74rem', fontWeight:600, letterSpacing:'0.07em', textTransform:'uppercase', whiteSpace:'nowrap' }}>Book Now</Link>
        </div>

        <button className="nav-hamburger" onClick={() => setOpen(o => !o)} style={{ background:'none', border:'none', cursor:'pointer', color:'#ccc', padding:'0.5rem', display:'none', flexDirection:'column', justifyContent:'center', gap:4 }} aria-label="Toggle menu">
          <span style={{ display:'block', width:22, height:2, background:'#ccc', transition:'all 0.2s', transform:open?'rotate(45deg) translate(3px,3px)':'none' }}/>
          <span style={{ display:'block', width:22, height:2, background:'#ccc', transition:'all 0.2s', opacity:open?0:1 }}/>
          <span style={{ display:'block', width:22, height:2, background:'#ccc', transition:'all 0.2s', transform:open?'rotate(-45deg) translate(3px,-3px)':'none' }}/>
        </button>
      </nav>

      {open && (
        <div style={{ position:'fixed', top:64, left:0, right:0, zIndex:199, background:'#1A2B1A', borderTop:'1px solid rgba(255,255,255,0.08)', paddingBottom:'1.5rem' }}>
          {NAV_LINKS.map(l => (
            <Link key={l.to} to={l.to} onClick={() => setOpen(false)} style={{ display:'block', padding:'0.9rem 1.75rem', color:pathname===l.to?'#E5A83E':'#ccc', textDecoration:'none', fontSize:'0.85rem', letterSpacing:'0.06em', textTransform:'uppercase', borderBottom:'1px solid rgba(255,255,255,0.05)' }}>{l.label}</Link>
          ))}
          <div style={{ padding:'1rem 1.75rem' }}>
            <Link to="/contact" onClick={() => setOpen(false)} style={{ display:'block', textAlign:'center', background:'#C4872A', color:'#fff', padding:'0.7rem 1.5rem', borderRadius:3, textDecoration:'none', fontSize:'0.85rem', fontWeight:600, letterSpacing:'0.07em', textTransform:'uppercase' }}>Book Now</Link>
          </div>
          <div style={{ padding:'0 1.75rem', textAlign:'center' }}>
            <a href="tel:18008814233" style={{ color:'#E5A83E', textDecoration:'none', fontSize:'1rem', fontWeight:600 }}>1-800-881-4233</a>
          </div>
        </div>
      )}
    </>
  );
}
