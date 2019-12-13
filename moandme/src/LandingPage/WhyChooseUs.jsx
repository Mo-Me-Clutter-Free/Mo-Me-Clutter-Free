import React from "react";
import Shelf from "../imgs/Shelf.png";
import Quality from "../imgs/Quality.png";
import Testimonials from "../imgs/Testimonials.png";
import Button from "react-bootstrap/Button";

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
            Our clients range from busy parents, business professionals,
            elderly, students, and everyone in between. Have you been waiting to
            take the steps to have someone finish your todo list you've been
            procrastinating on? If so we are here for that! Don't feel alone, 7
            out of 10 people struggle with finding time, energy, and the skills
            to reorganize their home.
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
          <Button
            className="container-3-button"
            href="https://www.yelp.com/biz/mo-and-me-clutter-free-santa-clarita"
          >
            Click Here!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
