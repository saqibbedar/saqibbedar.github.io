<div align="center">
  <img src="./assets/author.avif" alt="Saqib Bedar" width="140" style="border-radius:50%" />
  <h1>Saqib Bedar — Portfolio</h1>
  <p>A fast, single-page developer portfolio built with plain HTML, CSS, and JavaScript.</p>
</div>

<p align="center">
  <a href="https://saqibbedar.github.io">
    <img src="https://img.shields.io/badge/Live-GitHub%20Pages-111827?style=flat&labelColor=111827" alt="Live" />
  </a>
  <a href="https://github.com/saqibbedar/saqibbedar.github.io/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/saqibbedar/saqibbedar.github.io?style=flat&color=10b981" alt="License" />
  </a>
  <img src="https://img.shields.io/github/last-commit/saqibbedar/saqibbedar.github.io?style=flat&color=6366f1" alt="Last Commit" />
  <img src="https://img.shields.io/badge/Built%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-1f2937?style=flat" alt="Stack" />
</p>

---

## Overview

A personal portfolio site with a clean, modern UI and no build step. It presents core information — who I am, projects, skills, experience, and education — on a single page so a recruiter can review it in seconds. Individual project detail pages and an online resume page are included.

The site is static: no frameworks, no bundler, no dependencies to install.

## Features

- Single-page layout: hero, projects, skills, experience, education, and current focus
- Dedicated project detail pages
- Online resume page
- Light and dark theme with system preference detection and manual toggle
- Responsive layout with a mobile menu
- SEO metadata (Open Graph, Twitter Card) and JSON-LD structured data
- Accessible markup (skip link, ARIA labels, semantic sections)

## Tech Stack

- HTML
- CSS (custom properties for theming)
- Vanilla JavaScript

No frameworks, no build tools, no package manager.

## Project Structure

```
.
├── index.html                # Main single-page site
├── assets/                   # Images (avatar, favicon)
├── css/
│   ├── global.css            # Base styles, theme variables, layout shell
│   ├── index.css             # Homepage styles
│   ├── projects.css          # Project detail page styles
│   └── resume.css            # Resume page styles
├── js/
│   ├── global.js             # Theme toggle, mobile menu, shared behavior
│   ├── index.js              # Homepage behavior
│   └── projects.js           # Project page behavior
├── projects/                 # Project detail pages
│   ├── 01_date_fruit_classification.html
│   ├── 02_bxp_code.html
│   └── 03_bedarx_pro.html
├── resume/
│   └── resume.html           # Online resume page
├── CHANGELOG.md
└── LICENSE
```

## Getting Started

Clone the repository:

```bash
git clone https://github.com/saqibbedar/saqibbedar.github.io.git
cd saqibbedar.github.io
```

Run `index.html` via live server inside VS Code or open the file in your browser. The site will be accessible.

## Customize

- Content and metadata: edit `index.html` (hero, sections, `<meta>` tags, JSON-LD).
- Styling and theme colors: edit the CSS custom properties in `css/global.css`.
- Behavior: edit the scripts in `js/`.
- Images: replace files in `assets/`.
- Projects: add or edit pages in `projects/` and link them from the projects section in `index.html`.

## Deploy

The site is static and deploys anywhere that serves static files. For GitHub Pages, publish the repository root (this repo is set up as a GitHub Pages user site).

> If you reuse this repo, remove or replace the Google Search Console verification file in the root (`google90204ddbeb9f3cf5.html`) — otherwise it verifies the site for the original owner.

## License

Released under the MIT License. Free to use and adapt — see [LICENSE](LICENSE).
