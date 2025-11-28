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
        primary: {
          DEFAULT: '#008B8B',
          50: '#E0F7F7',
          100: '#B3EDED',
          200: '#80E0E0',
          300: '#4DD4D4',
          400: '#26CACA',
          500: '#00C0C0',
          600: '#00AAAA',
          700: '#008B8B',
          800: '#006B6B',
          900: '#004B4B',
        },
        accent: {
          DEFAULT: '#FF6B6B',
          50: '#FFF5F5',
          100: '#FFE3E3',
          200: '#FFC9C9',
          300: '#FFADAD',
          400: '#FF8C8C',
          500: '#FF6B6B',
          600: '#E55555',
          700: '#CC4444',
          800: '#B33333',
          900: '#992222',
        },
        secondary: {
          DEFAULT: '#1E3A5F',
          50: '#E8EDF4',
          100: '#C5D3E3',
          200: '#9FB5D0',
          300: '#7997BD',
          400: '#5C81AF',
          500: '#3F6BA1',
          600: '#365A8A',
          700: '#2D4970',
          800: '#1E3A5F',
          900: '#152B45',
        },
        success: '#25D366',
        danger: '#DC3545',
        warning: '#FFC107',
        info: '#17A2B8',
        border: '#E2E8F0',
        lime: {
          accent: '#CDDC39',
        },
      },
      borderRadius: {
        'sm': '0.375rem',
        'DEFAULT': '0.5rem',
        'md': '0.75rem',
        'lg': '1rem',
        'xl': '1.5rem',
        '2xl': '2rem',
        '3xl': '3rem',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 2px 15px rgba(0, 0, 0, 0.08)',
        'medium': '0 4px 20px rgba(0, 0, 0, 0.12)',
        'hard': '0 8px 30px rgba(0, 0, 0, 0.16)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-soft': 'pulseSoft 2s infinite',
        'floating': 'floating 3s ease-in-out infinite',
      },
      keyframes: {
        floating: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
