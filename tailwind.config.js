module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],  
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#424242',
      secondary: '#3CDE87',
      tertiary: '#448BFA',
      texts: '#FFFFFF',
    },
    fontFamily: {
      'display': ['Fira Code'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
