/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'gray-900',
        VSGray: '#333333',
        VSBorder: '#4B4B4B',
        VSInput: '#474747',
        VSBar: '#1E1E1E',
        editor: '#252526',
        tab: '#333333',
        highlight: '#007ACC',
        border: '#3C3C3C',
        textPrimary: '#A1A1A1',
        textSecondary: '#858585',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
    },
  },
  plugins: [],
}
