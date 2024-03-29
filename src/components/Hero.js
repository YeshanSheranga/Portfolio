import React from 'react'
import "./HeroStyles.css"
import IntroImg from "../assets/intro.jpg"
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className='hero'>
        <div className='mask'>
            <img className='intro-img'src={IntroImg} alt="IntroImg"/>
        </div>
        <div className='content'>
            <p>HI I'M FREELANCER.</p>
            <h1>Full Stack Engineer</h1>
            <div>
              <Link to='/project' className='btn'>Projects</Link>  
              <Link to='/contact' className='btn btn-light'>Contact</Link>
            </div>
        </div>
    </div>
  )
}

export default Hero