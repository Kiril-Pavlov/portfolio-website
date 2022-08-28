import React from 'react'
import "./Projects.css"
import pizzaImg from "../assets/pizza-app-mockup.png"

const Projects = () => {
    const projectsList = [
        {
            name: "Pizza App",
            img: `${pizzaImg}`,
            description: "Pizza App for exercise purposes. For the frontend I used React.js and fotr the backend I used mongoDB.",
            skills: ["html", "css", "react.js", "mongodb"],
            url: "https://pizza-app-react-kiril.netlify.app/"
        },
        {
            name: "Blank Project 1",
            img: `${pizzaImg}`,
            description: "Short description for the project",
            skills: ["skill", "skill", "skill", "skill"],
            url: "https://pizza-app-react-kiril.netlify.app/"
        },
        {
            name: "Blank Project 2",
            img: `${pizzaImg}`,
            description: "Short description for the project",
            skills: ["skill", "skill", "skill", "skill"],
            url: "#"
        }
    ]
    return (
        <div className='projects-container' id='projects'>
            <h3 className='projects-title'>Projects</h3>
            <div className='projects-list-container'>
                {projectsList.map((item) => {
                    return (
                        <div className='project-card-container' key={item.name}>
                            <div className='project-card-name'>
                                {item.name}
                            </div>
                            <div className='project-card-image'>
                                <img src={item.img} alt={item.name} />
                            </div>
                            <div className='project-card-skills'>
                                <ul>
                                    {/* {item.skills.join(" - ")} */}
                                    {item.skills.map((item) => {
                                        return (
                                            <li>
                                                {item}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className='project-card-description'>
                                {item.description}
                            </div>
                            <div className='project-card-link'>
                                <a href={item.url}>Link to project ...</a>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Projects