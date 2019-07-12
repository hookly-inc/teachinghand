import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <img src={logo} alt='Teaching Hand' className="navbar__logo"></img>
        <Link to='/'>Sair</Link>
      </div>
    </nav>
  )
}

export default Navbar;