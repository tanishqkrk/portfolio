import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ gradienBlob1, gradienBlob2 }) => {
    return (
        <React.Fragment>
            <div className='hero'>
                <div ref={gradienBlob1} className="gradient1"></div>
                <div ref={gradienBlob2} className="gradient2"></div>
                <div className="hero__title">
                    <h1 className='hero__title--text'>Hi! I'm Tanishq Kaushal,</h1>
                    <span className='hero__special hero__title--text'> A front-end web engineer</span>
                </div>
                {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
            </div>
            <div className="bottom"></div>
        </React.Fragment>
    )
}

export default Hero