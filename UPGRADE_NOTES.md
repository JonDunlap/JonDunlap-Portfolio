# Dependency Upgrade Notes

Running log of what changed and why, kept in step with `UPGRADE_PLAN.md`.
Baseline audit (before any changes): 188 vulnerabilities (16 critical, 49
high, 113 moderate, 10 low) — see `audit-baseline/npm-audit.txt` /
`audit-baseline/npm-outdated.txt` for the raw output captured at the start
of this work.

## Batch 1 — patch/minor, non-breaking

- **Transitive deps** — ran `npm audit fix` (no `--force`). Bumped a large
  set of nested dependencies within their existing semver ranges (no
  top-level `package.json` changes beyond the lockfile). Vulnerabilities:
  188 → 152. All 152 remaining trace back to `react-scripts` and `gh-pages`
  and require their major-version bumps (Batch 2) to resolve.
- **@testing-library/jest-dom** `5.16.5` → `5.17.0`. No code changes
  needed.
- **@material-ui/core** `^4.12.3` → `^4.12.4`, **@material-ui/icons**
  `^4.11.2` → `^4.11.3`. Declared range refreshed to match the latest
  published 4.x patch (already what was being resolved/installed — this
  just makes `package.json` match reality). No code changes needed.
- **Gotcha found (pre-existing, unrelated to this batch):**
  `src/App.test.js` was still the untouched `create-react-app` boilerplate
  test, asserting on "learn react" text that was never part of this
  portfolio's actual `App` component (confirmed via `git log --follow`,
  unchanged since the initial `create-react-app` scaffold commit). Fixed
  it to assert on real, always-rendered content ("Jonathan Dunlap" heading
  from the Introduction component) so `npm test` passes meaningfully.

Build (`npm run build`) and test (`npm test`) both clean after this batch.

## Follow-ups (out of scope for this pass — see UPGRADE_PLAN.md)

- Migrate off Create React App (`react-scripts`) — no stable release since
  April 2022, React team no longer recommends it. Likely target: Vite.
- Migrate `@material-ui/core`/`@material-ui/icons` v4 → `@mui/material`
  v5/v6 — v4 has been EOL since Sept 2021.
- React/ReactDOM 17 → 18 or 19 — deferred until/alongside the MUI v5
  migration, since MUI v4 was never tested against React 18+ concurrent
  rendering and the CRA 4 entry point still uses legacy `ReactDOM.render`.
