//Module Imports
import React from 'react';

//Named Imports
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Hero from '../../pages/Hero/Hero';
import SolutionToClient from '../../pages/Solution/SolutionToClient';
import Goals from '../../pages/Goals/Goals';
import WhoWeAre from '../../pages/Who/whoWeAre';

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
        <div><Header /> </div>
        <div id='home'> <Hero /> </div>
        <div id='who'> <WhoWeAre /></div>
        <div id='solution'> <SolutionToClient /> </div>
        <div> <Goals /> </div>
        <div id = 'contact'><Footer /></div>
      </React.Fragment>
    </div>
  );
}



