const PageMeta = ({
  title,
  description,
  keywords = [],
  author = "",
  type = "website",
  url,
}) => {
  const keywordValue = Array.isArray(keywords)
    ? keywords.filter(Boolean).join(", ")
    : String(keywords || "");

  return (
    <>
      <title>{title}</title>
      {description && <meta name="description" content={description} />}
      {keywordValue && <meta name="keywords" content={keywordValue} />}
      {author && <meta name="author" content={author} />}
      <meta name="robots" content="index,follow" />
      <meta name="theme-color" content="#000000" />
      <meta property="og:type" content={type} />
      {title && <meta property="og:title" content={title} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:url" content={url} />}
      <meta name="twitter:card" content="summary_large_image" />
      {title && <meta name="twitter:title" content={title} />}
      {description && <meta name="twitter:description" content={description} />}
    </>
  );
};

export default PageMeta;
