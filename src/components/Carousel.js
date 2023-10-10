import React, { Component } from 'react';

export class Carousel extends Component {

    render(){
        return(
            <div className='flex items-center justify-center relative gap-3 mt-6'>

                <img src="./images/img1.jpg"></img>
                <img src="./images/img2.jpg"></img>
                <img src="./images/img2.jpg"></img>

            </div>
            
        )
    }

}

export default Carousel;