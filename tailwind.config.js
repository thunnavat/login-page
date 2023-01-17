/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      dropShadow: {
        'redDrop': '0 0 15px #EC2F2F',
      },
      boxShadow: {
        'innerWhite': 'inset 0 0px 2px 0 #FFFFFF'
      }
    },
  },
  plugins: [],
}
