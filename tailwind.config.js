/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#f0f4f8",
        blue1: "#085FDD",
        blue2: "#02013C",
        blue3: "#00374B",
        red1: "#ff5f5f",
        green: "#008000",
        red3: "#AA4E63",
      },
      animation: {
        "pulse-fast": "pulse 0.5s  infinite",
      },
    },
  },
  plugins: [],
};
