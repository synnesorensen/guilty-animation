/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      fontSize: {
        "10xl": "160px",
        "11xl": "185px",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1.25rem",
        xl: "11rem",
        lg: "9rem",
      },
    },
    fontFamily: {
      sans: ["neue-haas-grotesk-display", "sans-serif"],
    },
    colors: {
      primary: "",
      secondary: "",
      magenta: "#cc00ff",
      green: "#a9e217",
      transparent: "transparent",
      current: "currentColor",
      black: "#000",
      white: "#fff",
      grey: {
        light: "#f1f1f1",
        DEFAULT: "f2f2f2",
        dark: "#999999",
        bg1: "#141414",
        bg2: "#242424",
      },
    },
  },
  plugins: [],
};
