/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    minHeight: {
      '1/2': '50%',
    },
    fontFamily: {
      layfair: ['layfair']
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

