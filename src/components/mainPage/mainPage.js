//Module Imports
import React from 'react';

//Named Imports
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Hero from '../../pages/hero_section/Hero';
import SolutionToClient from '../../pages/solutionToClient_section/SolutionToClient';
import Goals from '../../pages/goals_section/Goals';
import WhoWeAre from '../../pages/hero_section/whoWeAre';

//Style Imports
import '../mainPage/styles.css'


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Main Page
 * @returns App
 */

export default function MainPage() {

  return (

    <div className='rootContainer'>
      <React.Fragment>
        <Header />
        <div id='hero'> <Hero /> </div>
        <div id='whoweare'> <WhoWeAre /></div>
        <div id='solution' style={{ marginTop: '100px' }}> <SolutionToClient /> </div>
        <div> <Goals /> </div>
        <Footer />
      </React.Fragment>
    </div>
  );
}



