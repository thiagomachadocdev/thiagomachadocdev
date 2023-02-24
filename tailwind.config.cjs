/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Cascadia Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        background: '#040015',
        'gray-100': '#949494',
        cobogo: '#00B9E9',
        'green-100': '#05FF00',
        'green-200': '#086900',
        'red-100': '#FF0000',
        'red-200': '#690000',
      },
      backgroundImage: {
        linear: 'linear-gradient(90deg, #2549C9 0%, #6208A9 100%);',
      },
    },
  },
  plugins: [],
}
