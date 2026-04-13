import { useState, useEffect, useLayoutEffect } from 'react'

export const useTheme = () => {
  const [theme, setTheme] = useState(() => {
    // Priority: localStorage > system preference > default dark
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme')
      if (saved) return saved
      
      const systemPreference = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
      return systemPreference
    }
    return 'dark'
  })

  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  useLayoutEffect(() => {
    const root = window.document.documentElement
    root.classList.remove('light', 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
  }

  return { theme, toggleTheme, mounted }
}
