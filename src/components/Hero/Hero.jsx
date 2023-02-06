import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ gradienBlob1, gradienBlob2 }) => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div className="hero__title">
                    <h1 className='hero__title--text'>Hi! I'm Tanishq Kaushal,</h1>
                    <span className='hero__special hero__title--text'> A front-end web engineer</span>
                </div>
                {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
                <a href='./resume.pdf' download={'./resume.pdf'} className="hero__resume--title">Download Resume</a>
            </div>
            <div className="bottom"></div>
        </React.Fragment>
    )
}

export default Hero