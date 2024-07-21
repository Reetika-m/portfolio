import React from 'react'
import './Project.css'
import project from '../assets/project.jpg'
function Project()
{
    return(
        <section id="project">
            <h2 className='projectTitle'> My Project</h2>
            <span className='projectDesc'>Here are my projects</span>
            <div className='project-item'>
                <div className='item-details'>
                    <p className="P1">Project-1</p>
                    <p className="P2">TechStack:-HTML and CSS</p>
                </div>
               <a href='#' ><img src={project} alt='Project' className='projectImg'/></a>
            </div>
            <div className='project-item'>
                <div className='item-details'>
                    <p className="P1">Project-2</p>
                    <p className="P2">TechStack:-HTML, CSS and JavaScript </p>
                </div>
               <a href='#' ><img src={project} alt='Project' className='projectImg'/></a>
            </div>
            <div className='project-item'>
                <div className='item-details'>
                    <p className="P1">Project-3</p>
                    <p className="P2">TechStack:-HTML,CSS and bootstrap</p>
                </div>
               <a href='#' ><img src={project} alt='Project' className='projectImg'/></a>
            </div>
            <div className='project-item'>
                <div className='item-details'>
                    <p className="P1">Project-4</p>
                    <p className="P2">TechStack:-HTML,CSS,JavaScript and react</p>
                </div>
               <a href='#' ><img src={project} alt='Project' className='projectImg'/></a>
            </div>
        </section>
    
    )
}
export default Project