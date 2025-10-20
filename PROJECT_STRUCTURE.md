# Project structure — grupo1_Modelo_de_Ensemble_Front

This file documents the current frontend project layout (snapshotted from workspace).

## Repository root

- `.gitignore` — Git ignore rules
- `eslint.config.js` — ESLint configuration
- `estucturaproyecto.md` — (existing) project-structure draft
- `index.html` — Vite HTML entry
- `package.json` — project manifest and scripts
- `package-lock.json` — npm lockfile
- `postcss.config.js` — PostCSS configuration (Tailwind)
- `README.md` — repository README
- `tailwind.config.js` — Tailwind CSS configuration
- `vite.config.js` — Vite build/dev configuration

## src/

- `src/main.jsx` — App bootstrap (React DOM render, router mount)
- `src/App.jsx` — Main app component / routes
- `src/Dashboard.jsx` — Dashboard page (sidebar + content views)
- `src/App.css` — App-level CSS (project-provided)
- `src/index.css` — Global Tailwind / CSS imports
- `src/assets/`
  - `react.svg` — asset used by template

## Notes and brief descriptions

- The project is a React + Vite frontend using Tailwind CSS. The primary entry point is `src/main.jsx` which mounts `App.jsx` into the `index.html` page served by Vite.
- `src/Dashboard.jsx` contains the dashboard UI (sidebar with EDA / Modelos / Predicciones) and is the file you were inspecting earlier.
- There is no direct `moment` dependency listed in `package.json` (so the console moment warning likely comes from an injected script, browser extension, or a dependency of a dependency).

## How to run (development)

Open a terminal in the project root and run:

```bash
npm install    # first time to install dependencies
npm run dev    # start Vite development server
```

Then open the server URL (usually http://localhost:5173) shown in the terminal.

## Files created/edited

- `PROJECT_STRUCTURE.md` — This file: human-readable snapshot of the project structure and short descriptions.

## Completion summary

I added `PROJECT_STRUCTURE.md` to the project root documenting the current files and explaining the important entries. If you want the structure in a different format (tree ascii, JSON) or want me to include deeper details (list every file in `node_modules` is not necessary), tell me and I will update it.
