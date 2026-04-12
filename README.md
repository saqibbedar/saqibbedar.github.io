<div align="center">
  <img src="./frontend/public/images/favicon.avif" alt="Saqib Bedar" width="200" />
  <h1>Saqib Bedar</h1>
  <p>Full Stack Developer | Open Source Builder | Tech Educator | Portfolio Architect</p>
</div>

<p align="center">
  <a href="https://saqibbedar.github.io">
    <img src="https://img.shields.io/badge/Live%20Site-Portfolio-111827?style=flat&labelColor=111827" alt="Live Site" />
  </a>
  <a href="https://github.com/saqibbedar/saqibbedar.github.io">
    <img src="https://img.shields.io/github/stars/saqibbedar/saqibbedar.github.io?style=flat&color=f5b301&label=Stars" alt="GitHub Stars" />
  </a>
  <a href="https://github.com/saqibbedar/saqibbedar.github.io/forks">
    <img src="https://img.shields.io/github/forks/saqibbedar/saqibbedar.github.io?style=flat&color=0ea5e9&label=Forks" alt="GitHub Forks" />
  </a>
  <a href="https://github.com/saqibbedar/saqibbedar.github.io/blob/main/LICENSE">
    <img src="https://img.shields.io/github/license/saqibbedar/saqibbedar.github.io?style=flat&color=10b981" alt="License" />
  </a>
  <img src="https://img.shields.io/github/last-commit/saqibbedar/saqibbedar.github.io?style=flat&color=6366f1" alt="Last Commit" />
  <img src="https://img.shields.io/badge/Frontend-Vite%20%2B%20React-1f2937?style=flat" alt="Frontend Stack" />
  <img src="https://img.shields.io/badge/Backend-Express%20%2B%20Nodemailer-1f2937?style=flat" alt="Backend Stack" />
</p>

# Saqib Bedar's Portfolio

This repository powers my personal portfolio website. It is a clean, content-driven portfolio built to showcase who I am, what I build, what I teach, and how I like to work.

It is designed to stay simple for editing and strong in structure. Most site content lives in JSON files and lightweight asset modules, so updates are quick and the code remains easy to maintain.

## What This Project Contains

The portfolio is split into two parts:

- `frontend/` - a Vite + React application that renders the public portfolio
- `backend/` - a small Express + Nodemailer mail service used by the contact form

The site also includes:

- project and blog content
- FAQs about me
- certifications and education
- bootcamps and speaking history
- services I offer
- sitemap and utility pages
- markdown-based legal docs

## Quick Start

### 1. Clone the repository

```bash
git clone https://github.com/saqibbedar/saqibbedar.github.io.git
cd saqibbedar.github.io
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Install backend dependencies

```bash
cd ../backend
npm install
```

### 4. Run the backend server

```bash
npm run dev
```

The backend runs on `http://localhost:8000` by default.

### 5. Run the frontend app

Open a second terminal:

```bash
cd frontend
npm run dev
```

The frontend runs on Vite’s default local port, usually `http://localhost:5173`.

## Environment Variables

Both apps use `.env` files.

### Frontend `.env`

Place this in `frontend/.env`:

```env
VITE_BACKEND_CONTACT_API=http://localhost:8000/api/contact
```

If your backend is deployed on Vercel, replace it with your deployed API URL.

### Backend `.env`

Place this in `backend/.env`:

```env
EMAIL_USER=yourgmail@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=yourgmail@gmail.com
FRONTEND_URL=https://saqibbedar.github.io
```

Notes:

- `EMAIL_USER` is the Gmail address used to send mail.
- `EMAIL_PASS` should be a Gmail App Password, not your normal login password.
- `EMAIL_TO` is optional if you want a separate inbox to receive contact mail.
- `FRONTEND_URL` is used by CORS on the backend.

## How the Contact Form Works

The contact form sends JSON to the backend endpoint.

- Frontend request path: `VITE_BACKEND_CONTACT_API`
- Backend route: `/api/contact`
- Mail transport: Gmail through Nodemailer

The frontend validates the form before sending.
The backend then receives the payload and sends the email to your inbox.

## Project Structure

### Frontend

The frontend contains the full portfolio UI and content system.

Key folders:

- `frontend/public/data/json/` - main content data for projects, blogs, courses, FAQs, services, sitemap, certificates, testimonials, education, and bootcamps
- `frontend/public/data/data-structures/` - datatype references and example records for the JSON files
- `frontend/public/data/blogs/` - markdown-based blog posts
- `frontend/public/data/docs/` - markdown docs for policy and terms
- `frontend/src/assets/` - static asset data, author info, footer links, skills, and metadata maps
- `frontend/src/components/common/` - shared navbar and footer
- `frontend/src/components/sections/` - page sections used to build each page
- `frontend/src/components/features/` - reusable feature-level logic and search helpers
- `frontend/src/components/views/` - dynamic view components for blog, course, and project detail pages
- `frontend/src/pages/` - page entry points
- `frontend/src/routes/` - application routes
- `frontend/src/services/` - fetch, cache, and search logic used by the whole app
- `frontend/src/context/` - global content and search state

### Backend

The backend is intentionally small.

It includes:

- `backend/index.js` - Express server and Gmail mail sender
- `backend/.env` - runtime environment values
- `backend/package.json` - server scripts and dependencies

## Where You Can Edit Content Quickly

If you want to personalize the site, these are the fastest places to start.

### 1. Public content data

Most site content is in:

- `frontend/public/data/json/`

This is where you will find:

- `projects.json`
- `blogs.json`
- `courses.json`
- `faqs.json`
- `services.json`
- `sitemap.json`
- `testimonials.json`
- `education.json`
- `certificates.json`
- `bootcamps-events.json`

If you change data shapes here, update the matching fetch and search services too.

### 2. Static assets and author profile

Look at:

- `frontend/src/assets/common/author.js`
- `frontend/src/assets/common/footer.js`
- `frontend/src/assets/common/skills.js`
- `frontend/src/assets/metadata/pages.js`
- `frontend/src/assets/metadata/views.js`

These files control the profile text, social links, and metadata used across the site.

### 3. Navigation and layout

The main shell lives here:

- `frontend/src/components/common/Navbar/`
- `frontend/src/components/common/Footer/`

If you want to change menu items, footer links, or social profile shortcuts, start there.

### 4. Page sections

Each page is built from reusable section components in:

- `frontend/src/components/sections/`

If you want to reverse engineer how a page is built, this is the first folder to inspect.

### 5. Dynamic page views

For content that changes by item:

- `frontend/src/components/views/Project/`
- `frontend/src/components/views/Blog/`
- `frontend/src/components/views/Course/`

These handle dynamic pages and detail layouts.

### 6. Search and service logic

The whole application logic is concentrated in:

- `frontend/src/services/`

This is where fetching, caching, indexing, and search behavior live.

If you change the data structure, update the corresponding service too.
The search index also needs to be updated whenever searchable fields change.

## Routes Overview

Check `frontend/src/routes/AppRoutes.jsx` for the full route map.

Important routes include:

- `/` - Home
- `/about` - About
- `/contact` - Contact
- `/projects` - Projects
- `/blogs` - Blogs
- `/courses` - Courses
- `/services` - Services
- `/faqs` - FAQs
- `/sitemap` - Sitemap
- `/search` - Search
- `/privacy-policy` - Privacy Policy
- `/terms-conditions` - Terms and Conditions

Dynamic detail routes:

- `/projects/:id`
- `/blogs/:slug`
- `/courses/:id`

## Data and Service Rules

This project is intentionally data-driven.

That means:

- update JSON data in `frontend/public/data/json/`
- update schema references in `frontend/public/data/data-structures/`
- update fetch services in `frontend/src/services/fetch/`
- update search services in `frontend/src/services/search/`

If you change a data field in a JSON file, check the related fetcher and indexing logic.
That is the part most likely to break if the structure is changed without follow-up edits.

## Backend Notes

The backend only exists to send contact emails.

Current behavior:

- receives contact payload from the frontend
- validates email and message
- sends mail using Gmail and Nodemailer
- allows the deployed frontend via CORS

If you use Gmail:

- generate an App Password from your Google account
- do not use your normal Gmail password for SMTP

If you prefer another provider:

- change the Nodemailer transport settings in `backend/index.js`
- keep the frontend contact endpoint unchanged unless your API route changes

## Deployment

### Frontend on GitHub Pages

This is a Vite project, so the usual flow is:

1. build the app
2. publish the generated output
3. connect GitHub Pages to the publish branch or deployment pipeline

If you deploy the frontend on GitHub Pages, make sure the backend API URL is updated in `frontend/.env` before building.

### Backend on Vercel

The backend is small and deploys well on Vercel.

Remember to set these environment variables on Vercel:

- `EMAIL_USER`
- `EMAIL_PASS`
- `EMAIL_TO` if needed
- `FRONTEND_URL`

## Contributing

Contributions are welcome.

Before contributing:

- read `CONTRIBUTING.md`
- follow the existing code style
- update service logic if you change any data schema
- keep content-driven updates aligned with the data files

## Code of Conduct

Please read `CODE_OF_CONDUCT.md` before contributing or opening issues.

The goal is simple: keep the project respectful, useful, and easy to maintain.

## License

This project is released under the MIT License.

See `LICENSE` for the full text.

## Short Version

If you only remember three things, remember these:

1. most content lives in `frontend/public/data/json/`
2. most behavior lives in `frontend/src/services/`
3. contact mail is handled by `backend/index.js`

That is the core of the project.
