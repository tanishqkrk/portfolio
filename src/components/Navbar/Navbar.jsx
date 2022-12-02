import React from 'react'
import NavbarLink from './NavbarLink/NavbarLink'
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <NavbarLink title={'//  Experience'} href={'#experience'}></NavbarLink>
            <NavbarLink title={'//  Projects'} href={'#projects'}></NavbarLink>
            <a href="#"> <img src="./opt 1.svg" alt="" className="navbar__logo" /></a>
            <NavbarLink title={'//  Technologies'} href={'#technologies'}></NavbarLink>
            <NavbarLink title={'//  Blogs'} href={'#blogs'}></NavbarLink>
            <div className="navbar__ham">
                <NavbarLink title={'Projects'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Experience'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Blogs'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Contact'} href={'#projects'}></NavbarLink>
            </div>
        </div>
    )
}

export default Navbar