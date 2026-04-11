export const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15 },
  },
}

// Returns props to spread onto a motion element for scroll-reveal
export function useScrollReveal(threshold = 0.15) {
  return {
    scrollProps: {
      initial: 'hidden',
      whileInView: 'visible',
      viewport: { once: true, amount: threshold },
    },
    fadeUp,
    staggerContainer,
  }
}
