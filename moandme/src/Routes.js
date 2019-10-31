import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

//Routes
import LandingPage from "./LandingPage/LandingPage";
import AboutUs from "./AboutUs/AboutUs";
import OurServices from "./OurServices/OurServices";

import ContactUs from "./ContactUs/ContactUs";

const Routes = () => {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LandingPage} />

      <Route exact path="/About" component={AboutUs} />

      <Route exact path="/OurServices" component={OurServices} />

      <Route exact path="/ContactUs" component={ContactUs} />
    </BrowserRouter>
  );
};

export default Routes;
