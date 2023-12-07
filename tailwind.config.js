/* @type {import('tailwindcss').Config} */
// const colors = require('tailwindcss/colors')

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#202225',
        secondary: '#202225',
      },
    },
  },
  plugins: [],
  fontFamily: {
    bevan: ['Bevan', 'serif'],
    coustard: ['Coustard', 'serif'],
  },
};
