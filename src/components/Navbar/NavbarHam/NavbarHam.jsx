import NavbarLink from "../NavbarLink/NavbarLink";

const NavbarHam = ({ openMenu, hamMenu, hamIcon, line1, line2 }) => {
    return (
        <>
            <div ref={hamIcon} onClick={openMenu} className="hamburger">
                <div ref={line1} className="hamburger__line1"></div>
                <div ref={line2} className="hamburger__line2"></div>
            </div>
            <div ref={hamMenu} className="navbar__ham">
                <NavbarLink title={'Projects'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Experience'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Blogs'} href={'#projects'}></NavbarLink>
                <a target='_blank' href='https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfXpHnlHVlmDHFrMJZBnXKhsfNLKZzjvnTPvvGcQkRZNvBZJQKHCMJFmwhKtPHdKWcL' className="navbar__link">tanishqkrk@gmail.com</a>
                {/* <NavbarLink title={'Contact'} href={'#projects'}></NavbarLink> */}
                <a href='./resume.pdf' download={'./resume.pdf'} className="navbar__link">Download Resume</a>
            </div>
        </>
    )
}

export default NavbarHam;