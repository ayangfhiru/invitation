/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#ff0a54',
        'secondary': '#ff5c8a',
        'third': '#ff85a1',
        'fourth': '#fbb1bd',
        'fifth': '#f7cad0',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'name': ['Permanent Marker', 'cursive'],
      }
    },
  },
  plugins: [],
}

