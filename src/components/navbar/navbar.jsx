import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import "./navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="/logo.jpg" alt="Synergz Logo" className="logo-image" />
          <span>Synergz</span>
        </a>
        <div className="hamburger" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className={`nav-links ${isOpen ? 'active' : ''}`}>
          <NavLink to="/" activeClassName="active" onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/aboutus" activeClassName="active" onClick={toggleMenu}>About Us</NavLink>
          <NavLink to="/ourwork" activeClassName="active" onClick={toggleMenu}>Our Work</NavLink>
          <NavLink to="/services" activeClassName="active" onClick={toggleMenu}>Services</NavLink>
          <NavLink to="/careers" activeClassName="active" onClick={toggleMenu}>Careers</NavLink>
          <NavLink to="/contactus" activeClassName="active" onClick={toggleMenu}>Contact Us</NavLink>
          <div className="right">
            <a href="" onClick={toggleMenu}>Login</a>
            <a href="" className="register" onClick={toggleMenu}>Register</a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;