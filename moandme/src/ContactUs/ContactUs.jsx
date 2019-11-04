import React from "react";
import Nav from "../LandingPage/Navigation/Nav";
import Footer from "../LandingPage/Footer";
import facebook from "../imgs/facebook.png";
import instagram from "../imgs/instagram1.png";
const ContactUs = () => {
  return (
    <div className="contact-us-container">
      <Nav />
      <h1 className="contact-us">
        <span className="c">C</span>ontact Us
      </h1>
      <div className="contact-container">
        <div className="contact-info-container">
          <h3 className="consultation"> Schedule a Consultation</h3>
          <p className="hourly-estimate">
            For hourly estimates, please contact us at your convenience. We look
            forward to meeting you soon.
          </p>
          <h2 className="mo-and-me-contact"> Mo & Me Clutter Free</h2>
          <p className="location"> Santa Clarita, California, Unites States</p>
          <h3 className="contact-number">970.218.5691</h3>
          <h3 className="follow-us"> Follow us on social media!</h3>
          <div className="facebook-container">
            <img className="facebook-logo" src={facebook} alt="facebook logo" />
            <h2 className="facebook-username">@moandmeclutterfree</h2>
          </div>
          <div className="instagram-container">
            <img
              className="instagram-logo"
              src={instagram}
              alt="instagram logo"
            />
            <h2 className="instagram-username">@moandmeclutterfree</h2>
          </div>
        </div>
        <div className="contact-form-container">
          <form
            className="contact-form"
            name="contact "
            action="POST"
            data-netlify="true"
          >
            <label for="name">Name:</label>
            <input type="text" name="name" id="name" />

            <label for="phone-number">Phone Number:</label>
            <input type="text" name="phone-number" id="phone-number" />

            <label for="address">Address:</label>
            <input type="address" name="address" id="address" />

            <label for="message">Description of Needs:</label>
            <textarea type="message" name="message" id="message" />

            <input id="submit-btn" type="submit" value="Submit" />
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
