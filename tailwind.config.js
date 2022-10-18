/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette');

module.exports = {
  content: ['./src/**/*.{js,jsx,tsx,ts,html}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        black: colors.black,
        white: colors.white,
        primary: '#f0fdfa',
        secondary: '#008575',
        bg: "#efefef",
        code: {
          highlight: 'rgb(125 211 252 / 0.1)'
        }
      }
    }
  },
  plugins: []
};
// #008575
