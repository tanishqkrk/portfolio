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
                <div className="blog__title">{title}</div>
                <div className="blog__content">{content}</div>
                <div className="blog__read">Read more</div>
            </a>
        </div>
    )
}

export default Blog