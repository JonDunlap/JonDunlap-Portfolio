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

## Batch 2.1 — react-scripts 4.0.3 → 5.0.1 (major)

- Vulnerabilities: 152 → 26 (9 low, 5 moderate, 11 high, 1 critical). This
  was the single biggest win of the whole upgrade — nearly all prior
  findings traced back to react-scripts' webpack 4 toolchain.
- **Code changes required** (webpack 5 / css-loader v6 breaking changes):
  - All 5 components using CSS Modules (`contact`, `header`,
    `hamburgerMenu`, `introduction`, `navLinks`) imported their styles as
    `import * as styles from './x.module.css'` (namespace import).
    Webpack 5's static export analysis for css-loader v6 output doesn't
    recognize individual class names as named exports on a namespace
    import, so the build failed with `Attempted import error: 'link' is
    not exported from './contact.module.css'`. Fixed by switching all 5
    to default imports (`import styles from './x.module.css'`), which is
    the reliable pattern under css-loader v6 and works identically at
    runtime.
  - `contact.module.css` also used `composes: link from '../../App.css'`
    — composing a CSS Modules class from a plain (non-module) global
    stylesheet. This is fragile under css-loader v6, so the composed
    `.link` rule (and its `:hover` state) was inlined directly into
    `contact.module.css` instead of cross-file composition.
- **Script change:** removed the `--openssl-legacy-provider` flag from
  `build`/`start`. It was a workaround for webpack 4 using an OpenSSL API
  Node 17+ removed by default — webpack 5 doesn't need it. Verified both
  `npm run build` and `npm start` work without it.
- **Pre-existing quirk noted, not fixed:** `npm start` is invoked as
  `react-scripts start -p 4000`, but `-p` isn't a flag `react-scripts`
  recognizes — the dev server always binds to the default port (3000),
  flag or no flag. Predates this upgrade; out of scope to fix here.
- Verified visually in a browser (dev server): layout, terminal-green
  theme, and the Contact section's link hover states all render
  correctly after the CSS Modules import changes.

Build and test suite both clean after this batch.

## Follow-ups (out of scope for this pass — see UPGRADE_PLAN.md)

- Migrate off Create React App (`react-scripts`) — no stable release since
  April 2022, React team no longer recommends it. Likely target: Vite.
- Migrate `@material-ui/core`/`@material-ui/icons` v4 → `@mui/material`
  v5/v6 — v4 has been EOL since Sept 2021.
- React/ReactDOM 17 → 18 or 19 — deferred until/alongside the MUI v5
  migration, since MUI v4 was never tested against React 18+ concurrent
  rendering and the CRA 4 entry point still uses legacy `ReactDOM.render`.
