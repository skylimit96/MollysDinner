import React from "react";
import "./HeaderSection.css";

function HeaderSection() {
    return (
      <div className="header">
        <p className="header-title">
          We offer you <br />
          the experience
          <br /> you will never forget
        </p>
        <div className="header-buttons">
          <button className="menu-button">MENU</button>
          <button className="cmd-button">COMMANDER</button>
        </div>
      </div>
    );
  }
  
  export default HeaderSection;

