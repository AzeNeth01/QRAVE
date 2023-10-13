//Module Imports
import React from 'react';

//Named Imports
import Header from '../Header/header';
import Footer from '../Footer/footer';
<<<<<<< HEAD
import Hero from '../../pages/hero/hero';
import SolutionToClient from '../../pages/solutionToClient/solutionToClient';
import Goals from '../../pages/goals/Goals';
=======
import Hero from '../../pages/hero/Hero';
import SolutionToClient from '../../pages/SolutionToClient/solutionToClient';
import Goals from '../../pages/goals/Goals';
import WhoWeAre from '../../pages/hero/whoWeAre';
>>>>>>> herosectionchanges

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
          <div id = 'whoweare'> <WhoWeAre/></div>
          
          {/* Temporary!! */}
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
          {/* Temporary!! */}
          <div id = 'solution' style={{marginTop: '100px'}}> <SolutionToClient/> </div>
          <div> <Goals/> </div> 
        
          
        <Footer/>
        </React.Fragment>
  
  );
}



