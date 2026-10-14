---
name: add-project-page
description: Add a new project detail page under projects/ — full recipe covering the HTML skeleton, shared CSS classes, metadata, and the homepage/sitemap/JSON-LD updates that must accompany it.
---

# Add a Project Page Skill

Use this skill when adding or restructuring a project case-study page under `projects/`.

## Naming Convention
- Use clean slug filenames without numeric prefixes: `projects/<slug>.html` (e.g. `projects/gitcraft.html`, `projects/uv-jepa.html`).

## Document Skeleton
Every project page is standalone static HTML reusing `css/global.css` and `css/projects.css`:

1. `<head>`:
   - `<title>Project Name — Saqib Bedar</title>`
   - Meta description, keywords, author, robots, canonical URL (`https://saqibbedar.github.io/projects/<slug>.html`).
   - Open Graph & Twitter meta tags (with absolute URLs).
   - Structured Data: `CreativeWork` / `SoftwareSourceCode` / `SoftwareApplication` + `BreadcrumbList`.
   - Fonts: Inter + Newsreader via Google Fonts.
   - Styles: `../css/global.css` and `../css/projects.css`.
   - Inline theme script (identical to homepage).
2. `<body>`:
   - Skip link: `<a class="skip-link" href="#main">Skip to content</a>`.
   - `.site-frame` wrapper.
   - `header.topbar` with brand text `<span>SaqibBedar</span>` and `../` paths for Home, Resume, GitHub.
   - `main#main.project`:
     - `a.project-back` (`../#projects`).
     - `header.project-header` (h1, tagline, `.badge-row`, `.project-links`).
     - Optional Hero image (`.project-hero img`) or logo (`.project-hero-logo img`).
     - Sections: Overview, Architecture/Methodology, Highlights, Quick Facts / Key Results, Built With.
     - Optional supervisor/collaborator acknowledgement block.
   - `footer.site-footer` with `<span data-year>`.
   - Scripts: `<script defer src="../js/global.js"></script>`.

## Relative Path Discipline
- From `projects/`:
  - Home: `../`
  - Assets: `../assets/...`
  - CSS/JS: `../css/...`, `../js/...`
  - Resume: `../resume/resume.html`
  - Other project pages: `./<slug>.html`

## Required Synchronizations
Adding or updating a project detail page requires updating:
1. `index.html` (Article card in `#projects`).
2. `index.html` (JSON-LD `subjectOf` entry in `<head>`).
3. `sitemap.xml` (`<loc>` entry with updated `lastmod`).
4. `README.md` (Repository file map).

