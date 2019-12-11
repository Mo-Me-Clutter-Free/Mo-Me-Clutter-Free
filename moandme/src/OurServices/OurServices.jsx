import React from "react";
import StagingCarousel from "./StagingCarousel";
import OrganizationCarousel from "./OrganizationCarousel";
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
        <StagingCarousel />
        <h1 className="decluttering-header">
          Check out some of our De-cluttering and Organization Work!
        </h1>
        <OrganizationCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
