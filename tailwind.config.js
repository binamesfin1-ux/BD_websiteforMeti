/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          950: '#140812',
          900: '#1F0E1C',
          800: '#2D1227',
          700: '#3F1A37',
        },
        gold: {
          100: '#FFF7DE',
          200: '#FCEBB6',
          300: '#F6D678',
          400: '#E5C158',
          500: '#D4AF37',
          600: '#B8860B',
        },
        rose: {
          100: '#FCEEED',
          200: '#F9DCDA',
          300: '#F3BDB7',
          400: '#E8A598',
          500: '#DD8E80',
        },
        ivory: {
          50: '#FDFBF7',
          100: '#F7F2EA',
          200: '#EFE6D8',
          300: '#E2D3C4',
        },
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        handwriting: ['Caveat', '"Great Vibes"', 'cursive'],
      },
      boxShadow: {
        'glow-gold': '0 0 25px rgba(229, 193, 88, 0.4)',
        'glow-rose': '0 0 25px rgba(228, 161, 152, 0.4)',
      },
    },
  },
  plugins: [],
}

