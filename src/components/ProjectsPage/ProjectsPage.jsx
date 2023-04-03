import React from 'react'
import projects from './projectsPage.json'
import Project from '../Projects/Project/Project'
import { Link } from 'react-router-dom'
const ProjectsPage = () => {
    return (
        <div>
            <div>
                <Link className='back' style={{ color: "white", textDecoration: "none", padding: "12px" }} to="/">Back</Link>
            </div>
            <div className="projects__work" style={{ width: "100%" }}>
                {
                    projects.map(project => <Project tools={project.tools} name={project.name} desc={project.desc} github={`https://github.com/tanishqkrk/${project.github}`} img={`./${project.img}`} href={project.href} ></Project>)
                }
            </div>
        </div>
    )
}

export default ProjectsPage