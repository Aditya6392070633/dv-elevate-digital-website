# DV Elevate Digital — Website

A fully responsive, multi-page React website for **DV Elevate Digital** ("Build. Innovate. Elevate."), built with React 19, React Router and Tailwind CSS. All 70 service images, 12 portfolio images, 24 blog images and your logo are already wired in under `public/images/`.

## What's included

- **Home** — hero, stats, about teaser, services grid, process, portfolio preview, testimonials, blog preview, CTA
- **About** — story, values, timeline, testimonials
- **Services** — overview page -> 10 category pages -> 70 individual service detail pages, all reachable from the navbar's **Services dropdown**
- **Portfolio** — filterable project grid with a lightbox
- **Blog** — post list with category filter + individual article pages
- **Contact** — working form UI (client-side only — see note below), FAQ accordion, embedded map
- Sticky navbar with mega-dropdown (desktop) and full-screen menu (mobile)
- Floating WhatsApp + Call buttons
- Fully responsive from 360px mobile up through large desktop, and uses the full screen width on desktop (no fixed narrow container)

## Getting started

You'll need Node.js 18+ installed.

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# Open the URL it prints (usually http://localhost:5173)

# 3. Build for production
npm run build
# Output goes to /dist — upload that folder to any static host
# (Netlify, Vercel, Hostinger, GitHub Pages, etc.)

# 4. Preview the production build locally
npm run preview
```

## Project structure

```
src/
  components/      Navbar, Footer, PageHero, ServiceCard, Reveal (scroll animation), etc.
  data/            services.js, portfolio.js, blog.js, testimonials.js, site.js
                   — edit these files to change any text/images without touching components
  pages/           One file per route (Home, About, Services*, Portfolio, Blog*, Contact, NotFound)
  App.jsx          All routes are declared here
public/
  images/
    services/      All 70 service images (used across the Services pages)
    portfolio/      12 portfolio project images
    blog/           24 blog post images
    clients/        Testimonial photos
    brand/          logo.png
```

## Customising

- **Company details** (phone, email, address, social links): edit `src/data/site.js`
- **Services / categories**: edit `src/data/services.js` — everything (dropdown, cards, detail pages) is generated from this one file
- **Portfolio projects**: edit `src/data/portfolio.js`
- **Blog posts**: edit `src/data/blog.js` (and the `bodyBank` object in `src/pages/BlogDetail.jsx` if you want different placeholder article copy per category)
- **Colours / fonts**: edit `tailwind.config.js` (see the `brand`, `ink`, `sky` colours and `fontFamily` block)

## Contact form note

The contact form currently just shows a "message received" confirmation in the browser — it does not send an email yet, since that requires a backend or a form service. To make it live, the easiest options are:

1. **Formspree / Getform / Web3Forms** — add their endpoint to the form's `onSubmit` with a `fetch()` POST call (no backend needed).
2. **Your own backend** — point the form at an API route that sends email via SendGrid, Resend, etc.

Happy to wire either of these up if you tell me which you'd prefer.

## Notes

- Built with Vite — fast dev server and small production bundle (~100KB gzipped JS).
- No image was resized/compressed for you; if page-load speed matters a lot, consider running the `public/images` folder through an image compressor (e.g. Squoosh) before deploying.
