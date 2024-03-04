/** @type {import('tailwind css').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
        colors:{
          primary:"#292663",
          secondary:"#2482C5",
        },},
  },
  plugins: [
]
}

