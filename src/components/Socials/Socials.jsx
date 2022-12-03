import React from 'react'

import SocialsLink from './SocialsLink/SocialsLink'
import './SocialsLink/SocialsLink.css'
import './Socials.css'
const Socials = () => {
    return (
        <div className="socials">
            <div className="socials__links">
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfXpHnlHVlmDHFrMJZBnXKhsfNLKZzjvnTPvvGcQkRZNvBZJQKHCMJFmwhKtPHdKWcL" className="socials__links--mail">tanishqkrk@gmail.com</a>
                {/* <SocialsLink link={'https://mail.google.com/mail/u/0/#inbox?compose=CllgCJqZhfXpHnlHVlmDHFrMJZBnXKhsfNLKZzjvnTPvvGcQkRZNvBZJQKHCMJFmwhKtPHdKWcL'} icon={'fa-solid fa-envelope'}></SocialsLink> */}
                {/* <SocialsLink link={'https://www.linkedin.com/in/tanishq-kr-kaushal-835b0221b/'} icon={'fa-brands fa-linkedin'}></SocialsLink> */}
                {/* <SocialsLink link={'https://github.com/tanishqkrk'} icon={'fa-brands fa-github'}></SocialsLink> */}
                {/* <SocialsLink link={'https://www.instagram.com/tanishqkrk/'} icon={'fa-brands fa-instagram'}></SocialsLink> */}
                {/* <SocialsLink link={'https://www.twitter.com/tanishqkrk/'} icon={'fa-brands fa-twitter'}></SocialsLink> */}
            </div>
            <div className="socials__line"></div>
        </div>
    )
}

export default Socials