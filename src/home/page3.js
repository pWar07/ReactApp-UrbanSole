import { items1 } from "../components/data1";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./page3.css";

// import required modules
import { Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

export default function Page3() {
  return (
    <>
      <div class="title">
        <h1>Popular</h1>
        <h2>Collection</h2>
      </div>
      <Swiper
        id="prodSlider"
        slidesPerView={3}
        spaceBetween={70}
        fadeEffect={true}
        // pagination={{
        //   el: ".swiper-pagination",
        //   clickable: true,
        //   mousewheel: true,
        // }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {items1.map((prod, index) => {
          return (
            <>
              <div>
                <SwiperSlide>
                  <Link to={`/popular/${prod.id}`} class="card swiper-slide">
                    <div class="image-content">
                      <div class="card-image">
                        <img src={prod.img1} alt="" class="card-img1" />
                        <img src={prod.img2} alt="" class="card-img2" />
                      </div>
                    </div>

                    <div class="card-content">
                      <h2 class="name">{prod.brandName}</h2>
                      <p class="description">{prod.title}</p>
                      <p class="price">{prod.price}</p>

                      <button class="button">View More</button>
                    </div>
                  </Link>
                </SwiperSlide>
              </div>
            </>
          );
        })}
      </Swiper>
    </>
  );
}
