module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '600px',
       },
    },
    fontFamily:{
      'sans': ['Helvetica', 'Arial', 'system-ui'],
}
    
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
