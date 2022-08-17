import React from 'react'
import "./Hero.css";

const Hero = ({imageSrc}) => {
  return (
    <div className='hero'>
        <img src={imageSrc} alt="Hero Background" className='hero-image'/>
        <div className='hero-content'>
            <h1 className='hero-title'>Hi, I am Pavlov Kiril</h1>
            <h2>Software Developer</h2>
            <button>Contact me</button>
        </div>
    </div>
  )
}

export default Hero