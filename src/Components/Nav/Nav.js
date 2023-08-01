import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import Model from '../Model/Model'
const Nav = () => {
  return (

    <header>
         <nav>
            <ul className="navbar">
             <li><Link to="/" className='link-nav'> WebDiv</Link></li>
             <li><Link to="/services" className='link-nav'>Services</Link></li>
             <li><Link to="/deliver" className='link-nav'>How We Deliver</Link></li>
             <li><Link to="/#" className='link-nav'>Careers</Link></li>
             <li><Model/></li>
           </ul>
         </nav>
    </header>    
  )
}

export default Nav