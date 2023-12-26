/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '2rem',
      },
      colors: {
        'primary': '#EFE070',
        'secondary': '#F6CA79',
        'dark': '#121315',
        'light': '#F1F1F1',
        'darkLine': '#303237',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      animation: {
        'fill-up': 'fillUp 0.3s ease-in forwards'
      },
    },
  },
  plugins: [],
}