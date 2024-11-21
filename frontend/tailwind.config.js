/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.5rem",
        screens: {
          lg: "1200px", // Max width of 1200px for large screens
          xl: "1200px", // Max width of 1200px for extra large screens
        },
      },
    },
  },
  plugins: [],
};
