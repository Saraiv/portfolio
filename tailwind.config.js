/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'top-bar-black': '#1F1F1F',
        'background-black': '#4B4B4B',
        'close-button-red': '#EC4545',
        'terminal-tab': '#3D3D3D'
      }
    },
  },
  plugins: [],
}