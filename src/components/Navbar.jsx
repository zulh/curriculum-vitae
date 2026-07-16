import { useState, useEffect } from 'react'
import { usePDF } from '../hooks/usePDF'

export default function Navbar({ name, sections, theme, toggleTheme, mounted }) {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const { downloadPDF, isGenerating } = usePDF()

  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40)
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
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 no-pdf ${
        scrolled ? 'py-4 bg-paper/90 backdrop-blur-md' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#hero" className="font-serif text-xl text-ink tracking-tight" aria-label="Top">
          {initials}<span className="text-accent">.</span>
        </a>

        <div className="flex items-center gap-4 md:gap-8">
          <ul className="hidden lg:flex items-center gap-7">
            {sections.map(s => (
              <li key={s}>
                <a
                  href={`#${s.toLowerCase()}`}
                  className={`text-[11px] uppercase tracking-[0.18em] transition-colors duration-300 ${
                    active === s ? 'text-ink' : 'text-muted hover:text-ink'
                  }`}
                >
                  {s}
                </a>
              </li>
            ))}
          </ul>

          <button
            onClick={() => downloadPDF(`${name.replace(/\s+/g, '_')}_CV.pdf`)}
            disabled={isGenerating}
            className="text-[11px] uppercase tracking-[0.15em] text-ink border border-line rounded-full px-4 py-2 hover:border-accent hover:text-accent transition-colors duration-300 disabled:opacity-50"
          >
            Download CV
          </button>

          <button
            onClick={toggleTheme}
            className="text-muted hover:text-ink transition-colors"
            aria-label="Toggle theme"
          >
            {mounted && (theme === 'dark' ? <SunIcon /> : <MoonIcon />)}
          </button>
        </div>
      </div>
    </nav>
  )
}

function SunIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m12.728 0l-.707-.707M6.343 6.343l-.707-.707M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
    </svg>
  )
}
