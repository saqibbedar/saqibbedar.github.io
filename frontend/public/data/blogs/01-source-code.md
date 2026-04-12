# Portfolio Website Source Code Walkthrough

If you landed on this page, you are probably here for one reason:

You want to understand how this portfolio is built, what stack it uses, and how you can reuse the same structure for your own portfolio without getting lost in over-engineered setup.

That is exactly what this post is for.

---

## Why I wrote this

Most portfolio repos show a finished UI but do not explain:

- where the actual content lives,
- how dynamic pages are wired,
- how caching is handled,
- how search indexing works,
- and how to update everything without touching half the codebase.

This project is intentionally built to make those things clear.

---

## Project purpose in one line

This is a content-driven portfolio system where most updates happen in JSON and asset files, while services and views handle rendering, caching, and search behavior in a structured way.

---

## Tech stack

### Frontend

- **Vite** for build and dev server
- **React** for UI composition
- **React Router** for routes and dynamic pages
- **Tailwind CSS** for styling
- **React Markdown + rehype-raw** for markdown docs/blog rendering

### Backend

- **Express** for minimal API server
- **Nodemailer** for contact email delivery
- **CORS** for cross-origin frontend requests
- **dotenv** for environment variables

---

## High-level architecture

The repository is split into two focused applications:

- `frontend/` - public site, routes, content rendering, search, caching
- `backend/` - contact endpoint that forwards messages to email inbox

The frontend drives almost everything using data files and reusable service functions.

---

## Where your content actually lives

If your goal is quick customization, start from these folders first:

### Primary content data

- `frontend/public/data/json/`

This contains projects, blogs, services, FAQs, courses, certificates, testimonials, sitemap, and other main data.

### Blog markdown files

- `frontend/public/data/blogs/`

This is where long-form blog body content lives.

### Legal docs markdown

- `frontend/public/data/docs/`

### Data shape references

- `frontend/public/data/data-structures/`

These files help you understand expected data types before editing JSON.

---

## Frontend structure you should know

If you want to reverse engineer quickly, this is the shortest map:

- `src/pages/` - route-level page entry points
- `src/components/sections/` - per-page section blocks
- `src/components/views/` - dynamic detail views (project/blog/course)
- `src/components/common/` - Navbar and Footer shell
- `src/routes/` - route definitions
- `src/assets/` - profile data, footer links, metadata maps
- `src/services/` - fetch, cache, search, and indexing logic
- `src/context/` - shared content state consumed across pages

---

## Caching strategy (simple but practical)

The fetch layer uses a two-level cache model:

1. **In-memory cache** for quick repeated reads in the same tab
2. **LocalStorage cache** for persistence across reloads

Default cache duration is 15 minutes.

When cache is expired, the system fetches fresh data and updates cache again. Key versioning is used where needed (for example when a data shape changes) so stale entries can be safely invalidated.

This gives good performance while keeping update behavior predictable.

---

## Search system notes

Search is not just simple text matching.

The project includes indexing and structured search services under `src/services/search/`, so when you add or rename fields in content data, search logic should be updated too for complete coverage.

---

## Contact flow

Frontend contact form sends JSON payload to backend API.

Backend validates payload and uses Nodemailer to send mail to configured inbox.

For production, backend can be deployed separately (for example on Vercel), and frontend reads API URL through env variable.

---

## Environment setup

### Frontend `.env`

Set your contact endpoint:

`VITE_BACKEND_CONTACT_API=your_backend_api_url`

### Backend `.env`

Configure mail and allowed frontend origin:

- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_TO` (optional)
- `FRONTEND_URL`

If you use Gmail SMTP, generate an App Password from your Google account settings and use that in `EMAIL_PASS`.

---

## Why this setup is useful for developers

This project is generic enough for reuse and structured enough for scaling content.

You can:

- quickly replace profile and project data,
- add blogs with markdown,
- keep route and metadata changes organized,
- and avoid rewriting core components for normal content updates.

In short: you focus on your content and identity, the architecture handles the rest.

---

## If you want to reuse this portfolio

Use this path:

1. update JSON content files in `frontend/public/data/json/`
2. update profile assets in `frontend/src/assets/common/`
3. verify routes in `frontend/src/routes/`
4. update backend env and contact API URL
5. deploy frontend and backend separately

If you change data structures, update related services and search index mapping too.

---

## Final note

This post is meant to save you time.

If you are a developer trying to build a portfolio that is fast, maintainable, and easy to customize, this architecture gives you a strong base without unnecessary overhead.

If you improve something meaningful in this repo structure, contributions are always welcome.
