"use client";

import { motion, useReducedMotion } from "motion/react";
import { type ReactNode } from "react";

interface StaggerChildrenProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  className,
}: StaggerChildrenProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-30px" }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: prefersReducedMotion
              ? staggerDelay * 0.5
              : staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      variants={
        prefersReducedMotion
          ? {
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: { duration: 0.3 },
              },
            }
          : {
              hidden: { opacity: 0, y: 20, filter: "blur(8px)" },
              visible: {
                opacity: 1,
                y: 0,
                filter: "blur(0px)",
                transition: {
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94],
                },
              },
            }
      }
      className={className}
    >
      {children}
    </motion.div>
  );
}
