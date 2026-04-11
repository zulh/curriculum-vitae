// Returns props for a scroll-reveal animated element.
// Uses object-based initial (not variant string) to prevent flash-of-content.
export function revealProps(delay = 0, threshold = 0.15) {
  return {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: threshold },
    transition: { duration: 0.55, ease: 'easeOut', delay },
  }
}

// Kept for backward compatibility with any imports that reference these
export const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function useScrollReveal() {
  return { revealProps }
}
