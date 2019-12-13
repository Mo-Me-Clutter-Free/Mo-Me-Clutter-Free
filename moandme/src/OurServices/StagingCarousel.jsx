import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Desk from "../imgs/StagingCarousel/Desk.JPG";
import Garage from "../imgs/StagingCarousel/Garage.jpg";
import Fridge from "../imgs/StagingCarousel/Fridge.JPG";
import Organize from "../imgs/StagingCarousel/Organize.JPG";
import Organize2 from "../imgs/StagingCarousel/Organize2.JPG";
import Closet from "../imgs/StagingCarousel/Closet.JPG";
// import Organize2 from "../imgs/StagingCarousel/Organize2.JPG";

export default class StagingCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div className="carousel-test">
          <img src={Desk} alt="Org1" />
          <p className="legend">Home Staging</p>
        </div>
        <div className="carousel-test">
          <img src={Organize2} alt="Org1" />
          <p className="legend">Kitchen Staging!</p>
        </div>
        <div className="carousel-test">
          <img src={Organize} alt="Org1" />
          <p className="legend">Office Staging</p>
        </div>
        <div className="carousel-test">
          <img src={Garage} alt="Org1" />
          <p className="legend">Bathroom Staging</p>
        </div>
        <div className="carousel-test">
          <img src={Fridge} alt="Org1" />
          <p className="legend">Home Staging</p>
        </div>
        <div className="carousel-test">
          <img src={Closet} alt="Org1" />
          <p className="legend">Home Staging</p>
        </div>
      </Carousel>
    );
  }
}
