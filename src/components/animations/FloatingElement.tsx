"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

export function FloatingElement({
  children,
  duration = 3,
  distance = 10,
  className,
}: {
  children: ReactNode;
  duration?: number;
  distance?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  // Reduced motion: very subtle, slow float instead of no motion
  const actualDistance = prefersReducedMotion ? Math.min(distance * 0.3, 3) : distance;
  const actualDuration = prefersReducedMotion ? duration * 2 : duration;

  return (
    <motion.div
      animate={{ y: [0, -actualDistance, 0] }}
      transition={{
        duration: actualDuration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
