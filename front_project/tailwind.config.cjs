/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
    textColor: {
      'primary': 'var(--text-primary)',
      'light': 'var(--color-light)',
      'dark': 'var(--color-dark)',
    },
    backgroundColor: {
      'primary': 'var(--bg-primary)',
      'secondary': 'var(--bg-secondary)',
      'tertiary': 'var(--bg-tertiary)',
      'light': 'var(--color-light)',
      'dark': 'var(--color-dark)',
    },
  },
  plugins: [],
}
