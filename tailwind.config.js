/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    fontFamily: {
      chakra: ['"Chakra Petch"'],
      poppins: ["Poppins"],
      goldman: ["Goldman"],
    },
    extend: {
      colors: {
        blanc: "#FFFEF9",
        marron: "#2D2A2A",
        doré: "#DDCA1D",
      },
    },
  },
  plugins: [],
};
