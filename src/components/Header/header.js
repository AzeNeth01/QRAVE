//Module Imports
import  React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

//Style Imports
import './styles.css'

//Asset Imports
import qrave from '../../assets/qrave_logo.png'


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Header Component
 */

export default function Header(){
  const [sticky, setSticky] = useState(false);

  useEffect(() =>{
    const handleScroll = () =>{
      setSticky(window.scrollY > 200)
      console.log(window.scrollY);
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  });

  return (

    <nav>
     <div className = 'nav-inner'>
      <span className = 'logo'> <img src = {qrave} /></span>

        <div>
          <NavLink exact activeClassName = 'active' 
                   to ='/'
                   className = 'links'> Home 
          </NavLink>

          <NavLink exact activeClassName = 'active' 
                   to ='/about'
                   className = 'links'> About us 
          </NavLink>

          <NavLink exact activeClassName = 'active' 
                   to ='/services'
                   className = 'links'> Services 
          </NavLink>

          <NavLink exact activeClassName = 'active' 
                   to ='/contacts'
                   className = 'links'> Contact 
          </NavLink>

        </div> 
     </div>
    </nav>
  )
}
