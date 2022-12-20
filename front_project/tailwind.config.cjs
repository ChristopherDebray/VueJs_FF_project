/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', "./src/**/*.{html,vue,js,ts,jsx,tsx}"],
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
