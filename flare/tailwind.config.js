/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pry: "#E62058",
        blackBG: "#242425",
        black: "#01070A",
        grey: "#9B9B9B",
      },
      backgroundImage: {
        "custom-gradient":
          "linear-gradient(180deg, rgb(255, 255, 255) 0%, rgb(255, 218, 185) 50%, rgb(255, 182, 193) 100%)",
      },
      keyframes: {
        fadeInUp: {
          "0%": { opacity: 0, transform: "translateY(20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
      animation: {
        fadeInUp: "fadeInUp 0.5s ease-out forwards",
      },
    },
  },
  plugins: [],
};
