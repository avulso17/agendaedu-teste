const { COLORS } = require('./src/styles/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/index.tsx",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        ...COLORS
      }
    },
  },
  plugins: [],
}