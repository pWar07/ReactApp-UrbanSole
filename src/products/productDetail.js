import "./productDetail.css";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { items } from "../components/data";
import { useEffect, useState, useRef } from "react";

import { PiShoppingCartLight } from "react-icons/pi";

// Toastify
import { Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


import { items1 } from "../components/data";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "../home/page3.css";

// import required modules
import { Pagination } from "swiper/modules";
import Cart from "../Pages/cart";





const SingleProd = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProds, setRelatedProds] = useState([]);
  const [mainImg, setMainImg] = useState("");

  // Cart
  const [cart, setCart] = useState([]);
  const addToCart = (
    id,
    category,
    brandName,
    title,
    img1,
    img2,
    img3,
    img4,
    description,
    price
  ) => {
    const obj = {
      id,
      category,
      brandName,
      title,
      img1,
      img2,
      img3,
      img4,
      description,
      price,
    };
    setCart([...cart, obj]);
    console.log("Cart element = ", cart);
    toast.success("Item Added to Cart", {
      position: "top-right",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Slide,
    });
  };

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
    setMainImg(filterProduct[0]?.img1 || "");

    const relatedProds = items.filter((p) => p.category === product.category);
    setRelatedProds(relatedProds);
    // console.log("RelatedProduct = ", relatedProds);
    setRelatedProds(relatedProds);
  }, [id, product.category]);

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Slide}
      />
      <div id="main1">
        <div id="header1">
          <>
            <Link to="/product" className="back-icon">
              <i className="ri-arrow-left-s-line"></i>
            </Link>
          </>
          <>
            <Link className="cart-icon" to="/cart">
              <PiShoppingCartLight />
              <span>{cart.length}</span>
              {/* Cart */}
            </Link>
          </>
        </div>
        <div className="page1">
          <div id="img-cont">
            <div className="left-cont">
              <div className="small">
                <img
                  src={product.img1}
                  onMouseEnter={() => setMainImg(product.img1)}
                  alt=""
                />
              </div>
              <div className="small">
                <img
                  src={product.img2}
                  onMouseEnter={() => setMainImg(product.img2)}
                  alt=""
                />
              </div>
              <div className="small">
                <img
                  src={product.img3}
                  onMouseEnter={() => setMainImg(product.img3)}
                  alt=""
                />
              </div>
              <div className="small">
                <img
                  src={product.img4}
                  onMouseEnter={() => setMainImg(product.img4)}
                  alt=""  
                />
              </div>
            </div>
            <div className="right-cont">
              <div className="hero-img">
                <img src={mainImg} alt="" />
              </div>
            </div>
          </div>
          <div id="details">
            <h4>{product.brandName}</h4>
            <h1>{product.title}</h1>
            <h2 className="price">{product.price}</h2>
            <div className="sizes">
              <input
                onClick={() =>
                  addToCart(
                    product.id,
                    product.category,
                    product.brandName,
                    product.title,
                    product.img1,
                    product.img2,
                    product.img3,
                    product.img4,
                    product.description,
                    product.price
                  )
                }
                type="button"
                value="Add to cart"
              />
            </div>
            <div className="about">
              <h3>Product Details</h3>
              <p>{product.description}</p>
            </div>
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
    </>
  );
};

export default SingleProd;
