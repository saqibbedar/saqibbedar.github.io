# Auto Release + Auto Publish Guide

This project is configured so GitHub Actions runs only when project-metadata.json changes on main.

Workflow file: .github/workflows/deploy.yml

## What triggers automation

- Trigger: push to main
- Required changed file: project-metadata.json
- If project-metadata.json is not changed, no release/build/deploy job runs.

## Release data source

The workflow reads release metadata from:

- release.current
- release.title
- release.description

From project-metadata.json:

- Release title uses release.title
- Release body uses release.description

## Recommended order (important)

1. Add or update all GitHub Actions workflow files first.
2. Commit and push those workflow changes.
3. Update project-metadata.json release fields last.
4. Commit and push project-metadata.json.

This keeps project-metadata.json as the final trigger for release + deploy automation.

## End-to-end release flow after metadata update

1. Update project-metadata.json release fields.
2. Commit changes.
3. Push to main.
4. Workflow auto-creates or updates GitHub Release.
5. Workflow builds frontend and deploys GitHub Pages.

## Update metadata first (required)

Example update in project-metadata.json:

```json
"release": {
	"current": "1.0.1",
	"title": "Portfolio Content and Release Automation Update",
	"description": "Added metadata-driven release and GitHub Pages deployment automation."
}
```

Recommended: also append releaseHistory for manual tracking consistency.

Then push metadata update:

```bash
git add project-metadata.json
git commit -m "chore(release): bump release metadata to 1.0.1"
git push origin main
```
