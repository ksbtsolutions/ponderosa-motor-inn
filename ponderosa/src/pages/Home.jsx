import { Link } from 'react-router-dom';
import { MtnDivider, Sec, Head, Btn } from '../components/UI.jsx';
import PhotoSlider from '../components/PhotoSlider.jsx';
import ReviewSlider from '../components/ReviewSlider.jsx';
import { propertyPhotos, rooms, parks, activities, reviews, travelLinks } from '../data/index.js';

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <div style={{ minHeight:'100svh', background:'#1A2B1A', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', textAlign:'center', padding:'6rem 1.5rem 0', position:'relative', overflow:'hidden' }}>
        <div style={{ position:'absolute', inset:0, background:'radial-gradient(ellipse at 60% 35%,rgba(196,135,42,0.09) 0%,transparent 65%)', pointerEvents:'none' }}/>
        <p style={{ fontSize:'0.7rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'#E5A83E', fontWeight:500, marginBottom:'1.2rem' }}>Gateway to Six National Parks</p>
        <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(2.2rem,7vw,5rem)', color:'#fff', lineHeight:1.1, maxWidth:820, marginBottom:'1.2rem' }}>
          Where the Rockies Meet <em style={{ color:'#E5A83E' }}>Golden</em> Hospitality
        </h1>
        <p style={{ color:'#a8b89a', fontSize:'clamp(0.9rem,2vw,1.05rem)', fontWeight:300, maxWidth:480, marginBottom:'2.25rem', lineHeight:1.75 }}>
          85 clean, spacious rooms nestled between the Rocky and Selkirk mountain ranges in scenic Golden, BC.
        </p>
        <div className="hero-actions" style={{ display:'flex', gap:'1rem', flexWrap:'wrap', justifyContent:'center', marginBottom:'1.75rem' }}>
          <Btn href="/contact">Reserve a Room</Btn>
          <Btn variant="ghost" href="/accommodations">View Rooms</Btn>
        </div>
        <p style={{ color:'#5a6a4a', fontSize:'0.8rem', letterSpacing:'0.06em', marginBottom:'2.5rem' }}>
          Reservations: <a href="tel:18008814233" style={{ color:'#E5A83E', textDecoration:'none', fontWeight:600, fontSize:'0.95rem' }}>1-800-881-4233</a>
        </p>
        <MtnDivider from="#1A2B1A" to="#fff"/>
      </div>

      {/* STATS */}
      <div className="stats-bar" style={{ background:'#fff', borderBottom:'1px solid #e8e2d8' }}>
        {[['85','Rooms & Suites'],['6','National Parks'],['2','Mountain Ranges'],['24/7','Front Desk']].map(([n,l],i,a)=>(
          <div key={i} className="stat-item">
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'2rem', color:'#1A2B1A', fontWeight:700, lineHeight:1 }}>{n}</div>
            <div style={{ fontSize:'0.68rem', color:'#6B6456', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:'0.35rem' }}>{l}</div>
          </div>
        ))}
      </div>

      {/* ABOUT + PHOTO SLIDER */}
      <Sec bg="#F5F0E8">
        <div className="about-grid">
          <div>
            <Head eyebrow="Our Story" title="Affordable Comfort in the Heart of the Rockies"
              body="The Ponderosa Motor Inn has welcomed travellers to Golden for decades. Clean rooms, honest prices — because the real luxury is what's outside your door: six national parks, world-class skiing, and mountain scenery that never gets old."/>
            <div style={{ display:'flex', flexDirection:'column', gap:'0.6rem', marginBottom:'2rem' }}>
              {['Free parking — RVs & trailers welcome','Pet-friendly rooms available','Complimentary breakfast included','Hot tub on site','Wi-Fi throughout','24/7 front desk'].map((f,i) => (
                <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.65rem', fontSize:'0.87rem', color:'#2E2E2E' }}>
                  <span style={{ width:5, height:5, borderRadius:'50%', background:'#C4872A', flexShrink:0, display:'inline-block' }}/>
                  {f}
                </div>
              ))}
            </div>
            <Btn variant="outline" href="/accommodations">See All Rooms →</Btn>
          </div>
          <PhotoSlider photos={propertyPhotos}/>
        </div>
      </Sec>

      {/* BOOKING LINKS */}
      <Sec bg="#fff" py="3rem">
        <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'1rem', textAlign:'center' }}>Book on your favourite platform</p>
        <div style={{ display:'flex', gap:'0.75rem', justifyContent:'center', flexWrap:'wrap' }}>
          {travelLinks.map((l,i) => (
            <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
              style={{ background:l.color, color:l.textColor||'#fff', fontSize:'0.75rem', fontWeight:700, padding:'0.6rem 1.2rem', borderRadius:3, textDecoration:'none', letterSpacing:'0.06em', display:'flex', flexDirection:'column', alignItems:'center', gap:2, minWidth:90 }}>
              <span>{l.name}</span>
              <span style={{ fontSize:'0.6rem', opacity:0.8, fontWeight:400 }}>{l.desc}</span>
            </a>
          ))}
        </div>
      </Sec>

      {/* REVIEWS */}
      <Sec bg="#F5F0E8">
        <Head eyebrow="Guest Reviews" title="What Travellers Are Saying"
          body="Sourced from TripAdvisor and Booking.com — real stays, real opinions."/>
        <ReviewSlider reviews={reviews}/>
      </Sec>

      {/* FEATURED ROOMS */}
      <Sec bg="#fff">
        <Head eyebrow="Accommodations" title="Find Your Room" body="Every room kept clean, quiet, and ready — so you wake up refreshed for the day ahead."/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'1.25rem' }}>
          {rooms.slice(0,3).map(r => (
            <Link key={r.id} to="/accommodations" style={{ border:'1px solid #e5dfd5', borderRadius:4, overflow:'hidden', textDecoration:'none', background:'#fff', display:'block', transition:'box-shadow 0.2s,transform 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 8px 28px rgba(26,43,26,0.1)';e.currentTarget.style.transform='translateY(-2px)'}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='none'}}>
              <div style={{ height:150, background:'linear-gradient(135deg,#3a4a2e,#1A2B1A)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'2.5rem', position:'relative' }}>
                {r.icon}
                <div style={{ position:'absolute', top:'0.75rem', left:'0.75rem', background:'#C4872A', color:'#fff', fontSize:'0.6rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'0.25rem 0.55rem', borderRadius:2, fontWeight:600 }}>{r.tag}</div>
              </div>
              <div style={{ padding:'1.4rem' }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.15rem', color:'#1A2B1A', marginBottom:'0.4rem' }}>{r.title}</div>
                <p style={{ fontSize:'0.82rem', color:'#6B6456', lineHeight:1.6, marginBottom:'0.9rem' }}>{r.desc}</p>
                <span style={{ fontSize:'0.75rem', color:'#C4872A', fontWeight:600, letterSpacing:'0.06em', textTransform:'uppercase' }}>View details →</span>
              </div>
            </Link>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:'2.25rem' }}>
          <Btn variant="outline" href="/accommodations">View All Accommodations</Btn>
        </div>
      </Sec>

      {/* PARKS TEASER */}
      <Sec bg="#1A2B1A">
        <Head light eyebrow="Why Golden" title="Six Parks. One Address." body="Golden sits at a rare crossroads — more national parks reachable from here than anywhere else in Canada."/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1px', background:'rgba(255,255,255,0.07)', border:'1px solid rgba(255,255,255,0.07)', borderRadius:4, overflow:'hidden' }}>
          {parks.map((p,i) => (
            <div key={i} style={{ padding:'1.6rem', background:'rgba(255,255,255,0.02)', transition:'background 0.2s' }}
              onMouseEnter={e=>e.currentTarget.style.background='rgba(196,135,42,0.1)'}
              onMouseLeave={e=>e.currentTarget.style.background='rgba(255,255,255,0.02)'}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1rem', color:'#fff', marginBottom:'0.3rem' }}>{p.name}</div>
              <div style={{ fontSize:'0.68rem', color:'#E5A83E', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:500, marginBottom:'0.45rem' }}>{p.dist} drive</div>
              <p style={{ fontSize:'0.78rem', color:'#7a8a6a', lineHeight:1.55 }}>{p.desc.split('.')[0]}.</p>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:'2.25rem' }}>
          <Btn href="/location">Explore the Location</Btn>
        </div>
      </Sec>

      {/* ACTIVITIES TEASER */}
      <Sec bg="#F5F0E8">
        <Head eyebrow="Things to Do" title="Adventure at Every Season"/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(240px,1fr))', gap:'1.1rem' }}>
          {activities.filter(a => a.img).slice(0,4).map((a,i) => (
            <div key={i} style={{ borderRadius:4, overflow:'hidden', position:'relative', aspectRatio:'4/3', background:'#1A2B1A' }}>
              <img src={a.img} alt={a.name} style={{ width:'100%', height:'100%', objectFit:'cover', display:'block' }} onError={e=>e.target.style.display='none'} loading="lazy"/>
              <div style={{ position:'absolute', inset:0, background:'linear-gradient(transparent 30%,rgba(0,0,0,0.75))' }}/>
              <div style={{ position:'absolute', bottom:0, left:0, right:0, padding:'1.25rem' }}>
                <div style={{ fontSize:'1.5rem', marginBottom:'0.3rem' }}>{a.icon}</div>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1rem', color:'#fff', marginBottom:'0.2rem' }}>{a.name}</div>
                <div style={{ fontSize:'0.68rem', color:'#E5A83E', textTransform:'uppercase', letterSpacing:'0.08em' }}>{a.season}</div>
              </div>
            </div>
          ))}
        </div>
        <div style={{ textAlign:'center', marginTop:'2.25rem' }}>
          <Btn variant="outline" href="/activities">All Activities</Btn>
        </div>
      </Sec>

      {/* BOOK CTA */}
      <Sec bg="#C4872A">
        <div className="book-cta">
          <div>
            <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'rgba(255,255,255,0.6)', fontWeight:600, marginBottom:'0.5rem' }}>Ready to Visit?</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.5rem,4vw,2.3rem)', color:'#fff', lineHeight:1.2, marginBottom:'0.5rem' }}>Book Your Stay in Golden</h2>
            <p style={{ color:'rgba(255,255,255,0.8)', fontSize:'0.9rem' }}>Call us directly — we're happy to help with packages, group rates, and local tips.</p>
          </div>
          <div style={{ display:'flex', flexDirection:'column', gap:'0.9rem', alignItems:'flex-start' }}>
            <Btn variant="white" href="tel:18008814233">Call 1-800-881-4233</Btn>
            <Btn variant="ghost" href="/contact">Send an Enquiry</Btn>
          </div>
        </div>
      </Sec>
    </div>
  );
}
