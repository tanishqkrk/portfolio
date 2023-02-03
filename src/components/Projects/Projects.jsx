import React, { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import Project from './Project/Project'
import './Project/Project.css'
import './Projects.css'
import GithubProject from './GithubProject/GithubProject';
import './GithubProject/GithubProject.css'
import projects from '../../projects.json'

const Projects = () => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (
        <div id='projects' className="projects">
            <div className="projects__title">//Projects
                <div className="projects__desc">I've developed a lot of personal side projects some, my favourites are as below:</div>
            </div>
            <div className="projects__work">
                {
                    projects.map(project => <Project tools={project.tools} name={project.name} desc={project.desc} github={`https://github.com/tanishqkrk/${project.github}`} img={`./${project.img}`} href={project.href} ></Project>)
                }


                {/* <Project name={'IP Address Tracker'} desc={"Track any IP address, get its location, vpn status and ISP"} github={'https://github.com/tanishqkrk/IP-tracker'} img={'./ip-min.png'} href={'https://tanishqkrk.github.io/IP-tracker '} ></Project> */}
                {/* <Project position={'right'} name={'Password Generator'} desc={"Generate passwords and provide your own parameters (Uppercase, Lowercase, Number and Symbols)"} github={'https://github.com/tanishqkrk/password-generator'} img={'./pg-min.png'} href={'https://tanishqkrk.github.io/password-generator '} ></Project> */}
                {/* <Project name={'Card checkout front-end'} desc={"Front-end for a card details checkout page"} github={'https://github.com/tanishqkrk/password-generator'} img={'./card-min.png'} href={'https://tanishqkrk.github.io/password-generator '} ></Project> */}
            </div>
            <div className="githubProjects__title">Other projects you may find intersting!</div>
            <div className="github"   >
                <GithubProject name={'RandomJS'} desc={'Generating randomly is a real pain in JavaScript. The literals and syntax is way too long, randomjs is here to save the day by providing a library that lets you randomize stuff with one simple method call!'} github={'https://github.com/tanishqkrk/randomjs'}></GithubProject>
                <GithubProject name={'Decimal Separator'} desc={'This python script gives you the integer before the decimal and after the decimal as a whole number.'} github={'https://github.com/tanishqkrk/Decimal-separator'}></GithubProject>
            </div>
        </div>
    )
}

export default Projects 