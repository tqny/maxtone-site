# ADR 0001: V1 Site Scaffold and Hybrid Door Greeter Agent

- Status: Accepted
- Date: 2026-02-27
- Owner: Tony Mikityuk

## Context

The repository had governance and strategy artifacts but no runnable website code. The v1 requirements include:

- public proof-oriented website structure
- visitor-facing "door greeter" for services, availability, and experience questions
- low-friction deployment path compatible with static hosting and Vercel

## Decision

Build a lightweight single-page v1 site (`index.html`, `styles.css`, `app.js`) with a hybrid greeter model:

1. Local intent fallback in client-side JavaScript for guaranteed baseline behavior.
2. Optional live AI via serverless endpoint (`api/agent.js`) using `OPENAI_API_KEY`.

## Options Considered

1. Full framework app (Next.js) from day one
2. Static site only with no live AI path
3. Lightweight static site + optional serverless AI endpoint

## Consequences

Positive:

- Fast delivery of a visible v1
- Supports typed and voice interaction immediately
- Preserves future path to richer AI behavior without blocking launch

Negative:

- Client fallback answers are limited and rule-based
- Voice features depend on browser support
- Additional security review needed before production-grade live-agent expansion

## Validation Plan

- Confirm section coverage: landing, projects, work with agents, role fit, contact
- Confirm greeter handles services, availability, experience, and role-fit prompts
- Confirm fallback behavior when API key is not configured
