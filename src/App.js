//Module Imports
import { Routes, BrowserRouter as Router, Route } from 'react-router-dom';

//Named Imports
import Header from './components/Header/header';
import Footer from './components/Footer/footer';
import Hero from './pages/hero/hero';
import SolutionToClient from './pages/solutionToClient/solutionToClient';
import Goals from './pages/goals/goals';

/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Landing Page
 * @returns App
 */

  function App() {

  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path = '/' exact component = { Goals } />
          <Route path = '/hero' component = { Hero } />
          <Route path = '/SolutionToClient' component = { SolutionToClient } />
        </Routes>
        <Footer />
      </div>
    </Router>
  
  );
}

export default App;


