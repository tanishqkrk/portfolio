import React, { useEffect } from 'react'
import './Technologies.css'
import AOS from "aos";
import "aos/dist/aos.css";

const Technologies = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div className="technologies" id='technologies'>
            <div data-aos="fade-left" className="technologies__title">//Technologies I use
                <div className="technologies__desc">Having these languages/libraries/frameworks/tools at my disposal I built responsive and good looking web apps!</div>
            </div>
            <div className="technologies__list">
                <div data-aos="fade-left" data-aos-duration="400" className="javascript technologies__list--item"><img src="./js.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="500" className="react technologies__list--item"><img src="./react.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="600" className="jquery technologies__list--item"><img src="./jquery.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="700" className="bootstrap technologies__list--item"><img src="./bootstrap.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="800" className="laravel technologies__list--item"><img src="./laravel.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="900" className="vite technologies__list--item"><img src="./vite.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="1000" className="postman technologies__list--item"><img src="./postman.png" alt="" className="technologies__list--item--img" /></div>
                <div data-aos="fade-left" data-aos-duration="1100" className="git technologies__list--item"><img src="./git.png" alt="" className="technologies__list--item--img" /></div>
            </div>
        </div>
    )
}

export default Technologies