module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./HOC/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens:{
      'xs':{'max':'575.98px'},
      sm:{'min':'576px','max':'767.98px'},
      md:{'min':'768px','max':'991.98px'},
      lg:{'min':'992px','max':'1199.98px'},
      xl:{'min':'1200px','max':'1399.98px'},
      'xxl':{'min':'1400px'},
    },
    extend: {
      colors:{
        
      }
    },
  },
  plugins: [],
}
