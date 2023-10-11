//Module Imports
import React from 'react';

//Style Imports
import './styles.css';
import  { Box, 
        Container,
        Heading,
        Column,
        Row,
        } from './styles';

//Asset Imports

/**
 * @author ampats04 (Jeremy Andy F. Ampatin)
 * Footer Component
 */


export default function Footer(){

    return (
      <Box>
        <Container>
            <Row>
                <Column>
                    <Heading>About Us</Heading>
                    <span>DreamTech elevates</span>
                    <span>business by providing</span>
                    <span>customized POS solutions.</span>
                </Column>
                <Column>
                    <Heading>Contact Us</Heading>
                    <span>Cebu City</span>
                    <span>dreamtech@gmail.com</span>
                    <span>09999999999</span>
                </Column>
                <Column>
                    <Heading>Follow Us</Heading>
                    <span><a href = "facebook.com">Facebook</a></span>
                    <span><a href = "instagram.com">Instagram</a></span>
                </Column>
            </Row>
            <Column>
            <span> 2023 DREAMTECH.| PRIVACY POLICY</span>
            </Column>
        </Container>
       
      </Box>
        
    )
}
