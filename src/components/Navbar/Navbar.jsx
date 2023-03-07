import React, { useEffect } from 'react'
import NavbarLink from './NavbarLink/NavbarLink'
import './Navbar.css'
import NavbarHam from './NavbarHam/NavbarHam'
import { useRef } from 'react'

const Navbar = ({ openMenu, hamMenu, NavbarElement, hamIcon, line1, line2, overlay }) => {
    const mailButton = useRef();
    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            if (document.body.getBoundingClientRect().top < 0) {
                mailButton.current.style.top = "90vh";
                mailButton.current.style.right = "0";
                // NavbarElement.current.style.backdropFilter = 'blur(5px)'
                NavbarElement.current.style.background = 'black'
            }
            else if (document.body.getBoundingClientRect().top >= 0) {
                mailButton.current.style.right = "20%";
                mailButton.current.style.top = "10px";
                NavbarElement.current.style.background = 'transparent'
                // NavbarElement.current.style.backdropFilter = 'blur(0)'
            }
        })
    }, [])



    return (
        <header ref={NavbarElement} className="navbar">
            <a href='' className='navbarTitle'><img src="/opt 1.svg" alt="" /></a>
            {/* <a href="#"> <img src="./opt 1.svg" alt="" className="navbar__logo" /></a> */}
            <a ref={mailButton} target={"_blank"} href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfXpHnlHVlmDHFrMJZBnXKhsfNLKZzjvnTPvvGcQkRZNvBZJQKHCMJFmwhKtPHdKWcL' className="navbarMail"><i className="fa-solid fa-envelope"></i></a>
            <div className="navbarLinks">
                <NavbarLink title={'Experience'} href={'#experience'}></NavbarLink>
                <NavbarLink title={'Projects'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Technologies'} href={'#technologies'}></NavbarLink>
                <NavbarLink title={'Blogs'} href={'#blogs'}></NavbarLink>
                <NavbarHam hamIcon={hamIcon} line1={line1} line2={line2} openMenu={openMenu} hamMenu={hamMenu}></NavbarHam>
            </div>
        </ header>
    )
}




export default Navbar