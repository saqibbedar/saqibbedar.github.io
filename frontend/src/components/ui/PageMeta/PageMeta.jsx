import { useEffect } from "react";

const MANAGED_ATTR = "data-page-meta";
const MANAGED_JSONLD_ATTR = "data-page-meta-jsonld";

const upsertMeta = (selector, attrs, content) => {
  let node = document.head.querySelector(selector);

  if (!node) {
    node = document.createElement("meta");
    Object.entries(attrs).forEach(([key, value]) => {
      node.setAttribute(key, value);
    });
    node.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(node);
  }

  if (typeof content === "string") {
    node.setAttribute("content", content);
  }
};

const upsertCanonical = (href) => {
  if (!href) return;

  let node = document.head.querySelector(
    `link[rel=\"canonical\"][${MANAGED_ATTR}=\"true\"]`
  );

  if (!node) {
    node = document.createElement("link");
    node.setAttribute("rel", "canonical");
    node.setAttribute(MANAGED_ATTR, "true");
    document.head.appendChild(node);
  }

  node.setAttribute("href", href);
};

const clearManagedJsonLd = () => {
  document
    .querySelectorAll(
      `script[type=\"application/ld+json\"][${MANAGED_JSONLD_ATTR}=\"true\"]`
    )
    .forEach((node) => node.remove());
};

const appendJsonLd = (jsonLd) => {
  if (!jsonLd) return;

  const entries = Array.isArray(jsonLd) ? jsonLd : [jsonLd];

  entries.forEach((entry) => {
    if (!entry || typeof entry !== "object") return;

    const node = document.createElement("script");
    node.type = "application/ld+json";
    node.setAttribute(MANAGED_JSONLD_ATTR, "true");
    node.textContent = JSON.stringify(entry);
    document.head.appendChild(node);
  });
};

const PageMeta = ({
  title,
  description,
  keywords = [],
  author = "",
  type = "website",
  url,
  jsonLd,
}) => {
  const keywordValue = Array.isArray(keywords)
    ? keywords.filter(Boolean).join(", ")
    : String(keywords || "");

  useEffect(() => {
    if (title) {
      document.title = title;
    }

    upsertMeta(
      `meta[name=\"robots\"][${MANAGED_ATTR}=\"true\"]`,
      { name: "robots" },
      "index,follow"
    );
    upsertMeta(
      `meta[name=\"theme-color\"][${MANAGED_ATTR}=\"true\"]`,
      { name: "theme-color" },
      "#000000"
    );
    upsertMeta(
      `meta[property=\"og:type\"][${MANAGED_ATTR}=\"true\"]`,
      { property: "og:type" },
      type || "website"
    );
    upsertMeta(
      `meta[name=\"twitter:card\"][${MANAGED_ATTR}=\"true\"]`,
      { name: "twitter:card" },
      "summary_large_image"
    );

    if (description) {
      upsertMeta(
        `meta[name=\"description\"][${MANAGED_ATTR}=\"true\"]`,
        { name: "description" },
        description
      );
      upsertMeta(
        `meta[property=\"og:description\"][${MANAGED_ATTR}=\"true\"]`,
        { property: "og:description" },
        description
      );
      upsertMeta(
        `meta[name=\"twitter:description\"][${MANAGED_ATTR}=\"true\"]`,
        { name: "twitter:description" },
        description
      );
    }

    if (keywordValue) {
      upsertMeta(
        `meta[name=\"keywords\"][${MANAGED_ATTR}=\"true\"]`,
        { name: "keywords" },
        keywordValue
      );
    }

    if (author) {
      upsertMeta(
        `meta[name=\"author\"][${MANAGED_ATTR}=\"true\"]`,
        { name: "author" },
        author
      );
    }

    if (title) {
      upsertMeta(
        `meta[property=\"og:title\"][${MANAGED_ATTR}=\"true\"]`,
        { property: "og:title" },
        title
      );
      upsertMeta(
        `meta[name=\"twitter:title\"][${MANAGED_ATTR}=\"true\"]`,
        { name: "twitter:title" },
        title
      );
    }

    if (url) {
      upsertMeta(
        `meta[property=\"og:url\"][${MANAGED_ATTR}=\"true\"]`,
        { property: "og:url" },
        url
      );
      upsertCanonical(url);
    }

    clearManagedJsonLd();
    appendJsonLd(jsonLd);

    return () => {
      clearManagedJsonLd();
    };
  }, [title, description, keywordValue, author, type, url, jsonLd]);

  return null;
};

export default PageMeta;
