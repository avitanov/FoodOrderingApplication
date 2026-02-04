/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // screens: {
      //   'xs': '240px',
      // },
      colors: {
        primary: "#F84026",
        secondary: "#4BA3C3",
        third: "#175676",
        fourth: "#CCE6F4",
        fifth: "#F4DBD8",
        sixth: "#4AA05A",
      },
    },
  },
  plugins: [],
};

