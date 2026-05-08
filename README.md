# IconEdge Technology Ltd — website

Bold, cinematic marketing site for IconEdge Technology Ltd. Built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Two ways to view this

### 1. Instant preview (no install)

Open `preview.html` directly in any browser. The full home page renders with all hero animations, the marquee, services, work list, process timeline, animated stats, stack grid, testimonial, CTA band, and footer.

### 2. Full Next.js app

```bash
npm install
npm run dev
```

Then open http://localhost:3000

## Routes

- `/` — Home (hero, services, work, process, stats, stack, testimonial, CTA)
- `/services` — Four capability deep-dives (web, mobile, hardware, design systems)
- `/work` — Six selected case studies in a card grid
- `/process` — Five-phase methodology with detail
- `/about` — Stats, six principles, testimonial
- `/blog` — Insights index
- `/contact` — Multi-step quote form with sidebar
- `/careers` — Open roles and benefits

## Design tokens

| Token | Value |
| ----- | ----- |
| Primary orange | `#F26522` |
| Soft orange | `#FF8A4C` |
| Navy (page) | `#0E1119` |
| Navy 2 (surface) | `#14181F` |
| Navy 3 (raised) | `#1B1F2A` |
| Display sans | Inter |
| Editorial serif | Instrument Serif |
| Easing | `cubic-bezier(0.22, 1, 0.36, 1)` |

## Accessibility

- WCAG 2.1 AA contrast across all text
- Reduced-motion variant for every animation
- Full keyboard navigation
- Semantic HTML throughout

## Project structure

```
iconedge-website/
├── preview.html              # Standalone home page, no build needed
├── package.json
├── tailwind.config.ts
├── tsconfig.json
├── next.config.js
├── postcss.config.js
├── app/
│   ├── layout.tsx
│   ├── globals.css
│   ├── page.tsx              # Home
│   ├── services/page.tsx
│   ├── work/page.tsx
│   ├── process/page.tsx
│   ├── about/page.tsx
│   ├── blog/page.tsx
│   ├── contact/page.tsx
│   └── careers/page.tsx
└── components/
    ├── Logo.tsx
    ├── Nav.tsx
    ├── Footer.tsx
    ├── Cursor.tsx
    ├── Reveal.tsx
    ├── SectionHead.tsx
    ├── Hero.tsx
    ├── Marquee.tsx
    ├── Services.tsx
    ├── Work.tsx
    ├── Process.tsx
    ├── Stats.tsx
    ├── Stack.tsx
    ├── Testimonial.tsx
    ├── CTABand.tsx
    ├── BigLogo.tsx
    └── PageHero.tsx
```

## Next steps

- Replace placeholder copy on the contact and about pages with real studio details
- Add real project case studies under `/work/[slug]`
- Wire the contact form to your form provider (Resend, Formspree, or a custom endpoint)
- Replace placeholder testimonial with a real client quote
- Add OG image and favicons
