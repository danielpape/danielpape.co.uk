/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        main: {
          50: "#FFF8E6",
          100: "#FFEFC2",
          200: "#FFD480",
          300: "#FFB84D",
          400: "#FFA31A",
          500: "#FF9D00",
          600: "#E68C00",
          700: "#B36B00",
          800: "#804C00",
          900: "#4D2C00",
        },
      },
    },
  },
  plugins: [],
};
