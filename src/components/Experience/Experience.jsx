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
        <React.Fragment>
            <div id='experience' className="experience">
                <div className="heading experience__title">
            //Experience
                </div>
                <div className="experience__desc">I've worked as a freelancer and an intern, and made dozens of features and web designs to fit various requirements.</div>
                <div className="experience__content"  >
                    <div className="experience__content--work">
                        <ExperienceWork desc={"Working on various JavaScript/TypeScript frameworks, in a team of engineers and managers. Building complex UIs and finding creative solutions for web based problems."} tools={["/ts.png", "js.png", "svelte.svg", "/next.svg", "/tailwind.png", "/vue.png"]} title={'Frontend Engineer'} link={"https://asymmetri.in/"} firm={'Asymmerti.in'} tenure={'April 2023 - Present'}></ExperienceWork>
                        <ExperienceWork desc={"Healthy AI is a web & AI based open source tool made made as a project in LabLabAI hackathon."} tools={["/js.png", "/react.png", "/tailwind.png"]} title={'Built a web based AI platform for'} link={"https://github.com/medmac01/healthyAI"} firm={'LabLabAI (HealthyAI)'} tenure={'March 2023 - Present'}></ExperienceWork>
                        <ExperienceWork desc={"I'm a JavaScript & Vue intern at Probooking, I've learnt a lot about the JS language, VueJS, jQuery and along with that finding creative solutions for UI challanges while working in a team of developers."} tools={["/vue.png", "/vuetify.png", "/js.png", "jquery.png", "bootstrap.png"]} title={'Front-end Intern'} firm={'getprobooking.com'} tenure={'March 2022 - March 2023'} link={'https://www.getprobooking.com/'}></ExperienceWork>
                        <ExperienceWork desc={"Cookizen (Cookie_consent) is an open-source (as of Jan 2023) library for customize a cookie banner and embed into your own website with ease."} tools={["/js.png", "jquery.png", "bootstrap.png"]} title={'Developed a dashbaord for'} link={"https://github.com/uarora1997/cookie_consent_ui"} firm={'Cookiezen'} tenure={'Oct 2022 - December 2022'}></ExperienceWork>
                        <ExperienceWork desc={"namyakhan/javascriptProjects is an open source repository that contains many different javascript projects."} tools={["/js.png"]} title={'Open source contribution'} link={"https://github.com/namyakhan/javascriptProjects/tree/master/ipTracker"} firm={'namyakhan/javascriptProjects'} tenure={'Nov 2022'}></ExperienceWork>
                        {/* <div className="experience__content--timeline"></div> */}
                    </div>
                </div>
                {/* <div className="exgradient1"></div> */}
                {/* <div className="exgradient2"></div> */}
            </div>
        </React.Fragment>
    )
}

export default Experience