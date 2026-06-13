# Ponderosa Motor Inn — Website

React + Vite multi-page website with Vercel serverless API functions.

## 🚀 Deploy to Vercel

### Option A: GitHub (recommended)
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project → Import repo
3. Framework: **Vite** (auto-detected) · Build: `npm run build` · Output: `dist`
4. Add environment variables (see below)
5. Deploy

### Option B: Vercel CLI
```bash
npm install
npx vercel --prod
```

## ⚙️ Environment Variables
Set these in **Vercel Dashboard → Project → Settings → Environment Variables**:

| Variable | Required | Description |
|---|---|---|
| `RESEND_API_KEY` | Yes | From [resend.com](https://resend.com) — free tier 3k emails/month |
| `INN_EMAIL` | Yes | Where reservation emails go, e.g. `reservations@ponderosamotorinn.bc.ca` |
| `FROM_EMAIL` | Yes | Verified sender, e.g. `noreply@ponderosamotorinn.bc.ca` |

### Resend setup (5 min)
1. Sign up at [resend.com](https://resend.com)
2. Add & verify your domain (`ponderosamotorinn.bc.ca`) → adds 3 DNS records
3. Create an API key → paste into `RESEND_API_KEY` in Vercel
4. Done — both guest confirmation + inn notification emails work automatically

**Without env vars:** The API returns `{ ok: true, dev: true }` — the form still works, emails just won't send. Good for testing.

## 📡 API Routes (Vercel Serverless Functions)

### `POST /api/enquiry`
Handles the reservation enquiry form. Sends two emails:
- **Inn notification** — formatted summary with guest details & dates
- **Guest confirmation** — branded email with booking platform links

**Body (JSON):**
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "250-555-0000",
  "checkin": "2025-07-15",
  "checkout": "2025-07-18",
  "guests": "2",
  "roomType": "Standard Room",
  "channelPref": "Either",
  "message": "We have a dog."
}
```

### `GET /api/availability?checkin=2025-07-15&checkout=2025-07-18&guests=2`
Returns deep-link URLs to all booking platforms with dates pre-filled.
Add `&platform=booking` to redirect directly to that platform.

**Why not a real OTA API?**
Booking.com and Expedia Connectivity APIs require corporate partner approval
(months of onboarding, PMS certification). For a single property, the correct 
approach is a **channel manager** (SiteMinder, Little Hotelier, Cloudbeds ~$100/mo)
which syncs availability across all OTAs and provides an embeddable booking engine.
The `/api/availability` route generates pre-filled deep-links as the practical 
zero-cost alternative.

## 📁 Project Structure
```
api/
  enquiry.js         # POST — email notification handler (Resend)
  availability.js    # GET  — OTA deep-link generator with pre-filled dates
src/
  components/
    BookingWidget.jsx  # Availability search → OTA platform links
    Nav.jsx            # Responsive nav with hamburger
    Footer.jsx         # Footer with travel site links
    UI.jsx             # Shared: Btn, Head, MtnDivider, PageHero, Sec, Stars
    PhotoSlider.jsx    # Auto-advancing image slider with lightbox
    ReviewSlider.jsx   # Review carousel (TripAdvisor/Booking.com)
    Gallery.jsx        # Photo gallery with lightbox
  pages/
    Home.jsx
    Accommodations.jsx
    Activities.jsx     # Includes Tourism Golden photo gallery
    Location.jsx
    Packages.jsx
    Contact.jsx        # BookingWidget + enquiry form → /api/enquiry
  data/
    index.js           # All content — rooms, reviews, activities, links
  App.jsx
  main.jsx
  index.css
vercel.json            # SPA routing + API route passthrough
```

## 🎨 Updating Content
All site content lives in `src/data/index.js`:
- `propertyPhotos` — swap in real property photos
- `goldenImages` — Tourism Golden images (currently hotlinked)
- `rooms` — room types, features, descriptions
- `activities` — activities with optional images
- `reviews` — curated guest reviews
- `travelLinks` — OTA platform links with review counts

## 📞 Property Info
- Toll-free: 1-800-881-4233
- Direct: 250-344-2205  
- Address: 1206 Trans-Canada Hwy, Golden, BC V0A 1H1
- Website: ponderosamotorinn.bc.ca
