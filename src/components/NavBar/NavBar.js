import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav className="navbar">
        <p className="navbar-logo">MOLLY'S DINNER</p>
        <ul className="nav-links">
          <li>
            <a href="">MENU</a>
          </li>
          <li>
            <a href="">A PROPOS</a>
          </li>
          <li>
            <a href="">PERSONNEL</a>
          </li>
          <li>
            <a href="">AVIS</a>
          </li>
        </ul>
        <button className="navbar-button">CONTACTEZ NOUS</button>
    </nav>
  );
}

export default NavBar;