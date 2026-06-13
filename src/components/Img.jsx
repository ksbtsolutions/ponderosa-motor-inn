import { useState } from 'react';
import { proxyUrl } from './scenes.js';

/**
 * Smart image component that:
 * 1. Routes external images through /api/img proxy (bypasses hotlink blocks)
 * 2. Falls back to a provided SVG scene data URI if the image fails
 * 3. Lazy-loads by default
 * 4. Never shows a broken image icon
 */
export default function Img({
  src,
  alt,
  fallback,     // SVG data URI from scenes.js
  style = {},
  className,
  loading = 'lazy',
}) {
  const [errored, setErrored] = useState(false);
  const [tried, setTried] = useState(false);

  // First try: proxy the original URL
  // On error: try the fallback SVG scene
  const proxied = src ? proxyUrl(src) : null;
  const displayed = errored ? fallback : proxied;

  if (!displayed) return null;

  return (
    <img
      src={displayed}
      alt={alt}
      loading={loading}
      style={{ display: 'block', ...style }}
      className={className}
      onError={() => {
        if (!errored && !tried) {
          setTried(true);
          // If proxy fails, try direct URL once more before fallback
          if (proxied !== src) {
            // Could try direct here, but just go straight to fallback for reliability
          }
          setErrored(true);
        }
      }}
    />
  );
}
