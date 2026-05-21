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
        'se-dark': '#0D0D0D',
        'se-gray': '#1A1A1A',
        'se-muted': '#2A2A2A',
      },
      fontFamily: {
        sans: ['var(--font-plus-jakarta)', 'system-ui', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'glow': 'glow 1.5s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          '0%': { boxShadow: '0 0 0 0 rgba(255, 92, 53, 0.4)' },
          '100%': { boxShadow: '0 0 0 12px rgba(255, 92, 53, 0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
