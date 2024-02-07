import React from "react";
import { NavLink } from "react-router-dom";
import "../scss/header.scss"

const Header = () => {
  
  return (
    <div className="Header">
      <NavLink to="/" >About</NavLink>
      <NavLink to="/projects">Projects</NavLink>
      <NavLink to="/contact" >Contact</NavLink>
    </div>
  );
}

export default Header;
