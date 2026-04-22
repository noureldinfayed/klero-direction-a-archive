import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
    './hooks/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        paper: '#f4efe6',
        'paper-2': '#ebe4d5',
        cream: '#faf6ee',
        ink: '#1a1612',
        'ink-soft': '#3a332b',
        'ink-muted': '#6b6056',
        rule: '#c9bfae',
        accent: '#7a1f1f',
        gold: '#a8884a',
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'ui-monospace', 'monospace'],
      },
      screens: {
        kl: '901px',
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
        reveal: 'cubic-bezier(.2,.7,.3,1)',
      },
    },
  },
  plugins: [],
}

export default config
