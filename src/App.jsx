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
  const gradienBlob1 = useRef();
  const gradienBlob2 = useRef();
  const gradienBlob3 = useRef();
  const gradienBlob4 = useRef();
  const gradienBlob5 = useRef();
  const gradienBlob6 = useRef();
  const gradienBlob7 = useRef();
  const gradienBlob8 = useRef();
  const gradienBlob9 = useRef();
  const gradienBlob10 = useRef();
  const blur = useRef();

  const hoverOverlay = (e) => {
    // let rect = overlay.current.getBoundingClientRect();
    // let mouseX = e.clientX - rect.left;
    // let mouseY = e.clientY - rect.top;
    // overlay.current.style.opacity = `1`;
    // overlay.current.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04) 0%, transparent calc(4% + 0px)) no-repeat border-box border-box`;
    console.log(e.clientX);
    gradienBlob1.current.animate({
      left: `${e.clientX}px`,
      top: `${e.clientY}px`
    }, {
      duration: 5000,
      fill: "forwards"
    })
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
      {/* <div ref={blur} className="blurOverlay"></div> */}
      <div ref={gradienBlob1} className="gradient1"></div>
      <Navbar overlay={overlay} hamIcon={hamIcon} line1={line1} line2={line2} NavbarElement={NavbarElement} hamMenu={hamMenu} openMenu={openMenu} />
      {/* <Resume /> */}
      <Hero />
      <Experience />
      <Projects />
      <Technologies />
      <Blogs />
      <Footer />
      {/* <div ref={gradienBlob9} className="gradient9 "></div> */}
    </div>

  )
}

export default App