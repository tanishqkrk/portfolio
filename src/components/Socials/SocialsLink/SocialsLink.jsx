import React from 'react'

const SocialsLink = ({ link, icon }) => {
    return (
        <a href={link} className="socials__links--link"><i className={icon}></i></a>
    )
}

export default SocialsLink