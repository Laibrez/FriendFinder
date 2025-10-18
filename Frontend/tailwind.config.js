/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./public/index.html",
      "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
      extend: {
        colors: {
          primary: "#3b82f6",  // blue-500
          secondary: "#06b6d4", // cyan-500
        },
        fontFamily: {
          sans: ["Inter", "sans-serif"],
        },
      },
    },
    plugins: [],
  };

  