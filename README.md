# MurariSoft Solutions — Website

A React project with separate pages for **Home** and **About Us**, using
`react-router-dom` for navigation.

## Project structure

```
murarisoft-app/
├── public/
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.jsx     # Nav bar with Home / About Us links
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx        # Home page content
│   │   └── About.jsx       # About Us page content
│   ├── App.jsx              # Routes setup
│   ├── index.js             # React entry point
│   └── theme.js             # Shared colors & styles
└── package.json
```

## Run locally

```bash
npm install
npm start
```

Then open http://localhost:3000 — use the Home / About Us links in the
header to navigate between pages (each is its own route/page, not a tab
toggle).

## Build for production

```bash
npm run build
```

This outputs a deployable static site into the `build/` folder.

## Editing content

- Update home page copy in `src/pages/Home.jsx`
- Update company/director info in `src/pages/About.jsx`
- Update colors, fonts, spacing in `src/theme.js` (shared by both pages)
