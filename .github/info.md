---
tag: v2.0.0
title: v2.0.0 — Static HTML/CSS/JS rewrite
---

Full rewrite to a single-page static portfolio built with plain HTML, CSS, and vanilla JavaScript.

## Changes
- Rebuilt the site as a static single-page portfolio; removed the Vite + React frontend and Express + Nodemailer backend.
- Removed all build tooling and dependencies; the site runs with no build step.
- Added sections: hero, projects, skills, experience, education, and current focus.
- Added project detail pages and an online resume page.
- Added light/dark theme with system detection and a manual toggle.
- Retained SEO metadata and JSON-LD structured data.

Reason: plain HTML/CSS/JS for simpler maintenance, no dependency overhead, and no refactors when dependencies change — focused on delivering core information quickly and staying accessible.