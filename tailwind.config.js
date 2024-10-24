/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{scss,html,js}"],
  theme: {
    extend: {
      colors: {
        'primary':  'rgb(21, 21, 23)',
        'light':    'rgb(240, 240, 240)',
        'lighter':  'rgb(220, 220, 220)',
        'dark':     'rgb(200, 200, 200)'
      }
    }
  },
  plugins: [],
}

