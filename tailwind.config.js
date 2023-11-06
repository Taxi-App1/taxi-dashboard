/** @type {import('tailwind css').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
        colors:{
      primary:"#ffb200",
      secondary:"#ffd403"
        },},
  },
  plugins: [
    require('flowbite/plugin')
]
}

