/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#FAF9F7',
        card: '#FFFFFF',
        ink: '#1C1C1A',
        graphite: '#6B6A66',
        hairline: '#E6E4DF',
        gold: {
          DEFAULT: '#C9A961',
          soft: '#E4D5AD',
          deep: '#9C7F42',
        },
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(8px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out forwards',
      },
      boxShadow: {
        soft: '0 8px 30px rgba(28,28,26,0.06)',
        card: '0 2px 20px rgba(28,28,26,0.05)',
      },
    },
  },
  plugins: [],
}
