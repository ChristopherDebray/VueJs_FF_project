/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    textColor: {
      'primary': '#404040',
    },
    backgroundColor: {
      'primary': '#e6e6e6',
      'secondary': 'white',
    },
  },
  plugins: [],
}
