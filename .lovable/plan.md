
# REMAL — Luxury Hospitality Management Website

A cinematic, editorial-style multi-page site for REMAL, a luxury hospitality management company in Egypt. Inspired by Our Habitas in feel and structure, but completely original in content, layout details, and brand identity.

## Brand & Design System

**Palette** (added to `src/styles.css` as oklch tokens):
- Sand Beige, Warm Ivory, Desert Stone, Soft Clay, Deep Charcoal
- Accents: Red Sea Blue, Palm Green, Bronze Gold
- Default light theme uses Warm Ivory background + Charcoal text; dark sections use Charcoal background + Ivory

**Typography**:
- Headlines: Cormorant Garamond (elegant serif) via Google Fonts
- Body / labels: Inter, with small uppercase tracked labels for editorial accents

**Motion**:
- Subtle fade-up + image reveals via Intersection Observer (no heavy libs)
- Smooth scroll, parallax hero, gentle hover scales

**Tokens added**: editorial spacing scale, hairline borders, soft shadows, gradient overlays for hero, serif/sans font families wired into Tailwind via `@theme`.

## Site Architecture (TanStack file-based routes)

Each route gets its own `head()` with unique title, description, og:title/description, and og:image where applicable.

```
src/routes/
  __root.tsx              (shell + global font links + smooth scroll)
  index.tsx               (Home — full landing experience)
  destinations.tsx        (All destinations grid)
  destinations.$slug.tsx  (Single destination detail)
  experiences.tsx         (Curated experiences)
  services.tsx            (Hotel management services)
  journal.tsx             (Stories / journal index)
  sustainability.tsx      (Sustainability & culture)
  about.tsx               (About REMAL)
  contact.tsx             (Partnership / inquiry)
```

Top nav (minimal, centered logo, thin links): Destinations · Experiences · Services · Journal · Sustainability · About · Contact.

## Home Page Sections (`/`)

1. **Cinematic Hero** — fullscreen background (Ken-Burns style slow zoom on a hero image, with a looping muted video fallback if available). Dark gradient overlay. Centered serif headline "Crafting Exceptional Hospitality Across Egypt", subhead, two ghost buttons (Discover REMAL · Partner With Us), thin scroll indicator.
2. **Editorial Intro** — centered narrow text block, small uppercase eyebrow "A New Chapter in Egyptian Hospitality".
3. **Our Destinations** — horizontally scrollable / responsive editorial grid of 7 cards: Red Sea, Sinai, North Coast, Cairo, Luxor, Aswan, Siwa. Each card: cinematic image, name, one-line poetic subtitle.
4. **Featured Experience** — alternating image/text. Large image left, editorial copy right ("Homecoming"-style narrative).
5. **Our Egypt Journey** — second alternating block, image right.
6. **Services Preview** — minimal editorial list of 8 services with hairline dividers and hover reveal.
7. **Immersive Fullwidth Divider** — cinematic image/video with overlay quote: "Hospitality Beyond Accommodation".
8. **Stories / Journal** — asymmetric magazine grid (3 featured posts).
9. **Sustainability** — earthy split layout with aerial nature imagery.
10. **Partnership CTA** — dark charcoal section, oversized serif headline, inquiry form (name, company, email, message), elegant minimal inputs.
11. **Footer** — dark editorial: logo, columns (Brand, Destinations, Services, Journal, Contact), socials, newsletter signup, fine print.

## Other Pages (concise but full content)

- **destinations.tsx**: hero + full grid of 7 destinations, each linking to detail.
- **destinations.$slug.tsx**: hero image, narrative, gallery, "stay with us" CTA. Loader returns mock destination data from a local module.
- **experiences.tsx**: editorial grid (Wellness Rituals, Desert Expeditions, Red Sea Diving, Culinary Journeys, Cultural Encounters, Nile Voyages).
- **services.tsx**: detailed service cards for the 8 hospitality services.
- **journal.tsx**: magazine-style index of stories.
- **sustainability.tsx**: long-form editorial with imagery.
- **about.tsx**: brand story, philosophy, leadership placeholder.
- **contact.tsx**: full inquiry form + contact details (Cairo HQ).

## Imagery

Generate ~10–12 cinematic images via `imagegen` (fast tier, 1536x1024 landscape and a couple 1024x1536 portraits) saved to `src/assets/`:
- Hero (Egyptian desert resort at golden hour)
- Red Sea coast resort, Sinai mountains, North Coast villa, Cairo rooftop, Luxor temple light, Aswan Nile, Siwa oasis
- Featured experience interior (boutique villa lit warmly)
- Sustainability aerial (turquoise lagoon)
- Stories thumbnails (artisan, desert dining, starry sky)
- Partnership/Contact dark mood image

All imported as ES6 modules. Alt text on every image.

## Components (`src/components/remal/`)

- `SiteHeader.tsx`, `SiteFooter.tsx`
- `Hero.tsx` (variant for home + page heroes)
- `EditorialBlock.tsx` (alternating image/text)
- `DestinationCard.tsx`, `DestinationsGrid.tsx`
- `ServicesList.tsx`
- `JournalGrid.tsx`
- `FullwidthDivider.tsx`
- `InquiryForm.tsx` (client-side only; submit shows success state — no backend yet)
- `Reveal.tsx` (IntersectionObserver fade-up wrapper)
- `Eyebrow.tsx` (small uppercase label)

All styled with semantic tokens only (no raw hex in JSX).

## Technical Notes

- Tailwind v4 `@theme` registers: `--font-serif`, `--font-sans`, new color tokens (sand, ivory, stone, clay, charcoal, sea, palm, bronze).
- Google Fonts loaded via `<link>` in `__root.tsx` head.
- Smooth scroll via `html { scroll-behavior: smooth }`.
- Intersection-observer based reveal — no animation libraries added.
- Forms are presentational only (no Lovable Cloud) — can wire up later.
- SEO: per-route `head()` metadata, semantic landmarks, single H1 per page, descriptive alt text, JSON-LD `Organization` schema on home.
- Fully responsive, mobile-first; nav collapses to a minimal sheet on mobile.

## Out of Scope (this pass)

- Real video files (we use a Ken-Burns animated still for the hero; can swap to `<video>` when assets provided).
- Backend for the inquiry form (Lovable Cloud can be added in a follow-up).
- CMS for journal entries (content is in static modules).
