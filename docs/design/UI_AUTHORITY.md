# UI Authority Pack

This document is the design source-of-truth for MaxTone.  
Use it to keep the site visually strong, readable, and credible to Seattle hiring managers, recruiters, and operators evaluating execution quality.

## 1) Purpose

MaxTone is not a generic portfolio. It is an execution lab that must:

- Feel modern and high-signal.
- Stay legible under fast skim.
- Convert recruiter curiosity into trust and interview action.

Every UI change should support those three outcomes.

## 2) Primary Reference Stack

Use these in priority order:

1. `shadcn/ui` docs patterns (component rhythm, spacing, hierarchy).
2. Radix primitives (behavior and accessibility semantics).
3. WCAG 2.2 AA (contrast, focus, keyboard behavior).
4. Existing MaxTone tokens/components (consistency over novelty).

If references conflict, prefer accessibility and clarity over style.

## 3) Visual Direction (Current)

- Theme: dark, restrained, technical.
- Accent system: neon green + electric blue as emphasis only.
- Surfaces: layered charcoal with subtle border separation.
- Typography: high-contrast headings, compact supporting copy, mono only for labels/data.

Do not add decorative effects that reduce readability (heavy glows, noisy textures, low-contrast overlays).

## 4) Layout Standards

- Use one clear primary message per viewport.
- Keep section rhythm generous: avoid dense blocks.
- Prefer cards/grids to separate ideas and lower cognitive load.
- Keep line length readable (ideal ~60-90 chars for body text).
- On mobile, collapse complexity before reducing font size.

## 5) Component Standards

- Reuse shared primitives from `src/components/ui/*`.
- Keep button hierarchy explicit:
  - Primary: one per zone.
  - Secondary: supportive actions.
  - Ghost/text: low-priority navigation.
- Preserve consistent radius, border tone, and hover transitions.
- Dialogs must trap focus and close predictably via keyboard.

## 6) Content Readability Standards

- Replace abstract claims with proof + context.
- Use short paragraphs and explicit labels.
- Put quantitative outcomes near the related claim.
- Show tradeoffs and failure modes where relevant.

## 7) Accessibility Baseline (Required)

- WCAG AA contrast minimum for body and controls.
- Full keyboard navigation for nav, cards, dialogs, and CTAs.
- Visible focus states on interactive elements.
- Semantic headings and landmarks.
- Respect reduced motion preferences.

## 8) QA Checklist (Before PR Merge)

Score each category 0-2:

- `0` = fails baseline
- `1` = acceptable
- `2` = strong

Categories:

1. Visual hierarchy clarity
2. Information density (not cramped)
3. Message-to-proof alignment
4. Component consistency
5. Accessibility basics
6. Mobile readability
7. CTA clarity and placement
8. Brand coherence (MaxTone tone + aesthetic)

Interpretation:

- `14-16`: ship
- `11-13`: ship with follow-up issue
- `<=10`: revise before merge

## 9) Evidence Capture for UI Changes

For major UI updates, include:

- One desktop screenshot
- One mobile screenshot
- What changed and why (1-3 bullets)
- Expected conversion/readability impact
- Any measured signal after release (if available)

Log these in:

- `docs/demos/`
- `CHANGELOG.md`
- PR description test/evidence section

## 10) Design Debt Triggers

Create a cleanup issue when any of these occur:

- Repeated one-off utility styles across pages
- Inconsistent spacing/radius/color usage
- More than one competing visual emphasis in same section
- Content requiring horizontal scroll on mobile

---

Owner: MaxTone project maintainers  
Last updated: 2026-02-28
