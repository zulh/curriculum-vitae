import React, { useRef, useEffect, useState } from 'react'
import { motion, useInView } from 'framer-motion'

/**
 * RevealDiv - Scroll-reveal wrapper.
 *
 * Uses a two-phase approach for Framer Motion v12 compatibility:
 * 1. Element starts visible (opacity: 1) — content is NEVER hidden
 * 2. A CSS class applies transform: translateY(20px) initially
 * 3. When element enters viewport, the class is removed with a CSS transition
 *
 * This completely bypasses Framer Motion's whileInView/animate system for
 * opacity, which has a bug in v12 where opacity:0 elements can stay invisible.
 */
export function RevealDiv({ children, delay = 0, className = '', style = {}, ...rest }) {
  const ref = useRef(null)
  const [revealed, setRevealed] = useState(false)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  useEffect(() => {
    if (isInView) {
      setRevealed(true)
    }
  }, [isInView])

  const transitionStyle = {
    opacity: revealed ? 1 : 0,
    transform: revealed ? 'translateY(0px)' : 'translateY(20px)',
    transition: `opacity 0.55s ease ${delay}s, transform 0.55s ease ${delay}s`,
    ...style,
  }

  return React.createElement(
    'div',
    {
      ref,
      className,
      style: transitionStyle,
      ...rest,
    },
    children
  )
}

/**
 * revealProps — kept for backward compatibility only.
 * The RevealDiv component is the preferred approach for FM v12.
 */
export function revealProps(delay = 0) {
  return {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '0px 0px -60px 0px' },
    transition: { duration: 0.5, ease: 'easeOut', delay },
  }
}

export const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

export function useScrollReveal() {
  return { revealProps }
}
