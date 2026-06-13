import { useState } from 'react';
import { PageHero, Sec, Head, Btn } from '../components/UI.jsx';
import ReviewSlider from '../components/ReviewSlider.jsx';
import PhotoSlider from '../components/PhotoSlider.jsx';
import { rooms, reviews, propertyPhotos } from '../data/index.js';

export default function Accommodations() {
  const [sel, setSel] = useState(null);
  return (
    <div>
      <PageHero eyebrow="Accommodations" title="Clean, Comfortable Rooms in the Rockies"
        subtitle="85 units across multiple room types — from solo travellers to families on extended stays. Every room is kept spotless and ready."/>
      <Sec bg="#F5F0E8">
        {/* Amenity chips */}
        <div style={{ background:'#fff', borderRadius:4, padding:'1.25rem 1.5rem', display:'flex', flexWrap:'wrap', gap:'1rem', marginBottom:'3rem', border:'1px solid #e5dfd5' }}>
          {[['🅿️','Free Parking'],['📶','Free Wi-Fi'],['❄️','Air Conditioning'],['🐾','Pet Friendly'],['♿','Accessible'],['🥐','Free Breakfast'],['♨️','Hot Tub'],['🏔️','Mountain Views']].map(([icon,label],i)=>(
            <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.45rem', fontSize:'0.82rem', color:'#2E2E2E' }}><span>{icon}</span>{label}</div>
          ))}
        </div>

        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(290px,1fr))', gap:'1.4rem' }}>
          {rooms.map(r=>(
            <div key={r.id} onClick={()=>setSel(sel===r.id?null:r.id)}
              style={{ border:sel===r.id?'2px solid #C4872A':'1px solid #e5dfd5', borderRadius:4, overflow:'hidden', cursor:'pointer', background:'#fff', transition:'box-shadow 0.2s,transform 0.2s' }}
              onMouseEnter={e=>{e.currentTarget.style.boxShadow='0 6px 22px rgba(26,43,26,0.1)';e.currentTarget.style.transform='translateY(-2px)'}}
              onMouseLeave={e=>{e.currentTarget.style.boxShadow='none';e.currentTarget.style.transform='none'}}>
              <div style={{ height:155, background:'linear-gradient(135deg,#3a4a2e,#1A2B1A)', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'3rem', position:'relative' }}>
                {r.icon}
                <div style={{ position:'absolute', top:'0.75rem', left:'0.75rem', background:'#C4872A', color:'#fff', fontSize:'0.6rem', letterSpacing:'0.1em', textTransform:'uppercase', padding:'0.25rem 0.55rem', borderRadius:2, fontWeight:600 }}>{r.tag}</div>
              </div>
              <div style={{ padding:'1.4rem' }}>
                <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.2rem', color:'#1A2B1A', marginBottom:'0.4rem' }}>{r.title}</div>
                <p style={{ fontSize:'0.82rem', color:'#6B6456', lineHeight:1.65, marginBottom:'1rem' }}>{r.desc}</p>
                <div style={{ maxHeight:sel===r.id?'220px':'0', overflow:'hidden', transition:'max-height 0.35s ease' }}>
                  <div style={{ borderTop:'1px solid #f0e8dc', paddingTop:'0.9rem', marginBottom:'1rem' }}>
                    <div style={{ fontSize:'0.68rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.55rem' }}>Room Features</div>
                    <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'0.35rem' }}>
                      {r.features.map((f,i)=>(
                        <div key={i} style={{ display:'flex', alignItems:'center', gap:'0.45rem', fontSize:'0.78rem', color:'#2E2E2E' }}>
                          <span style={{ width:4, height:4, borderRadius:'50%', background:'#C4872A', display:'inline-block', flexShrink:0 }}/>{f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div style={{ display:'flex', alignItems:'center', justifyContent:'space-between' }}>
                  <span style={{ fontSize:'0.75rem', color:'#C4872A', fontWeight:600 }}>{sel===r.id?'▲ Less':'▼ Details'}</span>
                  <Btn href="/contact" onClick={e=>e.stopPropagation()} style={{ padding:'0.4rem 1rem', fontSize:'0.72rem' }}>Book</Btn>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Sec>

      {/* PHOTO SLIDER */}
      <Sec bg="#1A2B1A">
        <Head light eyebrow="The Property" title="See Our Rooms"/>
        <PhotoSlider photos={propertyPhotos}/>
      </Sec>

      {/* POLICIES */}
      <Sec bg="#fff">
        <Head eyebrow="Good to Know" title="Policies & Info"/>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(210px,1fr))', gap:'1.25rem' }}>
          {[['🕒','Check-in / Out','Check-in from 4:00 PM. Check-out by 11:00 AM. Early check-in subject to availability.'],['🐾','Pet Policy','Pets welcome in designated rooms. Please notify us at booking. Additional fee applies.'],['🚗','Parking','Complimentary for all guests — cars, RVs, trailers, and motorcycles.'],['📞','Reservations',"Call 1-800-881-4233 or send an enquiry. We'll confirm by phone or email."]].map(([icon,t,b],i)=>(
            <div key={i} style={{ padding:'1.6rem', background:'#F5F0E8', borderRadius:4 }}>
              <div style={{ fontSize:'1.6rem', marginBottom:'0.65rem' }}>{icon}</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1rem', color:'#1A2B1A', marginBottom:'0.45rem' }}>{t}</div>
              <p style={{ fontSize:'0.82rem', color:'#6B6456', lineHeight:1.65 }}>{b}</p>
            </div>
          ))}
        </div>
      </Sec>

      <Sec bg="#F5F0E8">
        <Head eyebrow="Guest Reviews" title="What Guests Say About the Rooms"/>
        <ReviewSlider reviews={reviews}/>
      </Sec>

      <Sec bg="#C4872A" py="4rem" style={{ textAlign:'center' }}>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.9rem', color:'#fff', marginBottom:'0.9rem' }}>Ready to book your room?</h2>
        <p style={{ color:'rgba(255,255,255,0.8)', marginBottom:'1.75rem', fontSize:'0.9rem' }}>Call us directly — we'll find the right room for you.</p>
        <Btn variant="white" href="tel:18008814233">Call 1-800-881-4233</Btn>
      </Sec>
    </div>
  );
}
