import React from 'react'
import './NavbarLink.css'

const NavbarLink = ({ title, href }) => {
    return (
        <a className='navbar__link' href={href}>{title}</a>
    )
}

export default NavbarLink