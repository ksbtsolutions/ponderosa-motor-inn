export function MtnDivider({ from = '#1A2B1A', to = '#F5F0E8' }) {
  return (
    <svg viewBox="0 0 1440 100" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
      style={{ display: 'block', width: '100%', height: 'auto', background: from, marginBottom: '-2px' }}>
      <polygon points="0,100 0,65 120,22 240,55 380,5 520,48 640,0 760,42 900,14 1020,52 1140,18 1260,48 1380,10 1440,32 1440,100" fill={to} />
      <polygon points="0,100 0,78 100,45 200,70 320,32 450,62 570,25 680,55 800,30 930,58 1060,35 1180,62 1300,38 1440,55 1440,100" fill={to} opacity="0.4" />
    </svg>
  );
}

export function PageHero({ eyebrow, title, subtitle }) {
  return (
    <div style={{ background: '#1A2B1A' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto', padding: '5rem 2rem 4rem' }}>
        {eyebrow && <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#E5A83E', fontWeight: 600, marginBottom: '0.65rem' }}>{eyebrow}</p>}
        <h1 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.8rem,5vw,3.2rem)', color: '#fff', lineHeight: 1.15, marginBottom: subtitle ? '0.9rem' : 0 }}>{title}</h1>
        {subtitle && <p style={{ color: '#9aaa8a', fontSize: '1rem', fontWeight: 300, maxWidth: 560, lineHeight: 1.75 }}>{subtitle}</p>}
      </div>
      <MtnDivider from="#1A2B1A" to="#F5F0E8" />
    </div>
  );
}

export function Sec({ children, bg = '#F5F0E8', py = '5rem', style = {} }) {
  return (
    <section style={{ background: bg, padding: `${py} 2rem`, ...style }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>{children}</div>
    </section>
  );
}

export function Head({ eyebrow, title, body, light = false, center = false }) {
  return (
    <div style={{ marginBottom: '2.5rem', textAlign: center ? 'center' : 'left' }}>
      {eyebrow && <p style={{ fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: light ? '#E5A83E' : '#C4872A', fontWeight: 600, marginBottom: '0.55rem' }}>{eyebrow}</p>}
      <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(1.6rem,4vw,2.5rem)', color: light ? '#fff' : '#1A2B1A', lineHeight: 1.2, marginBottom: body ? '0.75rem' : 0 }}>{title}</h2>
      {body && <p style={{ color: light ? '#9aaa8a' : '#6B6456', fontSize: '0.95rem', lineHeight: 1.75, maxWidth: center ? 600 : 580, margin: center ? '0 auto' : 0 }}>{body}</p>}
    </div>
  );
}

export function Btn({ children, onClick, href, variant = 'primary', full = false, target, rel, style = {} }) {
  const base = { display: 'inline-block', textDecoration: 'none', padding: '0.82rem 1.8rem', borderRadius: '3px', fontSize: '0.82rem', fontWeight: 600, letterSpacing: '0.07em', textTransform: 'uppercase', cursor: 'pointer', border: 'none', fontFamily: 'Inter,sans-serif', width: full ? '100%' : 'auto', textAlign: 'center', boxSizing: 'border-box' };
  const v = { primary: { background: '#C4872A', color: '#fff' }, ghost: { background: 'transparent', color: '#fff', border: '1px solid rgba(255,255,255,0.35)' }, white: { background: '#fff', color: '#C4872A' }, outline: { background: 'transparent', color: '#1A2B1A', border: '1px solid #1A2B1A' } };
  if (href) return <a href={href} target={target} rel={rel} style={{ ...base, ...v[variant], ...style }}>{children}</a>;
  return <button onClick={onClick} style={{ ...base, ...v[variant], ...style }}>{children}</button>;
}

export function Stars({ n, size = '0.9rem' }) {
  return (
    <div style={{ display: 'flex', gap: 2, marginBottom: '0.6rem' }}>
      {[1, 2, 3, 4, 5].map(s => <span key={s} style={{ color: s <= n ? '#E5A83E' : '#d5cfc4', fontSize: size }}>★</span>)}
    </div>
  );
}
