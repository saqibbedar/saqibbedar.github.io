import PropTypes from "prop-types";
import { motion } from "motion/react";

export const SplitText = ({
  className = "",
  front,
  back = front,
  as = "div", // div, button, a
  component,
  href,
  isHovered,
  setIsHovered,
  children,
  ...props
}) => {
  const DURATION = 0.25;
  const STAGGER = 0.025;

  // Use custom component if provided, else use motion[as] or motion.div
  const Comp = component ? motion(component) : motion[as] || motion.div;

  // only pass href if as is "a" || anchor tag
  const extraProps = as === "a" && href ? { href } : {};

  // Determine animation trigger: animate if isHovered is defined, else use whileHover
  const motionProps =
    isHovered !== undefined
      ? { animate: isHovered ? "hovered" : "initial" }
      : { whileHover: "hovered", initial: "initial" };

  // Only add hover handlers if setIsHovered is provided
  const hoverHandlers =
    typeof setIsHovered === "function"
      ? {
          onHoverStart: () => setIsHovered(true),
          onHoverEnd: () => setIsHovered(false),
        }
      : {};

  // Helper to render character - preserves spaces using non-breaking space
  const renderChar = (char) => (char === " " ? "\u00A0" : char);

  const frontText = children ?? front;
  const backText = children ?? back ?? front;

  // Determine the longer text to set proper width
  const longerText = frontText.length >= backText.length ? frontText : backText;

  return (
    <Comp
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      {...props}
      initial="initial"
      {...motionProps}
      {...hoverHandlers}
      {...extraProps}
      style={{ padding: 0 }}
    >
      {/* Hidden text to establish width based on longer text */}
      <div className="invisible" aria-hidden="true">
        {longerText.split("").map((char, index) => (
          <span key={index} className="inline-block">
            {renderChar(char)}
          </span>
        ))}
      </div>

      {/* Front text (visible initially) */}
      <div className="absolute inset-0">
        {frontText.split("").map((char, index) => (
          <motion.span
            key={index}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            className="inline-block"
          >
            {renderChar(char)}
          </motion.span>
        ))}
      </div>

      {/* Back text (slides in on hover) */}
      <div className="absolute inset-0">
        {backText.split("").map((char, index) => (
          <motion.span
            key={index}
            transition={{
              duration: DURATION,
              ease: "easeInOut",
              delay: STAGGER * index,
            }}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            className="inline-block"
          >
            {renderChar(char)}
          </motion.span>
        ))}
      </div>
    </Comp>
  );
};

SplitText.propTypes = {
  className: PropTypes.string,
  front: PropTypes.string.isRequired,
  back: PropTypes.string,
  as: PropTypes.oneOf(["div", "button", "a"]),
  component: PropTypes.elementType,
  href: PropTypes.string,
  isHovered: PropTypes.bool,
  setIsHovered: PropTypes.func,
  children: PropTypes.node,
};
