//Module Imports
import  React from 'react';
import { NavLink } from 'react-router-dom';

//Style Imports
import './styles.css'

//Asset Imports
import qrave from '../../assets/qrave_logo.png'


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Header Component
 */

export default function Header() {

    return (
      
      <div class="container flex items-center justify-between px-10 py-1 rounded">
        <div class="flex items-center space-x-4">
          <img src= {qrave} alt="Logo" class="w-40 h-35"/>
        </div>
        <div class="space-x-4">
          <nav >
              <NavLink exact activeClassName="active" to="/" className= 'NavLink-style header-font '>Home</NavLink>
              <NavLink activeClassName="active" to="/about" className= 'NavLink-style header-font '>About Us</NavLink>
              <NavLink activeClassName="active" to="/solution" className= ' NavLink-style header-font'>Services</NavLink>
              <NavLink activeClassName="active" to="/contact" className= ' NavLink-style header-font '>Contacts</NavLink>
          </nav>
        </div>
      </div>
    );
}


