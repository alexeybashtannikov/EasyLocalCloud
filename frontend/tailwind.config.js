/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#7cfffb',
          DEFAULT: '#7cfffb',
          dark: '#042229',
        },
        background: {
          light: '#dfdfdf',
          DEFAULT: '#dfdfdf',
          dark: '#222222',
        },
        border: {
          light: '#aaaaaa',
          DEFAULT: '#aaaaaa',
          dark: '#393939',
        },
      }
    },
  },
  plugins: [],
}
