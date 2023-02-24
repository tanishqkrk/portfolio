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
                    <a href="" className="heroLinksLink">Linkedin</a>
                    <a href="" className="heroLinksLink">GitHub</a>
                    <a href="" className="heroLinksLink">Twitter</a>
                </div>
            </div>
            {/* <div className="bottom"></div> */}
        </React.Fragment>
    )
}

export default Hero