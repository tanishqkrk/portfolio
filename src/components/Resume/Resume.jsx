import React from 'react'
import './Resume.css'

const Resume = () => {
    return (
        <div className='resume'>
            <a href='./resume.pdf' download={'./resume.pdf'} className="resume__title">Download Resume</a>
            <div className="socials__line"></div>
        </div>
    )
}

export default Resume