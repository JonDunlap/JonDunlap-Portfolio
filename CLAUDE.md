# Dependency Upgrade Instructions

## Context
This is an older React project hosted on GitHub Pages. NPM and most packages
are outdated, and `npm audit` is flagging vulnerabilities. The goal is to
bring dependencies up to date **without breaking the site's functionality**,
and to keep a clear record of what changed and why.

## Ground Rules
- Work on a new git branch — never commit directly to the branch that
  deploys to GitHub Pages.
- Go **incrementally**, not all at once. Do not run a blanket
  `npm update` / `npm upgrade` across everything.
- After every batch of changes: run the build (`npm run build`) and any
  existing tests. Do not move to the next package/batch until the build
  is clean.
- Prefer small, scoped commits — one logical change per commit — over one
  giant "update everything" commit.
- Save major version bumps (breaking changes) for last, and do them one
  package at a time, not in bulk.

## Step 1: Audit current state
- Record current Node.js and npm versions.
- Run `npm outdated` and `npm audit`, and save the output.
- Read `package.json` and categorize dependencies into:
  - Build tooling (e.g. CRA, webpack, babel, eslint)
  - Core framework (React, ReactDOM)
  - Routing / state management
  - UI libraries
  - Everything else (utilities, dev tools)
- Flag anything that looks unmaintained or deprecated (e.g. Create React
  App or other tooling with no recent releases) — this may be a bigger
  structural decision than a normal version bump, so surface it to me
  before proceeding rather than upgrading around it.

## Step 2: Create an upgrade plan
- Propose an upgrade order (typically: build tooling → core framework →
  routing/state → UI libraries → remaining utilities).
- List out patch/minor updates separately from major version updates.
- Write this plan into `UPGRADE_PLAN.md` in the repo root before making
  any changes.

## Step 3: Apply updates incrementally
For each package or small batch:
1. Update the package.
2. Run the build and tests.
3. If something breaks, read the actual error output and fix the code
   (don't just guess) — check the package's CHANGELOG or migration guide
   for breaking changes if it's a major version bump.
4. Commit with a message describing what changed, e.g.:
   `Bump eslint 7 -> 8, no code changes needed`
   `Bump react-router 5 -> 6, updated route definitions in src/routes.js`

## Step 4: Keep a running change log
Maintain a file called `UPGRADE_NOTES.md` in the repo root, and update it
after each package/batch with:
- Package name
- Old version → new version
- Whether any code changes were required, and what they were
- Any gotchas, warnings, or things to watch for

Don't wait until the end to write this — update it as you go, in the same
commit as the corresponding change.

## Step 5: Final validation
- Run a full build and test pass.
- Re-run `npm audit` and compare against the Step 1 baseline; note any
  remaining vulnerabilities and why (e.g. no fix available yet).
- Summarize the overall diff: what moved, what needed code changes, and
  what (if anything) still needs manual follow-up.
