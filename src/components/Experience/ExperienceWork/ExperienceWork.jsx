import React, { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";


const ExperienceWork = ({ title, firm, tenure, link }) => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (

        <div className='experience__work'>
            <div className="experience__work--title">{title}</div>
            <div><a target={'_blank'} href={link} className="experience__work--firm">{firm}</a></div>
            <div className="experience__work--tenure">({tenure})</div>
        </div>
    )
}

export default ExperienceWork