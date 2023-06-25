/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#003049',
          50: '#eefaff',
          100: '#dcf5ff',
          200: '#b2edff',
          300: '#6de1ff',
          400: '#20d3ff',
          500: '#00beff',
          600: '#0099df',
          700: '#0079b4',
          800: '#006795',
          900: '#00547a',
          950: '#003049'
        }
      }
    }
  },
  plugins: [require('@tailwindcss/aspect-ratio'), require('@tailwindcss/forms')]
}
