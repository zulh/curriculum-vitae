import { useEffect, useRef } from 'react'
import { useAnimation, useInView } from 'framer-motion'

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

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const controls = useAnimation()
  const inView = useInView(ref, { once: true, amount: threshold })

  useEffect(() => {
    if (inView) controls.start('visible')
  }, [inView, controls])

  return { ref, controls, fadeUp, staggerContainer }
}
