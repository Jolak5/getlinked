/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        btn: "linear-gradient(to right top, #fe34b9, #ee28c9, #d826db, #bb2eed, #903aff);",
        color1: "#D434FE"
      }
    },
    fontFamily: {
      sans: ["Inclusive Sans", "sans-serif"],
      mont: ["Montserrat Alternates", "sans-serif"]
    }
  },
  plugins: []
};
