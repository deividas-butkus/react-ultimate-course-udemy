/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pizza: "#123456",
      },
      fontSize: {
        huge: ["10rem", { lineHeight: "1" }],
      },
      height: {
        screen: "100dvh",
      },
    },
    fontFamily: {
      sans: "Roboto Mono, monospace",
    },
  },
  plugins: [],
};
