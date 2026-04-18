# Changelog

All notable changes to this project are documented in this file.

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

[v1.1.0]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.1.0
[v1.0.3]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.0.3
[v1.0.2]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.0.2
[v1.0.1]: https://github.com/saqibbedar/saqibbedar.github.io/releases/tag/v1.0.1
