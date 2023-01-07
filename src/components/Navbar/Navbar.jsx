import React from 'react'
import NavbarLink from './NavbarLink/NavbarLink'
import './Navbar.css'
import NavbarHam from './NavbarHam/NavbarHam'

const Navbar = ({ openMenu, hamMenu, NavbarElement, hamIcon, line1, line2 }) => {
    return (
        <div ref={NavbarElement} className="navbar">
            <NavbarLink title={'//  Experience'} href={'#experience'}></NavbarLink>
            <NavbarLink title={'//  Projects'} href={'#projects'}></NavbarLink>
            <a href="#"> <img src="./opt 1.svg" alt="" className="navbar__logo" /></a>
            <NavbarLink title={'//  Technologies'} href={'#technologies'}></NavbarLink>
            <NavbarLink title={'//  Blogs'} href={'#blogs'}></NavbarLink>
            <NavbarHam hamIcon={hamIcon} line1={line1} line2={line2} openMenu={openMenu} hamMenu={hamMenu}></NavbarHam>
        </div >
    )
}




export default Navbar