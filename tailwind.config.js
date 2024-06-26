/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'protest':[ "Protest Riot", "sans-serif"],
        'DM Sans':["DM Sans", "sans-serif"]
      }
    },
  },
  plugins: [],
}

