/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
      'body': 'rgba(11, 17, 33, 1)', }
      ,
     fontFamily:{
      Noto: "'Noto', monos",
      Sixtyfour:"'Sixtyfour', sans-serif"
  },
  plugins: [],
}
}
}