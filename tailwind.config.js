/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily : {
        boa : ["Noto Sans JP"],
        boa2 : ["Dosis"]

      },
      boxShadow : {
        pers :  "61px 21px 87px 13px rgba(0,0,0,0.72)"
      }
    },
  },
  plugins: [],
}