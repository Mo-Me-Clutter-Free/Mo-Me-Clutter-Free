import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";

import FamilyRoomStaging from "../imgs/Carousels/FamilyRoomStaging.jpg";
import KitchenStaging from "../imgs/Carousels/KitchenStaging.jpg";
import OfficeStaging from "../imgs/Carousels/OfficeStaging.jpg";
import BathroomStaging from "../imgs/Carousels/BathroomStaging.jpg";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div className="carousel-test">
          <img src={FamilyRoomStaging} alt="Org1" />
          <p className="legend">Home Staging</p>
        </div>
        <div className="carousel-test">
          <img src={KitchenStaging} alt="Org1" />
          <p className="legend">Kitchen Staging!</p>
        </div>
        <div className="carousel-test">
          <img src={OfficeStaging} alt="Org1" />
          <p className="legend">Office Staging</p>
        </div>
        <div className="carousel-test">
          <img src={BathroomStaging} alt="Org1" />
          <p className="legend">Bathroom Staging</p>
        </div>
      </Carousel>
    );
  }
}
