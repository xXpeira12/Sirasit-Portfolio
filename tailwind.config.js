/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryTitle:"#ED7D31",
        primaryContent:"#F6F1EE",
        primarySubcontent:"#252B48",
        primaryBase:"#B4B4B3",
        primaryAccent:"#F6F1EE",
        primaryBg:"#001524"
      }
    },
  },
  plugins: [],
}

