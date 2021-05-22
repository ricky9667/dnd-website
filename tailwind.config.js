const color = require('tailwindcss/colors')

module.exports = {
  purge: {
    'mode': 'layers',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        emerald: color.emerald,
        gray: color.trueGray
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
