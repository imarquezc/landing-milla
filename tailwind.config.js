const projectColors = {
  'principal-green': '#00A88F',
  'light-green': '#DDF4F3',
  'dark-blue': '#1F3553',
  'light-gray': '#C4C4C4',
  'mid-gray': '#A8ACB2',
  'dark-gray': '#646C76'
}

module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      textColor: theme => theme('colors'),
      textColor: {
        ...projectColors
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        ...projectColors
      }),
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('colors.gray.300', 'currentColor'),
        ...projectColors
      })
    },
  },
  variants: {},
  plugins: [],
}
