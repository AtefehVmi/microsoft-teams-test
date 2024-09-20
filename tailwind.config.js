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
        NeutralStroke1Rest: "#D1D1D1",
      },
      borderRadius: {
        small: "4px",
      },
      fontSize: {
        tiny: "10px",
        tinyx2: "12px",
        small: "14px",
        medium: "18px",
        big: "32px",
      },
      lineHeight: {
        small: "16px",
        normal: "20px",
        big: "24px",
        extraBig: "40px",
      },
      borderWidth: {
        1: "1px",
      },
      spacing: {
        custom: "20px",
      },
      boxShadow: {
        custom:
          "0px 2px 4px 0px rgba(0, 0, 0, 0.14), 0px 0px 2px 0px rgba(0, 0, 0, 0.12)",
      },
    },
  },
  plugins: [],
};
