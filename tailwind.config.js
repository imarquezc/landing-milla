module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        'rubik': ['Rubik', 'sans-serif']
      },
      textColor: theme => theme('colors'),
      textColor: {
        'principal-green': '#00A88F',
        'light-green': '#28CC9E',
        'dark-blue': '#1F3553',
        'light-gray': '#C4C4C4',
        'mid-gray': '#A8ACB2',
        'dark-gray': '#646C76'
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'principal-green': '#00A88F',
        'light-green': '#28CC9E',
        'dark-blue': '#1F3553',
        'light-gray': '#C4C4C4',
        'mid-gray': '#A8ACB2',
        'dark-gray': '#646C76'
      }),
      borderColor: theme => ({
        ...theme('colors'),
        default: theme('colors.gray.300', 'currentColor'),
        'principal-green': '#00A88F',
        'light-green': '#28CC9E',
        'dark-blue': '#1F3553',
        'light-gray': '#C4C4C4',
        'mid-gray': '#A8ACB2',
        'dark-gray': '#646C76'
      })
    },
  },
  variants: {},
  plugins: [],
}
