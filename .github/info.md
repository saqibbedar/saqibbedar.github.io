---
tag: v2.0.2
title: v2.0.2 — Deployment workflow fix
---

Release-only change to trigger a clean GitHub Pages deployment and harden the workflow. Ships the v2.0.1 fixes, whose deploy had failed.

## Changes
- Added `workflow_dispatch` to the deploy workflow so a clean run can be started manually, avoiding duplicate GitHub Pages artifacts caused by re-running a failed run.
