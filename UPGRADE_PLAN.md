# Dependency Upgrade Plan

Generated 2026-08-14 from the Step 1 audit (see `npm outdated` / `npm audit`
output referenced below). Work happens on branch `chore/dependency-upgrades`,
never directly on `main` (the branch GitHub Pages deploys from).

## Audit baseline

- Node v24.19.0 / npm v11.17.0 (installed via nvm for this work; nothing was
  present locally before).
- `npm audit`: **188 vulnerabilities** — 16 critical, 49 high, 113 moderate,
  10 low. 145 are fixable via a plain `npm audit fix` (no top-level version
  bump required — these are all transitive/nested deps). The remaining 43
  all trace back to `react-scripts` and `gh-pages` and only resolve once
  those two are bumped to their latest majors.
- All packages in `reactjs/package.json` are already at the ceiling of their
  declared semver range — there is almost no "free" minor/patch movement
  available. Getting meaningfully current requires major bumps across the
  board.

## Structural flags (surfaced to Jon, decision: patch now / migrate later)

- **Create React App (`react-scripts`) is unmaintained.** Latest stable
  release was 5.0.1 in April 2022; nothing since. React team no longer
  recommends CRA for new projects. Decision: bump 4.0.3 → 5.0.1 now (clears
  most of the audit), but **do not** migrate off CRA (e.g. to Vite) in this
  pass — track as a follow-up in `UPGRADE_NOTES.md`.
- **Material-UI v4 is EOL** (no development since Sept 2021). Already at the
  latest 4.x (`4.12.4` / `4.11.3`). Decision: leave on v4 for this pass —
  **do not** migrate to `@mui/material` v5/v6 now — track as a follow-up.
- **React/ReactDOM major bump (17 → 18/19) is deferred**, not attempted in
  this pass. Reasoning: MUI v4 was never tested against React 18+ concurrent
  rendering, and the CRA 4 template still uses the legacy `ReactDOM.render`
  API. Bumping React alone, ahead of the MUI v5 migration, is the kind of
  compounded risk the ground rules ask us to avoid. Track as a follow-up
  alongside the MUI v5 migration (they should likely happen together).

## Upgrade order

Per the ground rules: build tooling → core framework → routing/state →
UI libraries → remaining utilities, with **all major-version bumps done
last, one package at a time.** This project has no routing/state
dependency, and (per the flags above) the core-framework major bump is out
of scope for this pass — so in practice this pass is: transitive patch
fixes → testing-library patch bump → majors, one at a time, ordered
build tooling → deploy tooling → utilities → testing libraries.

### Batch 1 — patch/minor, non-breaking

| Package | Current | Target | Notes |
|---|---|---|---|
| *(transitive deps)* | — | — | `npm audit fix` (no `--force`) — resolves 145/188 vulnerabilities via nested dependency bumps within existing semver ranges. |
| @testing-library/jest-dom | 5.16.5 | 5.17.0 | Highest 5.x patch; no peer-dep concerns. |
| @material-ui/core | ^4.12.3 | ^4.12.4 | Highest 4.x patch; update the declared range to match what's already installed. |
| @material-ui/icons | ^4.11.2 | ^4.11.3 | Same as above. |

Build + smoke-test after this batch before moving on.

### Batch 2 — major bumps, one at a time (in this order)

| Order | Package | Current | Target | Why this order / risk notes |
|---|---|---|---|---|
| 1 | react-scripts | 4.0.3 | 5.0.1 | Build tooling first, per ground rules. Webpack 5 under the hood — expect config/CSS-loader ripple effects. This is also what clears the bulk of the "force" audit fixes. Once on 5.x, re-check whether `--openssl-legacy-provider` is still required. |
| 2 | gh-pages | 3.2.3 | 6.3.0 | Deploy-only tool, isolated to `npm run deploy`; not part of the app bundle. Low blast radius. |
| 3 | web-vitals | 1.1.2 | latest 6.x | Tiny surface area — only used in `reportWebVitals.js`. API changed (named exports vs. default `getCLS`/`getFID`/... helpers), so the call site will need a small update. |
| 4 | clsx | 1.2.1 | latest 2.x | Utility with a tiny API; changelog-check only, low risk. |
| 5 | @testing-library/react | 11.2.7 | **12.1.5** (not 16.x) | v13+ requires React ^18, which is out of scope this pass — 12.x is the highest major still compatible with React 17. |
| 6 | @testing-library/user-event | 12.8.3 | 14.6.4 | No React peer-dep constraint; API is mostly now async (`await userEvent.click(...)`) — tests will need updates. |
| 7 | @testing-library/jest-dom | 5.17.0 | latest 7.x | No React peer-dep constraint. Do last since it's dev/test-only and easiest to bisect if something in the Jest config breaks. |

Build + full test pass after **each** package in Batch 2, per the ground
rules — do not batch major bumps together.

## Out of scope for this pass (tracked as follow-ups)

- Migrate off Create React App (likely target: Vite).
- Migrate `@material-ui/core`/`@material-ui/icons` v4 → `@mui/material` v5
  or v6.
- React/ReactDOM 17 → 18 or 19 (blocked on / bundled with the above).

These three are interdependent and are a structural project on their own,
not a version-bump batch — revisit once this pass is merged and stable.
