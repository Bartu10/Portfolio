import React from 'react'
import '../scss/header.scss'
import { Link, NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div className='Header'>
      <NavLink to="/" exact activeClassName="active">
        About
      </NavLink>
      <NavLink to="/project" activeClassName="active">
        Project
      </NavLink>
      <NavLink to="/contact" activeClassName="active">
        Contact
      </NavLink>

    </div>
  );
};
export default Header

