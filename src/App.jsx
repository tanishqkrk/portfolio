import React from 'react'
import Navbar from './components/Navbar/Navbar'
import './theme/App.css'
import Hero from './components/Hero/Hero'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Technologies from './components/Technologies/Technologies'
import Blogs from './components/Blogs/Blogs'
import Socials from './components/Socials/Socials'
import Resume from './components/Resume/Resume'

const App = () => {
  return (
    <React.Fragment>
      <Navbar></Navbar>
      <Socials></Socials>
      <Resume></Resume>
      <Hero></Hero>
      <Experience></Experience>
      <Projects></Projects>
      <Technologies></Technologies>
      <Blogs></Blogs>
    </React.Fragment>
  )
}

export default App