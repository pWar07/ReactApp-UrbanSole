import React from "react";
import puma1 from "../assets/media/products/pumaxbmw1.avif"
import puma2 from "../assets/media/products/pumaxbmw2.avif"
import puma3 from "../assets/media/products/pumaxbmw3.avif"
import puma4 from "../assets/media/products/pumaxbmw4.avif"
import { Link } from "react-router-dom";

const Puma = () => {
  return (
    <div id="main1">
      <div id="header1">
        <Link to="/" class="back-icon">
          <i class="ri-arrow-left-s-line"></i>
        </Link>
      </div>
      <div className="page1">
        <div id="img-cont">
          <div class="left-cont">
            <div class="small">
              <img src={puma1} alt="" />
            </div>
            <div class="small">
              <img src={puma2} alt="" />
            </div>
            <div class="small">
              <img src={puma3} alt="" />
            </div>
            <div class="small">
              <img src={puma4} alt="" />
            </div>
          </div>
          <div class="right-cont">
            <div class="hero-img">
              <img src={puma1} alt="" />
            </div>
          </div>
        </div>
        <div id="details">
          <h4>Puma</h4>
          <h1>BMW M Motorsport RS-X Unisex Sneakers</h1>
          <h2 class="price">₹8,999</h2>
          <div class="sizes">
            <input type="button" value="Add to cart" />
          </div>
          <div class="about">
            <h3>Product Details</h3>
            <p>The BMW M Motorsport version of the RS-X brings a splash of motorsport DNA to the PUMA sneaker that stands out for its bulky</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Puma;
