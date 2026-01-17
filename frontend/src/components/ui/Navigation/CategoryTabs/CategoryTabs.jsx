// import './CategoryTabs.css'
import { memo } from "react";
import { useCategory } from "@/context";

/**
 *
 * @param {Object} props - component props
 * @param {Array} props.categories - Array of category names
 * @param {string} props.align - Alignment of tabs ("start" or "center")
 * @param {string} props.className - Additional CSS classes
 */

const CategoryTabs = ({
  categories,
  align = "start",
  className = "",
  ...props
}) => {
  const { category, setCategory } = useCategory();

  const alignClass = align === "center" ? "justify-center" : "justify-start";

  return (
    <div
      className={`flex gap-2 sm:gap-3 overflow-x-auto hide-scrollbar px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 pb-2 ${alignClass} ${className}`}
      {...props}
    >
      {categories.map((button, index) => (
        <button
          key={index}
          onClick={() => setCategory(button)}
          className={`px-4 py-2 sm:px-5 sm:py-2.5 rounded-lg text-sm sm:text-base font-medium whitespace-nowrap transition-colors duration-200 cursor-pointer border ${
            category === button
              ? "bg-fg-primary text-bg-primary border-fg-primary"
              : "bg-bg-card text-fg-secondary hover:text-fg-primary border-border hover:border-border-light"
          }`}
        >
          {button}
        </button>
      ))}
    </div>
  );
};

export default memo(CategoryTabs);
