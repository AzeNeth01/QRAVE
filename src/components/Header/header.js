//Module Imports
import { Link as ScrollLink } from 'react-scroll';

//Style Imports
import './header_styles.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

//Asset Imports
import qrave from '../../assets/images/qrave_logo.png'

/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Header Component
 */

export default function Header() {

  return (
    <div>
      {/* <nav>
        <div className='nav-inner'>
          <img src={qrave} alt='qrave-logo' className='qrave-logo' />
          <div>
            <ScrollLink to='home' spy={true} smooth={true} duration={500} className='links'> Home </ScrollLink>
            <ScrollLink to='who' spy={true} smooth={true} duration={500} className='links'> About us </ScrollLink>
            <ScrollLink to='solution' spy={true} smooth={true} duration={500} className='links'> Services </ScrollLink>
            <ScrollLink to='contact' spy={true} smooth={true} duration={500} className='links'> Contact </ScrollLink>
          </div>
        </div>
      </nav> */}

      <nav class="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <a href="#"> <img src={qrave} alt="" className='qrave-logo' /> </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse text-center navigation" id="navbarNav">
            <ul class="navbar-nav w-full">
              <li class="nav-item">
              <ScrollLink to='home' spy={true} smooth={true} duration={500} className='links'> Home </ScrollLink>
              </li>
              <li class="nav-item">
              <ScrollLink to='who' spy={true} smooth={true} duration={500} className='links'> About us </ScrollLink>
              </li>
              <li class="nav-item">
              <ScrollLink to='solution' spy={true} smooth={true} duration={500} className='links'> Services </ScrollLink>
              </li>
              <li class="nav-item">
              <ScrollLink to='contact' spy={true} smooth={true} duration={500} className='links'> Contact </ScrollLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>

  )
}
