/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  purge: ['./src/**/*.svelte', './src/**/*.html'],

  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
}

