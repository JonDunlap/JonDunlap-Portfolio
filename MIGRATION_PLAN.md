# CRA → Vite / MUI v5 / React 18 Migration Plan

Follow-up to `UPGRADE_PLAN.md` / `UPGRADE_NOTES.md` (the incremental
dependency-patch pass, merged via #21/#22). This plan covers the three
structural items that were deliberately deferred there:

- Create React App (`react-scripts`) → Vite
- Material-UI v4 → v5
- React/ReactDOM 17 → 18

**Target scope:** stop at MUI v5 + React 18 (not v6/19 — both are
actively supported for years, no urgency to go further right now).

**Goal:** same design, same functionality, different toolchain
underneath. No visual or behavioral change is expected or acceptable
unless explicitly called out and approved.

## Ground rules for this migration

- **`main` is not touched until the entire migration is validated.**
  Everything happens on integration branch `migrate/vite-mui5-react18`.
  Each phase is its own branch, PR'd into the integration branch (not
  `main`) and validated before the next phase starts.
- Only once all three phases are merged into the integration branch and
  fully re-validated together does that branch go to `main` via a final
  PR — and even then, `main` merging does **not** deploy. Deployment
  (`npm run deploy`) is a separate, explicitly-approved step, same as
  the previous upgrade pass.
- **Visual baseline first.** Screenshots of every section (Introduction,
  About, Projects, Contact) at both the desktop nav breakpoint and the
  mobile hamburger-menu breakpoint (MUI's `sm` = 600px) are captured
  before any change, and diffed against after each phase.
- Build + test clean after every phase, same discipline as the prior
  upgrade pass.

## Inventory: current Material-UI v4 usage

| Component/API | Files | v5 migration note |
|---|---|---|
| `Container`, `Grid` | App.js, about, header, introduction, contact, projects | Mechanical import path change only (`@material-ui/core/X` → `@mui/material/X`). Grid API is ~unchanged in v5. |
| `Link` | contact, navLinks | Mechanical. |
| `IconButton`, `Menu`, icon `Menu` | hamburgerMenu | Mechanical (`@material-ui/icons/Menu` → `@mui/icons-material/Menu`). |
| `Divider`, `Card`, `CardActions`, `CardContent`, `CardMedia`, `Typography`, `Chip` | projects | Mechanical. |
| `Fab`, `Zoom`, `useScrollTrigger`, icon `KeyboardArrowUp` | scrollTop | Mechanical. |
| `makeStyles` (from `@material-ui/core/styles`) | scrollTop | **Not purely mechanical.** v5's own styling engine is `sx`/`styled()`; `makeStyles` only survives via the `@mui/styles` compatibility package (itself unmaintained long-term). Recommendation: use `@mui/styles` as a same-behavior stopgap for this one small usage rather than rewriting it — lowest risk, matches "keep functionality the same." Revisit later if desired. |
| **`Hidden`** | header | **Removed entirely in v5 — no compat shim.** Currently gates desktop-nav-vs-hamburger-menu at `xsDown`/`smUp`. Must be manually rewritten, most likely with the `sx` prop's responsive `display` object (`{ xs: 'none', sm: 'flex' }` / inverse) at the same `sm` breakpoint, to preserve the exact same breakpoint behavior. This is the single highest-risk line in the whole MUI migration — call it out specifically in the Phase 2 PR for review. |

`@mui/codemod` handles the mechanical renames; the `Hidden` and
`makeStyles` usages need hand attention as noted above.

## Phase 1 — Create React App → Vite

Build tooling only. No component code should need to change.

1. Add Vite + `@vitejs/plugin-react`, `vite.config.js`.
2. Move `public/index.html` → root `index.html`, update it to Vite's
   `<script type="module" src="/src/index.js">` convention.
3. Confirm no `process.env.REACT_APP_*` usage (checked — there is none
   in this app), so no env-var prefix migration needed.
4. Testing: CRA's `react-scripts test` (Jest) has no Vite equivalent —
   swap to Vitest + `@testing-library/react` (already on v12, compatible
   with React 17 still at this point). Port `App.test.js` and
   `setupTests.js` (jest-dom import) to Vitest's config/globals.
5. Update `package.json` scripts (`dev`, `build`, `preview`) and the
   `deploy` script's `predeploy` step to point at Vite's `build` output
   dir (`dist/` by default, or configure `build.outDir` to keep `build/`
   so the existing `deploy` script's `-d build` doesn't need to change).
6. Remove `react-scripts` and CRA-only deps (`eslint-config-react-app`
   comes bundled via `eslintConfig` in package.json — decide on a
   standalone ESLint config or drop it here and handle separately).

**Validate:** `npm run build`, `npm test` (Vitest), `npm run dev` visual
check + screenshot diff against baseline (including mobile breakpoint).
This clears the CRA-unmaintained flag and the remaining 25 vulnerabilities
from the prior pass, independent of the other two phases.

## Phase 2 — Material-UI v4 → v5

Still on React 17 at this point (v5 supports both 17 and 18) — isolates
the highest-visual-risk change from the React version bump.

1. `npm uninstall @material-ui/core @material-ui/icons` →
   `npm install @mui/material @mui/icons-material @emotion/react
   @emotion/styled` (v5 uses emotion by default instead of v4's JSS).
2. Run `npx @mui/codemod v5.0.0/preset-safe src` for the mechanical
   import-path renames across all 8 affected files.
3. Hand-fix `Hidden` in `header/index.jsx` per the inventory note above
   — rewrite using `sx`-based responsive `display`, preserving the
   `sm` (600px) breakpoint exactly.
4. Hand-fix `makeStyles` in `scrollTop/index.jsx` — swap the import to
   `@mui/styles` (`npm install @mui/styles`) as a same-behavior stopgap.
5. Check `App.css`/`*.module.css` custom properties (`--text-color`,
   `--terminal-color`) still apply correctly — v5's CssBaseline/global
   reset behavior differs slightly from v4's.

**Validate:** build, test, full visual diff against baseline across
every section — this is the phase most likely to introduce subtle
spacing/color regressions, so give it the most scrutiny. Explicitly
verify the desktop-nav ↔ hamburger-menu switch at exactly 600px width.

## Phase 3 — React 17 → 18

Lowest risk of the three, done last since MUI v5 (from Phase 2) already
supports React 18.

1. `npm install react@18 react-dom@18`.
2. `src/index.js`: replace `ReactDOM.render(...)` with
   `createRoot(document.getElementById('root')).render(...)` (React 18's
   new root API — `ReactDOM.render` is deprecated and logs a console
   warning under 18, though it still works, so this should be a clean
   swap, not left as a warning).
3. Re-check `@testing-library/react` — already capped at 12.1.5 in the
   prior upgrade pass specifically because 13+ needs React 18. This is
   the natural point to bump it further (12.1.5 → latest, since the
   React-18 constraint that capped it no longer applies).

**Validate:** build, test, visual diff, and specifically watch for
StrictMode double-invoke effects (React 18 double-invokes effects in
dev under `<React.StrictMode>`, which this app already wraps `<App />`
in) surfacing any previously-latent bugs.

## Final integration validation

Once all three phases are merged into `migrate/vite-mui5-react18`:

- Full build + test pass on the integration branch as a whole (not just
  per-phase).
- Full visual diff against the original baseline, one more time, top to
  bottom.
- `npm audit` comparison against the 25-vulnerability baseline from the
  prior pass.
- Only then: PR the integration branch into `main`, merge (with your
  explicit go-ahead, as before).
- Deployment to the live site remains a separate explicit step, same as
  before — not automatic on merge to `main`.
