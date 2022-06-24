/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      gray: "#d3d0cb",
      violet: {
        DEFAULT: "#2b2e44ff",
        light: "#2e3247",
      },
      green: {
        DEFAULT: "#81b29a",
        dark: "#224e4aff",
      },
      blue: {
        DEFAULT: "#038df7ff",
        dark: "#214269ff",
      },
      yellow: {
        DEFAULT: "#f2cc8f",
        dark: "#564933ff",
      },
      red: {
        DEFAULT: "#f45b69",
        dark: "#d90429",
      },
      orange: {
        DEFAULT: "#e07a5f",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Opens Sans", ...defaultTheme.fontFamily.sans],
      },
      gridTemplateAreas: {
        layout: [
          "header header header header",
          "main main main canvas",
          "main main main canvas",
          "footer footer footer footer",
        ],
      },
      gridTemplateColumns: {
        layout: "repeat(4, minmax(0, 1fr))",
      },
      gridTemplateRows: {
        layout: "50px 4fr 4fr 32px",
      },
    },
  },
  plugins: [require("@savvywombat/tailwindcss-grid-areas")],
};
