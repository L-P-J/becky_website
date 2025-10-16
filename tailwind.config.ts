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
        primary: '#0d2c7d',
        ink: '#101939',
        'ink-muted': '#1f2433',
        'ink-soft': '#3d445a',
        'ink-light': '#647098',
        'surface-muted': '#f5f7fb',
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
