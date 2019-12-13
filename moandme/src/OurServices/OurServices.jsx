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
          Check out some of our Organization Work!
        </h1>
        <StagingCarousel />
        <h1 className="decluttering-header">
          Check out some of our Decluttering Work!
        </h1>
        <h2 className="beforeafter">
          Before and After photos from a few of our happy customers!
        </h2>
        <p className="beforeafterp">
          We do everything from Purging and Decluttering, to Organization and
          Storage. We can assist in selling your home with staging, packing, and
          unpacking in the new home. Need organization tools and add-ons? We
          have you covered. We can supply bins, hangers, shelves, drawer
          organizers etc. at an extra cost.
        </p>
        <OrganizationCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
