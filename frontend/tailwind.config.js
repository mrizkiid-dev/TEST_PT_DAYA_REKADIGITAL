/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FFFFFF',
        secondary: '#5D5FEF',
        tertiary: '#F17300',
        disable: '#98949E',
        text: '#110D17',
        border_color: '#D1D0D366'
      }
    },
  },
  plugins: [],
}

