import React from "react";
import Nav from "../LandingPage/Navigation/Nav";
import Footer from "../LandingPage/Footer";
import MoandMe from "../imgs/MoandMe.png";
import Jamie from "../imgs/Jamie.png";
import Morgan from "../imgs/Morgan.png";
import momeLogo from "../imgs/Carousels/momeLogo.png";
const AboutUs = () => {
  return (
    <div className="meet-container">
      <Nav />
      <h1 className="mo-and-me">Meet Mo & Me</h1>
      <div className="who-we-are-container">
        <img className="MoandMeLogo" src={momeLogo} alt="Logo" />
        <img className="who-we-are-img" src={MoandMe} alt="moandme" />
        <div className="who-we-are-inner-container">
          <h2 className="who-we-are">Who We Are</h2>
          <img className="who-we-are-img2" src={MoandMe} alt="moandme" />
          <p className="who-we-are-p">
            Mother and daughter team! I am the one that comes in and has the
            plan of attack and sets the routine and new patterns for you. Morgan
            is meticulous at details and fine tuning what I have set in place.
            Together we have fun, get a lot done and make new friends along the
            way.
          </p>
        </div>
      </div>
      <div className="jamie-container">
        <div className="jamie-inner-container">
          <h2 className="jamie">Jamie</h2>
          <img className="jamie-img2" src={Jamie} alt="jamie-img" />
          <p className="jamie-p">
            I started this business in Santa Clarita, CA in March 2018 after
            hearing my whole life, “You’re so good at organizing you should
            charge for it.” I am so passionate about helping others to live life
            simpler. We don’t need to clutter our homes and lives with extra
            “stuff”. Instead, enjoy life and the ones around you, and by having
            a system in place for your home or office that you can maintain
            easily you will have the extra time.
          </p>
        </div>
        <img className="jamie-img" src={Jamie} alt="jamie-img" />
      </div>
      <div className="morgan-container">
        <img className="morgan-img" src={Morgan} alt="morgan-img" />
        <div className="morgan-inner-container">
          <h2 className="morgan">Morgan</h2>
          <img className="morgan-img2" src={Morgan} alt="morgan-img" />
          <p className="morgan-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Faucibus
            pulvinar elementum integer enim neque volutpat ac. Ultrices sagittis
            orci a scelerisque purus semper.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
