import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../styles/Navbar.css";


function Navbar() {
    const [expandNavbar, setExpandNavbar] = useState(false);
  return (
    <div className='navbar' id={expandNavbar ? 'open' : 'close'}> 
      <div className='toggleButton'>
    <button 
    onClick={() => {
        setExpandNavbar((prev) => !prev)}}
    ><i class="fa-solid fa-bars"></i> </button>        
         </div>
         <div className='links'>
            <Link to="/"> Home </Link>
            <Link to="/projects"> Projects </Link>
            <Link to="/experience"> Experience </Link>
              </div>
    </div>
  )
}

export default Navbar