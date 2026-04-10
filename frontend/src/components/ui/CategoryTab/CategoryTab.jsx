import { Link } from "react-router-dom";
import React from "react";

const baseClasses =
  "inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium rounded-full whitespace-nowrap border transition-colors shrink-0";

const activeClasses = "bg-fg-primary text-bg-primary border-transparent";
const inactiveClasses =
  "text-fg-secondary hover:text-fg-primary border-border hover:border-border-light";

const normalizeCategory = (category, label) => {
  if (typeof category === "string") {
    return {
      value: category,
      label: label || category,
    };
  }

  return {
    value: category?.value || category?.name || label || "",
    label: label || category?.label || category?.name || "",
  };
};

const CategoryTab = ({
  category,
  label,
  isActive = false,
  onClick,
  count,
  showCount = false,
  highlightSelected = true,
  to,
  className = "",
  activeClassName = "",
  inactiveClassName = "",
  countClassName = "",
  scrollOffset=62,
  ...props
}) => {
  const { value, label: resolvedLabel } = normalizeCategory(category, label);
  const shouldHighlight = highlightSelected && isActive;
  const tabClasses = [
    baseClasses,
    shouldHighlight ? activeClasses : inactiveClasses,
    shouldHighlight ? activeClassName : inactiveClassName,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const scrollToOffset = (offset = 62) => {
    window.scrollTo({
      top: offset,
      behavior: "smooth",
    });
  };

  const shouldShowCount =
    typeof count === "number" && (count > 0 || showCount === true);

  const content = (
    <>
      <span>{resolvedLabel}</span>
      {shouldShowCount && (
        <span
          className={`text-xs px-1.5 py-0.5 rounded-full ${
            shouldHighlight
              ? "bg-bg-primary/20 text-bg-primary"
              : "bg-bg-card text-fg-muted"
          } ${countClassName}`}
        >
          {count}
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link
        to={to}
        aria-current={shouldHighlight ? "page" : undefined}
        className={tabClasses}
        {...props}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      onClick={() => {
        if (!isActive) {
          onClick?.(value);
          scrollToOffset(scrollOffset);
        }
      }}
      className={tabClasses}
      aria-pressed={shouldHighlight}
      {...props}
    >
      {content}
    </button>
  );
};

export default CategoryTab;
