import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function Navbar({ name, sections }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)

      const current = sections.find(s => {
        const el = document.getElementById(s.toLowerCase())
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 100 && bottom > 100
      })
      if (current) setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-accent text-sm tracking-widest uppercase">
          {name}
        </span>
        <ul className="hidden md:flex gap-6">
          {sections.map(s => (
            <li key={s}>
              <a
                href={`#${s.toLowerCase()}`}
                className={`text-sm font-medium transition-colors duration-200 ${
                  active === s ? 'text-accent' : 'text-text-muted hover:text-text-primary'
                }`}
              >
                {s}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  )
}
