const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,svelte}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['IBM Plex Mono', ...defaultTheme.fontFamily.sans],
      },
      animation: {
        blink: 'blink 0.6s linear infinite'
      }
    }
  },
  plugins: [],
}

