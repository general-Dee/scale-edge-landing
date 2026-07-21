import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'se-orange': '#FF5C35',
        // Light, professional B2B palette. Names kept for minimal diff even
        // though these are no longer "dark" — se-bg is the page background,
        // se-surface is card/section background, se-border is hairline borders,
        // se-ink is primary text, se-muted-text is secondary text.
        'se-bg': '#FAFAF9',
        'se-surface': '#FFFFFF',
        'se-border': '#E5E2DD',
        'se-ink': '#1C1917',
        'se-muted-text': '#57534E',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [],
}

export default config
