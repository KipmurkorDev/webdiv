import React, { useState } from 'react'
import './model.css'
function Model() {
    const [open, setOpen]=useState(false)
    return (
        <div>
        <button className='link-nav contact' onClick={()=>setOpen(!open)}>Contact Us</button>
        <div className={`${open === false ? 'modal' : ''}`}>
            <form className='modal-content'>            
            <lab> Name</lab>
            <input type='text' />
            </form>
        </div>
        </div>
    )
}

export default Model