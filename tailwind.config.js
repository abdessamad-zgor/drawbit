/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "index.html",
    "./src/**/*.{html,ts,js,tsx,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        'magneta': '#A343BA',
        'darkblue': '#162E5A',
        'skin': '##DAB4B6'
      }
    },
  },
  plugins: [],
}

