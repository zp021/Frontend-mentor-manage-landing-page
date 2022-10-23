/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      backgroundImage: {
        'backGround': "url('/images/bg-tablet-pattern.svg')",
        'simplifyMobile': "url('/images/bg-simplify-section-mobile.svg')",
        'simplifyDesktop': "url('/images/bg-simplify-section-desktop.svg')",
      },
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        varyLightGray: 'hsl(0, 0%, 98%)',
      },
      fontFamily: {
        'vietnam-pro': ['"Be Vietnam Pro"']
      }
    },
  },
  plugins: [],
}
