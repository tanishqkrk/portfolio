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
  const [scrollCapture, setScrollCapture] = useState(0)
  const overlay = useRef();
  const hamMenu = useRef();
  const NavbarElement = useRef();
  const hamIcon = useRef();
  const line1 = useRef();
  const line2 = useRef();
  const gradienBlob1 = useRef();
  const gradienBlob2 = useRef();

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
      NavbarElement.current.style.background = 'var(--background-color)'
    }
    else if (document.body.getBoundingClientRect().top >= 0) {
      NavbarElement.current.style.background = 'transparent'
    }
  }
  window.addEventListener('scroll', scrollBackgroundOnNavbar)
  // scrollBackgroundOnNavbar()

  // ! Develop a feature to rotate the gradient blobs on scroll (onWheel vs onScroll)
  // ? onWheel={rotate}
  const rotate = () => {
    // gradienBlob1.current.style.transform = `rotate(${360}deg)`
    // gradienBlob2.current.style.transform = `rotate(${360}deg)`
  }

  return (
    <div ref={overlay} onMouseMove={hoverOverlay} className='app' >
      <Navbar hamIcon={hamIcon} line1={line1} line2={line2} NavbarElement={NavbarElement} hamMenu={hamMenu} openMenu={openMenu} />
      <Socials />
      <Resume />
      <Hero gradienBlob1={gradienBlob1} gradienBlob2={gradienBlob2} />
      <Experience />
      <Projects />
      <Technologies />
      <Blogs />
      <Footer />
    </div>

  )
}

export default App