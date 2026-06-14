import React, { useState } from 'react'
import { HeroMedia } from '../components/HeroMedia'
import { AnimateIn } from '../components/AnimateIn'

const INITIAL = { name: '', email: '', phone: '', checkin: '', checkout: '', guests: '2', roomType: '', message: '', how: '' }

export default function Contact() {
  const [form, setForm]     = useState(INITIAL)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null) // null | 'sending' | 'sent' | 'error'

  const set = (k) => (e) => {
    setForm(f => ({ ...f, [k]: e.target.value }))
    if (errors[k]) setErrors(er => ({ ...er, [k]: null }))
  }

  const validate = () => {
    const e = {}
    if (!form.name.trim())  e.name  = 'Please enter your name'
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Please enter a valid email address'
    if (!form.message.trim()) e.message = 'Please include a message'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async () => {
    if (!validate()) return
    setStatus('sending')
    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      if (!res.ok) throw new Error()
      setStatus('sent')
      setForm(INITIAL)
    } catch {
      setStatus('error')
    }
  }

  return (
    <main>
      <HeroMedia
        imgSrc="https://images.unsplash.com/photo-1472214103451-9374bd1c798e?w=1080&q=85"
        alt="Golden BC mountain valley"
        minHeight="45vh"
      >
        <div className="container" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <span className="eyebrow">Get in Touch</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginTop: '0.75rem' }}>
            We'd love to<br /><em>hear from you</em>
          </h1>
        </div>
      </HeroMedia>

      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '4rem', alignItems: 'start' }}>

            {/* Contact info */}
            <AnimateIn>
              <div>
                <span className="eyebrow">Contact Info</span>
                <div className="rule-amber" />
                <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '1.5rem' }}>Reach us directly</h2>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
                  {[
                    { icon: '📞', label: 'Phone', value: '+1 (250) 344-0047', href: 'tel:+12503440047' },
                    { icon: '📧', label: 'Email', value: 'info@ponderosa-inn.com', href: 'mailto:info@ponderosa-inn.com' },
                    { icon: '📍', label: 'Address', value: '1025 11th Ave S, Golden, BC V0A 1H0' },
                    { icon: '🕐', label: 'Front Desk', value: '7:00 AM – 10:00 PM daily' },
                  ].map(item => (
                    <div key={item.label} style={{ display: 'flex', gap: '1rem' }}>
                      <span style={{ fontSize: '1.25rem', width: '28px', flexShrink: 0, marginTop: 2 }}>{item.icon}</span>
                      <div>
                        <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.25rem' }}>{item.label}</div>
                        {item.href
                          ? <a href={item.href} style={{ fontWeight: 500, color: 'var(--forest)', textDecoration: 'underline', textUnderlineOffset: 3 }}>{item.value}</a>
                          : <span style={{ fontWeight: 500, color: 'var(--forest)' }}>{item.value}</span>
                        }
                      </div>
                    </div>
                  ))}
                </div>

                {/* Map embed placeholder */}
                <div style={{ borderRadius: 'var(--radius-lg)', overflow: 'hidden', border: '1px solid var(--parchment-d)' }}>
                  <iframe
                    title="Ponderosa Motor Inn map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2441.8763548349386!2d-116.96648168717327!3d51.29856097176388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x537e43e2f1b21285%3A0x7f3d33dfbbfc8bdc!2sPonderosa+Motor+Inn!5e0!3m2!1sen!2sca!4v1700000000000"
                    width="100%"
                    height="260"
                    style={{ border: 0, display: 'block' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </div>
            </AnimateIn>

            {/* Enquiry form */}
            <AnimateIn delay={1}>
              {status === 'sent' ? (
                <div style={{ padding: '3rem', background: 'var(--cream)', borderRadius: 'var(--radius-xl)', textAlign: 'center', boxShadow: 'var(--shadow-md)' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>✅</div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.75rem' }}>Message sent!</h3>
                  <p style={{ color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                    Thank you — we'll reply to your enquiry within a few hours. A confirmation has been sent to your email.
                  </p>
                  <button className="btn btn-secondary" onClick={() => setStatus(null)}>Send another message</button>
                </div>
              ) : (
                <div style={{ padding: '2.5rem', background: 'var(--cream)', borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-md)' }}>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.25rem' }}>Send an enquiry</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '1.75rem' }}>We typically respond within a few hours during front desk hours.</p>

                  <div style={{ display: 'grid', gap: '1.25rem' }}>
                    <div className="grid-2" style={{ gap: '1rem' }}>
                      <Field label="Your Name *" error={errors.name}>
                        <input className="form-input" placeholder="Jane Smith" value={form.name} onChange={set('name')} />
                      </Field>
                      <Field label="Email Address *" error={errors.email}>
                        <input className="form-input" type="email" placeholder="jane@example.com" value={form.email} onChange={set('email')} />
                      </Field>
                    </div>

                    <div className="grid-2" style={{ gap: '1rem' }}>
                      <Field label="Phone (optional)">
                        <input className="form-input" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={set('phone')} />
                      </Field>
                      <Field label="Room Type Interest">
                        <select className="form-select" value={form.roomType} onChange={set('roomType')}>
                          <option value="">Not sure yet</option>
                          <option value="standard-queen">Standard Queen</option>
                          <option value="double-queen">Double Queen</option>
                          <option value="king-suite">King Suite</option>
                          <option value="pet-friendly">Pet-Friendly Queen</option>
                        </select>
                      </Field>
                    </div>

                    <div className="grid-2" style={{ gap: '1rem' }}>
                      <Field label="Arrival Date">
                        <input className="form-input" type="date" value={form.checkin} onChange={set('checkin')} />
                      </Field>
                      <Field label="Departure Date">
                        <input className="form-input" type="date" value={form.checkout} onChange={set('checkout')} />
                      </Field>
                    </div>

                    <Field label="Number of Guests">
                      <select className="form-select" value={form.guests} onChange={set('guests')}>
                        {[1,2,3,4,5,6].map(n => <option key={n} value={n}>{n} {n === 1 ? 'guest' : 'guests'}</option>)}
                      </select>
                    </Field>

                    <Field label="Message *" error={errors.message}>
                      <textarea className="form-textarea" placeholder="Tell us about your trip — activities planned, special requests, questions…" value={form.message} onChange={set('message')} rows={4} />
                    </Field>

                    <Field label="How did you hear about us?">
                      <select className="form-select" value={form.how} onChange={set('how')}>
                        <option value="">Prefer not to say</option>
                        <option value="booking.com">Booking.com</option>
                        <option value="google">Google Search</option>
                        <option value="tripadvisor">TripAdvisor</option>
                        <option value="friend">Friend / Word of Mouth</option>
                        <option value="returning">Returning Guest</option>
                        <option value="other">Other</option>
                      </select>
                    </Field>

                    {status === 'error' && (
                      <p style={{ fontSize: '0.875rem', color: '#b91c1c', background: '#fef2f2', padding: '0.75rem 1rem', borderRadius: 'var(--radius-md)' }} role="alert">
                        Something went wrong. Please try calling us at +1 (250) 344-0047 or emailing info@ponderosa-inn.com.
                      </p>
                    )}

                    <button
                      className="btn btn-primary btn-lg"
                      onClick={handleSubmit}
                      disabled={status === 'sending'}
                      aria-busy={status === 'sending'}
                      style={{ justifyContent: 'center' }}
                    >
                      {status === 'sending' ? 'Sending…' : 'Send Enquiry'}
                    </button>
                  </div>
                </div>
              )}
            </AnimateIn>
          </div>
        </div>
      </section>
    </main>
  )
}

function Field({ label, error, children }) {
  return (
    <div className="form-group">
      <label className="form-label">{label}</label>
      {children}
      {error && <span style={{ fontSize: '0.78rem', color: '#b91c1c' }} role="alert">{error}</span>}
    </div>
  )
}
