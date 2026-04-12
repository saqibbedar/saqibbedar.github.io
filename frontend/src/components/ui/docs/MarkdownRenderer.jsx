import { Children, isValidElement } from "react";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { BxpCode } from "bxp-code";

const isEmptyTextNode = (node) =>
  typeof node === "string" && node.trim().length === 0;

const isImageElement = (node) => isValidElement(node) && node.type === "img";

const isLinkWithImage = (node) => {
  if (!isValidElement(node) || node.type !== "a") return false;

  const linkChildren = Children.toArray(node.props?.children);
  return linkChildren.some((child) =>
    isValidElement(child) ? child.type === "img" : false
  );
};

const isImageRowParagraph = (children) => {
  const nodes = Children.toArray(children);
  if (nodes.length === 0) return false;

  return nodes.every((node) => {
    if (isEmptyTextNode(node)) return true;
    if (isImageElement(node) || isLinkWithImage(node)) return true;
    return isValidElement(node) && node.type === "br";
  });
};

const normalizeImageSrc = (src) => {
  if (typeof src !== "string") return src;
  return src.replace(/^\/public\//, "/");
};

const MarkdownRenderer = ({ markdown = "" }) => {
  return (
    <ReactMarkdown
      rehypePlugins={[rehypeRaw]}
      components={{
        h1: ({ ...props }) => (
          <h1
            className="text-2xl sm:text-3xl md:text-4xl font-bold text-fg-primary mb-4"
            {...props}
          />
        ),
        h2: ({ ...props }) => (
          <h2
            className="text-xl font-semibold text-fg-primary mt-8 mb-3"
            {...props}
          />
        ),
        h3: ({ ...props }) => (
          <h3
            className="text-lg font-semibold text-fg-primary mt-6 mb-2"
            {...props}
          />
        ),
        p: ({ children, ...props }) => {
          if (isImageRowParagraph(children)) {
            return (
              <div
                className="mb-4 flex flex-row flex-wrap items-center gap-2 [&>br]:basis-full [&>br]:h-0"
                {...props}
              >
                {children}
              </div>
            );
          }

          return (
            <p
              className="text-fg-secondary leading-relaxed mb-3 [overflow-wrap:anywhere]"
              {...props}
            >
              {children}
            </p>
          );
        },
        ul: ({ ...props }) => (
          <ul
            className="list-disc list-inside space-y-2 ml-2 mb-3"
            {...props}
          />
        ),
        ol: ({ ...props }) => (
          <ol
            className="list-decimal list-inside space-y-2 ml-2 mb-3"
            {...props}
          />
        ),
        li: ({ ...props }) => (
          <li
            className="text-fg-secondary leading-relaxed [overflow-wrap:anywhere]"
            {...props}
          />
        ),
        blockquote: ({ ...props }) => (
          <blockquote
            className="border-l-4 border-border-light pl-4 my-5 italic text-fg-secondary/90"
            {...props}
          />
        ),
        strong: ({ ...props }) => (
          <strong className="text-fg-primary font-semibold" {...props} />
        ),
        em: ({ ...props }) => (
          <em className="text-fg-secondary italic" {...props} />
        ),
        hr: () => <hr className="my-6 border-border" />,
        table: ({ ...props }) => (
          <div className="my-6 overflow-x-auto">
            <table
              className="min-w-full border-collapse border border-border text-sm"
              {...props}
            />
          </div>
        ),
        thead: ({ ...props }) => <thead className="bg-bg-card" {...props} />,
        tbody: ({ ...props }) => <tbody {...props} />,
        tr: ({ ...props }) => (
          <tr className="border-b border-border" {...props} />
        ),
        th: ({ ...props }) => (
          <th
            className="border border-border px-3 py-2 text-left text-fg-primary font-semibold"
            {...props}
          />
        ),
        td: ({ ...props }) => (
          <td
            className="border border-border px-3 py-2 text-fg-secondary"
            {...props}
          />
        ),
        a: ({ ...props }) => (
          <a
            className="text-[#0f6cbd] hover:text-[#0a4f8a] underline underline-offset-2 transition-colors [overflow-wrap:anywhere]"
            target="_blank"
            rel="noopener noreferrer"
            {...props}
          />
        ),
        img: ({ src, alt, ...props }) => (
          <img
            src={normalizeImageSrc(src)}
            alt={alt || "image"}
            loading="lazy"
            className="inline-block h-auto w-auto max-w-full align-middle"
            {...props}
          />
        ),
        code: ({ inline, children, ...props }) => {
          if (!inline) {
            return <code {...props}>{children}</code>;
          }

          return (
            <code
              className="inline rounded-md border border-border/60 bg-bg-card/70 px-1.5 py-0.5 font-mono text-[0.92em] leading-none text-fg-primary"
              {...props}
            >
              {children}
            </code>
          );
        },
        pre: ({ children }) => {
          const child = children?.[0] || children;
          const languageMatch = /language-(\w+)/.exec(
            child?.props?.className || ""
          );
          const language = languageMatch?.[1] || "text";
          const code = String(child?.props?.children || "").replace(/\n$/, "");

          return (
            <div className="my-4">
              <BxpCode
                code={code}
                lang={language}
                theme="dark"
                showLineNumbers
                showHeader
                showLang
              />
            </div>
          );
        },
      }}
    >
      {markdown}
    </ReactMarkdown>
  );
};

export default MarkdownRenderer;
