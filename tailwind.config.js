/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],  theme: {
    extend: {
      backgroundColor: {
        royalblue: '#4169E1',
      },
      backgroundImage: {
        'radial-gradient-royalblue': 'radial-gradient(circle, #93a8e7 0%, #4169E1 100%)',
      },
      gridTemplateColumns: {
        'lucky-six': 'repeat(6, 1fr)'
      }
    },
  },
  plugins: [],
}

