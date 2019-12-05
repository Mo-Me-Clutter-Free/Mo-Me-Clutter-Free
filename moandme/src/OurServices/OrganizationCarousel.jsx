import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import KitchenBefore from "../imgs/Carousels/KitchenBefore.jpg";
import KitchenAfter from "../imgs/Carousels/KitchenAfter.jpg";
import KitchenBefore2 from "../imgs/Carousels/KitchenBefore2.jpg";
import KitchenAfter2 from "../imgs/Carousels/KitchenAfter2.jpg";

export default class DemoCarousel2 extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div className="carousel-test">
          <img src={KitchenBefore} alt="Org1" />
          <p className="legend">Kitchen Clean and De Cluttering Before</p>
        </div>
        <div className="carousel-test">
          <img src={KitchenAfter} alt="Org1" />
          <p className="legend">Kitchen Clean and De Cluttering After</p>
        </div>
        <div className="carousel-test">
          <img src={KitchenBefore2} alt="Org1" />
          <p className="legend">Kitchen Clean and De Cluttering Before3</p>
        </div>
        <div className="carousel-test">
          <img src={KitchenAfter2} alt="Org1" />
          <p className="legend">Kitchen Clean and De Cluttering After</p>
        </div>
      </Carousel>
    );
  }
}
