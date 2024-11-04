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
        textPrimary: '#A1A1A1',
        textSecondary: '#858585',
        bleu: '#1275C8',
        gray: '#333333',
        editor: '#2E2E2E',
        input: '#474747',
        tab: '#333333',
        bar: '#1E1E1E',
        cardBar: '#767676',
        border: '#3C3C3C',
        highlight: '#007ACC',
        yellowHover: '#FBBF24',
        background: '#212121',
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
