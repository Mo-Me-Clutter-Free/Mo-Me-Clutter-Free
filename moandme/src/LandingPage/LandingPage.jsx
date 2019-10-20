import React from "react";
import Nav from "./Navigation/Nav";
import CTA from "./CTA";
import AreasYouAreNotAlone from "./AreasYouAreNotAlone";
import WhyChooseUs from "./WhyChooseUs";
import Footer from "./Footer";
import "./LandingPage.scss";

class LandingPage extends React.Component {
  render() {
    return (
      <body>
        <Nav />
        <CTA />
        <AreasYouAreNotAlone />
        <WhyChooseUs />
        <Footer />
      </body>
    );
  }
}
export default LandingPage;
