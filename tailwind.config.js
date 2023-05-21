/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*{html,js}"],
  theme: {
    extend: {
      colors: {
        'primary': '#03045e',
        'secondary': '#0077b6',
        'third': '#00b4d8',
        'fourth': '#90e0ef',
        'fifth': '#caf0f8',
      },
      fontFamily: {
        'outfit': ['Outfit', 'sans-serif'],
        'name': ['Permanent Marker', 'cursive'],
      }
    },
  },
  plugins: [],
}

