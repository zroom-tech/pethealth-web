"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface FadeInWhenVisibleProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
}

const directionOffset = {
  up: { y: 30 },
  down: { y: -30 },
  left: { x: 30 },
  right: { x: -30 },
  none: {},
};

export function FadeInWhenVisible({
  children,
  delay = 0,
  duration = 0.6,
  direction = "up",
  className,
}: FadeInWhenVisibleProps) {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: gentle opacity fade only (no blur/transform)
  if (prefersReducedMotion) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-30px" }}
        transition={{ duration: 0.4, delay: delay * 0.5 }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        filter: "blur(10px)",
        ...directionOffset[direction],
      }}
      whileInView={{
        opacity: 1,
        filter: "blur(0px)",
        x: 0,
        y: 0,
      }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
