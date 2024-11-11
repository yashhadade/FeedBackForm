/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      screens: {
        'max-730': { 'max': '730px' },
        'max-620': { 'max': '620px' },
        'max-530': { 'max': '530px' },
        'max-430': { 'max': '430px' },
        'max-390': { 'max': '390px' },
      },
      fontSize: {
        'xxs': '.625rem',  // Custom small font size
      },
    },
  },
  plugins: [],
}