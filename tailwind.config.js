/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      scale: {
        '10' : '.2'
      },
      strokeWidth: {
        '2': '20px'
      },
      colors: {
        "dark-purple": "#081A51",
        "light-white": "text-current",
      },
      animation: {
        "text-slide" : "text-slide 1s",
        "text-slide-1" : "text-slide-1 1s"
      },
      keyframes: {
        "text-slide": {
        '0%, 10%': { 
         transform: 'translateX(100px)',
         opacity: 1
        } ,
        '10%': {
          opacity: .5
        }
        },
       "text-slide-1": {
        '0%, 10%': {
          transform: 'translateY(-100px)',
          opacity: 1
        },
        '10%': {
          opacity: .5
        }
       }
      }
    },
  },
  plugins: [],
}

