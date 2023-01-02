import React, { useRef, useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import './theme/App.css'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Blogs from './components/Blogs/Blogs'
import Socials from './components/Socials/Socials'
import Resume from './components/Resume/Resume'
import Footer from './components/Footer/Footer'

const App = () => {
  const overlay = useRef();
  const hoverOverlay = (e) => {
    let rect = overlay.current.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    overlay.current.style.opacity = `1`;
    overlay.current.style.background = `radial-gradient(circle at  ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04) 0%, transparent calc(6% + 0px)) no-repeat border-box border-box`;
    // console.log(1)
  }


  return (
    <div ref={overlay} onMouseMove={hoverOverlay} className='app'>
      <Navbar />
      <Socials />
      <Resume />
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Blogs />
      <Footer />
    </div>
  )
}

export default App