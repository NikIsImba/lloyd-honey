/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        'brand-brown': '#594242',
        'brand-gray': '#EBD1AF'
      },
      fontFamily: {
        custom: ['Yeseva-One', 'sans-serif']
      }
    },
    plugins: []
  }
};
