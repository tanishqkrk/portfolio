import NavbarLink from "../NavbarLink/NavbarLink";

const NavbarHam = ({ openMenu, hamMenu }) => {
    return (
        <>
            <div onClick={openMenu} className="hamburger">
                <div className="hamburger__line1"></div>
                <div className="hamburger__line2"></div>
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