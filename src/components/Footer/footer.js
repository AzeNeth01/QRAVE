//Module Imports
import React from 'react';

//Style Imports
import './footer_styles.css';

//Asset Imports
import fb from '../../assets/images/fb.png';
import ig from '../../assets/images/ig.png';
import location from '../../assets/images/map.png';
import email from '../../assets/images/email.png';
import phone from '../../assets/images/phone.png';


/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Footer Component
 */


export default function Footer() {

    const year = new Date().getFullYear();

    return (

        <div>
            <div class='row-12 footer-container'>
                <div className='col'>
                    <h3>About us</h3>
                    <p>DreamTech elevates businesses by providing customized POS Solutions</p>
                </div>

                <div className='col'>
                    <h3>Contact Us</h3>
                    <div className='inner-cont center'>
                        <img src={location} alt="" className='icon' />
                        <p>Cebu City</p>
                    </div>
                    <div className='inner-cont center'>
                        <img src={email} alt="" className='icon' />
                        <p>dreamtech@gmail.com</p>
                    </div>
                    <div className='inner-cont center'>
                        <img src={phone} alt="" className='icon' />
                        <p>+63 999 9999 999</p>
                    </div>

                </div>

                <div className='col'>
                    <h3>Follow Us</h3>
                    <a href='www.facebook.com'><img src={fb} /></a>
                    <a href='www.instagram.com'><img src={ig} /></a>
                </div>
            </div>
            <p className='copy-right'>© 2023 DREAMTECH. | PRIVACY POLICY</p>
        </div>
    );
}
