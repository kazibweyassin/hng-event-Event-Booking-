/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'background-color': '#0E464F',
        'default-font': 'B3B3B3',
        'ticket-color': '0E464F',
        'button-color': '#24A0B5',
        'custom-gray': '#07373F',

        fontFamily: {
          'road-rage': ['Road Rage', 'sans-serif'],
        },

    },
  },
  },
  plugins: [],
}