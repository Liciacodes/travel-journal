import React from 'react'
import logo from '../images/logo.png'

const Navbar = () => {
  return (
    <nav>
     <div classname='logo'><img src={logo} alt='logo'/></div>
     <div><p className='logo-text'>my travel journal.</p></div>
    </nav>
  )
}

export default Navbar
