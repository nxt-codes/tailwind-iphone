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
      },
      height: {
        '192': '48rem',
      },
      inset: {
        '30': '7.5rem'
      },
      zIndex: {
        '90': '90',
        '100': '100',
        '110': '110',
        '120': '120'
      }
    },
  },
  plugins: [],
}

