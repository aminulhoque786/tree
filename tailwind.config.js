/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
   maxWidth:{
    container:"1040px"
   },
   backgroundColor:{
    hbg: "#282828"
   },
   backgroundImage: {
    'hero-pattern': "url('./assets/banner.png')",
   
  }
  

    },
    backgroundImage: {
      'her-pattern': "url('./assets/Services1.png')",
    },
    fontFamily: {
      'pops': ['Poppins', 'sans-serif',],
    }
  },
  plugins: [],
}

