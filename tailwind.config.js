/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {

      gradientColorStops: {
        'primary': 'rgba(60, 43, 104, 0.55)',
        'secondary': 'rgba(251, 77, 77, 0.75)',
      },
    },
  },
  plugins: [],
}

