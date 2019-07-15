import React from 'react';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__container'>
        <img src={logo} alt='Teaching Hand' className="navbar__logo"></img>
        <Link to='/'>
          Sair <FontAwesomeIcon icon={faSignOutAlt} size='lg'/>
        </Link>
      </div>
    </nav>
  )
}

export default Navbar;