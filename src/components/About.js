import React from 'react'
import "./About.css"

import aboutImg from "../assets/me-picture-2.png"

const About = () => {
    return (
        <div>
            <h2 className='about-title'>
                About me
            </h2>
            <div className='about-container'>
                 <div className='about-image'>
                    <img src={aboutImg} alt="Picture from me" />
                </div>
                <div className='about-content'>
                    <p>
                        Growing up it was always easier for me to understand how some things work logically than learning without understanding. I was always trying to figure out how to finish tasks more efficiently, quicker and easier if possible. This inspired and led me to start learning web development.
                    </p>
                    <p>
                        Recently, I have been developing my skills with JavaScript and React by attending a FullStack Academy which greatly improved my knowledge. Next on my learning list is NodeJS and Python. I love to challenge myself by learning new technologies. My specialties include quickly learning new skills and programming languages and problem solving.
                    </p>
                    <p>
                        - I like to dig into customer problems and solve them with modern technologies. <br />
                        - Like working in a team in a harmonic atmosphere. <br />
                        - I treat people with respect and help them to solve problems. <br />
                        - I like to be successful but helping the team be successful brings me greater joy.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About