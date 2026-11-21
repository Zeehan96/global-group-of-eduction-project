/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
      },
      colors: {
        brand: {
          navy:   '#102771',
          dark:   '#0b1a37',
          gold:   '#fbaf1b',
          light:  '#f8fafc',
        },
      },
    },
  },
  plugins: [],
};
