/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}", //this one added 
      ],
  theme: {
    extend: {
      screens: {
        'xs': '375px', // Define your own "extra small" breakpoint
      },
    },
    fontFamily: {
        signature: ["Great Vibes"], //this one added from great vibes rule
    }
  },
  plugins: [],
}
