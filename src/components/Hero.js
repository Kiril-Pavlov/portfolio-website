import React from 'react'
import "./Hero.css";

const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt="Hero Image" className='hero-image'/>
        <div className='hero-content'>
            <h1 className='hero-title'>Pavlov Kiril</h1>
            <h2>Software Developer</h2>
            <button>Contact me</button>
        </div>
    </div>
  )
}

export default Hero