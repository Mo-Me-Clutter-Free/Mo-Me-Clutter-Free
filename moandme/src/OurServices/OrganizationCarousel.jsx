import React, { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import diningbefore from "../imgs/OrganizationCarousel/diningbefore.JPG";
import diningafter from "../imgs/OrganizationCarousel/diningafter.JPG";
import kitchenbefore from "../imgs/OrganizationCarousel/kitchenbefore.JPG";
import kitchenafter from "../imgs/OrganizationCarousel/kitchenafter.JPG";
import kitchenbefore2 from "../imgs/OrganizationCarousel/kitchenbefore2.JPG";
import kitchenafter2 from "../imgs/OrganizationCarousel/kitchenafter2.JPG";

import kidsroombefore from "../imgs/OrganizationCarousel/kidsroombefore.JPG";
import kidsroomafter from "../imgs/OrganizationCarousel/kidsroomafter.JPG";
import girlroombefore from "../imgs/OrganizationCarousel/girlroombefore.JPG";
import girlroomafter from "../imgs/OrganizationCarousel/girlroomafter.jpg";
import garagebefore from "../imgs/OrganizationCarousel/garagebefore.JPG";
import garageafter from "../imgs/OrganizationCarousel/garageafter.JPG";

export default class OrganizationCarousel extends Component {
  render() {
    return (
      <Carousel className="carousel">
        <div className="carousel-test">
          <img src={kitchenbefore2} alt="Org1" />
          <p className="legend">Kitchen Before</p>
        </div>
        <div className="carousel-test">
          <img src={kitchenafter2} alt="Org1" />
          <p className="legend">Kitchen After</p>
        </div>
        <div className="carousel-test">
          <img src={diningbefore} alt="Org1" />
          <p className="legend">Dining Room Before</p>
        </div>
        <div className="carousel-test">
          <img src={diningafter} alt="Org1" />
          <p className="legend">Dining Room After</p>
        </div>
        <div className="carousel-test">
          <img src={kitchenbefore} alt="Org1" />
          <p className="legend">Kitchen Before</p>
        </div>
        <div className="carousel-test">
          <img src={kitchenafter} alt="Org1" />
          <p className="legend">Kitchen After</p>
        </div>
        <div className="carousel-test">
          <img src={kidsroombefore} alt="Org1" />
          <p className="legend">Kids Room Before</p>
        </div>
        <div className="carousel-test">
          <img src={kidsroomafter} alt="Org1" />
          <p className="legend">Kids Room After</p>
        </div>
        <div className="carousel-test">
          <img src={girlroombefore} alt="Org1" />
          <p className="legend">Girls Room Before</p>
        </div>
        <div className="carousel-test">
          <img src={girlroomafter} alt="Org1" />
          <p className="legend">Girls Room After</p>
        </div>
        <div className="carousel-test">
          <img src={garagebefore} alt="Org1" />
          <p className="legend">Garage Before</p>
        </div>
        <div className="carousel-test">
          <img src={garageafter} alt="Org1" />
          <p className="legend">Garage After</p>
        </div>
      </Carousel>
    );
  }
}
