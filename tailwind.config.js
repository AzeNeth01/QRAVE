module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        Sansita: 'Sansita',
        Poppins: 'Poppins',
        Nunito: 'Nunito'
      },
      fontSize:{
        normal: '21px',
        title: ['10rem', {letterSpacing: '0.2rem'}],
        large: '2.5rem',
        extraLarge: '3.5rem'

      },
      width:{
        50: '2200px',
        lg: '500px' 
      },
      letterSpacing:{
        tiny:{letterSpacing: '0.75rem'}
      },
      colors:{
        mainColor: '#6C5AD8',
        accent: '#FD003D',
        violet: '#6C5AD8'
      }

    },
  },
  plugins: [],

}