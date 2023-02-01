import React from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";
import ExperienceWork from './ExperienceWork/ExperienceWork'
import './Experience.css'
import './ExperienceWork/ExperienceWork.css'


const Experience = () => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (
        <div id='experience' className="experience">
            <div className="experience__title">
            //Experience
                <div className="experience__desc">I've worked as a freelancer and an intern, and made dozens of features and web designs to fit various requirements.</div>
            </div>
            <div className="experience__content"  >
                <div className="experience__content--work">
                    <ExperienceWork desc={"I'm a JavaScript intern at Probooking, I've learnt a lot about the JS language and along with that finding creative solutions for UI challanges while working in a team of developers."} tools={["/js.png", "jquery.png", "bootstrap.png"]} title={'Front-end Intern'} firm={'getprobooking.com'} tenure={'March 2022 - Present'} link={'https://www.getprobooking.com/'}></ExperienceWork>
                    <ExperienceWork desc={"Developed a front-end website for US based social media startup, learned about client interaction and dealing with people."} tools={["/js.png"]} title={'Built a front-end website for'} firm={'SocioSavys'} tenure={'June 2022 - Aug 2022'}></ExperienceWork>
                    <ExperienceWork desc={"Cookizen (Cookie_consent) is an open-source (as of Jan 2023) library for customize a cookie banner and embed into your own website with ease."} tools={["/js.png"]} title={'Developed a dashbaord for'} link={"https://github.com/uarora1997/cookie_consent_ui"} firm={'Cookiezen'} tenure={'Oct 2022 - December 2022'}></ExperienceWork>
                    {/* <div className="experience__content--timeline"></div> */}
                </div>
            </div>
        </div>
    )
}

export default Experience