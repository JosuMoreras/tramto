import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#0C1A2E',
          secondary: '#1E3A5F',
          light: '#2A4E7F',
        },
        gold: {
          DEFAULT: '#F59E0B',
          light: '#FCD34D',
          dark: '#D97706',
        },
        muted: '#94A3B8',
        success: '#10B981',
        danger: '#EF4444',
        warning: '#F59E0B',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      letterSpacing: {
        logo: '-0.02em',
      },
      animation: {
        ticker: 'ticker 40s linear infinite',
        'float-up': 'floatUp 0.6s ease-out forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floatUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}

export default config
