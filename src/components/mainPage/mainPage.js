//Module Imports
import { Routes, 
        BrowserRouter as Router, 
        Route, 
        BrowserRouter } from 'react-router-dom';
import React from 'react';

//Named Imports
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Hero from '../../pages/Hero/hero';
import SolutionToClient from '../../pages/SolutionToClient/solutionToClient';
import Goals from '../../pages/Goals/goals'
import { Navbar } from '@material-tailwind/react';

/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Main Page
 * @returns App
 */

  export default function MainPage() {

  return (
      <React.Fragment>
          <Header/>
          <div className = 'banner'></div>
        {/* <div class = 'grid grid-rows-3 gap-4'>  
          <div class ='row-span-3'>
            <Hero/>
            <hr/>
          </div>
          <div class ='row-span-3'>
            <SolutionToClient/>
            
          </div>
          <div class ='row-span-3'>
            <Goals/>
          </div> 
        </div> */}
        </React.Fragment>
  
  );
}



