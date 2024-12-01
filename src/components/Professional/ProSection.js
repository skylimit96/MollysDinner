import "./ProSection.css";
import React from "react";
import pic1 from "./pro-picture1.jpg";
import pic2 from "./pro-picture2.jpg";
import pic3 from "./pro-picture3.jpg";

function ProSection() {
  return (
    <div className="Pro-container">
        <div className="header-pro">
            <h5>Professional</h5>
            <h1>Creating Stunning Websites and Mobile Apps</h1>
            <p>We offer a wide range of services including web development, mobile app development, and e-commerce solutions. Our team of experienced developers will work closely with you to bring your ideas to life and deliver high-quality solutions that meet your business needs.</p>
        </div>
        <div className="service-cards">
            <div className="card">
                <img src={pic1} alt="" />
                <h3>Web Development Services</h3>
                <p>We specialize in creating responsive and user-friendly websites that are tailored to your specific requirements.</p>
            </div>
            <div className="card">
                <img src={pic2} alt="" />
                <h3>Mobile App Development</h3>
                <p>Our team has expertise in developing native and cross-platform mobile applications for iOS and Android.</p>
            </div>
            <div className="card">
                <img src={pic3} alt="" />
                <h3>E-commerce Solutions</h3>
                <p>We can help you build a secure and scalable e-commerce platform to sell your products online.</p>
            </div>
        </div>
        <div className="buttons-pro">
            <button className="more-button">Learn More</button>
            <button className="start-button">Get Started</button>
        </div>
    </div>
  )
}

export default ProSection;
