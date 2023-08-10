import React, { useRef, useEffect, useState } from 'react'
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
  let [scrollCaptureI, setScrollCaptureI] = useState(0)
  let [scrollCaptureJ, setScrollCaptureJ] = useState(0)
  const overlay = useRef();
  const hamMenu = useRef();
  const NavbarElement = useRef();
  const hamIcon = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const hoverOverlay = (e) => {
    let rect = overlay.current.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    overlay.current.style.opacity = `1`;
    overlay.current.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.03) 0%, transparent calc(5% + 0px)) no-repeat border-box border-box`;
  }

  const openMenu = () => {
    hamMenu.current.classList.toggle('ham-on');
    hamIcon.current.classList.toggle('hamIcon')
    line1.current.classList.toggle('line1')
    line2.current.classList.toggle('line2')
  }

  // onMouseMove={hoverOverlay}
  return (
    <div ref={overlay} onMouseMove={hoverOverlay} className='app' >
      <Navbar overlay={overlay} hamIcon={hamIcon} line1={line1} line2={line2} NavbarElement={NavbarElement} hamMenu={hamMenu} openMenu={openMenu} />
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