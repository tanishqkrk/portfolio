import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ }) => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div className="hero__title">
                    <h1 className='hero__title--text'>Hi! I'm <br /> Tanishq Kaushal,</h1>
                    <span className='hero__special hero__title--text'> A front-end <div className='hero__special--sub'> web engineer</div></span>
                </div>
                {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
                <a href='./resume.pdf' download={'./resume.pdf'} className="hero__resume--title">Download Resume</a>
                <div className="heroLinks">
                    <a href="https://www.linkedin.com/in/tanishq-kr-kaushal-835b0221b/" className="heroLinksLink">Linkedin</a>
                    <a href="https://github.com/tanishqkrk" className="heroLinksLink">GitHub</a>
                    <a href="https://twitter.com/TanishqKaushal" className="heroLinksLink">Twitter</a>
                </div>
                <a href='https://github.com/medmac01/healthyAI' className="currentStatus">📢📢I'm currently in a hackathon, working on an AI based medical startup. You can find me and my team and what we are building by clicking here😉</a>
            </div>
            {/* <div className="bottom"></div> */}
        </React.Fragment>
    )
}

export default Hero