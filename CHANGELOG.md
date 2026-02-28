# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]

### Added

- Evidence-first project governance docs and templates.
- GitHub issue and PR templates.
- Repository-level evidence check workflow.
- MaxTone strategic synthesis document for positioning, proof priorities, and execution split.
- Multi-agent market intelligence ledger to track broad/narrow signals and site-impact mapping.
- `.gitignore` entries for local Playwright artifacts and macOS metadata files.
- Website v1 scaffold (`index.html`, `styles.css`, `app.js`) with core sections and conversion structure.
- Door Greeter agent with typed and voice input, local intent fallback, and optional live AI route via `api/agent.js`.
- ADR 0001 documenting v1 site architecture and hybrid greeter decision.
- Demo log entry for v1 site scaffold.
- Visual system updated to a restrained dark \"VS/matrix\" aesthetic with neon green/blue accents.
- React + Vite frontend stack with Tailwind theme, shadcn-style UI primitives, and Radix Dialog integration for the Door Greeter focus mode.
- Theme refactored to align with `ui.shadcn.com` visual language (neutral dark tokens, Inter/mono typography, calmer borders/surfaces, and simplified controls).
- Full page layout restyled to shadcn docs-site structure (sticky utility header, centered page-header hero, border-grid sections, muted card hierarchy, and compact nav/action rhythm).
- Design authority pack at `docs/design/UI_AUTHORITY.md` with standards, source hierarchy, accessibility baseline, and a UI merge scoring rubric.
- Applied UI rubric audit to homepage (`15/16` post-pass) with proof snapshot section, recruiter CTA tightening, and accessibility upgrades (skip link + keyboard-friendly quick nav + chat aria labels).
- Information architecture pivoted from single-page MaxTone/services framing to a multi-page `tonymikityuk` profile: clean landing page, compact `Poe` routing agent, dedicated `/career` page, and dedicated `/projects` page for app builds + hybrid workflows.
- Added `vercel.json` SPA rewrite so direct visits to `/career` and `/projects` resolve correctly in production.
- Landing page visual polish pass: increased whitespace and typographic rhythm, simplified nav/CTA styling, and tightened `Poe` into a smaller low-noise widget for cleaner first impression.
- Mobile micro-polish pass: added dedicated mobile primary navigation, tightened hero scale/spacing on small screens, and stacked landing CTAs for better touch ergonomics.
- Final copy tightening pass for Career and Projects pages; added explicit `v1 skeleton` scope section and milestone labeling.
