import React from 'react'
import "./Projects.css"
import todoImg from "../assets/todo-app.png"

const Projects = () => {
    const projectsList = [
        {
            name:"ToDo App",
            img:`${todoImg}`,
            description: "A ToDo App using React.js",
            skills:["html","css", "react.js"]
        }
    ]
  return (
    <div className='projects-container'>
        {projectsList.map((item)=>{
            return(
                <div className='card-container' key={item.name}>
                    
                    <div className='skills-used' 
                        style={{ backgroundImage: `url(${item.img})`,
                                backgroundRepeat:"no-repeat",
                                backgroundSize:"cover",
                                backgroundPosition:"center", 
                                height:220,
                                width:450 }
                        }>
                        {item.skills.join(" - ")}
                    </div>
                    <div className='short-description'>
                        <h3>{item.name}</h3>
                        <p>{item.description}</p>
                        <button className='more-info'>
                            More Info ...
                        </button>
                    </div>
                </div>
            )
        })}
    </div>
  )
}

export default Projects