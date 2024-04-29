import React from "react";
import puma1 from "../assets/media/products/pumaxbmw1.avif";
import puma2 from "../assets/media/products/pumaxbmw2.avif";
import puma3 from "../assets/media/products/pumaxbmw3.avif";
import puma4 from "../assets/media/products/pumaxbmw4.avif";
import prod11 from "../assets/media/products/prod11.jpg";
import prod12 from "../assets/media/products/prod12.jpg";
import prod13 from "../assets/media/products/prod13.jpg";
import prod14 from "../assets/media/products/prod14.jpg";
import { Link, ScrollRestoration } from "react-router-dom";

const Adidas = () => {
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
              <img src={prod11} alt="" />
            </div>
            <div class="small">
              <img src={prod12} alt="" />
            </div>
            <div class="small">
              <img src={prod13} alt="" />
            </div>
            <div class="small">
              <img src={prod14} alt="" />
            </div>
          </div>
          <div class="right-cont">
            <div class="hero-img">
              <img src={prod11} alt="" />
            </div>
          </div>
        </div>
        <div id="details">
          <h4>Adidas</h4>
          <h1>YEEZY 500 STONE TAUPE</h1>
          <h2 class="price">₹21,999.00</h2>
          <div class="sizes">
            <input type="button" value="Add to cart" />
          </div>
          <div class="about">
            <h3>Product Details</h3>
            <p>
              Inspired by a '90s archive edition, these adidas shoes get their
              design cred from a chunky, expressive silhouette re-proportioned
              for modern style. Stylised synthetic suede overlays accent a
              flexible mesh upper, and it all rides on a rubber outsole for
              traction and a solid step.
            </p>
          </div>
        </div>
      </div>
      <ScrollRestoration />
    </div>
  );
};

export default Adidas;
