![SEO in One Day](../../images/blogs/03-seo-in-one-day.avif)

## How did I achieve 100% SEO score in just one day?

You might be amazed at this, but the process is literally simple.

On **15 April, 2026**, I published my developer portfolio website on GitHub Pages. After some delay, I started searching it on Google, but it was not visible at all. So I decided to work on SEO properly.

My site is deployed at:

- **Live URL:** [https://saqibbedar.github.io](https://saqibbedar.github.io)

Here are the exact steps I followed to get a **100% SEO score**.

---

### 1) I created `robots.txt`

First, I added a robots file so search engine crawlers know what to crawl and where to find my sitemap.

- **Robots URL:** [https://saqibbedar.github.io/robots.txt](https://saqibbedar.github.io/robots.txt)

This helps bots discover important pages faster and follow a clean crawl path.

---

### 2) I created `sitemap.xml`

Then I created a sitemap containing all important routes of my website.

- **Sitemap URL:** [https://saqibbedar.github.io/sitemap.xml](https://saqibbedar.github.io/sitemap.xml)

Why this matters: sitemap gives search engines a clear list of pages to index instead of guessing links one by one.

---

### 3) I fully updated `index.html` SEO tags (static metadata)

This was the most important fix.

Initially, I had metadata generated dynamically at runtime in my app. That is useful for browsers, but social platforms like LinkedIn usually do not execute your JavaScript app like a real browser. They read metadata directly from the root HTML source.

So I updated my root `index.html` with proper SEO tags:

- title
- meta description
- keywords
- canonical
- Open Graph tags
- Twitter tags
- structured data
- **Page Source URL:** view source of homepage (index.html output)  
  [https://saqibbedar.github.io/](https://saqibbedar.github.io/)

After this, link previews started showing correctly on social platforms instead of missing/partial data.

---

### 4) I submitted my site in Google Search Console and requested fresh indexing

Then I went to Google Search Console and:

1. Added my property: [`saqibbedar.github.io`](https://saqibbedar.github.io)
2. Inspected the homepage URL
3. Requested indexing for fresh crawl
4. Submitted [sitemap](https://saqibbedar.github.io/sitemap.xml) for better indexing

Before this, Google was still pointing to older content (from another README-style result). After requesting re-indexing and sitemap submission, crawler fetched fresh metadata and current site content.

---

## Result

After doing these steps, I waited a few hours and searched again.

My website started indexing correctly and ranking in top results for keyword **"Saqib Bedar"**, with fresh metadata being fetched properly.

---

## Final Summary

If your portfolio is not showing on Google even after deployment, do these 4 things:

1. Add `robots.txt`
2. Add `sitemap.xml`
3. Put complete static SEO metadata in root `index.html`
4. Use Google Search Console to inspect URL, request indexing, and submit sitemap

That is exactly how I achieved a 100% SEO score in one day.

---

## Extra Improvements (Simple but powerful)

If you want to go one step further, these small improvements help a lot:

1. Add meaningful `alt` text to all important images
2. Add image `width` and `height` to reduce layout shift (CLS)
3. Keep semantic structure clean (`h1`, `h2`, `article`, `section`, proper links)
4. Add canonical URL and structured data (JSON-LD) for better context
5. Use modern image formats like AVIF/WebP and lazy loading where possible
6. Keep internal links strong (connect related blogs/projects naturally)
7. Update sitemap `lastmod` when content changes

I already use AVIF for performance and optimized loading behavior, and that helped both speed and SEO quality.
