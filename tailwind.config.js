/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      ss: "320px",
      xs: "376px",
      sm: "426px",
      md: "769px",
      lg: "1025px",
    },
    extend: {
      colors: {
        white: "#fff",
        blue: "#25292E",
        gray: "#f8f9fa",
        darkgray: "#d1d5da",
        lightgray: "#bcc3cd",
      },
    },
  },
  plugins: [],
};
