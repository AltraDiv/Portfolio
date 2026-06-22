# DB Portfolio — Claude Agent Instructions

## Project Overview

Personal portfolio for **Divjot Bhogal** — Software Engineer, B.Math Computational Mathematics (Minor in Computing), University of Waterloo.

**Live stack:** React 18 + TypeScript + Vite + Tailwind CSS v3 + Framer Motion + Radix UI

---

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | React 18 + TypeScript |
| Build | Vite |
| Styling | Tailwind CSS v3 + custom CSS in `src/index.css` |
| Animation | Framer Motion (page/scroll), CSS keyframes (background blobs) |
| UI primitives | `@radix-ui/react-tooltip`, `@radix-ui/react-separator` |
| Icons | `lucide-react` |
| Utilities | `clsx`, `tailwind-merge`, `class-variance-authority` |
| Routing | `react-router-dom` v6 |
| Font | Inter (Google Fonts, loaded in `index.html`) |

---

## File Structure

```
src/
  assets/              # images, PDFs, video
  components/
    GradientBackground.tsx   # animated blob hero background
    Tooltip.tsx              # Radix UI tooltip wrapper
    MarvelIntro.tsx          # Marvel-style intro animation
    icons.tsx                # LinkedIn + GitHub SVG icons
  pages/
    Home.tsx                 # Intro → Stats → Skills → Cards
    About.tsx
    Contact.tsx
    components/
      Navbar.tsx
      homepage/
        Intro.tsx            # hero section
        Stats.tsx            # 4-stat strip + statement
        Skills.tsx           # tech categories with pills
        Experience.tsx       # timeline
        Cards.tsx
        AboutMe.tsx
        Education.tsx
```

---

## Design System

### Colors
```js
// tailwind.config.js
accent: {
  DEFAULT: '#3b82f6',   // blue-500
  light:   '#60a5fa',   // blue-400
  dark:    '#2563eb',   // blue-600
}
```
Background: `bg-gray-950` (`#030712`). Never use purple, indigo gradients for primary branding.

### Typography
- **Font:** Inter (not the Tailwind default). Applied via `body { font-family: 'Inter', system-ui, ... }` in `index.css`.
- **Name heading:** `font-extralight`, `fontSize: clamp(2.8rem, 12vw, 8.5rem)`, both words plain white — no gradient, no `overflow-hidden` wrapper (it clips descenders like "g").
- **Section labels:** `font-mono text-xs tracking-[0.28em] uppercase text-accent`.

### Component classes (defined in `index.css`)
```
.btn-primary    — blue gradient CTA
.btn-outline    — bordered ghost button
.glass-dark     — frosted card bg
.gradient-text  — blue text gradient
.chip           — small accent pill
.section-heading
```

---

## Key Conventions

### Do
- Use `whileInView` + `viewport={{ once: true }}` for all scroll-triggered animations (Framer Motion).
- Use `initial={{ opacity: 0, y: 24 }}` → `animate={{ opacity: 1, y: 0 }}` with staggered `delay` for fade-up sequences.
- Use `clamp()` for responsive font sizes — never hard pixel values at a single breakpoint.
- Add `will-change: transform` on CSS-animated elements for GPU compositing.
- Mobile-first: `max-w-full lg:max-w-[56%]` for hero content, `hidden lg:flex` for desktop-only photo.
- Use `object-contain` + `w-auto` for images to preserve aspect ratio — never `object-cover` on portrait photos.
- Use `drop-shadow-2xl` on transparent PNG cutouts instead of box-shadow.

### Don't
- No em dashes anywhere — use commas or restructure the sentence.
- No scroll indicator widget.
- No `overflow-hidden` on name/heading wrappers — it clips descenders ("g", "p", "y").
- Don't use `bg-cover` on profile photos — it stretches and degrades quality.
- No purple/pink/amber accent colors.
- No gradient on the name text in the hero.
- Don't mention "4+ years of experience" — accurate figures are: **16+ months internships**, **1+ year industry**.
- Don't say "52+ Clinics Served" as a personal stat — that belongs to Kindr only.
- Don't over-emphasize Jarvis/AI server. Lead with PickUp Esports instead.

---

## Animated Background (GradientBackground.tsx)

Uses the "goo filter" metaball technique (same as Zayn Abed's portfolio):

```
SVG filter #goo:
  feGaussianBlur stdDeviation="12"
  feColorMatrix values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 20 -10"
  feBlend SourceGraphic + goo

Blobs: mix-blend-screen, filter: url(#goo) blur(50px)
```

CSS animation classes (defined in `index.css`):
- `.blob-vertical` — 14s drift up/down
- `.blob-horizontal` — 18s sweep side to side
- `.blob-circle` — 26s full clockwise orbit around offset pivot
- `.blob-circle-rev` — 22s counter-clockwise orbit
- `.blob-circle-slow` — 40s slow wide orbit

Palette: blue `rgba(59,130,246)`, indigo `rgba(99,102,241)`, cyan `rgba(6,182,212)`, violet `rgba(139,92,246)`, deep blue `rgba(37,99,235)`.

> **If animation looks frozen:** hard-refresh (Cmd+Shift+R) — Vite can serve stale CSS chunks.

---

## Marvel Intro

- Plays **only** when `window.location.pathname === '/'` (initialised in `App.tsx` `useState`).
- Images cycle via recursive `setTimeout` with a speed ramp (slow → fast → hold).
- 3D zoom layer: `scale: 2.6 → 1.0`, `rotateX: -7 → 0`, `duration: 7.1s`.
- Name inside the same 3D layer with `mixBlendMode: 'screen'` and blue gradient.
- Video support: `.mov`, `.mp4`, `.webm` detected by extension → `<video>` tag.
- Source array in `MarvelIntro.tsx`: `[CrackInterview, Hospital, Replic, Kindr, WaterlooProp, TrackingTool, PriorityTrackingTool, Nasa, Tetris, RoboticHand]`
- Skip button bottom-right, auto-completes after `7100ms`.

---

## Personal Facts (keep accurate)

| Field | Value |
|---|---|
| Name | Divjot Bhogal |
| Title | Software Engineer |
| Location | Toronto, ON |
| Email | divjotbhogal@gmail.com |
| GitHub | AltraDiv |
| LinkedIn | divjot-bhogal |
| Degree | B.Math Computational Mathematics, Minor in Computing, University of Waterloo (2020–2025) |
| Experience | 1+ year industry (Kindr Apr 2025–Jun 2026), 16+ months internships |
| Startups | Kindr (healthcare AI), PickUp Esports (esports platform), Replic |

### PickUp Esports (current, most important startup)
- Founder & Software Engineer, 2025–Present
- Full-stack esports platform: React/Vite, FastAPI, PostgreSQL, Alembic, AWS
- **Partnered with the largest gaming cafes in Ontario**
- Live tournaments and leagues with **active paying customers**

### Kindr (most recent employment)
- Founding Software Engineer, Apr 2025–**Jun 2026**
- Healthcare AI agents: Ultravox, LiveKit, Rime TTS
- 2,200+ calls/mo, 52+ dental clinics
- Stack: React, Vite, TypeScript, FastAPI, Redis, Kafka, Terraform, Alembic, PostgreSQL

---

## Stats (homepage)

```
10+    Projects shipped
3      Startups built for
16+    Months of internships
B.Math Computational Mathematics, Waterloo
```

AboutMe mini-stats: `10+ Projects`, `1+ Yr in Industry`, `3 Startups`

---

## Routing

```
/         → Home (Intro + Stats + Skills + Cards) — Marvel intro plays here only
/about    → About
/contact  → Contact
```

Navbar brand: `DB <span class="text-accent">Portfolio</span>`, `font-extralight tracking-widest`.

---

## Deployment

Railway target — root directory must be set to `frontend/DB Portfolio` in Railway dashboard settings. Build: `npm run build`. The `package.json` scripts are `dev / build / preview`.
