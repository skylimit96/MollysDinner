import React from "react";
import "./SkillsSection.css";
import skillsPic from './skills-pic.jpg';
import htmlIcon from "./icons/html.svg";
import cssIcon from "./icons/css.svg";
import reactIcon from "./icons/react.svg";
import jsIcon from "./icons/javascript.svg";

function SkillsSection() {
    return (
      <div className="skills-container">
        <div className="left-side-skills">
          <h1>Showcasing my primary skills as a Developer</h1>
          <h4>As a front-end Developer, my talent goes around interactivity and resposiveness.</h4>
          <div className="skills-icons">
            <img src={htmlIcon} alt="html-icon" className="icon"/>
            <img src={cssIcon} alt="css-icon" className="icon"/>
            <img src={reactIcon} alt="react-icon" className="icon"/>
            <img src={jsIcon} alt="js-icon" className="icon"/>
          </div>
        </div>
        <div className="right-side-skills">
          <img src={skillsPic} alt="skills-picture" className="skills-picture"/>
        </div>
      </div>
    );
  }
  
  export default SkillsSection;