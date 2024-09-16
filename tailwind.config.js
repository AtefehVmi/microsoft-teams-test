/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      segoe: ["Segoe UI", "sans-serif"],
    },
    extend: {
      height: {
        screen: "100dvh",
      },
      colors: {
        neutralForeground2: "#EBEBEB",
        neutralForeground4: "#707070",
        neutralBackground1: "#FFFFFF",
        transparentStroke: "#FFFFFF00",
        neutralForeground3: "#616161",
        neutralStrokeAlpha: "#0000000D",
        neutralForeground3Selected: "#5B5FC7",
      },
      borderRadius: {
        small: "4px",
      },
      fontSize: {
        tiny: "10px",
        small: "14px",
      },
      lineHeight: {
        normal: "20px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
