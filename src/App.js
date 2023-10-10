//Module Imports
import react from 'react';
import { Router, Route, Switch } from 'react-router-dom';

//Named Imports
import Header from './components/Header';
import Hero from './pages/hero/hero';
import SolutionToClient from './pages/solutionToClient/solutionToClient';


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Landing Page
 * @returns App
 */

export default function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path = '/#hero' component = { Hero } />
        <Route path = '/#solution' component = { SolutionToClient } />
      </Switch>
    </Router>
  
  );
}

