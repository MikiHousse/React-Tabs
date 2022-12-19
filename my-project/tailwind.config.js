/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      padding: '40px',
      center: true,
    },
    extend: {
      colors: {
        lightPurple: '#F0998D',
        redText: '#FF8B7A',
        redBorder: '#FFD1CA',
        redBg: '#FFF1EF',
        orangeText: '#FFAC2F',
        orangeBorder: '#FFCA7A',
        orangeBg: '#FFF8EE',
        greenText: '#3ACD77',
        greenBorder: '#98FAC0',
        greenBg: '#ECFFF4',
        blueText: '#2BC0CA',
        blueBorder: '#6EE1E9',
        blueBg: '#F1FEFF',
        violetText: '#C140FD',
        violetBorder: '#EBBDFF',
        violetBg: '#FCF5FF',
        lightXlPurple: '#FFFBFA',
      },
    },
  },
  plugins: [],
}
