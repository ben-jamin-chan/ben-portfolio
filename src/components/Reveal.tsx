import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeInUp, premiumTransition, viewport } from "@/lib/motion";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
};

export default function Reveal({
  children,
  className,
  delay = 0,
  y = 24,
}: RevealProps) {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.div
      className={className}
      variants={prefersReducedMotion ? undefined : fadeInUp}
      initial={prefersReducedMotion ? false : "hidden"}
      whileInView={prefersReducedMotion ? undefined : "visible"}
      viewport={viewport}
      transition={{ ...premiumTransition, delay }}
      custom={y}
    >
      {children}
    </motion.div>
  );
}
