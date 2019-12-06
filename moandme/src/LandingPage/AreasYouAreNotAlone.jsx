import React from "react";
import Clutter from "../imgs/Clutter.jfif";
const AreasYouAreNotAlone = () => {
  return (
    <section className="areas-container">
      <h1 className="areas-header"> Areas We Can Help You With</h1>
      <div className="area-btns">
        <button className="btn-home">Home</button>
        <button className="btn-staging">Staging</button>
        <button className="btn-garage">Garage</button>
        <button className="btn-storage">Storage</button>
        <button className="btn-workplace">Workplace</button>
        <button className="btn-organization">Organization</button>
      </div>
      <div className="alone-container">
        <div className="line"></div>
        <div className="header">
          <h1 className="not-alone-header"> You Are Not Alone!</h1>
        </div>
        <div className="alone-inner-container">
          <div className="many-others">
            <img className="clutter-img2" src={Clutter} alt="Clutter" />
            <h2 className="many-others-header">Are you like so many others?</h2>
            <ul>
              <li className="many-others-list">Overwhelmed with clutter?</li>
              <li className="many-others-list">Drowning in paperwork?</li>
              <li className="many-others-list">
                Fighting with a loved one about the clutter?{" "}
              </li>
              <li className="many-others-list">
                Buying replacements for things you own but can't find?{" "}
              </li>
              <li className="many-others-list">Can’t park in the garage? </li>
              <li className="many-others-list">Selling your home?</li>
            </ul>
            <h2 className="call-header">
              If so, it's time for you to call Mo & Me Clutter Free!
            </h2>
            <p className="call-p">
              Our clients are: business professionals, parents, elderly, and
              more! Clutter and disorganization affects a large portion of the
              population (7 out of 10 people). Many don't have the time or the
              know-how to organize their spaces. Let us help you take that next
              step to organize your life.
            </p>
          </div>
          <img className="clutter-img" src={Clutter} alt="Clutter" />
        </div>
      </div>
    </section>
  );
};

export default AreasYouAreNotAlone;
