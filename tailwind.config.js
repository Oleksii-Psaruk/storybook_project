module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      spacing: {
        '128': '32rem'
      }
    },
  },
  variants: {
    extend: {
    },
  },
  plugins: [
  ],
}