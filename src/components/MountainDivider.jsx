import React from 'react'

export function MountainDivider({ topColor = '#F5F0E8', bottomColor = '#1A2B1A', flip = false }) {
  return (
    <div className="mountain-divider" style={{ transform: flip ? 'scaleY(-1)' : 'none', marginBottom: flip ? '-1px' : '0', marginTop: flip ? '0' : '-1px' }}>
      <svg viewBox="0 0 1440 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
        <rect width="1440" height="80" fill={bottomColor} />
        <path
          d="M0,80 L0,55 L80,35 L160,50 L240,20 L320,38 L420,8 L500,28 L580,12 L660,32 L760,0 L850,22 L940,5 L1020,30 L1100,15 L1180,35 L1280,18 L1360,38 L1440,25 L1440,80 Z"
          fill={topColor}
        />
        <path
          d="M0,80 L0,62 L100,45 L200,58 L300,35 L400,48 L480,25 L560,42 L640,20 L720,40 L800,15 L880,35 L960,18 L1040,38 L1140,22 L1240,45 L1340,28 L1440,48 L1440,80 Z"
          fill={topColor}
          opacity="0.5"
        />
      </svg>
    </div>
  )
}
