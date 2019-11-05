import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import ClosetOrg1 from "../imgs/ClosetOrg1.jpg";

import Shelf from "../imgs/Shelf.png";

export default class DemoCarousel2 extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div className="carousel-test">
          <img src={Shelf} alt="Org1" />
          <p className="legend">Legend 1</p>
        </div>
        <div className="carousel-test">
          <img src={ClosetOrg1} alt="Org2" />
          <p className="legend">Legend 2</p>
        </div>
        <div className="carousel-test">
          <img src={ClosetOrg1} alt="Org3" />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel>
    );
  }
}
