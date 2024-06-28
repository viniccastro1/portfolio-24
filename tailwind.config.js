/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    spacing: {
      1: "8px",
      2: "16px",
      3: "24px",
      4: "32px",
      5: "40px",
      6: "48px",
      7: "56px",
      8: "64px",
      9: "72px",
      10: "80px",
      11: "88px",
      12: "96px",
      30: "240px",
      45: '360px',
      69: "552px",
      70: "560px",
      96: "768px",
    },
    extend: {
      colors: {
        primarylighter: "#A98CFF",
        primarylight: "#794DFF",
        primary: "#613DCC",
        primarydark: "#492E9A",
        secondary: "#F3E457",
        tertiary: "#FDB343",
      },
    },
  },
  plugins: [],
};
