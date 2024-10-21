module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: "#fff8e6",
          100: "#ffecb3",
          200: "#ffd680",
          300: "#ffca4d",
          400: "#ffc41a",
          500: "#e6ad00",
          600: "#b38600",
          700: "#805f00",
          800: "#4d3800",
          900: "#1a1100",
        },
      },
    },
  },
  plugins: [],
};
