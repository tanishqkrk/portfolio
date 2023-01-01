import NavbarLink from "../NavbarLink/NavbarLink";

const NavbarHam = () => {
    return (
        <>
            <div className="hamburger">
                <div className="hamburger__line1"></div>
                <div className="hamburger__line2"></div>
            </div>
            <div className="navbar__ham">
                <div className="hamburger">
                    <div className="hamburger__line1"></div>
                    <div className="hamburger__line2"></div>
                </div>
                <NavbarLink title={'Projects'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Experience'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Blogs'} href={'#projects'}></NavbarLink>
                <NavbarLink title={'Contact'} href={'#projects'}></NavbarLink>
            </div>
        </>
    )
}

export default NavbarHam;