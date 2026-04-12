# Contributing

Thanks for taking the time to contribute to this portfolio project.

This repository is designed to stay clean, content-driven, and easy to maintain. The best contributions are the ones that improve clarity, correctness, accessibility, or maintainability without adding unnecessary complexity.

## Before You Start

Please read:

- [README.md](README.md)
- [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md)

If you are changing content or structure, first understand how the frontend data system works:

- most public content lives in `frontend/public/data/json/`
- data schemas and examples live in `frontend/public/data/data-structures/`
- fetch and cache logic lives in `frontend/src/services/`
- page sections live in `frontend/src/components/sections/`

## What You Can Contribute

Good contribution areas include:

- fixing bugs
- improving accessibility
- improving responsiveness
- refining copy or documentation
- adding or updating content data
- improving caching or search behavior
- simplifying repeated code
- improving route or metadata handling

## What Needs Care

Some parts of the project are tightly connected.

If you change any data shape in `frontend/public/data/json/`, make sure the related service logic is updated too. That includes fetchers, search indexing, and any view logic that reads the same fields.

Examples:

- if you update project fields, check `frontend/src/services/fetch/fetchProjectsService.js` and `frontend/src/services/search/indexService.js`
- if you update blog structure, check `frontend/src/services/fetch/fetchBlogDocService.js`
- if you update sitemap structure, check `frontend/src/pages/Sitemap/Sitemap.jsx`

## Local Setup

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
npm install
npm run dev
```

## Suggested Workflow

1. Fork the repository if needed.
2. Create a branch with a clear name.
3. Make one focused change at a time.
4. Test the change locally.
5. Keep commits small and descriptive.
6. Open a pull request with a short explanation of what changed and why.

## Style Notes

- follow the existing file and folder structure
- keep changes minimal and purposeful
- preserve the current visual style unless the task is a design update
- use the existing data-driven pattern instead of hardcoding content in components
- keep comments short and useful

## Pull Requests

When opening a PR, include:

- what you changed
- why you changed it
- which files or data sets were affected
- any manual testing you performed

If your change affects content or routes, mention the user-facing impact clearly.

## Reporting Issues

If you find a bug, include:

- the page or route where it happened
- steps to reproduce
- expected behavior
- actual behavior
- screenshots if useful

## Final Note

If you are unsure whether a change belongs in the data, the service layer, or the UI layer, ask before making a large structural edit. This repository is small, but it is intentionally organized, and consistency matters.
