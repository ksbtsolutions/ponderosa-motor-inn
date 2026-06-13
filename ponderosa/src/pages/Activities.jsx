import { Link } from 'react-router-dom';
import { PageHero, Sec, Head, Btn } from '../components/UI.jsx';
import Gallery from '../components/Gallery.jsx';
import { activities, goldenImages } from '../data/index.js';

export default function Activities() {
  return (
    <div>
      <PageHero eyebrow="Activities" title="Adventure at Every Season"
        subtitle="Golden isn't just a stopover — it's a destination. World-class ski, bike, hike, raft, and more, all within minutes of your room."/>

      <Sec bg="#F5F0E8">
        <div className="activity-grid">
          {activities.map((a,i) => (
            <div key={i} style={{ background:'#fff', borderRadius:4, border:'1px solid #e5dfd5', borderLeft:'3px solid #C4872A', overflow:'hidden' }}>
              {a.img && (
                <div style={{ height:160, overflow:'hidden', position:'relative' }}>
                  <img src={a.img} alt={a.name} style={{ width:'100%', height:'100%', objectFit:'cover' }} onError={e=>e.target.style.display='none'} loading="lazy"/>
                  <div style={{ position:'absolute', top:'0.6rem', right:'0.6rem', background:'rgba(0,0,0,0.55)', color:'#E5A83E', fontSize:'0.6rem', fontWeight:600, textTransform:'uppercase', letterSpacing:'0.1em', padding:'0.2rem 0.5rem', borderRadius:2 }}>{a.season}</div>
                </div>
              )}
              <div style={{ padding:'1.25rem', display:'flex', gap:'0.9rem', alignItems:'flex-start' }}>
                <span style={{ fontSize:'1.6rem', flexShrink:0 }}>{a.icon}</span>
                <div>
                  {!a.img && <div style={{ display:'flex', alignItems:'center', gap:'0.6rem', flexWrap:'wrap', marginBottom:'0.3rem' }}>
                    <div style={{ fontSize:'0.68rem', color:'#C4872A', textTransform:'uppercase', letterSpacing:'0.1em', fontWeight:600 }}>{a.season}</div>
                  </div>}
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.05rem', color:'#1A2B1A', marginBottom:'0.35rem' }}>{a.name}</div>
                  <p style={{ fontSize:'0.82rem', color:'#6B6456', lineHeight:1.65 }}>{a.desc}</p>
                  {a.link && <a href={a.link} target="_blank" rel="noopener noreferrer" style={{ fontSize:'0.75rem', color:'#C4872A', fontWeight:600, textDecoration:'none', display:'inline-block', marginTop:'0.6rem' }}>Official website →</a>}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* GOLDEN PHOTO GALLERY */}
      <Sec bg="#1A2B1A">
        <Head light eyebrow="Golden, BC" title="See It for Yourself" body="Photos from around Golden and the surrounding national parks. Click any image to enlarge."/>
        <Gallery images={goldenImages}/>
        <p style={{ textAlign:'center', marginTop:'1.5rem', fontSize:'0.72rem', color:'#5a6a4a' }}>
          Photos courtesy of Tourism Golden · <a href="https://www.tourismgolden.com" target="_blank" rel="noopener noreferrer" style={{ color:'#E5A83E', textDecoration:'none' }}>tourismgolden.com</a>
        </p>
      </Sec>

      {/* SKI FEATURE */}
      <Sec bg="#F5F0E8">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'3rem', alignItems:'center' }}>
          <div>
            <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.55rem' }}>Featured Attraction</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.7rem,4vw,2.4rem)', color:'#1A2B1A', lineHeight:1.2, marginBottom:'1rem' }}>Kicking Horse Mountain Resort</h2>
            <p style={{ color:'#6B6456', fontSize:'0.92rem', lineHeight:1.75, marginBottom:'1.5rem' }}>One of Canada's premier ski destinations sits 5 minutes from our front door. Over 2,800m of vertical — the fourth largest in Canada — and legendary champagne powder. In summer, the mountain offers biking, gondola rides, and visits to Boo the grizzly bear.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.7rem', marginBottom:'1.75rem' }}>
              {[['2,800m','Vertical Drop'],['120+','Marked Runs'],['4','Alpine Bowls'],['5 min','From Ponderosa']].map(([n,l],i)=>(
                <div key={i} style={{ background:'#fff', padding:'0.9rem', borderRadius:3, border:'1px solid #e5dfd5' }}>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.4rem', color:'#C4872A' }}>{n}</div>
                  <div style={{ fontSize:'0.65rem', color:'#6B6456', textTransform:'uppercase', letterSpacing:'0.1em', marginTop:'0.15rem' }}>{l}</div>
                </div>
              ))}
            </div>
            <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <Btn href="https://www.kickinghorseresort.com" target="_blank" rel="noopener noreferrer">Resort Website</Btn>
              <Btn variant="outline" href="/packages">See Ski Package</Btn>
            </div>
          </div>
          <div style={{ borderRadius:4, overflow:'hidden', aspectRatio:'4/3' }}>
            <img src="https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2022-11/Kicking-Horse-Mountain-Resort-ski-Golden-BC-winter.jpg"
              alt="Kicking Horse Mountain Resort" style={{ width:'100%', height:'100%', objectFit:'cover' }}
              onError={e=>e.target.parentNode.style.background='#1A2B1A'} loading="lazy"/>
          </div>
        </div>
      </Sec>

      {/* SKYBRIDGE FEATURE */}
      <Sec bg="#fff">
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(260px,1fr))', gap:'3rem', alignItems:'center' }}>
          <div style={{ borderRadius:4, overflow:'hidden', aspectRatio:'4/3' }}>
            <img src="https://www.tourismgolden.com/sites/default/files/styles/hero_image/public/2024-02/Golden-Skybridge-suspension-bridge-canyon-BC.jpg"
              alt="Golden Skybridge" style={{ width:'100%', height:'100%', objectFit:'cover' }}
              onError={e=>e.target.parentNode.style.background='#1A2B1A'} loading="lazy"/>
          </div>
          <div>
            <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.55rem' }}>Must-See Attraction</p>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'clamp(1.7rem,4vw,2.4rem)', color:'#1A2B1A', lineHeight:1.2, marginBottom:'1rem' }}>Golden Skybridge</h2>
            <p style={{ color:'#6B6456', fontSize:'0.92rem', lineHeight:1.75, marginBottom:'1.5rem' }}>Canada's highest suspension bridges — walk 426 feet above Hospital Creek canyon with sweeping views of the Rocky and Purcell mountain ranges. Plus zipline, mountain coaster, canyon swing, and axe throwing. Just 2 minutes from Highway 1.</p>
            <div style={{ display:'flex', gap:'1rem', flexWrap:'wrap' }}>
              <Btn href="https://goldenskybridge.com" target="_blank" rel="noopener noreferrer">Book Tickets</Btn>
            </div>
          </div>
        </div>
      </Sec>

      <Sec bg="#F5F0E8" py="4rem" style={{ textAlign:'center' }}>
        <Head eyebrow="Plan Your Trip" title="We Know Golden" body="Call us and we'll help plan your days — trail recommendations to booking tips. It's part of the stay." center/>
        <div style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap' }}>
          <Btn href="tel:18008814233">Call 1-800-881-4233</Btn>
          <Btn variant="outline" href="/packages">View Packages</Btn>
        </div>
      </Sec>
    </div>
  );
}
