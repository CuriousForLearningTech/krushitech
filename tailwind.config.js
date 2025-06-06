/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    colors: {
      // Base Colors
      white: '#ffffff',
      black: '#000000',
      primary: {
        DEFAULT: '#86bb39', // Used for primary actions
        light: '#a6d95c',
        dark: '#5d8e2b',
      },
      secondary: {
        DEFAULT: '#38b3e2', // Accent, links, etc.
        light: '#6fcbf3',
        dark: '#288db3',
      },
      warning: {
        DEFAULT: '#eeab3d',
        light: '#f3c05f',
        dark: '#c78a2c',
      },
      // Theme Colors
      background: {
        light: '#ffffff',
        dark: '#000000',
      },
      text: {
        light: '#000000',
        dark: '#ffffff',
      },
      card: {
        light: '#f8f9fa',
        dark: '#1e1e1e',
      },
    },
    extend: {},
  },
  plugins: [],
};
