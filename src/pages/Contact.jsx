import { useState } from 'react';
import { PageHero, Sec, Btn } from '../components/UI.jsx';
import BookingWidget from '../components/BookingWidget.jsx';
import { travelLinks } from '../data/index.js';

const ROOM_TYPES = ['Standard Room','Double Queen','Family Suite','Kitchen Unit','Accessible Room','Pet-Friendly Room'];

function EnquiryForm() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', checkin:'', checkout:'', guests:'2', roomType:'', channelPref:'Either', message:'' });
  const [status, setStatus] = useState('idle'); // idle | sending | success | error
  const [errMsg, setErrMsg] = useState('');

  const set = k => e => setForm(f => ({...f, [k]: e.target.value}));

  const inp = { width:'100%', padding:'0.7rem 0.9rem', border:'1px solid #d5cfc4', borderRadius:3, fontSize:'0.87rem', color:'#2E2E2E', background:'#fff', outline:'none', boxSizing:'border-box', fontFamily:'Inter,sans-serif' };
  const lbl = { display:'block', fontSize:'0.7rem', letterSpacing:'0.1em', textTransform:'uppercase', color:'#6B6456', fontWeight:600, marginBottom:'0.4rem' };

  async function submit() {
    if (!form.name || !form.email) { setErrMsg('Please enter your name and email.'); return; }
    setErrMsg('');
    setStatus('sending');
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Server error');
      setStatus('success');
    } catch (err) {
      setErrMsg(err.message || 'Something went wrong. Please call 1-800-881-4233 directly.');
      setStatus('error');
    }
  }

  if (status === 'success') return (
    <div style={{ background:'#fff', borderRadius:4, padding:'2.5rem', border:'1px solid #e5dfd5', textAlign:'center' }}>
      <div style={{ fontSize:'2.5rem', marginBottom:'1rem' }}>✅</div>
      <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.4rem', color:'#1A2B1A', marginBottom:'0.5rem' }}>Enquiry Received!</h3>
      <p style={{ color:'#6B6456', fontSize:'0.9rem', lineHeight:1.7, marginBottom:'1.25rem' }}>
        Thanks, {form.name.split(' ')[0]}! We've sent you a confirmation email and will be in touch within one business day.<br/><br/>
        For immediate help: <a href="tel:18008814233" style={{ color:'#C4872A', fontWeight:700, textDecoration:'none' }}>1-800-881-4233</a>
      </p>
      <Btn variant="outline" onClick={() => { setStatus('idle'); setForm({name:'',email:'',phone:'',checkin:'',checkout:'',guests:'2',roomType:'',channelPref:'Either',message:''}); }}>
        Send Another Enquiry
      </Btn>
    </div>
  );

  return (
    <div style={{ background:'#fff', borderRadius:4, padding:'2.25rem', border:'1px solid #e5dfd5' }}>
      <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.45rem', color:'#1A2B1A', marginBottom:'0.3rem' }}>Send an Enquiry</h2>
      <p style={{ fontSize:'0.8rem', color:'#6B6456', marginBottom:'1.75rem' }}>Can't find dates on the booking platforms? We'll sort it out. We respond within 1 business day.</p>

      <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:'1.1rem' }}>
        <div style={{ gridColumn:'1/-1' }}>
          <label style={lbl}>Full Name *</label>
          <input style={inp} value={form.name} onChange={set('name')} placeholder="Jane Smith"/>
        </div>
        <div>
          <label style={lbl}>Email *</label>
          <input style={inp} type="email" value={form.email} onChange={set('email')} placeholder="jane@email.com"/>
        </div>
        <div>
          <label style={lbl}>Phone</label>
          <input style={inp} type="tel" value={form.phone} onChange={set('phone')} placeholder="250-555-0000"/>
        </div>
        <div>
          <label style={lbl}>Check-in</label>
          <input style={inp} type="date" value={form.checkin} onChange={set('checkin')}/>
        </div>
        <div>
          <label style={lbl}>Check-out</label>
          <input style={inp} type="date" value={form.checkout} onChange={set('checkout')}/>
        </div>
        <div>
          <label style={lbl}>Guests</label>
          <select style={inp} value={form.guests} onChange={set('guests')}>
            {[1,2,3,4,5,6,'6+'].map(n=><option key={n}>{n}</option>)}
          </select>
        </div>
        <div>
          <label style={lbl}>Room Type</label>
          <select style={inp} value={form.roomType} onChange={set('roomType')}>
            <option value="">Any / Not sure</option>
            {ROOM_TYPES.map(r=><option key={r}>{r}</option>)}
          </select>
        </div>
        <div style={{ gridColumn:'1/-1' }}>
          <label style={lbl}>Best way to reach you</label>
          <select style={inp} value={form.channelPref} onChange={set('channelPref')}>
            <option>Either</option>
            <option>Email only</option>
            <option>Phone only</option>
          </select>
        </div>
        <div style={{ gridColumn:'1/-1' }}>
          <label style={lbl}>Message / Special Requests</label>
          <textarea style={{ ...inp, minHeight:90, resize:'vertical' }} value={form.message} onChange={set('message')}
            placeholder="Pets, early check-in, group size, accessibility needs, package interest…"/>
        </div>
        {errMsg && (
          <div style={{ gridColumn:'1/-1', background:'#fff2f2', border:'1px solid #fcc', borderRadius:3, padding:'0.6rem 0.9rem', fontSize:'0.82rem', color:'#c00' }}>
            {errMsg}
          </div>
        )}
        <div style={{ gridColumn:'1/-1' }}>
          <button
            onClick={submit}
            disabled={status === 'sending'}
            style={{ width:'100%', background:'#C4872A', color:'#fff', border:'none', borderRadius:3, padding:'0.85rem', fontSize:'0.82rem', fontWeight:700, letterSpacing:'0.07em', textTransform:'uppercase', cursor:status==='sending'?'wait':'pointer', opacity:status==='sending'?0.7:1, fontFamily:'Inter,sans-serif' }}>
            {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Contact() {
  return (
    <div>
      <PageHero eyebrow="Reservations" title="Book Your Stay"
        subtitle="Check live availability across all booking platforms, or send us a direct enquiry — we'll confirm within one business day."/>

      <Sec bg="#F5F0E8">
        {/* Two-col layout: widget left, info right */}
        <div style={{ display:'grid', gridTemplateColumns:'repeat(auto-fit,minmax(300px,1fr))', gap:'2.5rem', marginBottom:'3rem' }}>
          {/* Booking widget */}
          <div>
            <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.75rem' }}>
              Step 1 — Check Availability
            </p>
            <BookingWidget/>
          </div>

          {/* Contact details */}
          <div style={{ display:'flex', flexDirection:'column', gap:'1.25rem' }}>
            <div>
              <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.5rem' }}>Or Call Us Directly</p>
              <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.7rem', color:'#1A2B1A', marginBottom:'0.5rem' }}>We're Here 24/7</h2>
              <p style={{ color:'#6B6456', fontSize:'0.87rem', lineHeight:1.75 }}>
                Our front desk is always staffed. For same-day bookings, group rates, or special requests — call us directly.
              </p>
            </div>
            {[
              ['📞','Toll-Free','1-800-881-4233','tel:18008814233'],
              ['📞','Direct','250-344-2205','tel:12503442205'],
              ['📍','Address','1206 Trans-Canada Hwy, Golden, BC V0A 1H1',null],
              ['🕒','Front Desk','Open 24 hours — always staffed',null],
            ].map(([icon,label,val,href],i) => (
              <div key={i} style={{ background:'#fff', borderRadius:4, padding:'1.1rem 1.4rem', border:'1px solid #e5dfd5', display:'flex', gap:'0.9rem', alignItems:'flex-start' }}>
                <span style={{ fontSize:'1.2rem' }}>{icon}</span>
                <div>
                  <div style={{ fontSize:'0.67rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'#6B6456', marginBottom:'0.2rem' }}>{label}</div>
                  {href
                    ? <a href={href} style={{ fontWeight:600, color:'#C4872A', textDecoration:'none', fontSize:'0.95rem' }}>{val}</a>
                    : <div style={{ fontWeight:500, color:'#1A2B1A', fontSize:'0.87rem' }}>{val}</div>}
                </div>
              </div>
            ))}

            {/* Review links */}
            <div style={{ background:'#fff', borderRadius:4, padding:'1.25rem 1.4rem', border:'1px solid #e5dfd5' }}>
              <div style={{ fontSize:'0.67rem', textTransform:'uppercase', letterSpacing:'0.1em', color:'#6B6456', marginBottom:'0.75rem', fontWeight:600 }}>Read Reviews or Book Direct</div>
              <div style={{ display:'flex', flexDirection:'column', gap:'0.5rem' }}>
                {travelLinks.map((l,i) => (
                  <a key={i} href={l.url} target="_blank" rel="noopener noreferrer"
                    style={{ display:'flex', alignItems:'center', gap:'0.6rem', textDecoration:'none', padding:'0.5rem 0.6rem', borderRadius:3, background:'#F5F0E8', fontSize:'0.82rem', color:'#2E2E2E', fontWeight:500 }}>
                    <span style={{ background:l.color, color:l.textColor||'#fff', fontSize:'0.58rem', fontWeight:700, padding:'0.18rem 0.45rem', borderRadius:2, flexShrink:0, letterSpacing:'0.06em' }}>{l.name.toUpperCase()}</span>
                    <span>{l.desc}</span>
                    <span style={{ marginLeft:'auto', color:'#C4872A', fontSize:'0.75rem' }}>→</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ textAlign:'center', margin:'0.5rem 0 2.5rem' }}>
          <span style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#9a8a7a', padding:'0 1rem', background:'#F5F0E8', position:'relative', zIndex:1 }}>
            Or send us a direct enquiry
          </span>
          <hr style={{ border:'none', borderTop:'1px solid #ddd8cc', marginTop:'-0.6rem' }}/>
        </div>

        {/* Enquiry form below */}
        <div style={{ maxWidth:640, margin:'0 auto' }}>
          <p style={{ fontSize:'0.7rem', letterSpacing:'0.18em', textTransform:'uppercase', color:'#C4872A', fontWeight:600, marginBottom:'0.75rem' }}>
            Step 2 (optional) — Send a Direct Enquiry
          </p>
          <EnquiryForm/>
        </div>

        {/* Group bookings note */}
        <div style={{ marginTop:'2.5rem', background:'#1A2B1A', borderRadius:4, padding:'1.75rem 2rem', display:'flex', gap:'1.5rem', alignItems:'center', flexWrap:'wrap', justifyContent:'space-between' }}>
          <div>
            <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'1.1rem', color:'#fff', marginBottom:'0.35rem' }}>Group Bookings & Special Rates</div>
            <p style={{ color:'#7a8a6a', fontSize:'0.82rem' }}>Booking 5+ rooms? Ski club, cycling group, wedding, or corporate stay? Call us for group pricing.</p>
          </div>
          <Btn href="tel:18008814233">Call 1-800-881-4233</Btn>
        </div>
      </Sec>
    </div>
  );
}
