import React, { useEffect } from 'react'
import './Technologies.css'
// import AOS from "aos";
// import "aos/dist/aos.css";

const Technologies = () => {
    // useEffect(() => {
    //     AOS.init();
    //     AOS.refresh();
    // }, []);
    return (
        <div className="technologies" id='technologies'>
            <div data-aos="fade-left" className="technologies__title">//Technologies I use
                <div className="technologies__desc">Having these languages/libraries/frameworks/tools at my disposal I built responsive and good looking web apps!</div>
            </div>
            <div className="technologies__list">
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="400" ><div className="javascript technologies__list--item"><img loading='lazy' src="./js.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="500" ><div className="react technologies__list--item"><img loading='lazy' src="./react.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="600" ><div className="jquery technologies__list--item"><img loading='lazy' src="./jquery.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="700" ><div className="bootstrap technologies__list--item"><img loading='lazy' src="./bootstrap.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="800" ><div className="laravel technologies__list--item"><img loading='lazy' src="./laravel.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="900" ><div className="vite technologies__list--item"><img loading='lazy' src="./vite.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="1000"><div className="postman technologies__list--item"><img loading='lazy' src="./postman.png" alt="" className="technologies__list--item--img" /></div></div>
                <div className='technologies__list--item-container' data-aos="fade-left" data-aos-duration="1100"><div className="git technologies__list--item"><img loading='lazy' src="./git.png" alt="" className="technologies__list--item--img" /></div></div>
            </div>
        </div>
    )
}

export default Technologies