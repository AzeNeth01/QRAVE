import React from 'react';
import '../src/custom.css'
import goalsimage from '../src/images/goals-section.png';
import qravedemo from '../src/video/Qrave_quick_demo.mp4';

export default function Qravegoals(){
    return(
        <div className='md:container md:mx-auto mt-10'>
            <img src={goalsimage} alt='qrave-goals' className='img-fluid'/>
            <div className='flex items-center justify-center flex-col'>
                <h1 class="qrave-header text-4xl">WATCH QRAVE DEMO</h1>
                <h2 className='qrave-sub-header mt-5 mb-5'>Showcasing our Mastery: Have a look at the HOW.</h2>
            </div>
            <div className='qrave-demo-video flex items-center justify-center'>
                <video src={qravedemo} controls autoPlay className='qrave-video '/>
            </div>
        </div>
    )
}
