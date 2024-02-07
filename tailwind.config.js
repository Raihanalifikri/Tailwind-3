/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        'Poppins' : ['Poppins'],
        'Shadows-Into-Light' : ['Shadows Into Light'],
        'Comic-Neue' : ['Comic Neue']
      },
      backgroundImage: {
        'bg3': "url('/image/bg3.jpeg')", 
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
  darkMode: ['class'],
}

