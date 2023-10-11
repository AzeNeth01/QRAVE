//Module Imports
import  React from 'react';
import { NavLink } from 'react-router-dom';
import { scroller } from 'react-scroll';

//Style Imports
import './styles.css'
import { Box, Column} from './styles'

//Asset Imports
import qrave from '../../assets/qrave_logo.png'



/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Header Component
 */

export default function Header() {

    const scrollToSection = (sectionName) => {
      scroller.scrollTo(sectionName, {
        duration: 800,
        delayy: 0,
        smooth: 'easeInOutQuart',
      });
    }

    return (
      
      <Box>
      <Column>
        <img src={qrave} alt="Logo" className="w-40 h-35"/>
      </Column>
      <Column className='flex justify-end'>
        <nav>
          <ul className="flex justify-end space-x-3.5">
            <li>
              <NavLink exact activeClassName="active" to="/" className="header-font">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/about" className="header-font">
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/solution" className="header-font">
                Services
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName="active" to="/contact" className="header-font">
                Contacts
              </NavLink>
            </li>
          </ul>
        </nav>
      </Column>
    </Box>
    );
}


