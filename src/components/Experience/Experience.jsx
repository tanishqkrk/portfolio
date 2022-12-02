import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import ExperienceWork from './ExperienceWork/ExperienceWork'
import './Experience.css'
import './ExperienceWork/ExperienceWork.css'


const Experience = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div id='experience' className="experience">
            <div data-aos="fade-right" className="experience__title">
            //Experience
                <div className="experience__desc">I've worked as a freelancer and an intern, and made dozens of features and web designs to fit various requirements.</div>
            </div>
            <div className="experience__content" data-aos="fade-down" >
                <div className="experience__content--work">
                    <ExperienceWork title={'Front-end Intern'} firm={'getprobooking.com'} tenure={'March 2022 - Present'} link={'https://www.getprobooking.com/'}></ExperienceWork>
                    <ExperienceWork title={'Built a front-end website for'} firm={'SocioSavys'} tenure={'June 2022 - Aug 2022'}></ExperienceWork>
                    <ExperienceWork title={'Developed a dashbaord for'} firm={'CookieYes'} tenure={'Oct 2022 - December 2022'}></ExperienceWork>
                    <div className="experience__content--timeline"></div>
                </div>
            </div>
        </div>
    )
}

export default Experience