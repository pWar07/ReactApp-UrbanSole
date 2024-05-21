import React from "react";
import img1 from "../assets/media/swiper/p11.webp";
import img2 from "../assets/media/swiper/p12.webp";
import img3 from "../assets/media/swiper/p13.webp";
import img4 from "../assets/media/swiper/p14.webp";

import "./cart.css";

const Cart = () => {
  return (
    <div id="cart">
      <div class="title">
        <h1>Cart</h1>
      </div>
      
      <div class="card swiper-slide">
        <div class="image-content">
          <div class="card-image">
            <img src={img1} alt="" class="card-img1" />
            <img src={img2} alt="" class="card-img2" />
          </div>
        </div>
        <div class="card-content">
          <h2 class="name">Adidas</h2>
          <p class="description">Shoe Name</p>
          <p class="price">100000</p>
        </div>
      </div>
    </div>
  );
};

export default Cart;
