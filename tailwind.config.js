/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        redCustom: "var(--color-red)",
        grayCustom: "var(--color-gray)",
        whiteCustom: "var(--color-white)",
        greenCustom: "var(--color-green)",
        lightCustom: "var(--color-light)",
      },
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
      },
    },
  },
  plugins: [],
};
