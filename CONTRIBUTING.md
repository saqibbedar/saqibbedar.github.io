# Contributing Guidelines

Thank you for your interest in contributing to this portfolio and template repository! Whether you found a typo, spotted a layout bug, want to improve accessibility, or have suggestions for the CI/CD workflows, all constructive contributions are welcome.

---

## Code of Conduct

Please keep discussions, issue reports, and pull requests respectful, constructive, and collaborative.

---

## Types of Contributions Welcome

- **Bug Reports:** Broken links, CSS layout regressions, mobile viewport issues, font rendering bugs, or script errors.
- **Accessibility (a11y):** Screen reader label improvements, semantic HTML enhancements, color contrast tuning, or keyboard navigation fixes.
- **Documentation:** Clarifications in [`docs/GUIDE.md`](docs/GUIDE.md), [`README.md`](README.md), or setup guides.
- **DevOps & Tooling:** Improvements to the GitHub Actions workflows (`.github/workflows/`), validation scripts, or `Justfile`.

---

## Reporting Issues and Bugs

Before creating an issue, please search the [existing issues](https://github.com/saqibbedar/saqibbedar.github.io/issues) to ensure it hasn't already been reported.

When filing a bug report, please include:
1. **Description:** A concise explanation of the bug or visual flaw.
2. **Steps to Reproduce:** Clear, numbered steps to observe the issue.
3. **Environment:** Browser (Chrome, Firefox, Safari, Edge), Operating System, and screen resolution/viewport size.
4. **Screenshots or Logs:** If applicable, attach screenshots or browser console error logs.

---

## Local Development Workflow

This project is built with vanilla HTML, CSS, and JavaScript, meaning no package installation or build step is required.

### 1. Fork & Clone
```bash
git clone https://github.com/<your-username>/saqibbedar.github.io.git
cd saqibbedar.github.io
```

### 2. Create a Feature Branch
Create a descriptive branch off `main`:
```bash
git checkout -b fix/stat-grid-border
# or
git checkout -b feat/add-dark-mode-transition
```

### 3. Run Locally
You can preview changes using Python:
```bash
python3 -m http.server 8000
```
Then navigate to `http://localhost:8000`.

### 4. Run Pre-Commit Checks
Before committing your changes, run the local validation suite:

Using [`just`](https://github.com/casey/just):
```bash
just val_html       # Validates that all internal local HTML links resolve
just val_release    # Checks required assets and release configuration
```

Or using standard Python:
```bash
python3 scripts/validate_html_internal_links.py
python3 scripts/validate_release.py
```

---

## Pull Request Guidelines

1. **Keep Pull Requests Focused:** Aim for single-responsibility PRs. Don't combine unrelated visual tweaks with CI/CD modifications.
2. **Commit Hygiene:** Use clear, conventional commit messages:
   - `fix(ui): resolve mobile topbar overflow`
   - `docs: clarify template setup instructions in GUIDE.md`
   - `feat(ci): add link validation check to pull requests`
3. **Automated CI Checks:** When you open a Pull Request targeting `main`, GitHub Actions automatically runs [`.github/workflows/ci.yml`](.github/workflows/ci.yml):
   - **Lint & Structure:** Validates required site assets, TOML configurations, and internal page links.
   - **Security:** Runs **Gitleaks** (secret detection) and **Trivy** (vulnerability and misconfiguration scanning).
4. **Review & Merge:** Once all checks pass and the PR is reviewed, changes will be merged into `main` (triggering automatic deployment to GitHub Pages).

---

## Questions or Ideas?

Feel free to open an issue or start a discussion on GitHub. Thank you for helping improve the template!
