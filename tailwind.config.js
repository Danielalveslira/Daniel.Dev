/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}",

    '*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        'roboto-slab': ['Roboto Slab', 'serif'],
      },
      fontWeight: {
        'roboto-slab-light': 300,
        'roboto-slab-normal': 400,
        'roboto-slab-bold': 700,
      },
      colors: {
        'azulClaro': '#1a8cd8',
      },
    },
    plugins: [],
  },
};