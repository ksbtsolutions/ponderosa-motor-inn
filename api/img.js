/**
 * GET /api/img?url=<encoded-url>
 *
 * Server-side image proxy. Fetches external images with proper browser-like headers,
 * bypassing hotlink protection on TripAdvisor, Tourism Golden, etc.
 * Adds aggressive cache headers so images are cached at Vercel's edge.
 *
 * Security: only allows whitelisted domains to prevent abuse.
 */

export const config = { runtime: 'edge' };

// Only proxy images from these trusted domains
const ALLOWED_HOSTS = [
  'dynamic-media-cdn.tripadvisor.com',
  'media-cdn.tripadvisor.com',
  'www.tourismgolden.com',
  'tourismgolden.com',
  'goldenskybridge.com',
  'www.goldenskybridge.com',
  'upload.wikimedia.org',
  'commons.wikimedia.org',
  'images.unsplash.com',
  'live.staticflickr.com',
];

const FETCH_HEADERS = {
  'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
  'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
  'Accept-Language': 'en-US,en;q=0.9',
  'Accept-Encoding': 'gzip, deflate, br',
  'Referer': 'https://www.google.com/',
  'sec-fetch-dest': 'image',
  'sec-fetch-mode': 'no-cors',
  'sec-fetch-site': 'cross-site',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const imageUrl = searchParams.get('url');

  const errorResponse = (msg, status = 400) =>
    new Response(JSON.stringify({ error: msg }), {
      status,
      headers: { 'Content-Type': 'application/json' },
    });

  if (!imageUrl) return errorResponse('Missing ?url= parameter');

  let parsed;
  try {
    parsed = new URL(imageUrl);
  } catch {
    return errorResponse('Invalid URL');
  }

  // Security: only allow whitelisted hosts
  if (!ALLOWED_HOSTS.some(h => parsed.hostname === h || parsed.hostname.endsWith('.' + h))) {
    return errorResponse(`Host not allowed: ${parsed.hostname}`, 403);
  }

  // Security: only allow https
  if (parsed.protocol !== 'https:') {
    return errorResponse('Only HTTPS URLs allowed', 400);
  }

  try {
    const upstream = await fetch(imageUrl, {
      headers: FETCH_HEADERS,
      redirect: 'follow',
    });

    if (!upstream.ok) {
      return errorResponse(`Upstream returned ${upstream.status}`, upstream.status);
    }

    const contentType = upstream.headers.get('content-type') || 'image/jpeg';

    // Only allow actual image content types
    if (!contentType.startsWith('image/')) {
      return errorResponse('Upstream response is not an image', 400);
    }

    const body = await upstream.arrayBuffer();

    return new Response(body, {
      status: 200,
      headers: {
        'Content-Type': contentType,
        // Cache at edge for 7 days, browser for 1 day
        'Cache-Control': 'public, s-maxage=604800, max-age=86400, stale-while-revalidate=86400',
        'CDN-Cache-Control': 'public, max-age=604800',
        'Vary': 'Accept',
        // Security
        'X-Content-Type-Options': 'nosniff',
        'Access-Control-Allow-Origin': '*',
      },
    });
  } catch (err) {
    console.error('Image proxy error:', err);
    return errorResponse(`Proxy fetch failed: ${err.message}`, 502);
  }
}
