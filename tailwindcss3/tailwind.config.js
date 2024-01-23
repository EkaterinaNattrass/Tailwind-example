/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/index.html', './src/**/*.{vue, js, ts, jsx, tsx}'],
  theme: {
    fontFamily: {
      'display': ['Lemon', 'serif']
    }
  },
  plugins: [
    require('@tailwindcss/line-clamp')
  ],
}

