import React from 'react';
import '../../css/custom.css'

//Asset Imports
import goalsimage from '../../assets/goals-section.png';
import qravedemo from '../../assets/videos/Qrave_quick_demo.mp4';

export default function Qravegoals() {
    return (
        <div className='demo-container'>
            <img src={goalsimage} alt='qrave-goals' className='goals-image' />
            <div className='demoVid'>
                <h1 class="qrave-header text-3xl mt-5">WATCH QRAVE DEMO</h1>
                <p className='qrave-sub-header mt-3'>Showcasing our Mastery: Have a look at the HOW.</p>
                <video src={qravedemo} controls autoPlay className='qrave-video ' />
            </div>
        </div>
    )
}