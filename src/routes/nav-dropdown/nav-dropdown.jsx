import React, { useState } from 'react';
import './Navbar.css'; // Import your CSS file for styling

const NavDropDwon = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <a href="/">Logo</a>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">
          <a href="/">Home</a>
        </li>
        <li className="nav-item dropdown" onClick={toggleDropdown}>
          <a href="/" className="nav-link">
            Dropdown
          </a>
          {isOpen && (
            <ul className="dropdown-menu">
              <li><a href="/">Option 1</a></li>
              <li><a href="/">Option 2</a></li>
              <li><a href="/">Option 3</a></li>
            </ul>
          )}
        </li>
        <li className="nav-item">
          <a href="/">About</a>
        </li>
        <li className="nav-item">
          <a href="/">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
