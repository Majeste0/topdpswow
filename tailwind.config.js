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
      keyframes: {
        moveShadow: {
          "50%": { shadow: "0px 0px 20px #fff" },
        },
      },
      animation: {
        moveShadow: "moveShadow 5s infinite",
      },
      boxShadow: {
        cool: "200px 200px 600px 300px inset #DDCA1D ",
      },
      colors: {
        blanc: "#FFFEF9",
        marron: "#2D2A2A",
        doré: "#DDCA1D",
        druide: "#FF7C0A",
        paladin: "#F48CBA",
        prêtre: "#FFFFFF",
        chaman: "#0070DD",
        evocateur: "#33937F",
        moine: "#00FF98",
      },
    },
  },
  variants: {
    extend: {
      animation: ["hover", "group-hover"],
    },
  },
  plugins: [],
};
