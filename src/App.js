//Module Imports
import React from 'react';

//Named Imports
import MainPage from './components/mainPage/mainPage';
import { BrowserRouter } from 'react-router-dom';


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Landing Page
 * @returns App
 */

  function App() {

  return (
     <BrowserRouter>
      <React.Fragment>
       <MainPage />
      </React.Fragment>
      </BrowserRouter>
  
  );
}

export default App;


