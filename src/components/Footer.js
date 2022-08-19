import React from 'react'
import "./Footer.css"
import { FaLinkedin, FaGithubSquare, FaHackerrank, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='socials-list'>
                <a href="https://www.linkedin.com/in/kiril-pavlov/" className='social-link'>
                    <FaLinkedin className='social-icon'/>
                </a>
                <a href="https://github.com/Kiril-Pavlov" className='social-link'>
                    <FaGithubSquare className='social-icon'/>
                </a>
                <a href="https://www.hackerrank.com/kire_p" className='social-link'>
                    <FaHackerrank className='social-icon'/>
                </a>
                <a href="https://www.facebook.com/Kire007/" className='social-link'>
                    <FaFacebookSquare className='social-icon'/>
                </a>
                <a href="https://www.instagram.com/kirilkpavlov/" className='social-link'>
                    <FaInstagramSquare className='social-icon'/>
                </a>  
            </div>
            <div className='copyright'>
                © 2021 Developed by Pavlov Kiril
            </div>
        </footer>
    )
}

export default Footer