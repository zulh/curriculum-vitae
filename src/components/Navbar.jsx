import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({ name, sections }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const current = sections.find(s => {
        const el = document.getElementById(s.toLowerCase())
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 150 && bottom > 150
      })
      if (current) setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll() // Initial check
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-pdf ${
        scrolled ? 'py-3 bg-primary/80 backdrop-blur-xl border-b border-white/5 shadow-2xl' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.span 
          className="font-black text-text-primary text-xs md:text-sm tracking-[0.3em] uppercase cursor-default"
          animate={{ opacity: scrolled ? 1 : 0.8 }}
        >
          {name}
        </motion.span>
        
        <ul className="hidden lg:flex items-center gap-8">
          {sections.map(s => (
            <li key={s} className="relative group">
              <a
                href={`#${s.toLowerCase()}`}
                className={`text-[11px] font-bold tracking-widest uppercase transition-all duration-300 ${
                  active === s ? 'text-accent' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {s}
              </a>
              <AnimatePresence>
                {active === s && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent rounded-full shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Mobile Indicator */}
        <div className="lg:hidden flex items-center gap-2 px-3 py-1 bg-white/5 rounded-full border border-white/10 backdrop-blur-md">
           <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
           <span className="text-[10px] font-bold text-text-primary uppercase tracking-tighter">{active || 'Home'}</span>
        </div>
      </div>
    </motion.nav>
  )
}
