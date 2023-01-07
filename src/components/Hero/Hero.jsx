import React, { useEffect } from 'react'
import './Hero.css'
//import 
// import AOS from "aos";
// import "aos/dist/aos.css";

//useEffect

const Hero = () => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (
        <React.Fragment>
            <div data-scroll-section
                className='hero'>
                Hi! I'm Tanishq Kaushal,
                <span
                    className='hero__special'> A front-end web engineer</span>
                <div
                    className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div>
            </div>
            <div className="bottom"></div>
        </React.Fragment>
    )
}

export default Hero