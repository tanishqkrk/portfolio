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

  const notification = useRef();
  const overlay = useRef();
  const hamMenu = useRef();
  const NavbarElement = useRef();
  const hamIcon = useRef();
  const line1 = useRef();
  const line2 = useRef();



  useEffect(() => {
    const timer = setTimeout(() => {
      notification.current.style.animation = 'disappear 8s'
    }, 3000)
    return () => clearTimeout(timer)
  })

  const hoverOverlay = (e) => {
    let rect = overlay.current.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    overlay.current.style.opacity = `1`;
    overlay.current.style.background = `radial-gradient(circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.04) 0%, transparent calc(5% + 0px)) no-repeat border-box border-box`;
    // console.log(1)
  }

  const openMenu = () => {
    hamMenu.current.classList.toggle('ham-on');
    hamIcon.current.classList.toggle('hamIcon')
    line1.current.classList.toggle('line1')
    line2.current.classList.toggle('line2')
  }

  const scrollBackgroundOnNavbar = () => {
    if (document.body.getBoundingClientRect().top < 0) {
      NavbarElement.current.style.background = 'var(--background-color)'
    }
    else if (document.body.getBoundingClientRect().top >= 0) {
      NavbarElement.current.style.background = 'transparent'
    }
  }
  window.addEventListener('scroll', scrollBackgroundOnNavbar)
  // scrollBackgroundOnNavbar()

  return (
    <div ref={overlay} onMouseMove={hoverOverlay} className='app'>
      {/* <div className="alert">⚡THIS WEBSITE IS UNDER SOME DEVELOPMENT CHANGES, IF YOU FACE ANY DIFFICULTIES, THEY WILL BE FIXED SOON.</div> */}
      <div ref={notification} className="notification">
        <h4>Disclaimer</h4>
        <p>This website uses features that are relatively new and advanced for some browser, please update your browser to latest version to experience completely.</p>
      </div>
      <Navbar hamIcon={hamIcon} line1={line1} line2={line2} NavbarElement={NavbarElement} hamMenu={hamMenu} openMenu={openMenu} />
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