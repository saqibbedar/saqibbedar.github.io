<div align="center">
  <img src="./assets/author.avif" alt="Saqib Bedar" width="140" style="border-radius:50%" />
  <h1>Saqib Bedar — Portfolio & Developer Template</h1>
  <p>A high-performance, single-page developer portfolio and reproducible template built with plain HTML, CSS, and JavaScript.</p>
</div>

<p align="center">
  <a href="https://saqibbedar.github.io">
    <img src="https://img.shields.io/badge/Live-GitHub%20Pages-111827?style=flat&labelColor=111827" alt="Live" />
  </a>
  <a href="https://github.com/saqibbedar/saqibbedar.github.io/actions/workflows/deploy.yml">
    <img src="https://github.com/saqibbedar/saqibbedar.github.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy Status" />
  </a>
  <a href="https://github.com/saqibbedar/saqibbedar.github.io/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/saqibbedar/saqibbedar.github.io?style=flat&color=10b981" alt="License" />
  </a>
  <img src="https://img.shields.io/github/last-commit/saqibbedar/saqibbedar.github.io?style=flat&color=6366f1" alt="Last Commit" />
  <img src="https://img.shields.io/badge/Built%20with-HTML%20%C2%B7%20CSS%20%C2%B7%20JS-1f2937?style=flat" alt="Stack" />
</p>

---

## Overview

A personal developer portfolio designed for speed, clarity, and zero maintenance overhead. It presents core engineering signals — bio, flagship projects, 5-domain skills taxonomy, verified experience, and education — on a single page so recruiters and peers can review qualifications in seconds.

The site is **purely static**: no frameworks, no bundler, and zero dependencies to install or break over time. It also doubles as a **reproducible portfolio template** that anyone can fork and adapt.

---

## Key Features

- **Single-Page Architecture:** Hero with sticky navigation, avatar-on-scroll indicator, experience timeline, and current focus.
- **7 Detailed Project Case Studies:** Dedicated slug-style project pages (UV-JEPA, Fluent Python, Gitcraft, Online Student Portal System, etc.).
- **Online Resume & PDF:** LaTeX-style typography online resume with a direct ATS-friendly PDF download button.
- **5-Domain Skills Taxonomy:** Categorized into Python & Backend, Web & Frontend, Database & Cloud, DevOps & Tools, and AI/ML, with `.pill.learning` badges.
- **Theming:** Clean dark and light modes with system preference auto-detection and persistent toggle.
- **SEO & Structured Data:** Semantic HTML5, Open Graph, Twitter Cards, and schema.org `Person` JSON-LD structured data.
- **Automated CI/CD & Security:**
  - Automated GitHub Pages deployment on push to `main`.
  - Tagged release pipeline on push to `release` via `.github/release.toml`.
  - PR quality and vulnerability scanning using **Gitleaks** and **Trivy `v0.36.0`**.
- **Developer Tooling:** Built-in [`Justfile`](Justfile) recipes and Python validation scripts for local pre-commit checks.

---

## Tech Stack

- **HTML5:** Semantic sections, accessible skip link, and ARIA labels.
- **CSS3:** Custom properties for design tokens, `clamp()` responsive typography, and print styles.
- **Vanilla JavaScript:** Theme switcher, avatar-on-scroll toggle, and image skeleton loaders.
- **Automation:** Python 3.12 (`tomllib`), `just`, GitHub Actions.

---

## Project Structure

```text
.
├── index.html                   # Main single-page portfolio
├── assets/                      # Media assets (avatar, icons, screenshots, resume.pdf)
├── css/
│   ├── global.css               # Design tokens, CSS variables, layout shell
│   ├── index.css                # Homepage hero, cards, stats, timeline styles
│   ├── projects.css             # Project detail page styles
│   └── resume.css               # LaTeX-like typesetting and print styles
├── js/
│   ├── global.js                # Theme toggle, mobile menu, avatar-on-scroll
│   └── projects.js              # Image skeleton loading and UI interactions
├── projects/                    # Individual project detail pages
│   ├── uv-jepa.html             # Low-resource vision-language representation learning (FYP)
│   ├── fluent-python.html       # Python language mastery and code patterns
│   ├── gitcraft.html            # 33-page interactive Git documentation site
│   ├── online-student-portal-system.html  # University student portal architecture
│   ├── date-fruit-classification.html     # Computer vision classification model
│   ├── bxp-code.html            # Developer productivity CLI
│   └── bedarx-pro.html          # Full-stack application showcase
├── resume/
│   └── resume.html              # Online LaTeX-style resume page
├── docs/
│   └── GUIDE.md                 # Detailed template customization & workflow guide
├── scripts/
│   ├── validate_html_internal_links.py  # Local internal link validator
│   └── validate_release.py              # Local TOML & asset checker
├── .github/
│   ├── release.toml             # Release versioning and notes config
│   └── workflows/
│       ├── deploy.yml           # GitHub Pages deployment on main
│       ├── release.yml          # Automated release on release branch
│       └── ci.yml               # PR validation, Gitleaks, and Trivy scan
├── Justfile                     # Recipe runner (just val_html, etc.)
├── CHANGELOG.md                 # Release history
├── CONTRIBUTING.md              # Contribution and bug reporting guidelines
└── LICENSE                      # MIT License
```

---

## Quickstart & Local Development

Clone the repository:
```bash
git clone https://github.com/saqibbedar/saqibbedar.github.io.git
cd saqibbedar.github.io
```

### 1. Previewing Locally
Run a local development server without installing external packages:
```bash
# Using Python
python3 -m http.server 8000

# Or using Docker (production-identical Nginx)
docker run --rm -p 8080:80 -v "$PWD":/usr/share/nginx/html:ro nginx:alpine
```
Visit `http://localhost:8000` (or `http://localhost:8080` for Docker).

### 2. Pre-Commit Validation
Run the test suite locally before pushing:

```bash
# Using Just runner
just val_html       # Verifies all internal page links
just val_release    # Validates release.toml and static assets

# Or run directly via Python
python3 scripts/validate_html_internal_links.py
python3 scripts/validate_release.py
```

---

## Using This Template

Anyone is welcome to fork this repository and build their own portfolio!

📖 For full, step-by-step instructions on personalizing the bio, projects, theme colors, resume, and Search Console verification, read the **[Template & Customization Guide](docs/GUIDE.md)**.

---

## Contributing

Contributions, bug reports, and suggestions are welcome! Whether fixing a CSS bug, improving mobile accessibility, or refining the CI/CD scripts:

- Please read our **[Contributing Guidelines](CONTRIBUTING.md)** for issue reporting and pull request workflows.
- Pull requests automatically run linting and security scans via [`ci.yml`](.github/workflows/ci.yml).

---

## License

Released under the [MIT License](LICENSE). You are free to adapt, modify, and build upon this project for your own portfolio.
