import React from 'react'
import "./Projects.css"
import todoImg from "../assets/todo-app.png"
import pizzaImg from "../assets/pizza-app.png"

const Projects = () => {
    const projectsList = [
        {
            name: "ToDo App",
            img: `${todoImg}`,
            description: "A ToDo App using React.js",
            skills: ["html", "css", "react.js"],
            url: "https://pizza-app-react-kiril.netlify.app/"
        },
        {
            name: "Pizza App",
            img: `${pizzaImg}`,
            description: "Pizza App in React with MongoDB backend",
            skills: ["html", "css", "react.jd", "mongodb"],
            url: "https://pizza-app-react-kiril.netlify.app/"
        },
        {
            name: "Pizza App",
            img: `${pizzaImg}`,
            description: "Pizza App in React with MongoDB backend",
            skills: ["html", "css", "react.jd", "mongodb"],
            url: "https://pizza-app-react-kiril.netlify.app/"
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