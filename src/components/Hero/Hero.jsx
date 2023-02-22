import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ gradienBlob1, gradienBlob2 }) => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div class="tk-blob heroBlobBlue" >
                    <svg fill='rgba(0, 48, 104, 1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
                        <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
                    </svg>
                </div>
                <div class="tk-blob heroBlobPink">
                    <svg fill='rgba(220, 3, 255, 1)' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 440.7 428.7">
                        <path d="M410.6 78.8c36 52.5 36.1 126 19.2 194C412.9 340.7 379 403 330 421.9c-49 19-113.1-5.3-178.6-34C85.8 359.2 18.7 326.1 3.5 276.4-11.7 226.7 25 160.3 71.7 105.3 118.3 50.3 174.8 6.8 239 .7c64.1-6 135.7 25.5 171.6 78.1z"></path>
                    </svg>
                </div>
                <div className="hero__title">
                    <h1 className='hero__title--text'>Hi! I'm <br /> Tanishq Kaushal,</h1>
                    <span className='hero__special hero__title--text'> A front-end <br /> web engineer</span>
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