import React from "react";
import Shelf from "../imgs/Shelf.png";
import Quality from "../imgs/Quality.png";
import Testimonials from "../imgs/Testimonials.png";

const WhyChooseUs = () => {
  return (
    <div className="why-choose-us-container">
      <h1 className="why-choose-us-header">
        Why <span className="c">C</span>hoose Us?
      </h1>
      <div className="containers">
        <div className="choose-us-container-1">
          <img className="shelf-img" src={Shelf} alt="Shelf Img" />
          <p className="container-1-p">
            Mo & Me Clutter Free provides top-of-the line organizing expertise
            at an EXTREMELY COMPETITIVE price! We will provide you with a very
            positive and life-changing experience. With Mo & Me, you will
            receive customized organization designed to fit your space and
            needs.{" "}
          </p>
        </div>
        <div className="choose-us-container-2">
          <img className="quality-img" src={Quality} alt="Quality Img" />
          <ul>
            <li className="container-2-list">
              Experienced & Effective Services{" "}
            </li>
            <li className="container-2-list">Immediate & Dramatic Visual </li>
            <li className="container-2-list">
              Improvement in Your Surroundings{" "}
            </li>
            <li className="container-2-list">Customized Organization </li>
          </ul>
        </div>
        <div className="choose-us-container-3">
          <img
            className="testimonials-img"
            src={Testimonials}
            alt="Testimonials Img"
          />
          <p className="container-3-p">
            Don’t take our word for it, hear from some of our clients!
          </p>
          <button className="container-3-button">Click Here!</button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
