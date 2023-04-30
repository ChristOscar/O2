import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './Navbar.css';

const NavBar = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  };

  return (
    <nav>
      <div className="logo" onClick={handleLogoClick}>
        Outdoorsy
      </div>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/services">Services</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <div className="login">
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
};

export default NavBar;
