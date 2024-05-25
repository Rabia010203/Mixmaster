import React from 'react'
import NavbarWrapper from "../assets/wrappers/Navbar"
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  return (
    <NavbarWrapper>
  <div className='nav-center'> 
<h2 className='logo'>MixMaster</h2>
<div className='nav-links'>
  <NavLink className="nav-link" to="/">Home</NavLink>
  <NavLink className="nav-link" to="/about"> About</NavLink>
  <NavLink className="nav-link" to="/newsletter">NewsLetter</NavLink>


</div>
</div> 

    </NavbarWrapper>
   
  )
}

export default Navbar
