import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faPhone} from '@fortawesome/free-brands-svg-icons'

import './footer.css'
const Footer = () => {

    const element = <FontAwesomeIcon icon={faLinkedin} />
    const element2 = <FontAwesomeIcon icon={faGithub} />
    // const element3=<FontAwesomeIcon icon={faPhone} />
    // <FontAwesomeIcon icon={faPhone} />
    return (
        <div class="footer-distributed">
            <div class="footer-left">

                <h3>WebDiv Technology<span></span></h3>
                <p class="footer-links">
                    <a href="/#" class="link-1">Home</a>

                    <a href="/#">Services</a>

                    <a href="/#">Case Studies</a>

                    <a href="/#">Contact Us</a>
                </p>

                <p class="footer-company-name">WebDiv Techology Ltd ©2023</p>
            </div>
            <div class="footer-center">
            <div class="footer-company-about"><strong> Headquarters</strong></div>

                <div>
                    <p><span>29, Kabiyet</span> Rift Valley, Kenya</p>
                </div>

                <div>
                <FontAwesomeIcon icon="fa-solid fa-phone" />                 
                <p>+254717330289</p>
                </div>

                <div>
                    {}
                    <p><a href="mailto:webdivtechology@gmail.com">webdivtechology@gmail.com</a></p>
                </div>

            </div>

            <div class="footer-right">

                <p class="footer-company-about"><strong> Company</strong></p>
                <div className='link'>
                    <a href='/'>About Us</a>
                    <a href='/'>Privacy</a>
                    <a href='/'>Terms and Conditions</a>
                    <a href='/'>Collections and refund policy</a>


                </div>

                <div class="footer-icons">

                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/KipmurkorDev" className="link">
                        {element2}
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kipmurkor-emmanuel/" className="link">
                        {element}
                    </a>


                </div>

            </div>

        </div>
    )
}

export default Footer