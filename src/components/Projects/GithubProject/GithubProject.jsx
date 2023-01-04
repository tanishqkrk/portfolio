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
            <div className="githubproject__title">{name}</div>
            <div className="githubproject__desc">{desc}</div>
            <div className="githubproject__github"><a target={'_blank'} href={github} className="githubproject__github--link"><i className="fa-brands fa-github"></i></a></div>
        </div>
    )
}

export default GithubProject