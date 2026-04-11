# Woody Weedpecker

Premium cannabis shop and cannabis sommelier mockup website based in Koh Phangan, Thailand. All products are lab-certified from reputable partners. Static frontend only — no backend, no database.

## Quick Reference

- Dev: `npm run dev` (runs `npx serve .`)
- Or just open `index.html` directly in a browser

## Project Structure

```
index.html      # Single-file app — all HTML, CSS, and JS inline
logo.png        # Navbar mascot image
weed_bud.glb    # 3D model for the hero section
docs/           # Documentation
specs/          # Requirements and specs
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

- All code lives in `index.html` — keep it organized with clear section comments
- Mobile-first responsive design
- No external CSS/JS files unless strictly necessary — keep it self-contained

## What NOT to Do

- NEVER add a real payment system — ordering is via Instagram/Telegram links only
- NEVER add a backend or database — this is a static mockup
- NEVER split into a framework project unless explicitly requested

## Age Verification

Show a simple age gate modal on first visit (localStorage to remember). User must confirm they are 18+ to enter.

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
