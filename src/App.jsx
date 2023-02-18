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

  const hoverOverlay = (e) => {
    let rect = overlay.current.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    overlay.current.style.opacity = `1`;
    overlay.current.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04) 0%, transparent calc(6% + 0px)) no-repeat border-box border-box`;
    // console.log(1)
  }

  const openMenu = () => {
    hamMenu.current.classList.toggle('ham-on');
    hamIcon.current.classList.toggle('hamIcon')
    line1.current.classList.toggle('line1')
    line2.current.classList.toggle('line2')
  }

  const scrollBackgroundOnNavbar = () => {
    if (document.body.getBoundingClientRect().top < -200) {
      // NavbarElement.current.style.background = 'var(--background-color)'
      NavbarElement.current.style.backdropFilter = 'blur(5px)'
    }
    else if (document.body.getBoundingClientRect().top >= 0) {
      // NavbarElement.current.style.background = 'transparent'
      NavbarElement.current.style.backdropFilter = 'blur(0)'
    }
  }
  window.addEventListener('scroll', scrollBackgroundOnNavbar)
  // scrollBackgroundOnNavbar()

  // TODO Develop a feature to rotate the gradient blobs on scroll (onWheel vs onScroll)
  // ? onWheel={rotate}
  const rotate = () => {
    setScrollCaptureI(150)
    setScrollCaptureJ(150)
    gradienBlob1.current.style.transform = `rotate(${scrollCaptureI}deg)`
    gradienBlob2.current.style.transform = `rotate(${scrollCaptureJ}deg)`
  }
  // onMouseMove={hoverOverlay}
  return (
    <div ref={overlay} className='app' >
      <div ref={gradienBlob1} className="gradient1 gradient"></div>
      <div ref={gradienBlob2} className="gradient2 gradient"></div>
      <Navbar hamIcon={hamIcon} line1={line1} line2={line2} NavbarElement={NavbarElement} hamMenu={hamMenu} openMenu={openMenu} />
      <Socials />
      <Resume />
      <Hero />
      <Experience />
      <Projects />
      <div ref={gradienBlob3} className="gradient3 gradient"></div>
      <div ref={gradienBlob4} className="gradient4 gradient"></div>
      <Technologies />
      <div ref={gradienBlob5} className="gradient5 gradient"></div>
      <div ref={gradienBlob6} className="gradient6 gradient"></div>
      <Blogs />
      <div ref={gradienBlob7} className="gradient7 gradient"></div>
      <div ref={gradienBlob8} className="gradient8 gradient"></div>
      <Footer />
      <div ref={gradienBlob9} className="gradient9 "></div>
    </div>

  )
}

export default App