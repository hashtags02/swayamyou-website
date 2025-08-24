import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav
      className={`navbar ${isOpen ? 'mobile-open' : ''}`}
      style={{
        backgroundImage: "url('/background.png')",
        backgroundSize: "auto",
        backgroundPosition: "middle-center",
        backgroundRepeat: "repeat",
      }}
    >
      <button
        className="menu-toggle"
        aria-label="Toggle navigation"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <FiX size={22} /> : <FiMenu size={22} />}
      </button>
      <div className="navbar-left">
        <ul>
          <li><a href="#home" className="nav-link">Home</a></li>
          <li><a href="#features" className="nav-link">Features</a></li>
          <li><a href="#solutions" className="nav-link">Solutions</a></li>
        </ul>
      </div>
      <div className="navbar-center">SWAYAMYOU</div>
      <div className="navbar-right">
        <button className="Sign">Book Demo</button>
      </div>
    </nav>
  );
}

export default Navbar;
