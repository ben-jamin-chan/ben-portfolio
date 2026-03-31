export const viewport = {
  once: true,
  margin: "-96px",
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

export const premiumTransition = {
  duration: 0.65,
  ease: [0.22, 1, 0.36, 1] as const,
};
