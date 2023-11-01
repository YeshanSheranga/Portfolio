import React from 'react'
import './CommonHeroStyles.css'

const CommonHero = (props) => {
  return (
    <div className='hero-img'>
        <div className='heading'>
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default CommonHero