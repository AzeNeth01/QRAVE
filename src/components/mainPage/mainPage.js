//Module Imports

import React from 'react';

//Named Imports
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Hero from '../../pages/Hero/hero';
import SolutionToClient from '../../pages/SolutionToClient/solutionToClient';
import Goals from '../../pages/Goals/goals';


//Style Imports
import '../mainPage/styles.css'
/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Main Page
 * @returns App
 */

  export default function MainPage() {

  return (
      <React.Fragment>
       
         <Header/>

          <div id = 'hero'> <Hero/> </div>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div id = 'solution' style={{marginTop: '100px'}}> <SolutionToClient/> </div>
          <div> <Goals/> </div> 
        
          
        <Footer/>
        </React.Fragment>
  
  );
}



