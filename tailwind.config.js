/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F5F2EB',
          300: '#EBE5DA',
          400: '#DDD5C6',
        },
        weser: {
          50: '#F0F9FF',
          100: '#E0F2FE',
          200: '#BAE6FD',
          400: '#38BDF8',
          500: '#009EE0',
          600: '#0284C7',
          700: '#173D6B',
          800: '#102A4C',
          900: '#0B1E36',
          950: '#071424',
        },
        gold: {
          50: '#FDFBF7',
          100: '#FBF5E8',
          200: '#F4E7CC',
          500: '#C5A265',
          600: '#B89354',
          700: '#94723A',
        },
        neutral: {
          850: '#161F2E',
          950: '#0A0F18',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Satoshi"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Satoshi"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        clash: ['"Clash Display"', '"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px rgba(11, 30, 54, 0.03), 0 4px 12px rgba(11, 30, 54, 0.02)',
        'elevated': '0 4px 20px -2px rgba(11, 30, 54, 0.06), 0 2px 6px -1px rgba(11, 30, 54, 0.02)',
        'premium': '0 20px 40px -15px rgba(11, 30, 54, 0.08)',
        'modal': '0 25px 50px -12px rgba(11, 30, 54, 0.25)',
      }
    },
  },
  plugins: [],
}
