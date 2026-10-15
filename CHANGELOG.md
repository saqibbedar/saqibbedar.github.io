# Changelog

All notable changes to this project are documented in this file.

## [v2.1.0] 2026-10-14

Summary: Comprehensive content refresh, slug-style project URLs, resume LaTeX overhaul, and workflow modernization

### Hero & Navigation
- Updated hero copy and subtitle to align with Software Engineer positioning.
- Added sticky positioning to topbar navigation with an avatar-on-scroll indicator revealing `@saqibbedar`.
- Refined responsive typography and spacing using CSS `clamp()` ranges for cleaner mobile-to-desktop scaling.
- Added `.claude` to `.gitignore`.

### Projects & Case Studies
- Converted all project pages from numeric prefixes to kebab-case slug URLs (e.g. `date-fruit-classification.html`, `bxp-code.html`, `bedarx-pro.html`, `gitcraft.html`).
- Created dedicated showcase and documentation pages:
  - **UV-JEPA**: Final-year research project exploring low-resource vision-language representation learning with Urdu as a testbed.
  - **Fluent Python**: Curated open-source learning guide and interactive reference.
  - **Gitcraft**: Comprehensive 33-page interactive Git documentation site.
  - **Online Student Portal System**: Architecture case study and metrics.
- Restructured homepage project catalog into 5 flagship showcases and 3 compact tools.

### Skills & Experience
- Reorganized skills taxonomy into 5 prioritized engineering domains: Python & Backend, Web & Frontend, Database & Cloud, DevOps & Tools, and AI/ML.
- Added FastAPI, Pandas, PostgreSQL, GitLab, and Google Cloud Platform (GCP).
- Added `.pill.learning` styling for technologies actively being mastered.
- Updated experience section with Teaching Assistant roles (Programming Fundamentals, Web Application Development), AutoMind webinar, and MLSA workshop delivery.

### Resume & SEO
- Rebuilt online resume page mirroring clean LaTeX typesetting with print-ready CSS and direct ATS-friendly PDF download.
- Synchronized Open Graph, Twitter Cards, and JSON-LD structured data (`Person` schema, `jobTitle`, `knowsAbout`, `subjectOf`).
- Refreshed `sitemap.xml` with updated page URLs and modification dates.

### UI & Skeleton Fixes
- Resolved stat-grid bottom border selector and layout spacing.
- Fixed image skeleton loader hydration to eliminate layout shift.
- Updated preview assets for Gitcraft and Fluent Python.

### CI/CD & Automation
- Decoupled deployment and release automation into dedicated workflows.
- `deploy.yml`: Direct GitHub Pages deployment triggered on push to `main` branch.
- `release.yml`: Dedicated release automation triggered on push to `release` branch, driven by `.github/release.toml` via a native Python `tomllib` parser.
- `ci.yml`: Pull request CI pipeline running TOML validation, HTML structure checks, and Trivy vulnerability/secret scanning.
- Added developer tooling: `Justfile` recipe automation (`val_html`, `val_release`) backed by modular validation scripts in `scripts/`.
- Streamlined `.gitignore` for the pure static architecture.

## [v2.0.2] 2026-07-05

Summary: Deployment workflow fix

- Added `workflow_dispatch` to the deploy workflow to allow clean manual runs and avoid duplicate GitHub Pages artifacts on re-runs.

## [v2.0.1] 2026-07-05

Summary: Fix homepage script error and structured-data warnings

- Removed the redundant `js/index.js` (duplicated `js/global.js`), fixing an `Identifier 'body' has already been declared` error on the homepage.
- Fixed the `dateModified` datetime format in the homepage JSON-LD.
- Removed the unrecognized `mainEntityOfPage` field from the resume JSON-LD.

## [v2.0.0] 2026-07-05

Summary: Full rewrite to a static HTML/CSS/JS portfolio

- Rebuilt the site as a single-page static portfolio using plain HTML, CSS, and vanilla JavaScript.
- Removed the Vite + React frontend and the Express + Nodemailer contact backend.
- Removed all build tooling, dependencies, and package managers; the site now runs with no build step.
- Added single-page sections: hero, projects, skills, experience, education, and current focus.
- Added dedicated project detail pages and an online resume page.
- Added light/dark theme with system preference detection and a manual toggle.
- Retained SEO metadata (Open Graph, Twitter Card) and JSON-LD structured data.
- Rewrote README for the new static structure.

Reason: moved back to plain HTML/CSS/JS for simpler maintenance, no dependency overhead, and no refactors when dependencies change. The focus is delivering core information quickly and keeping the site accessible over heavy styling.

## [v1.1.1] 2026-04-29

Summary: Optimized documentation and updated blogs broken links

- Improved documentation for better clarity and user guidance.
- Fixed broken links in the blog section to ensure all content is accessible.

## [v1.1.0] 2026-04-18

Summary: UX loading skeleton system, blog priority sorting, and content/SEO updates

- Added a structured skeleton animation system under `frontend/src/components/ui/skeleton/`.
- Implemented loading skeleton states across critical data-driven sections, views, and pages to prevent broken/empty first-render layout while context data hydrates.
- Added search-page skeleton loading state and wired it into `SearchInput` until content context is ready.
- Updated blog data structure usage with `priority` support and wired priority-based sorting in homepage featured blogs and featured blog view behavior.
- Added new blog post.
- Updated sitemap to reflect latest blog route/content updates.
- Improved SEO and social preview metadata signals (including image/meta refinements).

## [v1.0.3] 2026-04-18

Summary: SEO Optimization, documentation, & UI bug fixes

- Added and improved SEO metadata for better indexing.
- Improved Open Graph and Twitter sharing metadata.
- Enhanced sitemap and robots configuration.
- Fixed text overflow issues in homepage's cover section and projects section, and fixed navbar texts size i.e., links, bottom text, marquee.
- Added CHANGLOG.md and updated deploy.yml to refer CHANGELOG.md file for release notes.
- Added sitebanner.avif (og:image) and updated metadata to refer it.

## [v1.0.2] 2026-04-15

Summary: Release Automation and Deployment Fixes

- Fixed release automation edge cases.
- Improved deployment workflow reliability.

## [v1.0.1] 2026-04-15

Summary: Release Automation and Deployment Fixes

- Added metadata-driven release automation.
- Improved GitHub Pages deployment flow.
- Fixed compatibility issues in frontend build and config.

## v1.0.0 2026-04-15

Summary: Initial Release

- Initial release of the portfolio website.
- Core frontend and backend setup with contact integration.

[v2.1.0]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v2.1.0
[v2.0.2]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v2.0.2
[v2.0.1]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v2.0.1
[v2.0.0]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v2.0.0
[v1.1.1]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.1.1
[v1.1.0]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.1.0
[v1.0.3]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.0.3
[v1.0.2]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.0.2
[v1.0.1]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.0.1
