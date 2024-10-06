/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-dark': '#1D3A4D',
        'bg-light': '#F2DFCE',
        '01': '#FBF2E5',
        '02': '#C22222',
        '03': '#F5F5F5',
        '04': '#212121',
        '05': '#D9B834',
        '06': '#1E3A5F',
        '07': '#4C837A',
        '08': '#A0A0A0',
        '09': '#294557',
      }
    },
  },
  plugins: [],
}
