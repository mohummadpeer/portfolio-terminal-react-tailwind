/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'vert': 'rgba(73, 248, 48, 0.98)',
      },
    },
  },
  plugins: [],
};
