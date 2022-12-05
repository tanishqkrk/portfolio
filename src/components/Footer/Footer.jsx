import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className="footer__main">
                <div className="footer__image"><img src="./headshot.jpg" alt="" className="footer__img--img" /></div>
                <div className="footer__data">
                    <div className="footer__data--links">
                        <div className="footer__data--links-social">
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Instagram</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Twitter</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Stack Overflow</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Linkedin</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">GitHub</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Dev.to</a>
                        </div>
                        <div className="footer__data--links-page">
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Home</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Experience</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Projects</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Technologies</a>
                            <a data-aos="fade-right" href="" className="footer__data--link-link">Blogs</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer__end">©Tanishq Kaushal | Made with
                <img className='footer__end--icon' src="./react.png" alt="" />
                <img className='footer__end--icon' src="./vite.png" alt="" />
                <img className='footer__end--icon' src="./js.png" alt="" />
            </div>
        </div>
    )
}

export default Footer