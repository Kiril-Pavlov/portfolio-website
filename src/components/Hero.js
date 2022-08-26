import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'
import "./Hero.css";

const Hero = ({imageSrc}) => {
  return (
    <div className='hero' id='home'>
        <img src={imageSrc} alt="Hero Background" className='hero-image'/>
        <div className='hero-content'>
            <h1 className='hero-title'>Hi, I am Pavlov Kiril</h1>
            <h2>Software Developer</h2>
            <button>
            <Link to="#contact" className='hero-link'>
                Contact me
            </Link>
            </button>
        </div>
    </div>
  )
}

export default Hero