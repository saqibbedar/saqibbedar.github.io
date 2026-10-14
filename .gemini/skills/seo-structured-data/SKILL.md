---
name: seo-structured-data
description: Keep SEO metadata and JSON-LD structured data consistent across the homepage, resume, and project pages of the portfolio — canonical URLs, OG/Twitter tags, ProfilePage/Person graph, BreadcrumbList, and sitemap.xml.
---

# SEO & Structured Data Skill

Use this skill whenever editing meta tags, canonical links, social graphs, or JSON-LD schema across `saqibbedar.github.io`.

## Metadata Map

| Page | Canonical URL | Schema Type | Key Schema Entities |
|---|---|---|---|
| `index.html` | `https://saqibbedar.github.io/` | `ProfilePage` | `Person` with `knowsAbout`, `sameAs`, `hasCredential`, `subjectOf` |
| `projects/<slug>.html` | `https://saqibbedar.github.io/projects/<slug>.html` | `CreativeWork` / `SoftwareSourceCode` / `SoftwareApplication` | Project entity + `BreadcrumbList` |
| `resume/resume.html` | `https://saqibbedar.github.io/resume/resume.html` | `ProfilePage` | `Person` with employment and credentials |

## Rules for Schema Integrity
1. **Person ID**: The core identity uses `"@id": "https://saqibbedar.github.io/#person"` so project pages reference it cleanly as author.
2. **Syncing `subjectOf`**: Every project featured on the homepage must have a corresponding entity in `mainEntity.subjectOf` in `index.html`.
3. **Date Format**: `dateModified` and `datePublished` must always use ISO-8601 with timezone offset: `YYYY-MM-DDTHH:MM:SS+05:00`.
4. **Sitemap**: Keep `sitemap.xml` updated with all public URLs and fresh `<lastmod>` values.
5. **No Hallucinated Credentials or Claims**: Only index verifiable degrees, verified certifications, and published projects.

