/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
          colors: {
            primary: '#017235'
          },
          fontFamily: {
            sans: ['Inter var'],
          },
        },
    },
    plugins: [],
};
