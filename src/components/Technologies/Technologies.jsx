import React from 'react'
import './Technologies.css'
import technologies from './technologies.json'
import Technology from './Technology'
// console.log(technologies);
const Technologies = () => {
    return (
        <div className="technologies" id='technologies'>
            <div className="technologies__title heading">//Technologies I use
                <div className="technologies__desc">Having these languages/libraries/frameworks/tools at my disposal I built responsive and good looking web apps!</div>
            </div>
            <div className="technologies__list">
                {
                    technologies.map(
                        (tech) => (<Technology key={tech.id} title={tech.title} src={tech.src} classname={tech.classname} />)
                    )
                }
            </div>
        </div>
    )
}

export default Technologies