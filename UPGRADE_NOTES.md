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

## Batch 2.2 — gh-pages 3.2.3 → 6.3.0 (major)

- Vulnerabilities: 26 → 25 (critical count fixed: 1 → 0).
- No code changes needed. CLI flags used by the `deploy` script (`-d
  build`) are unchanged in 6.x. Deploy-only tool, isolated to `npm run
  deploy` — doesn't touch the app bundle, so no browser verification
  needed.

Build and test suite both clean after this batch.

## Batch 2.3 — web-vitals: removed instead of bumped

- Investigated before bumping: `web-vitals` was declared in
  `package.json` but never imported anywhere in `src/` — no
  `reportWebVitals.js`, no call site in `index.js`. Dead weight left over
  from the CRA scaffold, never wired up.
- Decision (confirmed with Jon): removed via `npm uninstall web-vitals`
  rather than bumping to latest 6.x, since there was nothing to migrate.
  Net simplification, not a version bump.

Build and test suite both clean after this batch.

## Batch 2.4 — clsx: removed instead of bumped

- Same situation as web-vitals: declared in `package.json` but never
  imported anywhere in `src/`. Removed via `npm uninstall clsx` rather
  than bumping to latest 2.x.

Build and test suite both clean after this batch.

## Batch 2.5 — @testing-library/react 11.2.7 → 12.1.5 (major)

- Capped at 12.1.5 rather than latest (16.3.2) — v13+ requires React ^18,
  which is out of scope this pass (React stays on 17.x, see follow-ups).
  12.x is the highest major that still supports React 17.
- No code changes needed.

Build and test suite both clean after this batch.

## Batch 2.6 — @testing-library/user-event: removed instead of bumped

- Same situation as web-vitals/clsx: declared but never used in any test
  file (`App.test.js` doesn't import it). Removed via `npm uninstall`
  rather than bumping to latest 14.x.

Build and test suite both clean after this batch.

## Batch 2.7 — @testing-library/jest-dom: capped at 5.17.0, not bumped

- Investigated bumping to latest (7.0.1) as planned, but `react-scripts`
  5.0.1 bundles Jest **27.5.1**, and `jest-dom` 6.0.0+ requires Jest
  `>=28`. CRA doesn't let you bump Jest independently without ejecting.
  `5.17.0` (already installed in Batch 1) is the newest release
  compatible with CRA's bundled Jest — nothing to change here.
- This is the same underlying constraint (CRA pinning its toolchain
  versions) that motivates the "migrate off CRA" follow-up below.

## Follow-ups (out of scope for this pass — see UPGRADE_PLAN.md)

- Migrate off Create React App (`react-scripts`) — no stable release since
  April 2022, React team no longer recommends it. Likely target: Vite.
- Migrate `@material-ui/core`/`@material-ui/icons` v4 → `@mui/material`
  v5/v6 — v4 has been EOL since Sept 2021.
- React/ReactDOM 17 → 18 or 19 — deferred until/alongside the MUI v5
  migration, since MUI v4 was never tested against React 18+ concurrent
  rendering and the CRA 4 entry point still uses legacy `ReactDOM.render`.
