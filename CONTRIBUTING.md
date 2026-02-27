# Contributing

This repository uses an evidence-first workflow.

Before opening a pull request:

1. Read `docs/EVIDENCE_STANDARD.md`.
2. Open or link a GitHub issue for non-trivial work.
3. Use `.github/PULL_REQUEST_TEMPLATE.md` completely.
4. Add ADR/postmortem/metrics updates when applicable.
5. Update `CHANGELOG.md` for user-visible changes.
6. Run `./scripts/check-evidence.sh`.

## Definition of Done

A change is complete only when:

- Behavior is implemented and validated.
- Evidence artifacts are updated.
- Risks and rollback are documented.
- Changelog is current.
