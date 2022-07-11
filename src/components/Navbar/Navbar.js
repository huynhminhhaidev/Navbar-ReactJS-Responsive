import React, { useState } from "react";
import { Link } from "react-router-dom";
import Social from "../Social/Social";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState(false);

  const handleClickMenu = () => {
    setMenu(!menu);
  };

  const handleCloseMenu = () => {
    setMenu(false);
  };

  return (
    <>
      <nav className="nav">
        <Link to="/" className="nav-logo">
          ReactJS <i class="fa-brands fa-react"></i>
        </Link>
        <div className="menu-icon" onClick={handleClickMenu}>
          <i className={menu ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul className={menu ? "nav-menu is-active" : "nav-menu"}>
          <li className="nav-item" onClick={handleCloseMenu}>
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item" onClick={handleCloseMenu}>
            <Link className="nav-link" to="/services">
              Services
            </Link>
          </li>
          <li className="nav-item" onClick={handleCloseMenu}>
            <Link className="nav-link" to="/about">
              About
            </Link>
          </li>
          <li className="nav-item" onClick={handleCloseMenu}>
            <Link className="nav-link" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav-item" onClick={handleCloseMenu}>
            <div className="nav-item-mobile">
              <Social></Social>
            </div>
          </li>
        </ul>
        <div className="nav-socials">
          <Social></Social>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
