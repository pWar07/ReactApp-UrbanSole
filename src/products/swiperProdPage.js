import "./swiperProdPage.css";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { items1 } from "../components/data";
import { PiShoppingCartLight } from "react-icons/pi";


import { useEffect, useState, useRef } from "react";


// Toastify
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../home/page3.css";

// import required modules
import { Pagination } from "swiper/modules";




const SwiperProd = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [mainImg, setMainImg] = useState("");
  const [relatedProds, setRelatedProds] = useState([]);

  useEffect(() => {
    const filterProduct = items1.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    setMainImg(filterProduct[0]?.img1 || "");

    const relatedProds = items1.filter((p) => p.category === product.category);
    setRelatedProds(relatedProds);
    // console.log("RelatedProduct = ", relatedProds);
    setRelatedProds(relatedProds);
  }, [id, product.category]);



  return (
    <div id="main1">
      <div id="header1">
        <>
          <Link to="/" className="back-icon">
            <i className="ri-arrow-left-s-line"></i>
          </Link>
        </>
        <>
          <Link className="cart-icon" to="/cart">
            <PiShoppingCartLight />
            {/* Cart */}
          </Link>
        </>
      </div>
      <div className="page1">
        <div id="img-cont">
          <div class="left-cont">
            <div class="small">
              <img
                src={product.img1}
                onMouseEnter={() => setMainImg(product.img1)}
                alt=""
              />
            </div>
            <div class="small">
              <img
                src={product.img2}
                onMouseEnter={() => setMainImg(product.img2)}
                alt=""
              />
            </div>
            <div class="small">
              <img
                src={product.img3}
                onMouseEnter={() => setMainImg(product.img3)}
                alt=""
              />
            </div>
            <div class="small">
              <img
                src={product.img4}
                onMouseEnter={() => setMainImg(product.img4)}
                alt=""
              />
            </div>
          </div>
          <div class="right-cont">
            <div class="hero-img">
              <img src={mainImg} alt="" />
            </div>
          </div>
        </div>
        <div id="details">
          <h4>{product.brandName}</h4>
          <h1>{product.title}</h1>
          <h2 class="price">{product.price}</h2>
          <div class="sizes">
            <input type="button" value="Add to cart" />
          </div>
          <div class="about">
            <h3>Product Details</h3>
            <p>{product.description}</p>
          </div>
        </div>
      </div>
      <div className="relatedProd">
        <div class="title">
          <h1>Related</h1>
          <h2>Products</h2>
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
          {relatedProds.map((prod, index) => {
            return (
              <>
                <div>
                  <SwiperSlide>
                    <Link to={`/product/${prod.id}`} class="card swiper-slide">
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
      </div>

      <ScrollRestoration />
    </div>
  );
};

export default SwiperProd;
