/** @type {import('tailwindcss').Config} */
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        test: '#FD5B40',
        bleu: '#1275C8',
        background: '#212121',
        gray: '#333333',
        border: '#4B4B4B',
        input: '#474747',
        bar: '#1E1E1E',
        cardBar: '#767676',
        editor: '#2E2E2E',
        tab: '#333333',
        highlight: '#007ACC',
        border: '#3C3C3C',
        textPrimary: '#A1A1A1',
        textSecondary: '#858585',
        yellowHover: '#FBBF24',
      },
      transitionDuration: {
        DEFAULT: '200ms',
      },
      fontFamily: {
        doppioOne: ['Doppio One', ...defaultTheme.fontFamily.sans],
        firaCode: ['Fira Code', ...defaultTheme.fontFamily.sans],
        jetbrains: ['JetBrains Mono', ...defaultTheme.fontFamily.sans],
        robotomono: ['Roboto Mono', ...defaultTheme.fontFamily.sans]
      },
    },
  },
  plugins: [],
}
