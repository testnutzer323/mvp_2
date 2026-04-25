# MVP Generation Platform (frontend)

React + TypeScript SPA for the repair-service MVP flow (landing, scan, diagnosis, parts, booking, and related screens). Built with [Vite](https://vitejs.dev/) and styled with [Tailwind CSS](https://tailwindcss.com/).

## Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended; includes npm)

No `.env` file is required for local development.

## Install

From this directory (`project`):

```bash
npm install
```

## Scripts

| Command           | Description                    |
|-------------------|--------------------------------|
| `npm run dev`     | Start the Vite dev server      |
| `npm run build`   | Production build → `dist/`     |
| `npm run preview` | Serve the production build     |
| `npm run lint`    | Run ESLint                     |

## Run locally

```bash
npm run dev
```

Open the URL shown in the terminal (usually [http://localhost:5173](http://localhost:5173)).

## Optional maintenance

- **Dependency advisories:** `npm audit` — to try automated fixes, `npm audit fix` (review changes before committing).
- **Browserslist / caniuse-lite:** if you see an outdated DB warning during build:

  ```bash
  npx update-browserslist-db@latest
  ```

## Project layout

- `src/pages/` — route-like screens
- `src/components/` — shared UI
- `src/data/` — mock / static data
- `src/utils/` — helpers (e.g. recommendations)
