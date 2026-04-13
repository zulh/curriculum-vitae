import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { usePDF } from '../hooks/usePDF'

export default function Navbar({ name, sections, theme, toggleTheme, mounted }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { downloadPDF, isGenerating } = usePDF()

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      const current = sections.find(s => {
        const el = document.getElementById(s.toLowerCase())
        if (!el) return false
        const { top, bottom } = el.getBoundingClientRect()
        return top <= 200 && bottom > 200
      })
      if (current) setActive(current)
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [sections])

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-pdf ${
        scrolled ? 'py-3 bg-primary/80 backdrop-blur-xl border-b border-border-dim shadow-lg' : 'py-6 bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <motion.span 
          className="font-black text-text-primary text-xs md:text-sm tracking-[0.3em] uppercase cursor-default"
        >
          {name}
        </motion.span>
        
        <div className="flex items-center gap-4 md:gap-8">
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
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {/* Download Button */}
            <button
              onClick={() => downloadPDF(`${name.replace(/\s+/g, '_')}_CV.pdf`)}
              disabled={isGenerating}
              className="flex items-center gap-2 px-3 py-2 md:px-5 md:py-2.5 bg-accent hover:bg-accent/90 text-slate-900 rounded-full font-bold text-[10px] md:text-xs uppercase tracking-wider transition-all shadow-lg shadow-accent/20 active:scale-95 disabled:opacity-50"
              title="Download CV"
            >
              <DownloadIcon className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Download CV</span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-surface border border-border-dim hover:border-accent/50 transition-all text-text-primary active:rotate-12"
              aria-label="Toggle theme"
            >
              {mounted && (theme === 'dark' ? <SunIcon className="w-4 h-4" /> : <MoonIcon className="w-4 h-4" />)}
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function SunIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function MoonIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}

function DownloadIcon({ className }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
    </svg>
  )
}
