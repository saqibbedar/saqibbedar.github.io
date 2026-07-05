---
tag: v2.0.1
title: v2.0.1 — Fix homepage script error
---

Patch release fixing a JavaScript error on the homepage and clearing Search Console structured-data warnings.

## Changes
- Removed the redundant `js/index.js` (duplicated `js/global.js`), fixing an `Identifier 'body' has already been declared` error on the homepage.
- Fixed the `dateModified` datetime format in the homepage JSON-LD.
- Removed the unrecognized `mainEntityOfPage` field from the resume JSON-LD.
