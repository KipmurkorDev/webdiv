import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faPhone } from '@fortawesome/free-brands-svg-icons'

import './footer.css'
const Footer = () => {

    const element = <FontAwesomeIcon icon={faLinkedin} />
    const element2 = <FontAwesomeIcon icon={faGithub} />
    // const element3=<FontAwesomeIcon icon={faPhone} />
    // <FontAwesomeIcon icon={faPhone} />
    return (
        <div class="footer-distributed">
              <hr/>
              <>
            <div class="footer-left">
                <div class="footer-company-about"><strong> WebDiv Technology</strong></div>
                <div class="footer-links">
                    <a href="/#">Home</a>
                    <a href="/#">Services</a>
                    <a href="/#">Case Studies</a>
                    <a href="/#">Contact Us</a>
                </div>
            </div>
            <div class="footer-center">
                <div class="footer-company-about"><strong> Headquarters</strong></div>
                <div style={{}}>
                    <p><span>29, Kabiyet</span> Rift Valley, Kenya</p>
                </div>
                <div>
                    <FontAwesomeIcon icon="fa-solid fa-phone" />
                    <p>+254717330289</p>
                </div>

                <div>
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
                
            </div> 
            <hr/>
            </>
            <div className='rights-1'> 
            <div><p class="footer-company-name">WebDiv Techology Ltd ©2023</p> </div>
            <div class="footer-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/KipmurkorDev" className="link"> {element2} </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kipmurkor-emmanuel/" className="link"> {element}</a>
                </div>
            </div>

        </div>
    )
}

export default Footer