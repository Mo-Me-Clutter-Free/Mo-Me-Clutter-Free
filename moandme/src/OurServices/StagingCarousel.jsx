import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ClosetOrg1 from "../imgs/ClosetOrg1.jpg";
import ClosetOrg2 from "../imgs/ClosetOrg2.jpg";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div className="carousel-test">
          <img src={ClosetOrg2} alt="Org1" />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={ClosetOrg1} alt="Org1" />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={ClosetOrg1} alt="Org1" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
