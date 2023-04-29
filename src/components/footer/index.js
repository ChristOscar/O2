import React from "react";
import { useNavigate } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const navigate = useNavigate();

  const handleClick = (path) => {
    navigate(path);
  };

  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <h3>OutDoorsy</h3>
        </div>
        <div className="footer-right">
          <ul>
            <li>
              <a onClick={() => handleClick("/")}>Home</a>
            </li>
            <li>
              <a onClick={() => handleClick("/about")}>About</a>
            </li>
            <li>
              <a onClick={() => handleClick("/services")}>Services</a>
            </li>
            <li>
              <a onClick={() => handleClick("/contact")}>Contact</a>
            </li>
          </ul>
        </div>
      </footer>
      <div className="footer-bottom">
        <h4>Created By NITP Tech @ 2023</h4>
      </div>
    </>
  );
}

export default Footer;
