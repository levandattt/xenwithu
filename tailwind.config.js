/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      'light-primary-bg': '#ECF0F3',
      'light-primary-bg-alpha': 'rgba(236, 240, 243, 0.66)',
      'light-primary-bg': '#ECF0F3',
      'light-primary-text': '#3C3E41',
      'light-line-bg': '#dce1e4',
    },
    screens: {
      'sm': '576px',
      // => @media (min-width: 576px) { ... }

      'md': '960px',
      // => @media (min-width: 960px) { ... }

      'lg': '1440px',
      // => @media (min-width: 1440px) { ... }
    },
    extend: {
      boxShadow: {
        'primary': '10px 10px 25px #d7dadd, -10px -10px 25px #ffffff',
        'secondary': '5px 5px 15px #d1d9e6, -5px -5px 15px #fff',
      },
    },
  },
  plugins: [
    require('@tailwindcss/custom-forms')
  ],
}