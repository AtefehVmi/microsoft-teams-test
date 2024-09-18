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
        neutralStroke: "#E0E0E0",
        NeutralForeground2Rest: "#424242",
        NeutralForeground4Rest: "#242424",
      },
      borderRadius: {
        small: "4px",
      },
      fontSize: {
        tiny: "10px",
        small: "14px",
        medium: "18px",
      },
      lineHeight: {
        normal: "20px",
        big: "24px",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        custom: "20px",
      },
    },
  },
  plugins: [],
};
