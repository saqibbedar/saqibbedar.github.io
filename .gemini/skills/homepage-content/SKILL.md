---
name: homepage-content
description: Edit homepage content (index.html) — hero, presence links, project entries, skills, experience, education, and Now section — following the site's entry/pill/stat-grid conventions.
---

# Homepage Content Skill

Use this skill when modifying or extending content in `index.html`. It defines markup patterns, copy conventions, and semantic hierarchy.

## Semantic Layout Hierarchy

`index.html` is wrapped in `.site-frame` (max-width: 820px). Sections appear in this exact order:

1. `header.topbar` — Brand avatar, brand name, external links (GitHub, Resume, Email), theme toggle, mobile menu toggle.
2. `nav.mobile-menu` — Mobile navigation drawer.
3. `main#main`:
   - `section.hero` — `.hero-name` (h1 + subtitle + avatar image) and `.hero-bio` (bio paragraph + location meta line).
   - `section.presence` — Quick links (GitHub, LinkedIn, CV/Resume).
   - `section.content-section#projects` — Project articles. Follows the Flagship + Compact tools hierarchy.
   - `section.content-section#skills` — Grouped skill domains using `.pill-list` and `.pill`.
   - `section.content-section#experience` — Experience & educational leadership articles.
   - `section.content-section#education` — Academic degree & coursework.
   - `section.content-section#now` — Current focus and availability using `.fact-list`.
4. `footer.site-footer` — Location, copyright with `<span data-year>`, and contact email.

## Entry Pattern (`.entry`)

Every major item (project, experience, skill group, education) uses the `.entry` grid:

```html
<article class="entry">
  <div class="entry-icon entry-icon-soft" aria-hidden="true">
    <!-- 24px inline SVG (stroke="currentColor") OR <img> for project logos -->
  </div>

  <div class="entry-body">
    <h2>
      <a href="./projects/slug.html">Project Title</a>
      <span class="status-pill">Featured · Active</span>
    </h2>
    <p>Calm, direct description with <strong>key technologies</strong> emphasized.</p>
    
    <div class="project-links">
      <a href="./projects/slug.html">Case Study</a>
      <a href="https://github.com/..." target="_blank" rel="noreferrer">GitHub</a>
    </div>

    <div class="pill-list">
      <span class="pill primary">Python</span>
      <span class="pill">FastAPI</span>
      <span class="pill learning">PostgreSQL (learning)</span>
    </div>
  </div>
</article>
```

### Component Rules
- **Status Pills**:
  - `.status-pill` (accent dot) for active/featured work (e.g. `Research · in progress`).
  - `.status-pill.muted` (subtle border, no dot) for categorical badges (e.g. `Client work`, `Documentation`).
- **Tech Pills**:
  - `.pill.primary` for core language/framework.
  - `.pill` for standard libraries and domains.
  - `.pill.learning` (dashed border) for technologies actively being learned/implemented (e.g. PostgreSQL, GCP).
- **External Links**: Must always specify `target="_blank" rel="noreferrer"`.

## Copy & Voice Standards
- Maintain a restrained, evidence-based tone.
- Avoid vague superlatives ("expert", "enterprise-grade", "production-ready") unless backed by verifiable metrics.
- Keep JSON-LD `subjectOf` in `<head>` synchronized with `#projects`.

