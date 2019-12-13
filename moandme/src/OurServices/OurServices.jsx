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
          Check out some of our De-cluttering Work!
        </h1>
        <h2 className="beforeafter">
          Before and After photos from a few of our happy customers!
        </h2>
        <p className="beforeafterp">
          We do everything from Purging and Decluttering, to Organization and
          Storage. We can help get you ready for your new home with Staging,
          Packing, and Unpacking once you’re finished. Need organization tools
          and add-ons? We have you covered. Tupperware, bins, cubbies, shelves
          and all the tools to make your space a clutter free one can be
          acquired on an as needed basis.
        </p>
        <OrganizationCarousel />
        <Footer />
      </div>
    </div>
  );
};

export default OurServices;
