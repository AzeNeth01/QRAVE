//Module Imports
import { Link as ScrollLink } from 'react-scroll';

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
    <div>
      <nav>
        <div className='nav-inner'>
          <span className='logo'> <img src={qrave} /></span>
          <div>
            <ScrollLink to='hero' spy={true} smooth={true} duration={500} className='links'> Home </ScrollLink>
            <ScrollLink to='hero' spy={true} smooth={true} duration={500} className='links'> About us </ScrollLink>
            <ScrollLink to='solution' spy={true} smooth={true} duration={500} className='links'> Services </ScrollLink>
            <ScrollLink to='goals' spy={true} smooth={true} duration={500} className='links'> Contact </ScrollLink>
          </div>
        </div>
      </nav>



    </div>

  )
}
