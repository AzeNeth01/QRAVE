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
            <div class = 'row container'>
                <div class = 'col-xs-6p col-md-4 text-center'>
                    <h3>About us</h3>
                    <p>DreamTech elevates</p>
                    <p>businesses by providing</p>
                    <p>customized POS solutions</p>
                    </div>

                <div class = 'col-xs-6 col-md-4 text-center' >
                  
                    <h3>Contact Us</h3>
                    <p><img src = {map} class = 'footer_img'/>Cebu City</p>
                    <p> <img src = {email} class = 'footer_img' />dreamtech@gmail.com</p>
                    <p><img src = {phone} class = 'footer_img'/>+63 999 9999 999</p>
                </div>

                <div class = 'col-xs-6 col-md-4 text-center '>
                    <h3>Follow Us</h3>
                    <a href = 'www.facebook.com'><img src = {fb}/></a>
                    <a href = 'www.instagram.com'><img src = {ig}/></a>
                    
                </div>
                
            </div>

            
        </React.Fragment>
    );
}
