# Woody Weedpecker

Premium cannabis shop and cannabis sommelier mockup website based in Koh Phangan, Thailand. All products are lab-certified from reputable partners. Static frontend only — no backend, no database.

## Quick Reference

- Dev: `npm run dev`
- Build: `npm run build`
- Lint: `npm run lint`
- Preview: `npm run preview`
- Typecheck: `npm run typecheck`

## Directory Structure

```
src/
  components/      # Reusable UI components
  pages/           # Page-level components (Home, Products, Sommelier, etc.)
  data/            # Static product/strain data (JSON or TS)
  assets/          # Images, icons
  types/           # TypeScript interfaces and types
  App.tsx          # Root component with routing
  main.tsx         # Entry point
  index.css        # Tailwind base styles
```

## Tech Stack

- Framework: React 18 + TypeScript
- Build: Vite
- Styling: Tailwind CSS
- Icons: Lucide React
- Routing: React Router DOM (add if needed)

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

- Components in `PascalCase.tsx`
- Data files in `camelCase.ts`
- Tailwind only — no custom CSS unless strictly necessary
- Mobile-first responsive design
- Keep components small and focused; business logic stays out of leaf components
- All product data lives in `src/data/` as static TypeScript files

## What NOT to Do

- NEVER add a real payment system — ordering is via Instagram/Telegram links only
- NEVER add a backend or database — this is a static mockup
- NEVER add eslint-disable comments — fix the actual issue
- NEVER create abstractions that aren't needed yet
- NEVER silence TypeScript errors with `as any` — fix the types properly

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
