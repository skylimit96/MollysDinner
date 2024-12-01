import "./RatingSection.css";
import React from "react";
import star from "./icons/star.svg";
import company from "./icons/company.svg";
import ceo from "./icons/ceo.svg";

function RatingSection() {
  return (
    <div className="rating-container">
       <div className="stars">
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
        <img src={star} alt="star" />
       </div>
       <div className="rating">
            <h3>Working with this web developer was an absolute pleasure. They understood my vision and brought it to life with their expertise and creativity. I couldn't be happier with the results.</h3>
       </div>
       <div className="rating-srouce">
          <div className="rating-source-info">
                <img src={ceo} alt="CEO-rating" />
                <div className="rating-source-name">
                    <h3>John Doe</h3>
                    <p>CEO, Company</p>
                </div>
          </div>
          <div className="rating-source-logo">
                <img src={company} alt="logo" />
          </div>
       </div>
    </div>
  )
}

export default RatingSection;
