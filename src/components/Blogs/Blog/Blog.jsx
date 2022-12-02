import React, { useEffect } from 'react'
import './Blog.css'
// import AOS from "aos";
// import "aos/dist/aos.css";

const Blog = ({ title, content, link }) => {
    // useEffect(() => {
    // AOS.init();
    // AOS.refresh();
    // }, []);
    return (
        <div className="blog">
            <a target={'_blank'} href={link} className="blog__link">
                <div data-aos="fade-down" data-aos-duration="800" className="blog__title">{title}</div>
                <div data-aos="fade-down" data-aos-duration="900" className="blog__content">{content}</div>
                <div data-aos="fade-down" data-aos-duration="1000" className="blog__read">Read more</div>
            </a>
        </div>
    )
}

export default Blog