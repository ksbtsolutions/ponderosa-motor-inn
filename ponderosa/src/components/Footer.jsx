import { Link } from 'react-router-dom';
import { travelLinks } from '../data/index.js';
const LINKS = [{to:'/accommodations',l:'Rooms'},{to:'/packages',l:'Packages'},{to:'/activities',l:'Activities'},{to:'/location',l:'Location'},{to:'/contact',l:'Contact'}];
export default function Footer() {
  return (
    <footer style={{ background:'#111811', color:'#5a6a4a', padding:'3rem 2rem 2rem', textAlign:'center' }}>
      <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.3rem', color:'#E5A83E', marginBottom:'0.4rem' }}>Ponderosa Motor Inn</div>
      <div style={{ fontSize:'0.65rem', letterSpacing:'0.16em', textTransform:'uppercase', color:'#2e3e1e', marginBottom:'1.75rem' }}>Golden, British Columbia, Canada</div>
      <div style={{ display:'flex', gap:'0.6rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'1.75rem' }}>
        {travelLinks.map((l,i) => (
          <a key={i} href={l.url} target="_blank" rel="noopener noreferrer" style={{ background:l.color, color:l.textColor||'#fff', fontSize:'0.65rem', fontWeight:700, padding:'0.3rem 0.75rem', borderRadius:2, textDecoration:'none', letterSpacing:'0.06em' }}>{l.name}</a>
        ))}
      </div>
      <div className="footer-links" style={{ marginBottom:'1.5rem' }}>
        {LINKS.map(({to,l}) => <Link key={to} to={to} style={{ color:'#4a5a3a', textDecoration:'none', fontSize:'0.78rem', letterSpacing:'0.08em', textTransform:'uppercase' }}>{l}</Link>)}
        <a href="tel:18008814233" style={{ color:'#E5A83E', textDecoration:'none', fontSize:'0.78rem', fontWeight:600 }}>1-800-881-4233</a>
      </div>
      <div style={{ fontSize:'0.68rem', color:'#2a3a1a', marginBottom:'0.25rem' }}>1206 Trans-Canada Hwy, Golden, BC V0A 1H1</div>
      <div style={{ fontSize:'0.68rem', color:'#253015' }}>© {new Date().getFullYear()} Ponderosa Motor Inn. All rights reserved.</div>
    </footer>
  );
}
