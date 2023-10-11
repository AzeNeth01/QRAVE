import React, { Component } from 'react';

//Asset Imports
import img_1 from '../assets/img1.jpg';
import img_2 from '../assets/img2.jpg';

export class Carousel extends Component {

    render(){
        return(
            <div className='flex items-center justify-center relative gap-3 mt-6'>

                
                <img src= {img_1} ></img>
                <img src= {img_2} ></img>
                <img src= {img_2} ></img>


            </div>
            
        )
    }

}

export default Carousel;