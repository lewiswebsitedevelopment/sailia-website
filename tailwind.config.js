module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
          'montserrat': ['Montserrat']
      },
      colors: {
        custom: {
          50: '#fdf8f6',
          100: '#f2e8e5',
          200: '#eaddd7',
          300: '#e0cec7',
          400: '#d2bab0',
          500: '#bfa094',
          600: '#a18072',
          // 700 is the background color
          700: '#f5f7f7',
          // 800 is accent - color 5
          800: '#20B5BA',
          // 900 is text color
          900: '#3F3F3F',
        },
      }
    },
  },
  plugins: [],
}
