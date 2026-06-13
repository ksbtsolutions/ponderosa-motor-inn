# Ponderosa Motor Inn — Website

React + Vite website for the Ponderosa Motor Inn, Golden, BC.

## 🚀 Deploy to Vercel (Recommended)

### Option A: Vercel CLI
```bash
npm install
npm run build
npx vercel --prod
```

### Option B: GitHub + Vercel Dashboard
1. Push this folder to a GitHub repo
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo
4. Framework: **Vite** (auto-detected)
5. Build command: `npm run build`
6. Output directory: `dist`
7. Click **Deploy**

The `vercel.json` handles SPA routing (all routes → `index.html`).

## 💻 Local Development
```bash
npm install
npm run dev
```

## 📁 Project Structure
```
src/
  components/
    Nav.jsx         # Responsive nav with hamburger menu
    Footer.jsx      # Footer with travel site links
    UI.jsx          # Shared components (Btn, Head, MtnDivider, etc.)
    PhotoSlider.jsx # Auto-advancing image slider
    ReviewSlider.jsx # Review carousel (TripAdvisor/Booking.com)
    Gallery.jsx     # Photo gallery with lightbox
  pages/
    Home.jsx
    Accommodations.jsx
    Activities.jsx
    Location.jsx
    Packages.jsx
    Contact.jsx
  data/
    index.js        # All site content — edit here to update copy/links
  App.jsx
  main.jsx
  index.css
```

## 🎨 Customization
- **Colors/fonts**: `src/index.css` CSS variables
- **Content**: `src/data/index.js` — rooms, reviews, packages, activities, links
- **Images**: Replace URLs in `data/index.js` with real property photos
- **Travel links**: Update URLs in `travelLinks` in `data/index.js`

## 📞 Contact Info
- Toll-free: 1-800-881-4233
- Direct: 250-344-2205
- Address: 1206 Trans-Canada Hwy, Golden, BC V0A 1H1
