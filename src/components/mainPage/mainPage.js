//Module Imports
import { Routes, BrowserRouter as Router, Route, BrowserRouter } from 'react-router-dom';

//Named Imports
import Header from '../Header/header';
import Footer from '../Footer/footer';
import Hero from '../../pages/Hero/hero';
import SolutionToClient from '../../pages/SolutionToClient/solutionToClient';
import Goals from '../../pages/Goals/goals';

/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Main Page
 * @returns App
 */

  export default function MainPage() {

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path = '/' element = { <Goals/> } />
          <Route path = '/about' element = { <Hero/> } />
          <Route path = '/solution' element = { <SolutionToClient/> } />
        </Routes>
      
        <Footer />
      </div>
    </BrowserRouter>
  
  );
}



