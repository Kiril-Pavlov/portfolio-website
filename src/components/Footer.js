import React from 'react'
import { FaLinkedin, FaGithubSquare, FaHackerrank, FaFacebookSquare, FaInstagramSquare } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className='footer-container'>
            <div className='socials-list'>
                <a href="https://www.linkedin.com/in/kiril-pavlov/" className='social-link'>
                    <FaLinkedin size={30} fill="red" className='social-icon'/>
                </a>
                <a href="https://github.com/Kiril-Pavlov" className='social-link'>
                    <FaGithubSquare size={30} fill="red" />
                </a>
                <a href="https://www.hackerrank.com/kire_p" className='social-link'>
                    <FaHackerrank size={30} fill="red" />
                </a>
                <a href="https://www.facebook.com/Kire007/" className='social-link'>
                    <FaFacebookSquare size={30} fill="red" />
                </a>
                <a href="https://www.instagram.com/kirilkpavlov/" className='social-link'>
                    <FaInstagramSquare size={30} fill="red" />
                </a>  
            </div>
            <div className='copyright'>

            </div>
        </footer>
    )
}

export default Footer