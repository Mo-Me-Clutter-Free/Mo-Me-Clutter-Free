import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About Us</Link>
        <Link to="/OurServices">Our Services</Link>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
      <div className="copyright">
        <h4> Copyright 2019 Mo&Me Clutter Free - All Rights Reserved.</h4>
      </div>
    </div>
  );
};

export default Footer;
