import React, { useState } from 'react'
import NavbarLink from './NavbarLink/NavbarLink'
import './Navbar.css'
import NavbarHam from './NavbarHam/NavbarHam'

const Navbar = () => {
    return (
        <div className="navbar">
            <NavbarLink title={'//  Experience'} href={'#experience'}></NavbarLink>
            <NavbarLink title={'//  Projects'} href={'#projects'}></NavbarLink>
            <a href="#"> <img src="./opt 1.svg" alt="" className="navbar__logo" /></a>
            <NavbarLink title={'//  Technologies'} href={'#technologies'}></NavbarLink>
            <NavbarLink title={'//  Blogs'} href={'#blogs'}></NavbarLink>
            <NavbarHam></NavbarHam>
        </div >
    )
}




export default Navbar