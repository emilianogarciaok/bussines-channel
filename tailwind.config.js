

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Roboto:["Roboto Slab", "serif"],
        'avenirlight': ['Avenir Light', 'sans-serif'],
      },
      container: {
        padding: {
          DEFAULT: "0",
        },
      },
      colors: {
        primary: {
          50: "#FDECEC",
          100: "#FABDBD",
          200: "#F68E8E",
          300: "#F2605F",
          400: "#EE3130",
          500: "#D91312",
          600: "#AA0F0E",
          700: "#7A0B0A",
          800: "#4B0706",
          900: "#1C0202",
        },
        secondary: {
          50: "#F6F6F6",
          100: "#CCCCCC",
          200: "#B3B3B3",
          300: "#999999",
          400: "#808080",
          500: "#666666",
          600: "#4D4D4D",
          700: " #323232",
          800: "#1A1A1A",
        },
      },
    },
  },
  plugins: [],
};
