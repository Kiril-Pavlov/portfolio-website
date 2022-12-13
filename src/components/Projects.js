import React from 'react'
import "./Projects.css"

import pizzaImg from "../assets/pizza-app-mockup.png"
import movieImg from "../assets/movie-app.png"
import todoImg from "../assets/todo-app-mockup.png"
import bookmarkImg from "../assets/bookmark-app-mockup.png"
import durotanImg from "../assets/durotan-site-mockup.png"
import tipCalcImg from "../assets/tip-calc-mockup.png"
import linkShorteningImg from "../assets/link-shortening-mockup.png"
import getAdviceImg from "../assets/get-advice-mockup.png"

const Projects = () => {
    const projectsList = [
        {
            name: "Pizza Store App",
            img: `${pizzaImg}`,
            description: "Pizza Store App for exercise purposes. For the frontend I used React.js and for the backend I used mongoDB.",
            skills: ["html", "css", "react.js", "mongodb"],
            url: "https://pizza-app-react-kiril.netlify.app/"
        },
        {
            name: "Movie App",
            img: `${movieImg}`,
            description: "Movie App for exercise purposes. For the frontend I used React.js and the backend movie data is from the https://yts.torrentbay.to/api API.",
            skills: ["html", "css", "react"],
            url: "https://github.com/Kiril-Pavlov/react-movie-app"
        },
        {
            name: "Todo App",
            img: `${todoImg}`,
            description: "Todo App for exercise purposes. I created this project with React.js. The data you enter is saved in localStorage.",
            skills: ["html", "css", "react"],
            url: "https://todoapp.pavlov.mk/"
        },
        {
            name: "Link Shortening App",
            img: `${linkShorteningImg}`,
            description: "Clone of a website where you can shorten a website URL by using API.",
            skills: ["html", "css", "react", "API"],
            url: "https://url-shortening-app-kiril.netlify.app/"
        },
        {
            name: "Bookmark App",
            img: `${bookmarkImg}`,
            description: "Bookmark Website is a clone of a given design of a landing page.",
            skills: ["html", "css", "react"],
            url: "https://bookmark-clone-site.netlify.app/"
        },
        {
            name: "Durotan Website",
            img: `${durotanImg}`,
            description: "Durotan Website is a clone from a given design for a website for selling clothes and accessories.",
            skills: ["html", "css", "react","bootstrap"],
            url: "https://durotan-clone-site.netlify.app/"
        },
        {
            name: "Tip Calculator",
            img: `${tipCalcImg}`,
            description: "Tip Calculator App thet calculates the amount each person has to pay according to the total bill, selected percent of a tip and number of people",
            skills: ["html", "css", "react"],
            url: "https://tip-splitter-calc.netlify.app/"
        },
        {
            name: "Advice Generator App",
            img: `${getAdviceImg}`,
            description: "Random advice generator from API",
            skills: ["html", "css", "react", "API"],
            url: "https://get-advice-app-kiril.netlify.app/"
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