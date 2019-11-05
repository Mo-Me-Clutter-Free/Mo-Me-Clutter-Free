import React from "react";
import DemoCarousel from "./StagingCarousel";
import DemoCarousel2 from "./OrganizationCarousel";
import Nav from "../LandingPage/Navigation/Nav";
import Footer from "../LandingPage/Footer";
const OurServices = () => {
  return (
    <div>
      <div>
        <Nav />
        <h1 className="home-staging-header">
          Check out some of our Home Staging Work!
        </h1>
        <DemoCarousel />
        <h1 className="decluttering-header">
          Check out some of our De-cluttering and Organization Work!
        </h1>
        <DemoCarousel2 />
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
