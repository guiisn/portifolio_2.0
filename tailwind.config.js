module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      primary: '#13131F',
      secondary: '#8257E6',
      tertiary: '#808080',
      texts: '#F9F9F9',
      modal: '#2F2F56'
    },
    fontFamily: {
      'display': ['Poppins'],
      'secondary': ['Montserrat']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
