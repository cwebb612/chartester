# CLAUDE.md — Portfolio Codebase Guide

## Project Overview

Personal portfolio site for Charlie Webb. Built with Next.js App Router. Single-page layout with sections: Hero, Work, About, Contact.

## Stack

| Tool | Version | Purpose |
|------|---------|---------|
| Next.js | 16 | Framework (App Router) |
| React | 19 | UI |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Styling |
| Biome | 2.2 | Linting + formatting |
| React Compiler | 1.0 | Auto-memoization |

## Commands

```bash
npm run dev      # Start dev server (http://localhost:3000)
npm run build    # Production build
npm run lint     # Biome lint check
npm run format   # Biome format (writes in place)
```

## Key Files

```
src/
  app/
    globals.css       # Theme tokens, custom animations, dot-grid utility
    layout.tsx        # Root layout, font setup, metadata
    page.tsx          # Main portfolio page — all sections live here
  components/
    Typewriter.tsx    # "use client" typewriter animation component
```

## Design System

Defined in `globals.css` as CSS custom properties under `@theme inline`:

| Token | Value | Tailwind Class |
|-------|-------|----------------|
| `--color-background` | `#080808` | `bg-background` |
| `--color-foreground` | `#f0f0f0` | `text-foreground` |
| `--color-muted` | `#737373` | `text-muted` |
| `--color-border` | `#1f1f1f` | `border-border` |
| `--color-card` | `#0f0f0f` | `bg-card` |
| `--color-accent` | `#22c55e` | `text-accent` / `bg-accent` |
| `--font-sans` | Geist Sans | `font-sans` |
| `--font-mono` | Geist Mono | `font-mono` |

Custom animations available: `animate-blink`, `animate-fade-in-up` (class), `dot-grid` (class).

## Code Conventions

- **Formatter**: Biome — 2-space indent, spaces (not tabs)
- **Imports**: Organized automatically by Biome assist
- **Client components**: Use `"use client"` directive when hooks are needed. Server components are the default.
- **Alias**: `@/` maps to `src/` (configured in `tsconfig.json`)
- **React Compiler**: Enabled in `next.config.ts` — don't manually add `useMemo`/`useCallback` unnecessarily

## How to Update Content

### Changing name / personal info
- `src/app/layout.tsx` — update `metadata.title` and `metadata.description`
- `src/app/page.tsx` — update the nav logo, hero heading, about bio, contact email, social links, footer

### Adding a project
Add an entry to the `PROJECTS` array in `src/app/page.tsx`:
```ts
{
  title: "My Project",
  year: "2025",
  description: "What it does and why it matters.",
  tags: ["Next.js", "TypeScript"],
  href: "https://github.com/...",
}
```

### Changing the typewriter phrases
Edit the `TYPEWRITER_PHRASES` array in `src/app/page.tsx`.

### Updating the tech stack badges
Edit the `STACK` array in `src/app/page.tsx`.

## Deployment

Configured for Vercel (default Next.js deployment target). `npm run build` should pass before deploying.

## Notes

- Dark mode only — no light/dark toggle currently implemented
- Tailwind v4 uses `@theme inline` for design tokens (no `tailwind.config.js`)
- `biome.json` has `noUnknownAtRules: off` to allow Tailwind v4's `@theme` and `@import` directives
