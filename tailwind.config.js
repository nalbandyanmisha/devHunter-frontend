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
      fontSize: {
        xs: '9px',      // metadata
        sm: '11px',     // tags
        base: '14px',   // labels, placeholders
        md: '16px',     // buttons
        lg: '18px',     // section headings, card headers
        xl: '40px',     // hero heading
      },
      lineHeight: {
        xs: '12px',
        sm: '16px',
        base: '20px',
        md: '24px',
        lg: '48px',
      },
      fontWeight: {
        thin: '100',
        light: '300',
        regular: '350',
        medium: '500',
        bold: '700',
      },
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        gray: {
          100: '#F2F3F4',  // tag background
          300: '#C3C8CD',  // border
          600: '#6D7883',  // placeholder, meta
          700: '#3C4248',  // default text
        },
        yellow: {
          300: '#FFE69D',  // match + isNew bg
        },
        green: {
          100: '#E8FAF6'
          600: '#008B6E',  // match text + border
        },
        purple: {
          600: '#614EFA',  // button bg
        }
      },
      screens: {
        xs: '1440px',
      },
    },
  },
  plugins: [],
}
