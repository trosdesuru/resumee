/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        sidebar: '#1E1E1E',
        editor: '#252526',
        tab: '#333333',
        highlight: '#007ACC',
        border: '#3C3C3C',
        textPrimary: '#D4D4D4',
        textSecondary: '#858585',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
