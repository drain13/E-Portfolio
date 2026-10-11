/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Instrument Sans"', "system-ui", "sans-serif"],
      },
      colors: {
        paper: "#FDF6F4",
        ink: "#2B1012",
        crimson: { DEFAULT: "#A4161A", light: "#C8282D" },
        coral: "#FF7B72",
        night: "#1C0B0D",
      },
      keyframes: {
        rise: { "0%": { opacity: 0, transform: "translateY(14px)" }, "100%": { opacity: 1, transform: "none" } },
        pop: { "0%": { opacity: 0, transform: "scale(.96)" }, "100%": { opacity: 1, transform: "none" } },
      },
      animation: { rise: "rise .7s ease-out both", pop: "pop .25s ease-out both" },
    },
  },
  plugins: [],
};
