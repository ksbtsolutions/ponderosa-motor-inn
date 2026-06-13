import { useState } from 'react';
import { PageHero, Sec, Btn } from '../components/UI.jsx';
import { travelLinks } from '../data/index.js';

export default function Contact() {
  const [form, setForm] = useState({name:'',email:'',phone:'',checkin:'',checkout:'',guests:'2',roomType:'',message:''});
  const [done, setDone] = useState(false);
  const set = k => e => setForm(f=>({...f,[k]:e.target.value}));
  const inp = { width:'100%', padding:'0.7rem 0.9rem', border:'1px solid #d5cfc4', borderRadius:3, fontSize:'0.87rem', color:'#2E2E2E', background:'#fff', outline:'none', boxSizing:'border-box' };
  const lbl = { display:'block', fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#6B6456', fontWeight:600, marginBottom:'0.4rem' };

  if (done) return (
    <div>
      <PageHero eyebrow="Contact" title="We'll Be in Touch"/>
      <Sec bg="#F5F0E8" style={{ textAlign:'center', padding:'5rem 2rem' }}>
        <div style={{ fontSize:'3rem', marginBottom:'1.25rem' }}>✅</div>
        <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.9rem', color:'#1A2B1A', marginBottom:'0.9rem' }}>Enquiry Received</h2>
        <p style={{ color:'#6B6456', fontSize:'0.92rem', maxWidth:460, margin:'0 auto 1.75rem', lineHeight:1.75 }}>
          Thanks, {form.name.split(' ')[0]}! We'll be in touch within one business day.<br/>For immediate reservations: <strong>1-800-881-4233</strong>.
        </p>
        <Btn variant="outline" onClick={()=>setDone(false)}>Send Another Enquiry</Btn>
      </Sec>
    </div>
  );

  return (
    <div>
      <PageHero eyebrow="Contact & Reservations" title="Book Your Stay"
        subtitle="Fill in the form and we'll confirm availability within one business day, or call us for immediate reservations."/>
      <Sec bg="#F5F0E8">
        <div className="contact-grid">
          {/* Form */}
          <div style={{ background:'#fff', borderRadius:4, padding:'2.25rem', border:'1px solid #e5dfd5' }}>
            <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.45rem', color:'#1A2B1A', marginBottom:'0.35rem' }}>Send an Enquiry</h2>
            <p style={{ fontSize:'0.8rem', color:'#6B6456', marginBottom:'1.75rem' }}>We respond within 1 business day.</p>
            <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.1rem' }}>
              <div style={{ gridColumn:'1/-1' }}><label style={lbl}>Full Name *</label><input style={inp} value={form.name} onChange={set('name')} placeholder="Jane Smith"/></div>
              <div><label style={lbl}>Email *</label><input style={inp} type="email" value={form.email} onChange={set('email')} placeholder="jane@email.com"/></div>
              <div><label style={lbl}>Phone</label><input style={inp} type="tel" value={form.phone} onChange={set('phone')} placeholder="250-555-0000"/></div>
              <div><label style={lbl}>Check-in</label><input style={inp} type="date" value={form.checkin} onChange={set('checkin')}/></div>
              <div><label style={lbl}>Check-out</label><input style={inp} type="date" value={form.checkout} onChange={set('checkout')}/></div>
              <div><label style={lbl}>Guests</label>
                <select style={inp} value={form.guests} onChange={set('guests')}>
                  {[1,2,3,4,5,6,'6+'].map(n=><option key={n}>{n}</option>)}
                </select>
              </div>
              <div><label style={lbl}>Room Type</label>
                <select style={inp} value={form.roomType} onChange={set('roomType')}>
                  <option value="">Any / Not sure</option>
                  <option>Standard Room</option><option>Double Queen</option>
                  <option>Family Suite</option><option>Kitchen Unit</option>
                  <option>Accessible Room</option><option>Pet-Friendly Room</option>
                </select>
              </div>
              <div style={{ gridColumn:'1/-1' }}>
                <label style={lbl}>Message / Special Requests</label>
                <textarea style={{ ...inp, minHeight:90, resize:'vertical' }} value={form.message} onChange={set('message')} placeholder="Pets, early check-in, group info, packages..."/>
              </div>
              <div style={{ gridColumn:'1/-1' }}>
                <Btn full onClick={()=>form.name&&form.email?setDone(true):alert('Please enter your name and email')} style={{ opacity:form.name&&form.email?1:0.55 }}>Send Enquiry</Btn>
              </div>
            </div>
          </div>

          {/* Contact info */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div>
              <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.5rem' }}>Prefer to Call?</p>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.7rem', color:'#1A2B1A', marginBottom:'0.5rem' }}>We're Here to Help</h2>
              <p style={{ color:'#6B6456', fontSize:'0.87rem', lineHeight:1.75 }}>Our front desk is staffed around the clock. For immediate reservations or availability questions — a real person will answer.</p>
            </div>
            {[['📞','Toll-Free','1-800-881-4233','tel:18008814233'],['📞','Direct Line','250-344-2205','tel:12503442205'],['📍','Address','1206 Trans-Canada Hwy, Golden, BC V0A 1H1',null],['🕒','Front Desk','Open 24 hours — always staffed',null]].map(([icon,label,val,href],i)=>(
              <div key={i} style={{ background:'#fff', borderRadius:4, padding:'1.15rem 1.4rem', border:'1px solid #e5dfd5', display:'flex', gap:'0.9rem', alignItems:'flex-start' }}>
                <span style={{ fontSize:'1.2rem' }}>{icon}</span>
                <div>
                  <div style={{ fontSize:'0.67rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'#6B6456', marginBottom:'0.2rem' }}>{label}</div>
                  {href ? <a href={href} style={{ fontWeight:600, color:'#C4872A', textDecoration:'none', fontSize:'0.95rem' }}>{val}</a>
                        : <div style={{ fontWeight:500, color:'#1A2B1A', fontSize:'0.87rem' }}>{val}</div>}
                </div>
              </div>
            ))}
            <div style={{ background:'#1A2B1A', borderRadius:4, padding:'1.4rem' }}>
              <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1rem', color:'#fff', marginBottom:'0.4rem' }}>Group Bookings</div>
              <p style={{ fontSize:'0.8rem', color:'#9aaa8a', lineHeight:1.65 }}>Booking 5+ rooms? Call us and ask about group rates — ski clubs, cycling groups, wedding parties, and corporate stays are all welcome.</p>
            </div>

            {/* Review links */}
            <div style={{ background:'#fff', borderRadius:4, padding:'1.4rem', border:'1px solid #e5dfd5' }}>
              <div style={{ fontSize:'0.7rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'#6B6456', marginBottom:'0.75rem', fontWeight:600 }}>Read or Leave a Review</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                {travelLinks.map((l,i)=>(
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex', alignItems:'center', gap:'0.6rem', textDecoration:'none', padding:'0.5rem 0.6rem', borderRadius:3, background:'#F5F0E8', fontSize:'0.82rem', color:'#2E2E2E', fontWeight:500 }}>
                    <span style={{ background:l.color, color:l.textColor||'#fff', fontSize:'0.58rem', fontWeight:700, padding:'0.18rem 0.45rem', borderRadius:2, flexShrink:0 }}>{l.name.toUpperCase()}</span>
                    <span>{l.desc}</span>
                    <span style={{ marginLeft:'auto', color:'#C4872A', fontSize:'0.75rem' }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Sec>
    </div>
  );
}
