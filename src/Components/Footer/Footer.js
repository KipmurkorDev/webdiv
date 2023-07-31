import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'
import './footer.css'
const Footer = () => {

    const element = <FontAwesomeIcon icon={faLinkedin} />
    const element2 = <FontAwesomeIcon icon={faGithub} />
    return (
        <div className="footer-distributed">
            <hr />
            <>
                <div className="footer-left">
                    <div className="footer-company-about"><strong> WebDiv Technology</strong></div>
                    <div className="footer-links">
                        <Link to="/">WebDiv</Link>
                        <Link to="/#">Services</Link>
                        <Link to="/#">Case Studies</Link>
                        <Link to="/contact">Contact Us</Link>
                    </div>
                </div>
                <div className="footer-center">
                    <div className="footer-company-about"><strong> Headquarters</strong></div>
                    <div>
                        <p><span>29, Rome</span> Rome, Italy</p>
                    </div>
                    <div>
                        <p>+254717330289</p>
                    </div>

                    <div>
                        <p><a href="mailto:webdivtechology@gmail.com">webdivtechology@gmail.com</a></p>
                    </div>

                </div>

                <div className="footer-right">
                    <p className="footer-company-about"><strong> Company</strong></p>
                    <div className='link'>
                        <Link to='/about'>About Us</Link>
                        <Link to='/privacy'>Privacy</Link>
                        <Link to='/terms'>Terms and Conditions</Link>
                        <Link to='/collections'>Collections and refund policy</Link>
                    </div>

                </div>
                <hr />
            </>
            <div className='rights-1'>
                <div><p className="footer-company-name">WebDiv Techology Ltd ©2023</p> </div>
                <div className="footer-icons">
                    <a target="_blank" rel="noopener noreferrer" href="https://github.com/KipmurkorDev" className="link"> {element2} </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/kipmurkor-emmanuel/" className="link"> {element}</a>
                </div>
            </div>

        </div>
    )
}

export default Footer