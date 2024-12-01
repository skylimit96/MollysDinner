import React from "react";
import "./ExperienceSection.css";
import me from "./me.jpg";
import man from "./man.svg";
import woman from "./woman.svg";
import fb from "./icons/facebook.svg";
import ig from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";

function ExperienceSection() {
  return (
    <div className="exp-container">
      <div className="exp-header">
        <h5>Experienced</h5>
        <h1>Meet Our Team</h1>
        <p>Get to know the talented individuals behind our success</p>
      </div>
      <div className="team-cards">
        <div className="team-card">
          <img src={me} alt="" className="me-picture"></img>
          <h4>Amine Sehlaoui</h4>
          <h5>Web Developer</h5>
          <p>
            Amine is a skilled web developer with a passion for creating
            stunning websites.
          </p>
          <div className="social-icons">
            <img src={fb} alt="facebook" className="social-icon" />
            <img src={ig} alt="instagram" className="social-icon" />
            <img src={linkedin} alt="linkedin" className="social-icon" />
          </div>
        </div>
        <div className="team-card">
          <img src={man} alt="" className="me-picture" />
          <h4>Open for recrutement</h4>
          <h5>Back end Developer</h5>
          <p>
            We are in search for new passionate developers to join our team.
          </p>
          <div className="social-icons">
            <img src={fb} alt="facebook" className="social-icon" />
            <img src={ig} alt="instagram" className="social-icon" />
            <img src={linkedin} alt="linkedin" className="social-icon" />
          </div>
        </div>
        <div className="team-card">
          <img src={woman} alt="" className="me-picture" />
          <h4>Open for recrutement</h4>
          <h5>Graphic Designer UI/UX</h5>
          <p>A graphic designer will be a great addition to our team.</p>
          <div className="social-icons">
            <img src={fb} alt="facebook" className="social-icon" />
            <img src={ig} alt="instagram" className="social-icon" />
            <img src={linkedin} alt="linkedin" className="social-icon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperienceSection;
