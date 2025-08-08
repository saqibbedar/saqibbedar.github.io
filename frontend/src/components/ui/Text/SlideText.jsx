import PropTypes from "prop-types";
import { motion } from "motion/react";

export const SlideText = ({
  className = "",
  front,
  back = front,
  as = "div", // div, button, a
  component,
  href,
  transition,
  isHovered,
  setIsHovered,
  children,
  ...props
}) => {

  // Use custom component if provided, else use motion[as] or motion.div
  const Comp = component ? motion(component) : motion[as] || motion.div;

  const defaultTransition = { duration: 0.45, ease: [0.4, 0, 0.2, 1] };
  const usedTransition = transition || defaultTransition;

  // only pass href if as is "a" || anchor tag
  const extraProps = as === "a" && href ? { href } : {};

  // If children is provided, use it for both slides
  const contentFront = children ?? front;
  const contentBack = children ?? back ?? front;

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

  return (
    <Comp
      className={`relative block overflow-hidden whitespace-nowrap ${className}`}
      style={{ padding: 0 }}
      {...extraProps}
      {...props}
      {...motionProps}
      {...hoverHandlers}
    >
      <motion.div
        transition={usedTransition}
        variants={{
          initial: { y: 0 },
          hovered: { y: "-100%" },
        }}
      >
        <span>{contentFront}</span>
      </motion.div>
      <motion.div
        className="absolute inset-0 text-inherit"
        transition={usedTransition}
        variants={{
          initial: { y: "100%" },
          hovered: { y: 0 },
        }}
      >
        <span>{contentBack}</span>
      </motion.div>
    </Comp>
  );
};

SlideText.propTypes = {
  className: PropTypes.string,
  front: PropTypes.string.isRequired,
  back: PropTypes.string,
  as: PropTypes.oneOf(["div", "button", "a"]),
  component: PropTypes.elementType, // <-- NEW
  href: PropTypes.string,
  children: PropTypes.node,
  transition: PropTypes.object,
  isHovered: PropTypes.bool,
  setIsHovered: PropTypes.func,
};