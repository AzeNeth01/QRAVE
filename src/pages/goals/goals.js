import React from 'react';
import '../../css/custom.css'

//Asset Imports
import goalsimage from '../../assets/goals-section.png';
import qravedemo from '../../assets/videos/Qrave_quick_demo.mp4';

export default function Qravegoals(){
    return(
        <div className='md:container md:mx-auto mt-10'>
            <img src = {goalsimage} alt='qrave-goals' className = 'w-full'/>
            <div className='flex items-center justify-center flex-col'>
                <h1 class="qrave-header text-3xl mt-5">WACH QRAVE DEMO</h1>
                <p className='qrave-sub-header mt-3'>Showcasing our Mastery: Have a look at the HOW.</p>
            </div>
            <div className='qrave-demo-video flex items-center justify-center mt-2'>
                <video src={qravedemo} controls autoPlay className='qrave-video '/>
            </div>

            <div class="HeroSection">
              
                <p></p>
                <button></button><button></button>
                <button></button><button></button>
            </div>
        </div>
    )
}