/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        mediaXl: "1669px",
        media1: "767px",
        media2: "567px"
      }
    },
  },
  plugins: [],
};
