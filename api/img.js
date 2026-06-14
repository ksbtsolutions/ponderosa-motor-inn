const ALLOWED_DOMAINS = [
  'dynamic-media-cdn.tripadvisor.com',
  'media-cdn.tripadvisor.com',
  'www.tourismpg.com',
  'www.tourism.golden.bc.ca',
  'tourism.golden.bc.ca',
]

export default async function handler(req, res) {
  const { url } = req.query
  if (!url) return res.status(400).json({ error: 'url parameter required' })

  let parsed
  try { parsed = new URL(url) } catch { return res.status(400).json({ error: 'Invalid URL' }) }

  if (!ALLOWED_DOMAINS.includes(parsed.hostname)) {
    return res.status(403).json({ error: 'Domain not allowed' })
  }

  try {
    const upstream = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
        'Accept': 'image/avif,image/webp,image/apng,image/*,*/*;q=0.8',
        'Accept-Language': 'en-CA,en;q=0.9',
        'Referer': parsed.origin + '/',
        'Origin': parsed.origin,
      }
    })

    if (!upstream.ok) return res.status(upstream.status).end()

    const contentType = upstream.headers.get('content-type') || 'image/jpeg'
    const buffer = await upstream.arrayBuffer()

    res.setHeader('Content-Type', contentType)
    res.setHeader('Cache-Control', 'public, max-age=86400, stale-while-revalidate=604800')
    res.setHeader('X-Proxy-Domain', parsed.hostname)
    return res.status(200).send(Buffer.from(buffer))
  } catch (err) {
    return res.status(502).json({ error: 'Upstream fetch failed' })
  }
}
