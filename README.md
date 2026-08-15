# Portfolio Website

## Description

This repo holds the code used for my personal portfolio website hosted at [jondunlap.com](https://jondunlap.com). It's a React single-page app built with [Vite](https://vitejs.dev/) and [Material UI](https://mui.com/), and it features [Simple Analytics](https://simpleanalytics.com/?from=/websites) for a more privacy-focused analytics solution.

## Tech Stack

- **React 18** — UI
- **Material UI (MUI) v5** — component library
- **Vite** — build tool and dev server
- **Vitest** + **React Testing Library** — testing
- **GitHub Pages** (via the [`gh-pages`](https://www.npmjs.com/package/gh-pages) package) — hosting/deployment

## Project Structure

- `reactjs/` — the actual React application: source code, tests, and build config. All of the setup/run/test/build/deploy instructions below happen inside this directory.
- `docs/` — original planning and marketing materials for the site (not developer documentation).

## Setup

Prerequisites: **Node.js 18+** and npm (developed and tested on Node 24 / npm 11 — [nvm](https://github.com/nvm-sh/nvm) is a convenient way to manage Node versions).

```bash
git clone https://github.com/JonDunlap/JonDunlap-Portfolio.git
cd JonDunlap-Portfolio/reactjs
npm install
```

## Running locally

From `reactjs/`:

```bash
npm start
```

Starts the Vite dev server at [http://localhost:4000](http://localhost:4000) with hot module reloading.

(You can also run this from the repo root with `npm run react`, which just `cd`s into `reactjs/` and runs the same script.)

## Testing

From `reactjs/`:

```bash
npm test
```

Runs the test suite with [Vitest](https://vitest.dev/) in interactive watch mode. For a single non-watch run (e.g. in CI):

```bash
CI=true npm test -- --run
```

## Building

From `reactjs/`:

```bash
npm run build
```

Produces an optimized production build in `reactjs/build/`. To preview that production build locally before deploying:

```bash
npm run preview
```

## Deploying

From `reactjs/`:

```bash
npm run deploy
```

This builds the app (via the `predeploy` script) and publishes `reactjs/build/` to the repo's `gh-pages` branch, which GitHub Pages serves at [jondunlap.com](https://jondunlap.com) (the deploy script writes the custom-domain `CNAME` file automatically). Requires push access to the repository.

## Created by:

**Name**: Jonathan Dunlap

**Email**: [jon@jondunlap.com](mailto:jon@jondunlap.com)

**Portfolio Website**: [jondunlap.com](https://jondunlap.com)

**Resume**: [https://standardresume.co/r/jondunlap](https://standardresume.co/r/jondunlap)
