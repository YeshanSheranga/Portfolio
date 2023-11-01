import { Link } from 'react-router-dom';
import './AboutContentStyels.css'
import aboutOne from '../assets/about-1.jpg'
import aboutTwo from '../assets/about-2.jpg'

import React from 'react'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I</h1>
        <p>I am a Full stack engineer I create responsive secure websites for my clients</p>
        <Link to="/contact">
            <button className='btn'>Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className='img-container'>
            <div className='img-stack top'>
                <img src={aboutOne} className='img' alt='true'/>
            </div>
             <div className='img-stack bottom'>
                <img src={aboutTwo} className='img' alt='true'/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default AboutContent