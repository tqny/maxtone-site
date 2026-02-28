# Tony Mikityuk Site Project

This repository follows an evidence-first delivery standard.

See [docs/EVIDENCE_STANDARD.md](docs/EVIDENCE_STANDARD.md) for the operating script that governs planning, implementation, review, release notes, and outcomes tracking.
See [docs/design/UI_AUTHORITY.md](docs/design/UI_AUTHORITY.md) for the design authority pack and UI quality checklist.

## Website V1

- Entry point: `index.html` + `src/main.jsx`
- App composition: `src/App.jsx` (history-routed multipage shell)
- Routes: `/` (landing), `/career`, `/projects`
- Current milestone: `v1 skeleton`
- Styling system: Tailwind + custom theme in `src/index.css`
- UI primitives: `src/components/ui/*` (`shadcn`-style components)
- Landing includes compact `Poe` guide agent for quick routing and general site questions
- Optional live AI reply endpoint (Vercel): `api/agent.js`

### Local Preview

Install dependencies and run the dev server:

```bash
npm install
npm run dev
```

Then open the local Vite URL shown in terminal (usually `http://localhost:5173`).

### Production Build

```bash
npm run build
npm run preview
```

### Live Agent (Optional)

`Poe` works without backend using local intent logic.

For live AI responses, deploy on Vercel and set:

- `OPENAI_API_KEY`

## Quick Start

1. Read `docs/EVIDENCE_STANDARD.md`.
2. Read `docs/design/UI_AUTHORITY.md` before visual or UX changes.
3. Use the templates in `docs/templates/` before starting implementation.
4. Open work as GitHub issues and link PRs to issues.
5. Record decisions in `docs/adr/` for non-trivial tradeoffs.
6. Log weekly outcomes in `docs/metrics/`.
