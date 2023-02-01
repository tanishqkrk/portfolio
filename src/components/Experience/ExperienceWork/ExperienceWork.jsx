import React, { useEffect } from 'react'

const ExperienceWork = ({ title, firm, tenure, link, desc, tools }) => {
    return (
        <div>
            <div className='experience__work'>
                <div className="mainInfo">
                    <div className="experience__work--title">{title}</div>
                    <div><a target={'_blank'} href={link} className="experience__work--firm">{firm}</a></div>
                    <div className="experience__work--tenure">({tenure})</div>
                </div>
                <div className="experience__timeline"></div>
                <div className="addInfo">
                    <p className="experience__work--desc">{desc}</p>
                    <div className="imgs">
                        {
                            tools.map((tool) => {
                                return <img className='experience__img' height="40px" src={tool} width="40px" alt={tool} />
                            })
                        }
                    </div>
                </div>
            </div>
            <div className='experience__work-smaller'>
                <div className="experience__timeline"></div>
                <div className="mainInfo">
                    <div className="experience__work--title">{title}</div>
                    <div><a target={'_blank'} href={link} className="experience__work--firm">{firm}</a></div>
                    <div className="experience__work--tenure">({tenure})</div>
                    <div className="addInfo">
                        <p className="experience__work--desc">{desc}</p>
                        <div className="imgs">
                            {
                                tools.map((tool) => {
                                    return <img className='experience__img' height="50px" src={tool} width="50px" alt={tool} />
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ExperienceWork