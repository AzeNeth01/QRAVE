//Module Imports
import React from 'react';

//Style Imports
import './styles.css';

//Asset Imports
import fb from '../../assets/images/fb.png';
import ig from '../../assets/images/ig.png';
import phone from '../../assets/images/phone.png';
import email from '../../assets/images/email.png';
import map from '../../assets/images/map.png';
import copyright from '../../assets/images/copyright.png';


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Footer Component
 */


export default function Footer() {

    const year = new Date().getFullYear();

    return (
        <React.Fragment>
            <div className='footer'>
                <div className='sb_footer section_padding'>
                    <div className='sb_footer-links'>
                        <div className='sb_footer-links-div'>
                            <h3>About Us</h3>
                            <p>DreamTech elevates</p>
                            <p>businesses by providing</p>
                            <p>customized POS soluitions.</p>
                        </div>

                        <div className='sb_footer-links-div'>
                            <h3>Contact Us</h3>
                            <p><img src={map} alt='' className='icon' /> Cebu City</p>
                            <p><img src={email} alt='' className='icon' /> dreamtech@gmail.com</p>
                            <p><img src={phone} alt='' className='icon' /> 099999999</p>
                        </div>

                        <div className='sb_footer-links-div'>
                            <h3>Follow Us</h3>

                            <div className='socialmedia'>
                                <p><a href='https://www.facebook.com'><img src={fb} alt='' /></a></p>
                                <p><a href='https://www.instagram.com'><img src={ig} alt='' /></a></p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <img src={copyright} alt='' className='icon-credits' />
                    <p>{year} DREAMTECH | PRIVACY POLICY </p>
                </div>
            </div>
        </React.Fragment>
    );
}
