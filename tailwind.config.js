module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'h1': ['Circular Std',], 
      'text': ['Gangster Grotesk'],

    },
    extend: {
      fontSize: {
        '7xl': ['4.35rem', '64px']
      },
      colors: {
        indigo: {
          450: '#230B34',
        },
        pink: {
          450: '#918AED',
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
