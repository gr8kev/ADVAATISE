import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import BLUE from "../../assets/BLUE.png";
import hamburger from "../../assets/hamburger.png";
import cross from "../../assets/cross.png";

const Navbar = () => {
  const menuRef = useRef(null);

  const openMenu = () => {
    menuRef.current.style.right = "0";
  };

  const closeMenu = () => {
    menuRef.current.style.right = "-200px";
  };

  return (
    <div className="navbar">
      <Link to="/">
        <img src={BLUE} alt="" className="logo" />
      </Link>
      <img src={hamburger} onClick={openMenu} alt="" className="ham" />
      <nav className="bar">
        <ul ref={menuRef} className="menu">
          <img src={cross} onClick={closeMenu} alt="" className="cross" />
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Services">Services</Link>
          </li>
          <li>
            <Link to="/Contacts">Contact</Link>
          </li>
          <li>
            <Link to="/Portfolios">Portfolio</Link>
          </li>
          <li className="sig">
            <Link to="/Signin">Sign in</Link>
          </li>
        </ul>
        <Link to="/Signin" className="Signin ">
          Login
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
