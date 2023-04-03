import React, { useEffect } from 'react'
import './Hero.css'
const Hero = ({ }) => {
    return (
        <React.Fragment>
            <div className='heroContainer'>
                <div className='hero'>
                    <div className="hero__title">
                        <h1 className='hero__title--text'>Hi! I'm <span className=''>Tanishq Kaushal</span>,</h1>
                        <span className='hero__subtitle--text'> A front-end <span className='hero__special--sub'> web engineer</span></span>
                    </div>
                    <div className='hero__quote'>Strive for perfection in everything you do. Take the best that exists and make it better. <br />When it does not exist, design it.</div>
                    {/* <div className='hero__bottom'>Wrote over 5000+ lines of code 🚀</div> */}
                    <div className='current'>
                        <div className='country'></div>
                        <div className='currentBuilding'>Building <a target={"_blank"} href="https://github.com/medmac01/healthyAI">HealthyAI</a></div>
                        <div className='currentAt'>Frontend Engineer at <a target={"_blank"} href="https://asymmetri.in/">Asymmetri.in</a></div>
                        <div className='currentWorking'>Working on <a target={"_blank"} href="https://github.com/tanishqkrk/wool">Wool</a></div>
                    </div>
                    <a href='./resume.pdf' download={'./resume.pdf'} className="hero__resume--title">Download Resume</a>
                    <div className="heroLinks">
                        <a target={"_blank"} href="https://www.linkedin.com/in/tanishq-kr-kaushal-835b0221b/" className="heroLinksLink">Linkedin</a>
                        <a target={"_blank"} href="https://github.com/tanishqkrk" className="heroLinksLink">GitHub</a>
                        <a target={"_blank"} href="https://twitter.com/TanishqKaushal" className="heroLinksLink">Twitter</a>
                    </div>
                </div>
                <div className="heroImg">
                    <div className='imgContainer'>
                        <img src="/headshot.jpg" alt="" className="heroImgImg" />
                        <img src="/tanishqkrk-pixel.png" alt="" className="heroImgImg2" />
                        <img src="/opt 1.svg" alt="" className="heroImgImg3" />
                    </div>
                </div>
            </div>
            {/* <div className="bottom"></div> */}
        </React.Fragment>
    )
}

export default Hero