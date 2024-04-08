import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./testi.css";

// import required modules
import { Autoplay, Navigation } from "swiper/modules";

export default function Review() {
  return (
    <>
      <div class="title">
        <h1>Genuine</h1>
        <h2>Reviews</h2>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          loop: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperCont">
          <div class="star">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p className="testiText">
            I've been searching for those limited-edition Jordans forever!
            UrbanSole came to the rescue. They had my size in perfect condition,
            and the price was way fairer than other resellers. Plus, the whole
            buying process was smooth. Now I can finally flex on my friends.
          </p>
          <p className="writerName">Michael L., Chicago</p>
        </SwiperSlide>
        <SwiperSlide className="swiperCont">
          <div class="star">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p className="testiText">
            I'm always a little hesitant buying used shoes online. But
            UrbanSole's authentication process is top-notch. They have experts
            who check every pair meticulously, so I know I'm getting the real
            deal. Plus, their customer service is amazing if you ever have any
            issues.
          </p>
          <p className="writerName">William H., Austin</p>
        </SwiperSlide>
        <SwiperSlide className="swiperCont">
          <div class="star">
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
            <i class="ri-star-fill"></i>
          </div>
          <p className="testiText">
            I was so bummed when I missed the release of those Yeezys. But then
            I remembered UrbanSole. They had my size in stock, and the
            authentication process gave me peace of mind knowing they were
            legit. Now I don't have to worry about FOMO (fear of missing out)
            anymore!
          </p>
          <p className="writerName">David C., New York City</p>
        </SwiperSlide>
        {/* <div class="swiper-button-prev swiper-navBtn">
          <i class="ri-arrow-left-s-line"></i>
        </div>
        <div class="swiper-button-next swiper-navBtn">
          <i class="ri-arrow-right-s-line"></i>
        </div> */}
      </Swiper>
    </>
  );
}
