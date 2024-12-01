import "./Footer.css";
import React from "react";
import { EmailField } from '@hilla/react-components/EmailField.js';
import fb from "./icons/facebook.svg";
import ig from "./icons/instagram.svg";
import linkedin from "./icons/linkedin.svg";

function Footer() {
  return (
    <>
        <div className="footer">
            <div className="footer-links">
                <div className="about">
                    <h3>About Us</h3>
                    <p>Contact</p>
                    <p>FAQs</p>
                    <p>Support</p>
                    <p>Blog</p>
                    <p>Ressources</p>
                </div>
                <div className="service">
                    <h3>Services</h3>
                    <p>Portfolio</p>
                    <p>Testimonials</p>
                    <p>Partners</p>
                    <p>Events</p>
                    <p>Clients</p>
                </div>
                <div className="news">
                <h3>News</h3>
                    <p>Career</p>
                    <p>Investors</p>
                    <p>Terms</p>
                    <p>Privacy</p>
                    <p>Cookies</p>
                </div>
            </div>
            <div className="subscribe">
                <h3>Subscribe</h3>
                <h5>Stay connected with us for the latest updates and releases.</h5>
                <div className="subscribe-input">
                    <EmailField
                        pattern="^.+@gmail\.com$"
                        label="Email address"
                        errorMessage="Enter a valid gmail.com email address"
                        helperText="Only gmail.com addresses allowed"
                        autocomplete="off"
                        className="email-field"
                    />
                    <button>Join</button>
                </div>
                <h5>By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.</h5>
            </div>
        </div>
        <div className="copyright">
            <div className="rights">
                <span>2024 Amine Sehlaoui. All rights reserved</span>
                <span>Privacy Policy</span>
                <span>Terms of Service</span>
                <span>Cookie Settings</span>
            </div>
            <div className="social">
                <img src={fb} alt="facebook" className="social-icon" />
                <img src={ig} alt="instagram" className="social-icon" />
                <img src={linkedin} alt="linkedin" className="social-icon" />
            </div>
        </div>
    </>
  );
}

export default Footer;
