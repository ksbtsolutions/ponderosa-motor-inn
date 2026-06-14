import React, { useState } from 'react'
import { HeroMedia } from '../components/HeroMedia'
import { BookingWidget } from '../components/BookingWidget'
import { AnimateIn } from '../components/AnimateIn'

const ROOMS = [
  {
    id: 'standard-queen',
    name: 'Standard Queen',
    tagline: 'Comfortable, affordable, just right',
    price: 119,
    guests: 2,
    beds: '1 Queen Bed',
    sqft: 280,
    img: 'https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&q=80',
    amenities: ['Free WiFi', 'Flat Screen TV', 'Air Conditioning', 'In-Room Coffee', 'Work Desk', 'Blackout Curtains'],
    popular: false,
  },
  {
    id: 'double-queen',
    name: 'Double Queen',
    tagline: 'Ideal for families and groups',
    price: 149,
    guests: 4,
    beds: '2 Queen Beds',
    sqft: 340,
    img: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?w=800&q=80',
    amenities: ['Free WiFi', 'Flat Screen TV', 'Air Conditioning', 'Mini Fridge', 'Microwave', 'In-Room Coffee', 'Blackout Curtains'],
    popular: true,
  },
  {
    id: 'king-suite',
    name: 'King Suite',
    tagline: 'Extra space, mountain views',
    price: 179,
    guests: 2,
    beds: '1 King Bed',
    sqft: 420,
    img: 'https://images.unsplash.com/photo-1611892440504-42a792e24d32?w=800&q=80',
    amenities: ['Free WiFi', 'Flat Screen TV', 'Air Conditioning', 'Mini Fridge', 'Microwave', 'Sitting Area', 'Mountain View', 'In-Room Coffee'],
    popular: false,
  },
  {
    id: 'pet-friendly',
    name: 'Pet-Friendly Queen',
    tagline: 'Bring the whole family — including the dog',
    price: 129,
    guests: 2,
    beds: '1 Queen Bed',
    sqft: 290,
    img: 'https://images.unsplash.com/photo-1566665797739-1674de7a421a?w=800&q=80',
    amenities: ['Free WiFi', 'Flat Screen TV', 'Air Conditioning', 'Pet Deposit Required', 'Ground Floor Access', 'In-Room Coffee'],
    popular: false,
    petFee: 20,
  },
]

function RoomCard({ room }) {
  const [imgFailed, setImgFailed] = useState(false)

  return (
    <div className="card" style={{ position: 'relative' }}>
      {room.popular && (
        <div style={{ position: 'absolute', top: 12, right: 12, zIndex: 10, background: 'var(--amber)', color: '#fff', fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', padding: '0.3rem 0.75rem', borderRadius: 99 }}>
          Most Popular
        </div>
      )}
      <div style={{ height: 240, overflow: 'hidden', position: 'relative' }}>
        {!imgFailed ? (
          <img
            src={room.img}
            alt={`${room.name} at Ponderosa Motor Inn`}
            loading="lazy"
            onError={() => setImgFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <div style={{ width: '100%', height: '100%', background: 'linear-gradient(135deg, var(--forest) 0%, var(--forest-mid) 100%)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '3rem' }}>🛏️</span>
          </div>
        )}
      </div>

      <div className="card-body" style={{ padding: '1.75rem' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
          <div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.375rem', fontWeight: 700, color: 'var(--forest)' }}>{room.name}</h2>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.2rem' }}>{room.tagline}</p>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0, marginLeft: '1rem' }}>
            <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.625rem', fontWeight: 700, color: 'var(--forest)' }}>${room.price}</div>
            <div style={{ fontSize: '0.7rem', color: 'var(--text-light)', letterSpacing: '0.05em' }}>per night + tax</div>
          </div>
        </div>

        {/* Room specs */}
        <div style={{ display: 'flex', gap: '1.25rem', margin: '1rem 0', padding: '0.875rem 0', borderTop: '1px solid var(--parchment-d)', borderBottom: '1px solid var(--parchment-d)', flexWrap: 'wrap' }}>
          <Spec icon="🛏️" label={room.beds} />
          <Spec icon="👤" label={`Up to ${room.guests} guests`} />
          <Spec icon="📐" label={`${room.sqft} sq ft`} />
        </div>

        {/* Amenities */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.375rem', marginBottom: '1.5rem' }}>
          {room.amenities.map(a => (
            <span key={a} style={{ fontSize: '0.75rem', padding: '0.25rem 0.625rem', background: 'var(--parchment)', borderRadius: 99, color: 'var(--text-muted)', fontWeight: 500 }}>{a}</span>
          ))}
        </div>

        {room.petFee && (
          <p style={{ fontSize: '0.78rem', color: 'var(--text-light)', marginBottom: '1rem' }}>
            🐾 Pet fee: ${room.petFee}/night. Max 2 pets, up to 50 lbs.
          </p>
        )}

        <a
          href={`https://www.booking.com/searchresults.html?ss=Ponderosa+Motor+Inn+Golden+BC`}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary"
          style={{ width: '100%', justifyContent: 'center' }}
        >
          Book This Room
        </a>
      </div>
    </div>
  )
}

function Spec({ icon, label }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '0.375rem', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: 500 }}>
      <span>{icon}</span> {label}
    </div>
  )
}

export default function Accommodations() {
  return (
    <main>
      <HeroMedia
        imgSrc="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1080&q=85"
        imgSrcSet="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=640&q=80 640w, https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1080&q=85 1080w"
        alt="Ponderosa Motor Inn rooms"
        minHeight="50vh"
      >
        <div className="container" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <span className="eyebrow">Accommodations</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, maxWidth: '14ch', marginTop: '0.75rem' }}>
            Rooms built for<br /><em>mountain days</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem', maxWidth: '42ch', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Clean, comfortable rooms with everything you need after a long day on the slopes or trails.
          </p>
        </div>
      </HeroMedia>

      {/* Booking widget anchored below hero */}
      <div style={{ background: 'var(--forest)', padding: '2.5rem 0' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'center' }}>
          <BookingWidget />
        </div>
      </div>

      {/* Rooms */}
      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ marginBottom: '3rem' }}>
              <span className="eyebrow">Our Rooms</span>
              <div className="rule-amber" />
              <h2 className="section-title">Choose your room</h2>
              <p className="section-subtitle" style={{ marginTop: '0.75rem' }}>
                Rates start from $119/night. All rooms include free WiFi, parking, and no hidden fees.
              </p>
            </div>
          </AnimateIn>

          <div className="grid-2" style={{ gap: '2rem' }}>
            {ROOMS.map((room, i) => (
              <AnimateIn key={room.id} delay={i % 2 + 1}>
                <RoomCard room={room} />
              </AnimateIn>
            ))}
          </div>

          {/* Policies */}
          <AnimateIn>
            <div style={{ marginTop: '4rem', padding: '2rem', background: 'var(--cream)', borderRadius: 'var(--radius-lg)', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
              {[
                { label: 'Check-in', value: 'From 3:00 PM' },
                { label: 'Check-out', value: 'By 11:00 AM' },
                { label: 'Cancellation', value: 'Free up to 24h' },
                { label: 'Smoking', value: 'Non-smoking property' },
                { label: 'Children', value: 'Welcome at all ages' },
                { label: 'Payment', value: 'Visa, MC, Debit, Cash' },
              ].map(p => (
                <div key={p.label}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--stone)', marginBottom: '0.25rem' }}>{p.label}</div>
                  <div style={{ fontWeight: 500, color: 'var(--forest)' }}>{p.value}</div>
                </div>
              ))}
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  )
}
