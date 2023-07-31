import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
const Nav = () => {
  return (

    <header>
         <nav>
            <ul className="navbar">
             <li><Link to="/" className='link-nav'> WebDiv</Link></li>
             <li><Link to="/services" className='link-nav'>Services</Link></li>
             <li><Link to="/how" className='link-nav'>How We Deliver</Link></li>
             <li><Link to="/careers" className='link-nav'>Careers</Link></li>
             <li><Link to="/contact" className='link-nav'>Contact Us</Link></li>
           </ul>
         </nav>
    </header>    
  )
}

export default Nav