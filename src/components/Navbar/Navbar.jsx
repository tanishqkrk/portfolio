import React from 'react'
import NavbarLink from './NavbarLink/NavbarLink'
import './Navbar.css'
import NavbarHam from './NavbarHam/NavbarHam'
import { useRef } from 'react'

const Navbar = ({ openMenu, hamMenu, NavbarElement, hamIcon, line1, line2 }) => {

    const mailButton = useRef();
    window.addEventListener('scroll', (e) => {
        if (document.body.getBoundingClientRect().top < 0) {
            mailButton.current.style.top = "90vh";
            mailButton.current.style.right = "0";
        }
        else if (document.body.getBoundingClientRect().top >= 0) {
            // mailButton.current.style.position = "absolute";
            mailButton.current.style.right = "20%";
            mailButton.current.style.top = "10px";
        }

    })

    return (
        <header ref={NavbarElement} className="navbar">
            <h1 className='navbarTitle'>TANISHQKRK</h1>
            <a ref={mailButton} target={"_blank"} href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfXpHnlHVlmDHFrMJZBnXKhsfNLKZzjvnTPvvGcQkRZNvBZJQKHCMJFmwhKtPHdKWcL' className="navbarMail"><i className="fa-solid fa-envelope"></i></a>
            <div className="navbarLinks">
                <NavbarLink title={'Experience'} href={'#experience'}></NavbarLink>
                <NavbarLink title={'Projects'} href={'#projects'}></NavbarLink>
                <a href="#"> <img src="./opt 1.svg" alt="" className="navbar__logo" /></a>
                <NavbarLink title={'Technologies'} href={'#technologies'}></NavbarLink>
                <NavbarLink title={'Blogs'} href={'#blogs'}></NavbarLink>
                <NavbarHam hamIcon={hamIcon} line1={line1} line2={line2} openMenu={openMenu} hamMenu={hamMenu}></NavbarHam>
            </div>
        </ header>
    )
}




export default Navbar