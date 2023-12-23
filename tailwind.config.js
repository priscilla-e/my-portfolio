/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#EFE070',
        'secondary': '#F6CA79',
        'dark': '#242529',
      },
      fontFamily: {
        sans: ['Raleway', 'sans-serif'],
        monoscape: ['Source Code Pro', 'monospace'],
      },
    },
  },
  plugins: [],
}