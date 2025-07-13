module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Lexend", "ui-sans-serif", "system-ui"],
      },
      screens: {
        xs: '1440px',
      },
      colors: {
        primary: "#3C4248",
        match: "#008B6E",
        tagBg: "#F2F3F4",
        tagBorder: "#C3C8CD",
        tagNewBg: "#FFE69D",
        tagNewText: "#493B13",
      },
      fontSize: {
        xs: "11px",
        sm: "14px",
        base: "16px",
        lg: "18px",
      },
      lineHeight: {
        tight: "16px",
        normal: "20px",
        relaxed: "24px",
      },
      borderRadius: {
        tag: "22px",
        card: "24px",
      },
    },
  },
  plugins: [],
}
