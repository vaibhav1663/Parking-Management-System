import React from 'react';
import {FiUser} from 'react-icons/fi';
import './Navbar.scss'

const Navbar = () => {
  return (
    <div className="app__navbar">
      <h2>LOGO</h2>
      <FiUser size={25} color="#fff" />
    </div>
  )
}

export default Navbar