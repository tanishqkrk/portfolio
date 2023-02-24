import React, { useEffect } from 'react'
// import AOS from "aos";
// import "aos/dist/aos.css";

const Project = ({ name, href, desc, github, img, position, tools }) => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    // console.log(tools);
    return (
        <div className="project">
            <div className={`project__data ${position}`} >
                <div className="project__data--name">{name}
                    <div className="project__data--desc-links">
                        <div className="project__data--github"><a target={'_blank'} href={github} className="project__data--link project__data--github-link"><i className="fa-brands fa-github"></i></a></div>
                        <div className="project__data--link"><a target={'_blank'} href={href} className="project__data--link project__data--github-link"><i className="fa-solid fa-arrow-up-right-from-square"></i></a></div>
                    </div>
                </div>
                <div className="project__data--desc">{desc}</div>

                <div className="project__data--tools">
                    {
                        tools.map((tool) => {
                            return <img className='projectTools' src={`./${tool}`} alt="" />
                        })
                    }
                </div>
                {/* <div className="project__data--background"></div> */}
            </div>
            <div className="project__img">
                <img className='project__img--img' src={img} alt="" />
            </div>
        </div>
    )
}

export default Project