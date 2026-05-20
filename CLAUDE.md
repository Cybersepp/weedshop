# Woody Weedpecker

Premium cannabis shop and cannabis sommelier mockup website based in Koh Phangan, Thailand. All products are lab-certified from reputable partners. Static frontend only — no backend, no database.

## Quick Reference

- Dev: `npm run dev` (runs `npx serve .`)
- Or just open `index.html` directly in a browser

## Project Structure

```
index.html                       # Homepage — hero, showcase, Find Us
about.html                       # Brand story
partnerships.html                # Franchise opportunity (links partnerships_ru.pdf)
styles.css                       # Shared theme — every page links this
app.js                           # Shared logic — i18n, navbar, language dropdown
logo.png                         # Navbar mascot
woody_woodpecker_movie_head.glb  # 3D hero model
pics/                            # Photos used in showcase and page heroes
partnerships_ru.pdf              # Franchise proposal (linked from partnerships.html)
docs/                            # Documentation
specs/                           # Requirements and specs
```

## Tech Stack

- Pure HTML/CSS/JS — no framework, no build step
- Three.js + GLTFLoader (CDN) — 3D hero model
- GSAP (CDN) — scroll animations
- Google Fonts — Outfit typeface

## Key Product Categories

- Flowers / Strains (sativa, indica, hybrid)
- Pre-rolls
- Edibles
- Extracts / Concentrates
- Accessories

## Ordering

No in-app checkout. All orders go through external links:
- Instagram: direct link
- Telegram: order bot link

Always show these CTAs prominently on product pages and in the navbar/footer.

## Conventions

- Shared theme in `styles.css`; shared JS (i18n, navbar, language dropdown) in `app.js`. Page-specific code (Three.js, GSAP scroll, strain interactions) stays inline in the page.
- Each HTML page duplicates the navbar and footer markup — there is no template/include system.
- i18n is a single dictionary in `app.js` covering all pages, with `data-i18n` attributes on translatable elements.
- Mobile-first responsive design.
- Add new shared files only when content is truly shared across pages.

## What NOT to Do

- NEVER add a real payment system — ordering is via Instagram/Telegram links only
- NEVER add a backend or database — this is a static mockup
- NEVER split into a framework project unless explicitly requested

## Age Verification

Modal shown on first visit (localStorage to remember). Thai cannabis law requires **20+**, not 18 — the gate uses 20. Markup duplicated in each HTML page; behavior in `app.js` `initAgeGate`. Decline redirects away. Includes a pregnant/breastfeeding-exclusion disclaimer per Thai regulations.

## Design Direction

- Premium, modern, slightly earthy aesthetic
- Dark-mode friendly palette (deep greens, warm neutrals, gold accents)
- Highlight lab certification and product quality
- Cannabis sommelier section should feel sophisticated, not stoner-coded

## Testing

No testing required for this mockup phase.

## Commit Rules

Run `/commit` after completing tasks.

## Context Tips

- One chat = one task
- Reference `specs/requirements.md` for full feature list
- Reference `docs/README.md` for documentation index
