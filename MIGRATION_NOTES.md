# Migration Notes

Running log for `MIGRATION_PLAN.md`, same discipline as `UPGRADE_NOTES.md`
in the prior dependency-patch pass.

## Phase 1 — Create React App → Vite

- Removed `react-scripts` entirely; added `vite`, `@vitejs/plugin-react`,
  `vitest`, `jsdom` as devDependencies. `npm audit`: 25 → **0**
  vulnerabilities (the entire remaining count from the prior pass was
  inside react-scripts' bundled toolchain).
- Moved `public/index.html` → root `index.html` (Vite convention),
  updated favicon link and script tag for Vite's module-script style.
- Renamed `App.js` → `App.jsx`, `index.js` → `index.jsx`,
  `App.test.js` → `App.test.jsx` (all three contain JSX; Vite's default
  esbuild JSX transform requires `.jsx`, matching the extension
  convention already used by every component subfolder in this repo).
- `vite.config.js`: `build.outDir: 'build'` (keeps the existing `deploy`
  script's `gh-pages -d build` working unchanged), `server.port: 4000`
  (this actually works now — CRA's `-p 4000` flag was silently ignored
  the whole time, confirmed during the react-scripts 5 upgrade; Vite
  respects it).
- Testing: swapped Jest (via react-scripts) for Vitest. `test.globals:
  true` in `vite.config.js` keeps `App.test.jsx` byte-for-byte unchanged
  (no new imports needed for `test`/`expect`) since Vitest's globals
  mode mirrors Jest's implicit-global convention.
- **`jsdom` pinned to `24.x`, not latest (30.x).** Latest `jsdom` broke
  MUI v4's JSS styling engine at test time — `makeStyles` (used in
  `scrollTop`) crashed with `'escape' called on an object that is not a
  valid instance of CSS` inside `jss.cjs.js`. This is a real
  incompatibility between the newest jsdom and MUI v4's JSS internals,
  not a mistake in this migration. Worth revisiting once Phase 2 drops
  JSS in favor of emotion — the pin may no longer be needed then.
- **Real bug found and fixed, not introduced by this migration but
  exposed by it:** `@material-ui/icons` has no `exports` map in its
  `package.json`, so Vite's bundler always resolved deep-subpath icon
  imports (`@material-ui/icons/KeyboardArrowUp`, `@material-ui/icons/Menu`)
  to the package's CJS build, never the ESM build the package also
  ships. Under Vite's CJS→ESM interop for these specific files (icons
  wrapped in `React.memo`), the imported icon component resolved to an
  invalid element type at runtime, crash­ing `ScrollTop` and
  `HamburgerMenu` with React error #130 — blank page in both dev and the
  production build. Confirmed via `node -e` inspection: the raw
  `require()`'d module was a valid `React.memo` component, so the bug
  was specifically in Vite's bundling of that CJS shape. Fixed by
  importing from the package's `esm/` subpath instead
  (`@material-ui/icons/esm/KeyboardArrowUp`, `@material-ui/icons/esm/Menu`)
  — bypasses the CJS interop path entirely, and is the standard fix for
  this well-known MUI-v4-under-Vite gap.
- **Real pre-existing CSS bug found and fixed:** `index.css` had a
  `:root` block before its Google Fonts `@import` — invalid per the CSS
  spec (`@import` must be first). CRA's older PostCSS silently tolerated
  it; Vite's stricter pipeline flagged it as an error. Reordered so
  `@import` comes first; no visual difference (both blocks still present,
  just reordered — verified via visual diff).
- `package.json`: moved `@testing-library/*` and `gh-pages` from
  `dependencies` to `devDependencies` (idiomatic now that CRA's flat
  dependency-list quirk is gone — has zero effect on the static build
  output). Removed the `eslintConfig` block (pointed at
  `eslint-config-react-app`, which no longer exists now that
  `react-scripts` is gone; there was no separate `lint` script relying on
  it). Added `"type": "module"` to silence a Vite config-loader warning.
  Removed the now-meaningless `eject` script.
- **Validated:** clean build, clean test run, 0 `npm audit` findings, and
  a full visual diff in a real browser (desktop top/Projects/Contact,
  mobile collapsed + hamburger-menu-open) against the pre-migration
  baseline screenshots — pixel-identical layout, styling, and
  interactions. No console errors.

## Phase 2 — Material-UI v4 → v5

- `npm uninstall @material-ui/core @material-ui/icons` →
  `@mui/material@5 @mui/icons-material@5 @emotion/react @emotion/styled
  @mui/styles@5`. `npm audit`: stayed at 0.
- Ran `npx @mui/codemod v5.0.0/preset-safe src` — 9 files updated
  mechanically (import paths only), 0 errors, nothing needed hand-fixing
  from the codemod's own output.
- **Correction to the plan:** `Hidden` was **not** removed in v5 — it's
  deprecated but still present and functional. The planned "rewrite with
  `sx` responsive display" turned out to be unnecessary. The codemod
  changed `<Hidden xsDown>` → `<Hidden smDown>` (only the first of the
  two `Hidden` blocks in `header/index.jsx`) — this is MUI's own
  documented fix for a v4 quirk where `Hidden`'s `xsDown` prop didn't
  behave the way most people expected; `smDown` reproduces v4's actual
  visual behavior exactly (same 600px switch point). Verified visually
  in a browser: desktop nav ↔ hamburger menu switch is unchanged.
- The codemod also added `size="large"` to the hamburger `IconButton` in
  `hamburgerMenu/index.jsx` — v5 changed `IconButton`'s default size;
  this preserves the original v4 visual size/padding.
- `makeStyles` (used once, in `scrollTop/index.jsx`) was automatically
  repointed to the `@mui/styles` compat package by the codemod, as
  planned — no manual rewrite needed there either.
- Icon imports (`@material-ui/icons/esm/...` from the Phase 1 fix) were
  mechanically renamed by the codemod to `@mui/icons-material/esm/...`.
  Kept as-is rather than reverting to the plain (non-`esm`) subpath —
  `@mui/icons-material` also ships with no `exports` map in its
  `package.json`, so it's exposed to the same CJS/interop risk Phase 1
  found in the old package; the already-proven-safe `esm/` subpath was
  the lower-risk choice, not reverted without a concrete reason to.
- **Real bug found and fixed, not anticipated in the plan:** with MUI v5
  installed, `makeStyles` (`@mui/styles`) crashed with `theme.spacing is
  not a function`. Cause: this app never wrapped anything in an MUI
  `ThemeProvider` — under v4, `makeStyles` silently fell back to a
  complete internal default theme when none was provided. `@mui/styles`'
  v5 compat package does not carry that same automatic fallback. Fixed
  by adding `@mui/material/styles`' `ThemeProvider` (with
  `createTheme()`, no custom theme values — a pure pass-through) around
  `App.jsx`'s return value. This is also the officially recommended
  practice for v5, not just a workaround. Placed in `App.jsx` rather than
  `index.jsx` so `App.test.jsx`'s `render(<App />)` (which doesn't go
  through `index.jsx`) picks it up too.
- Re-checked the `jsdom` version pin from Phase 1 now that MUI v5 is in:
  still needed. The app still uses `@mui/styles`' JSS engine (the same
  one that broke under the newest jsdom in Phase 1) for its one
  `makeStyles` call — confirmed by testing with latest jsdom again
  (same crash) and reverting to `jsdom@24`. Worth revisiting only if
  `scrollTop`'s single `makeStyles` usage is ever rewritten to `sx`/
  `styled()` and `@mui/styles` is dropped entirely — not done here,
  out of scope (this pass preserves behavior, not stack purity).
- **Validated:** clean build, clean test run, 0 `npm audit` findings,
  full visual diff in a real browser (desktop top/Projects/Contact,
  mobile collapsed + hamburger-menu-open, including the ScrollTop Fab
  button) against the pre-migration baseline screenshots — pixel-
  identical. No console errors.
