/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#0f172a',
        surface: '#1e293b',
        elevated: '#334155',
        accent: '#38bdf8',
        'text-primary': '#f1f5f9',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
