/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        pacifico: ["Pacifico", "cursive"],
        Anta: ["Anta", "sans-serif"],
        alumni: ["Alumni Sans Pinstripe", "sans-serif"],
        Poppins: ["Poppins", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
        Tangerine: ["Tangerine", "cursive"]
      },
      keyframes: {
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 1s ease forwards",
      },
      extend: {
        keyframes: {
          scaleIn: {
            "0%": { opacity: "0", transform: "scale(.95) translateY(-10px)" },
            "100%": { opacity: "1", transform: "scale(1) translateY(0)" }
          }
        },
        animation: {
          scaleIn: "scaleIn .25s ease forwards"
        }
      },
      

    },
  },
  plugins: [],
}