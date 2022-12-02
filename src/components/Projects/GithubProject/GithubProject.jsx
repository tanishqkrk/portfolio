import React, { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";

const GithubProject = ({ name, desc, github }) => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (
        <div className='githubproject'>
            <div data-aos="fade-down" data-aos-duration="1000" className="githubproject__title">{name}</div>
            <div data-aos="fade-down" data-aos-duration="1000" className="githubproject__desc">{desc}</div>
            <div data-aos="fade-down" data-aos-duration="1000" className="githubproject__github"><a target={'_blank'} href={github} className="githubproject__github--link"><i class="fa-brands fa-github"></i></a></div>
        </div>
    )
}

export default GithubProject