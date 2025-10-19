import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Noto Sans TC',
          'PingFang TC',
          'Microsoft JhengHei',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        primary: '#f28b0c',
        accent: '#fff4e2',
        ink: '#2f2615',
        'ink-muted': '#433824',
        'ink-soft': '#615034',
        'ink-light': '#8d7c5c',
        'surface-muted': '#94764cff',
        'surface-card': '#ffffff',
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
      },
      boxShadow: {
        soft: '0 12px 32px rgba(31, 36, 51, 0.08)',
        'soft-lg': '0 16px 40px rgba(31, 36, 51, 0.08)',
        'soft-xl': '0 16px 40px rgba(32, 42, 66, 0.12)',
      },
    },
  },
  plugins: [],
} satisfies Config
