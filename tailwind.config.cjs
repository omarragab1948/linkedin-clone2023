/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      backgroundColor: {
        "main-dark-bg": "#1d2226",
        "input-bg": "#eef3f8",
        "home-bg": "#F3F2EF",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [require("daisyui")],
};
