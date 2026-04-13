/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: 'var(--bg-primary)',
        surface: 'var(--bg-surface)',
        elevated: 'var(--bg-elevated)',
        accent: '#38bdf8',
        'text-primary': 'var(--text-primary)',
        'text-muted': 'var(--text-muted)',
        'border-dim': 'var(--border-dim)',
        'logo-surface': 'var(--logo-surface)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
