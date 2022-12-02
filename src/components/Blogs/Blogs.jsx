import React, { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from './Blog/Blog'
import './Blogs.css'
const Blogs = () => {
    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <div id='blogs' className="blogs">
            <div data-aos="fade-down" className="blogs__title">//Blogs</div>
            <div data-aos="fade-down" data-aos-duration="1000" className="blogs__blog">
                <Blog title={"What the hell is this Execution Context!?"} content={"JavaScript has quite the reputation for being the most popular language in the world, and 98% of world's websites use JavaScript as their main source of development for either front, end or both ends."} link={'https://dev.to/tanishqkrk/what-the-hell-is-this-execution-context-4bcc'} ></Blog>
                <Blog title={"My personal practice while building websites."} content={"If you're reading this, there's a 40% chance you're a front-end web developer, you might be a student, just getting into the field, or you might be an expert for 10+ years, one thing every single beginner front-end web developer and programmers in general, struggle is how to start that development process!"} link={'https://dev.to/tanishqkrk/my-personal-practice-while-building-websites-183d'} ></Blog>
            </div>
        </div>
    )
}

export default Blogs