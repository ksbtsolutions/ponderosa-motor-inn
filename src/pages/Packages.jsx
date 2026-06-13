import { PageHero, Sec, Btn } from '../components/UI.jsx';
import { packages } from '../data/index.js';

export default function Packages() {
  return (
    <div>
      <PageHero eyebrow="Packages" title="More Stay. More Adventure."
        subtitle="Bundle your stay with activities and save. Packages designed around how people actually want to experience Golden."/>
      <Sec bg="#F5F0E8">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:'1.4rem' }}>
          {packages.map(p=>(
            <div key={p.id} style={{ background:'#fff', borderRadius:4, border:'1px solid #e5dfd5', overflow:'hidden', display:'flex', flexDirection:'column' }}>
              <div style={{ background:'linear-gradient(135deg,#2a3d2a,#1A2B1A)', padding:'1.75rem', display:'flex', justifyContent:'space-between', alignItems:'flex-start' }}>
                <div>
                  <div style={{ fontSize:'1.9rem', marginBottom:'0.6rem' }}>{p.icon}</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.3rem', color:'#fff' }}>{p.title}</div>
                </div>
                <span style={{ background:'#C4872A', color:'#fff', fontSize:'0.6rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'0.25rem 0.55rem', borderRadius:2, fontWeight:600, whiteSpace:'nowrap', flexShrink:0 }}>{p.season}</span>
              </div>
              <div style={{ padding:'1.6rem', flex:1, display:'flex', flexDirection:'column' }}>
                <p style={{ fontSize:'0.85rem', color:'#6B6456', lineHeight:1.7, marginBottom:'1.4rem' }}>{p.desc}</p>
                <div style={{ marginBottom:'1.6rem', flex:1 }}>
                  <div style={{ fontSize:'0.67rem', letterSpacing:'0.12em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.65rem' }}>Package Includes</div>
                  {p.includes.map((item,i)=>(
                    <div key={i} style={{ display:'flex', alignItems:'flex-start', gap:'0.55rem', fontSize:'0.82rem', color:'#2E2E2E', marginBottom:'0.45rem' }}>
                      <span style={{ color:'#C4872A', fontWeight:700, flexShrink:0 }}>✓</span>{item}
                    </div>
                  ))}
                </div>
                <Btn full href="/contact">Enquire About This Package</Btn>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop:'2.5rem', padding:'1.75rem', background:'#1A2B1A', borderRadius:4, display:'flex', gap:'1.5rem', alignItems:'center', flexWrap:'wrap', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.15rem', color:'#fff', marginBottom:'0.35rem' }}>Need a custom package?</div>
            <p style={{ color:'#7a8a6a', fontSize:'0.82rem' }}>Group bookings, extended stays, wedding parties — call us and we'll work something out.</p>
          </div>
          <Btn href="tel:18008814233">Call 1-800-881-4233</Btn>
        </div>
      </Sec>
    </div>
  );
}
