/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Editorial palette. paper/ink/accent use rgb channels so /opacity
        // modifiers actually compile (a raw var() colour silently drops them).
        paper: 'rgb(var(--paper-rgb) / <alpha-value>)',
        'paper-2': 'var(--paper-2)',
        'paper-3': 'var(--paper-3)',
        ink: 'rgb(var(--ink-rgb) / <alpha-value>)',
        muted: 'var(--muted)',
        line: 'var(--line)',
        card: 'var(--card)',
        'logo-surface': 'var(--logo-surface)',
        // rgb channels so /opacity modifiers work with theming
        accent: 'rgb(var(--accent-rgb) / <alpha-value>)',

        // Legacy aliases (map old class names onto the new palette)
        primary: 'var(--paper)',
        surface: 'var(--paper-2)',
        elevated: 'var(--paper-3)',
        'text-primary': 'var(--ink)',
        'text-muted': 'var(--muted)',
        'border-dim': 'var(--line)',
      },
      fontFamily: {
        serif: ['Fraunces', 'Georgia', 'Times New Roman', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
