import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ }) => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div className="hero__title">
                    <h1 className='hero__title--text'>Hi! I'm <span className=''>Tanishq Kaushal</span>,</h1>
                    <span className='hero__subtitle--text'> A front-end <span className='hero__special--sub'> web engineer</span></span>
                </div>
                <div className='hero__quote'>Strive for perfection in everything you do. Take the best that exists and make it better. <br />When it does not exist, design it.</div>
                {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
                <div className='current'>
                    <div className='currentBuilding'>Building <a target={"_blank"} href="https://github.com/medmac01/healthyAI">HealthyAI</a></div>
                    <div className='currentAt'>Frontend Intern at <a target={"_blank"} href="https://getprobooking.com">Probooking</a></div>
                    <div className='currentWorking'>Working on <a target={"_blank"} href="https://github.com/tanishqkrk/wool">Wool</a></div>
                </div>
                <a href='./resume.pdf' download={'./resume.pdf'} className="hero__resume--title">Download Resume</a>

                {/* <div className="heroLinks"> */}
                {/* <a href="https://www.linkedin.com/in/tanishq-kr-kaushal-835b0221b/" className="heroLinksLink">Linkedin</a> */}
                {/* <a href="https://github.com/tanishqkrk" className="heroLinksLink">GitHub</a> */}
                {/* <a href="https://twitter.com/TanishqKaushal" className="heroLinksLink">Twitter</a> */}
                {/* </div> */}
                {/* <a href='https://github.com/medmac01/healthyAI' className="currentStatus">📢📢I'm currently in a hackathon, working on an AI based medical startup. You can find me and my team and what we are building by clicking here😉</a> */}
            </div>
            {/* <div className="bottom"></div> */}
        </React.Fragment>
    )
}

export default Hero