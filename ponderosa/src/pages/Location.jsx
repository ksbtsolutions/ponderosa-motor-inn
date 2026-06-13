import { PageHero, Sec, Head, Btn } from '../components/UI.jsx';
import { parks } from '../data/index.js';

export default function Location() {
  return (
    <div>
      <PageHero eyebrow="Location" title="Golden, BC — Canada's Mountain Crossroads"
        subtitle="Nestled between the Rocky and Selkirk ranges, Golden is one of the most scenically positioned towns in Canada."/>
      <Sec bg="#F5F0E8">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(280px,1fr))', gap:'4rem', alignItems:'start' }}>
          <div>
            <Head eyebrow="Getting Here" title="On the Trans-Canada, Between Two Ranges"
              body="Golden sits on Highway 1 between Calgary (3 hrs east) and Vancouver (6 hrs west), at the junction of Hwy 95 south to the Kootenays."/>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.85rem', marginBottom:'1.5rem' }}>
              {[['Calgary','3 hrs east on Hwy 1'],['Banff','1.5 hrs east on Hwy 1'],['Revelstoke','1.5 hrs west on Hwy 1'],['Vancouver','6 hrs west on Hwy 1'],['Kelowna','3 hrs south on Hwys 95 & 97'],['Kamloops','2.5 hrs south on Hwy 1']].map(([f,t],i)=>(
                <div key={i} style={{ display:'flex', justifyContent:'space-between', alignItems:'center', padding:'0.75rem 1.1rem', background:'#fff', borderRadius:3, border:'1px solid #e5dfd5' }}>
                  <span style={{ fontWeight:600, color:'#1A2B1A', fontSize:'0.87rem' }}>{f}</span>
                  <span style={{ color:'#6B6456', fontSize:'0.8rem' }}>{t}</span>
                </div>
              ))}
            </div>
            <div style={{ padding:'1.1rem 1.25rem', background:'#fff', borderRadius:4, border:'1px solid #e5dfd5', marginBottom:'1rem' }}>
              <div style={{ fontWeight:600, color:'#1A2B1A', fontSize:'0.87rem', marginBottom:'0.4rem' }}>📍 Our Address</div>
              <p style={{ fontSize:'0.82rem', color:'#6B6456', lineHeight:1.65 }}>
                Ponderosa Motor Inn<br/>1206 Trans-Canada Hwy, Golden, BC V0A 1H1<br/>
                <a href="tel:12503442205" style={{ color:'#C4872A', textDecoration:'none', fontWeight:600 }}>250-344-2205</a>
                {' · '}
                <a href="tel:18008814233" style={{ color:'#C4872A', textDecoration:'none', fontWeight:600 }}>1-800-881-4233</a>
              </p>
            </div>
            <a href="https://maps.google.com/?q=1206+Trans-Canada+Hwy+Golden+BC" target="_blank" rel="noopener noreferrer"
              style={{ display:'block', textAlign:'center', background:'#C4872A', color:'#fff', padding:'0.7rem', borderRadius:3, textDecoration:'none', fontSize:'0.8rem', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase' }}>
              Open in Google Maps →
            </a>
          </div>
          <div>
            {/* Scenic overview photo */}
            <div style={{ borderRadius:4, overflow:'hidden', marginBottom:'1rem', aspectRatio:'16/9' }}>
              <img src="https://www.tourismgolden.com/sites/default/files/Golden-BC-scenic-Kicking-Horse-Eagles-Eye-sunset%20credit%20Best.jpg"
                alt="Golden BC scenic view" style={{ width:'100%', height:'100%', objectFit:'cover' }}
                onError={e=>e.target.parentNode.style.background='#1A2B1A'} loading="lazy"/>
            </div>
            <p style={{ fontSize:'0.75rem', color:'#6B6456', textAlign:'center', lineHeight:1.55 }}>
              View from Eagle's Eye Restaurant — Kicking Horse Mountain Resort · Photo: Tourism Golden
            </p>
            <div style={{ marginTop:'1rem', padding:'1.1rem 1.25rem', background:'#1A2B1A', borderRadius:4 }}>
              <div style={{ fontSize:'0.7rem', color:'#E5A83E', textTransform:'uppercase', letterSpacing:'0.12em', fontWeight:600, marginBottom:'0.5rem' }}>Local Resources</div>
              {[['Tourism Golden','https://www.tourismgolden.com'],['Golden Skybridge','https://goldenskybridge.com'],['Kicking Horse Resort','https://www.kickinghorseresort.com'],['Parks Canada — Yoho','https://www.pc.gc.ca/en/pn-np/bc/yoho']].map(([name,url],i)=>(
                <a key={i} href={url} target="_blank" rel="noopener noreferrer"
                  style={{ display:'block', color:'#9aaa8a', fontSize:'0.82rem', textDecoration:'none', padding:'0.3rem 0', borderBottom:'1px solid rgba(255,255,255,0.07)' }}>
                  {name} →
                </a>
              ))}
            </div>
          </div>
        </div>
      </Sec>

      <Sec bg="#1A2B1A">
        <Head light eyebrow="National Parks" title="Six Parks Within Reach" body="No other town in Canada gives you access to this many national parks. Golden is your basecamp."/>
        <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
          {parks.map((p,i)=>(
            <div key={i} className="park-row" style={{ background:'rgba(255,255,255,0.04)', borderRadius:4, padding:'1.4rem 1.6rem', border:'1px solid rgba(255,255,255,0.07)' }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.6rem', color:'#E5A83E', fontWeight:700, lineHeight:1 }}>{i+1}</div>
              <div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.05rem', color:'#fff', marginBottom:'0.3rem' }}>{p.name}</div>
                <p style={{ fontSize:'0.8rem', color:'#8a9a7a', lineHeight:1.6, marginBottom:'0.5rem' }}>{p.desc}</p>
                <div style={{ display:'flex', gap:'0.4rem', flexWrap:'wrap' }}>
                  {p.highlights.map((h,j)=>(
                    <span key={j} style={{ background:'rgba(196,135,42,0.15)', color:'#E5A83E', fontSize:'0.62rem', padding:'0.18rem 0.5rem', borderRadius:2, letterSpacing:'0.06em' }}>{h}</span>
                  ))}
                </div>
              </div>
              <div className="park-dist-col" style={{ textAlign:'right', whiteSpace:'nowrap' }}>
                <div style={{ fontSize:'0.62rem', color:'#5a6a4a', textTransform:'uppercase', letterSpacing:'0.1em' }}>Drive</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.05rem', color:'#E5A83E' }}>{p.dist}</div>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      <Sec bg="#F5F0E8" py="4rem" style={{ textAlign:'center' }}>
        <Head eyebrow="Plan Your Route" title="We'll Help You Plan" body="Call us — we've been sending guests to these parks for years and know what's worth the drive." center/>
        <Btn href="tel:18008814233">Call 1-800-881-4233</Btn>
      </Sec>
    </div>
  );
}
