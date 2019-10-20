import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="Nav">
      <div className="Logo">
        <h1>
          {" "}
          Mo & Me <span className="nav-clutter-free">Clutter Free</span>
        </h1>
      </div>
      <Link to="/about">About Us</Link>
      <div>
        <Link to="/OurServices">Our Services</Link>
      </div>
      <div>
        <Link to="/ContactUs">Contact Us</Link>
      </div>
    </div>
  );
};

export default Nav;
