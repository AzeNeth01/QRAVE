module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Sansita: 'Sansita',
        Poppins: 'Poppins'
      },
      fontSize:{
        normal: '21px',
        title: ['10rem', {letterSpacing: '0.2rem'}],
        large: '2.5rem'
      },
      width:{
        50: '2200px',
        lg: '500px' 
      },
      letterSpacing:{
        tiny:{letterSpacing: '0.75rem'}
      },
      colors:{
        main: '#6C5AD8'
      }

    },
  },
  plugins: [],

}