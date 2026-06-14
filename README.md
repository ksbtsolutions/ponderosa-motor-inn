# Ponderosa Motor Inn — Website v2.0

A production-ready React/Vite website for the Ponderosa Motor Inn, Golden BC. Deployable to Vercel in minutes.

## Stack

- **Framework**: React 18 + Vite 5
- **Routing**: React Router v6
- **Deployment**: Vercel (edge + serverless functions)
- **Email**: Resend API
- **Design**: Playfair Display + Inter, forest green / parchment / amber palette

## Project Structure

```
ponderosa/
├── src/
│   ├── components/       # Reusable UI components
│   │   ├── Nav.jsx       # Fixed nav with mobile drawer
│   │   ├── Footer.jsx
│   │   ├── HeroMedia.jsx # Video/image/SVG fallback hero
│   │   ├── BookingWidget.jsx  # Date picker + OTA deep-links
│   │   ├── ReviewSlider.jsx
│   │   ├── MountainDivider.jsx
│   │   └── AnimateIn.jsx
│   ├── pages/            # Six pages
│   │   ├── Home.jsx
│   │   ├── Accommodations.jsx
│   │   ├── Activities.jsx
│   │   ├── Location.jsx
│   │   ├── Packages.jsx
│   │   └── Contact.jsx
│   ├── hooks/
│   │   └── useAnimateIn.js
│   ├── styles/
│   │   └── global.css    # Design tokens + utilities
│   ├── App.jsx
│   └── main.jsx
├── api/
│   ├── enquiry.js        # POST → dual email via Resend
│   ├── availability.js   # GET → OTA deep-links
│   └── img.js            # Image proxy with domain allowlist
├── public/
│   ├── robots.txt
│   └── sitemap.xml
├── index.html            # SEO meta, structured data, font preloads
├── vite.config.js
└── vercel.json           # Security headers + rewrites
```

## Deploy to Vercel

### 1. Install dependencies
```bash
npm install
```

### 2. Test locally
```bash
npm run dev
```

### 3. Set environment variables in Vercel dashboard
```
RESEND_API_KEY=re_xxxxxxxxxxxxxxxxxxxxxxxxxxxx
```

### 4. Deploy
```bash
npm install -g vercel
vercel --prod
```

Or connect your GitHub repo to Vercel for automatic deploys on push.

## Environment Variables

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | From resend.com — for contact form emails |

## SEO Features

- Unique `<title>` and `<meta description>` per page (updated dynamically)
- Open Graph and Twitter Card tags
- Schema.org `LodgingBusiness` structured data
- `sitemap.xml` and `robots.txt`
- Hero image `<link rel="preload">` for LCP
- Responsive `srcSet` on all hero images

## Booking Flow

The `BookingWidget` generates pre-filled deep-links to:
- Booking.com
- Expedia Canada
- Hotels.com
- KAYAK Canada

Direct phone booking: +1 (250) 344-0047

## Email

Contact form sends two emails via Resend:
1. **To the inn** — guest details, dates, message, reply-to header
2. **To the guest** — confirmation with a summary of their enquiry

## Domain Setup (custom domain)

1. Add your domain in Vercel dashboard → Settings → Domains
2. Update DNS CNAME to Vercel's target
3. Update `canonical` URL in `index.html`
4. Update `sitemap.xml` URLs
5. Update Resend sender addresses (`from:` in `api/enquiry.js`)
6. Update structured data `url` in `index.html`
