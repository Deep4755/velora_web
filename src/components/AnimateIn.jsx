import { motion } from "framer-motion";

/**
 * Reusable scroll-triggered animation wrapper.
 * Usage: <AnimateIn> ... </AnimateIn>
 * Props:
 *   delay: seconds (default 0)
 *   direction: "up" | "down" | "left" | "right" (default "up")
 *   duration: seconds (default 0.6)
 *   className: extra classes
 */
export default function AnimateIn({
  children,
  delay = 0,
  direction = "up",
  duration = 0.6,
  className = "",
  once = true,
}) {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { y: 0, x: 30 },
    right: { y: 0, x: -30 },
  };

  const offset = directions[direction] || directions.up;

  return (
    <motion.div
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, margin: "-50px" }}
      transition={{ duration, delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger container — wraps children and staggers their appearance.
 */
export function StaggerContainer({ children, className = "", stagger = 0.1 }) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={{
        visible: { transition: { staggerChildren: stagger } },
        hidden: {},
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({ children, className = "" }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
