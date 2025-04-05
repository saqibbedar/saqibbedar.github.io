/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        media2: "567px",
        media1: "767px",
        mediaXl: "1669px",
        mediaXXl: "1769px",
      }
    },
  },
  plugins: [],
};
