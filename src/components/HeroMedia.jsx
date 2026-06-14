import React, { useState, useRef } from 'react'

const SVG_FALLBACK = (
  <svg viewBox="0 0 1440 600" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
    <defs>
      <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#1a3a5c" />
        <stop offset="100%" stopColor="#4a7fa5" />
      </linearGradient>
      <linearGradient id="snow" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#f0f4f8" />
        <stop offset="100%" stopColor="#d0dce8" />
      </linearGradient>
    </defs>
    <rect width="1440" height="600" fill="url(#sky)" />
    {/* Mountains back */}
    <path d="M0,400 L180,180 L360,300 L540,140 L720,220 L900,100 L1080,200 L1260,150 L1440,240 L1440,600 L0,600Z" fill="#2c4a6a" opacity="0.6" />
    {/* Mountains mid */}
    <path d="M0,450 L200,260 L400,350 L600,200 L800,280 L1000,180 L1200,270 L1440,220 L1440,600 L0,600Z" fill="#1a2b1a" opacity="0.8" />
    {/* Snow caps */}
    <path d="M540,140 L510,200 L570,200Z" fill="url(#snow)" />
    <path d="M900,100 L870,160 L930,160Z" fill="url(#snow)" />
    <path d="M1260,150 L1230,200 L1290,200Z" fill="url(#snow)" />
    {/* Foreground trees */}
    <path d="M0,520 Q200,480 400,510 Q600,490 800,515 Q1000,500 1200,510 Q1350,505 1440,520 L1440,600 L0,600Z" fill="#0f1a0f" />
    {/* River */}
    <path d="M580,600 Q620,540 660,520 Q700,500 720,480 Q740,460 760,440" stroke="#4a7fa5" strokeWidth="8" fill="none" opacity="0.6" />
  </svg>
)

export function HeroMedia({ videoSrc, imgSrc, imgSrcSet, alt = 'Ponderosa Motor Inn', children, style = {}, minHeight = '92vh' }) {
  const [videoFailed, setVideoFailed] = useState(false)
  const [imgFailed, setImgFailed] = useState(false)
  const videoRef = useRef(null)

  return (
    <div style={{ position: 'relative', minHeight, overflow: 'hidden', display: 'flex', alignItems: 'center', ...style }}>
      {/* Media layer */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        {videoSrc && !videoFailed ? (
          <video
            ref={videoRef}
            autoPlay muted loop playsInline
            onError={() => setVideoFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src={videoSrc} type="video/mp4" />
          </video>
        ) : imgSrc && !imgFailed ? (
          <img
            src={imgSrc}
            srcSet={imgSrcSet}
            sizes="100vw"
            alt={alt}
            fetchpriority="high"
            onError={() => setImgFailed(true)}
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center 40%' }}
          />
        ) : SVG_FALLBACK}

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to bottom, rgba(10,18,10,0.45) 0%, rgba(10,18,10,0.25) 40%, rgba(10,18,10,0.55) 100%)'
        }} />
      </div>

      {/* Content */}
      <div style={{ position: 'relative', zIndex: 1, width: '100%' }}>
        {children}
      </div>
    </div>
  )
}
