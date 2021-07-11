const color = require('tailwindcss/colors')

module.exports = {
  purge: {
    'mode': 'layers',
    content: ['./public/**/*.html', './src/**/*.vue']
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing: {
        '84': '21rem',
        '96': '24rem',
        '108': '27rem',
        '120': '30rem'
      }
    },
    minHeight: {
      '0': '0',
      '1/4': '25%',
      '1/2': '50%',
      '3/4': '75%',
      'full': '100%',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
