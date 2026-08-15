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
