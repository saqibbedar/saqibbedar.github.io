# Portfolio Template & Developer Guide

This repository is a fast, dependency-free personal portfolio built with vanilla HTML, CSS, and JavaScript. It serves as both a live personal website and an easily adaptable, reproducible portfolio template for developers and software engineers.

---

## Table of Contents

- [Core Philosophy](#core-philosophy)
- [Architecture & Tech Stack](#architecture--tech-stack)
- [Step-by-Step Template Customization](#step-by-step-template-customization)
  - [1. Profile & Personal Details](#1-profile--personal-details)
  - [2. Theme & Color Palette](#2-theme--color-palette)
  - [3. Projects Showcase](#3-projects-showcase)
  - [4. Online Resume & PDF](#4-online-resume--pdf)
  - [5. SEO, JSON-LD & Verification](#5-seo-json-ld--verification)
- [Local Development & Tooling](#local-development--tooling)
  - [Previewing Locally](#previewing-locally)
  - [Running Validation with Just](#running-validation-with-just)
  - [Standalone Python Validation Scripts](#standalone-python-validation-scripts)
  - [Docker Preview](#docker-preview)
- [CI/CD & Workflows](#cicd--workflows)
  - [1. Deployment Workflow (`deploy.yml`)](#1-deployment-workflow-deployyml)
  - [2. Release Automation (`release.yml`)](#2-release-automation-releaseyml)
  - [3. PR Quality & Security Checks (`ci.yml`)](#3-pr-quality--security-checks-ciyml)

---

## Core Philosophy

- **Zero Build Tooling:** No Node.js build pipelines, no Vite/Webpack overhead, no fragile dependency trees. What you edit in the repository is what the browser executes.
- **Accessibility & Performance First:** Semantic HTML5, responsive CSS `clamp()` typography, system dark/light theme detection, and minimal JavaScript.
- **Automated DevOps & Security:** Decoupled GitHub Pages deployments, automated GitHub Releases driven by TOML metadata, secret scanning via Gitleaks, and vulnerability audits via Aqua Security Trivy.

---

## Architecture & Tech Stack

```text
saqibbedar.github.io/
├── index.html                   # Main single-page portfolio
├── assets/                      # Static media (avatar, icons, screenshots, resume.pdf)
├── css/
│   ├── global.css               # Design tokens, CSS variables, typography, reset
│   ├── index.css                # Homepage hero, cards, stats, timeline styles
│   ├── projects.css             # Detail pages layout and case study formatting
│   └── resume.css               # LaTeX-like typesetting and print styles
├── js/
│   ├── global.js                # Theme toggle, sticky topbar, avatar-on-scroll
│   └── projects.js              # Image skeleton loading and UI interactions
├── projects/                    # Individual project detail pages (kebab-case slugs)
├── resume/
│   └── resume.html              # Dedicated online resume
├── docs/                        # Template and architecture guides
├── scripts/                     # Pre-push validation scripts (Python)
├── .github/
│   ├── release.toml             # Release version, tag, and changelog metadata
│   └── workflows/
│       ├── deploy.yml           # Deploys site to GitHub Pages on push to main
│       ├── release.yml          # Evaluates release.toml and cuts release on release branch
│       └── ci.yml               # PR checks: Gitleaks, Trivy, and asset validation
├── Justfile                     # Command runner recipes (just val_html, etc.)
├── CHANGELOG.md                 # Full historical release log
├── CONTRIBUTING.md              # Contributor and issue reporting guidelines
└── LICENSE                      # MIT License
```

---

## Step-by-Step Template Customization

To adapt this repository for your own portfolio:

### 1. Profile & Personal Details
- Open [`index.html`](../index.html) and update:
  - `<title>` and `<meta name="description">`
  - Hero headline, subtitle, bio, and social media links (GitHub, LinkedIn, Email).
  - Avatar image in `assets/author.avif` (or replace with your own avatar and update the path).
  - Experience timeline and education sections.

### 2. Theme & Color Palette
- Open [`css/global.css`](../css/global.css):
  - Modify `:root` variables to adjust primary brand colors, background hues, font families, and border radii.
  - Modify `[data-theme="dark"]` for custom dark mode accents.

### 3. Projects Showcase
1. Create new project case study pages in [`projects/`](../projects/) using kebab-case names (e.g. `my-awesome-tool.html`).
2. Use an existing page (such as `projects/uv-jepa.html` or `projects/gitcraft.html`) as a structural reference.
3. Link the new page inside the `<section id="projects">` grid in `index.html`.

### 4. Online Resume & PDF
- Update [`resume/resume.html`](../resume/resume.html) with your experience, projects, skills, and contact links.
- Replace [`assets/resume.pdf`](../assets/resume.pdf) with your latest export.

### 5. SEO, JSON-LD & Verification
- Update `sitemap.xml` with your domain URL and latest modification timestamps (`<lastmod>`).
- Update `robots.txt` with your `Sitemap: https://<username>.github.io/sitemap.xml`.
- In `index.html` and `resume/resume.html`, update the `<script type="application/ld+json">` block (update `name`, `url`, `sameAs`, and `knowsAbout`).
- **Google Search Console**: Remove or replace `google90204ddbeb9f3cf5.html` in the root directory with your own site verification token.

---

## Local Development & Tooling

### Previewing Locally
Because the project uses standard web technologies without a build step, you can preview it immediately:

1. **Python built-in server:**
   ```bash
   python3 -m http.server 8000
   ```
   Open `http://localhost:8000` in your browser.

2. **VS Code Live Server:**
   Right-click `index.html` and select **"Open with Live Server"**.

### Running Validation with Just
This repository includes a [`Justfile`](../Justfile) powered by [`just`](https://github.com/casey/just) and [`uv`](https://github.com/astral-sh/uv):

```bash
# Validate internal HTML page links across root, projects, and resume
just val_html

# Validate release.toml syntax and check all required static assets
just val_release
```

### Standalone Python Validation Scripts
If `just` is not installed, you can execute the Python scripts directly:
```bash
python3 scripts/validate_html_internal_links.py
python3 scripts/validate_release.py
```

### Docker Preview
To test in a production-identical Nginx environment:
```bash
docker run --rm -p 8080:80 -v "$PWD":/usr/share/nginx/html:ro nginx:alpine
```
Visit `http://localhost:8080` to verify asset loading, caching, and font rendering.

---

## CI/CD & Workflows

### 1. Deployment Workflow (`deploy.yml`)
- **Trigger:** Automatic on `push` to `main` (and manual `workflow_dispatch`).
- **Action:** Gathers static site assets into `_site/`, creates a `.nojekyll` file to bypass Jekyll, uploads the site artifact, and deploys directly to GitHub Pages.
- **Permissions:** Restricted to `contents: read`, `pages: write`, and `id-token: write`.

### 2. Release Automation (`release.yml`)
- **Trigger:** Automatic on `push` to `release` (and manual `workflow_dispatch`).
- **Action:** Uses Python's native `tomllib` (Python 3.12) to parse `.github/release.toml`. If the version has changed and the Git tag does not yet exist, it cuts a new GitHub Release with the release notes and tags the commit.
- **Safety:** Automatically detects tag collisions and diffs to prevent duplicate releases.

### 3. PR Quality & Security Checks (`ci.yml`)
- **Trigger:** Automatic on `pull_request` targeting `main` or `release`.
- **Job 1 (Lint & Structure):** Validates `.github/release.toml` schema, checks for missing publishing assets, and verifies internal HTML links.
- **Job 2 (Security):** Runs **Gitleaks** to catch committed secrets/tokens and **Trivy `v0.36.0`** to detect misconfigurations and security vulnerabilities before code is merged.
