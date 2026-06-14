import React from 'react'
import { HeroMedia } from '../components/HeroMedia'
import { AnimateIn } from '../components/AnimateIn'

const SEASONS = ['All', 'Winter', 'Summer', 'Year Round']

const ACTIVITIES = [
  { season: 'Winter', title: 'Kicking Horse Mountain Resort', emoji: '⛷️', distance: '20 min', desc: 'One of Canada\'s premier ski destinations with 4 alpine bowls, 1,200m vertical drop, and legendary powder. World-class terrain for all ability levels.', url: 'https://www.kickinghorseresort.com' },
  { season: 'Summer', title: 'Golden Skybridge', emoji: '🌉', distance: '12 min', desc: 'Two suspension bridges spanning a dramatic river canyon — Canada\'s highest. Includes an adventure course, zipline, and gold panning. A must-see for all ages.', url: 'https://www.goldenskybridge.ca' },
  { season: 'Year Round', title: 'Glacier National Park', emoji: '🏔️', distance: '65 km east', desc: 'Over 400 glaciers, iconic Rogers Pass, and dramatic alpine terrain. Spectacular in all seasons — golden larch in fall, wildflowers in summer, backcountry skiing in winter.', url: 'https://parks.canada.ca/pn-np/bc/glacier' },
  { season: 'Summer', title: 'Kicking Horse River Rafting', emoji: '🚣', distance: '10 min', desc: 'Some of the best whitewater in BC, with options from mild family floats to Class IV rapids. Multiple outfitters operate right in Golden.', url: 'https://www.goldenbc.ca' },
  { season: 'Year Round', title: 'Columbia River Wetlands', emoji: '🦅', distance: '5 min', desc: 'The largest intact inland wetland in western North America. Home to over 260 bird species including osprey, great blue heron, and bald eagles. Canoe and kayak rentals available.', url: null },
  { season: 'Summer', title: 'Mountain Biking', emoji: '🚵', distance: 'Trailhead: 8 min', desc: 'Golden\'s trail network is world-class, with everything from gentle riverside paths to gnarly enduro descents. The Moonraker trail system is a local favourite.', url: 'https://www.goldenbc.ca/adventures/mountain-biking/' },
  { season: 'Summer', title: 'Emerald Lake', emoji: '🏊', distance: '80 km south', desc: 'The iconic jewel of Yoho National Park — strikingly turquoise water surrounded by peaks. Ideal for canoe rental, easy hiking, and photography.', url: 'https://parks.canada.ca/pn-np/bc/yoho' },
  { season: 'Year Round', title: 'Town of Golden', emoji: '🏘️', distance: '0 min', desc: 'Downtown Golden punches above its weight with excellent restaurants, craft breweries, local art galleries, and a vibrant outdoor-focused community. Walk from the inn.', url: 'https://www.goldenbc.ca' },
]

export default function Activities() {
  const [filter, setFilter] = React.useState('All')
  const filtered = filter === 'All' ? ACTIVITIES : ACTIVITIES.filter(a => a.season === filter)

  return (
    <main>
      <HeroMedia
        imgSrc="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1080&q=85"
        alt="Mountain activities near Golden BC"
        minHeight="50vh"
      >
        <div className="container" style={{ paddingTop: '7rem', paddingBottom: '3rem' }}>
          <span className="eyebrow">Things To Do</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.25rem, 6vw, 4rem)', fontWeight: 700, color: '#fff', lineHeight: 1.1, marginTop: '0.75rem' }}>
            Golden's backyard<br /><em>is extraordinary</em>
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', marginTop: '1rem', maxWidth: '46ch', fontSize: '1.0625rem', lineHeight: 1.7 }}>
            Six national parks within a two-hour drive. World-class skiing, rafting, biking, and wildlife, right outside our door.
          </p>
        </div>
      </HeroMedia>

      <section className="section" style={{ background: 'var(--parchment)' }}>
        <div className="container">
          <AnimateIn>
            <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '3rem', flexWrap: 'wrap' }}>
              {SEASONS.map(s => (
                <button
                  key={s}
                  onClick={() => setFilter(s)}
                  className={`btn ${filter === s ? 'btn-primary' : 'btn-secondary'} btn-sm`}
                >
                  {s}
                </button>
              ))}
            </div>
          </AnimateIn>

          <div className="grid-2" style={{ gap: '1.5rem' }}>
            {filtered.map((a, i) => (
              <AnimateIn key={a.title} delay={i % 2 + 1}>
                <div style={{ display: 'flex', gap: '1.25rem', padding: '1.75rem', background: 'var(--cream)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-sm)', height: '100%' }}>
                  <div style={{ fontSize: '2.5rem', flexShrink: 0 }}>{a.emoji}</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.5rem', flexWrap: 'wrap', alignItems: 'center' }}>
                      <span className="badge badge-amber">{a.season}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-light)' }}>📍 {a.distance}</span>
                    </div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.125rem', fontWeight: 700, color: 'var(--forest)', marginBottom: '0.5rem' }}>{a.title}</h3>
                    <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '0.875rem' }}>{a.desc}</p>
                    {a.url && (
                      <a href={a.url} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.8rem', color: 'var(--amber-dark)', fontWeight: 600, textDecoration: 'underline', textUnderlineOffset: 3 }}>
                        Learn more →
                      </a>
                    )}
                  </div>
                </div>
              </AnimateIn>
            ))}
          </div>

          <AnimateIn>
            <div style={{ marginTop: '3rem', padding: '2rem', background: 'var(--forest)', borderRadius: 'var(--radius-xl)', color: '#fff', textAlign: 'center' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.75rem' }}>Need local tips?</h3>
              <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '1.5rem', maxWidth: '48ch', margin: '0 auto 1.5rem' }}>
                Our front desk team skis, bikes, and hikes in this valley year-round. Ask us anything — current trail conditions, where to rent gear, the best spot for breakfast before a ski day.
              </p>
              <a href="tel:+12503440047" className="btn btn-primary">Call +1 (250) 344-0047</a>
            </div>
          </AnimateIn>
        </div>
      </section>
    </main>
  )
}
