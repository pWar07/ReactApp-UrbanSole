import "./swiperProdPage.css";
import { Link, ScrollRestoration, useParams } from "react-router-dom";
import { items1 } from "../components/data1";
import { useEffect, useState } from "react";

const SwiperProd = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});

  useEffect(() => {
    const filterProduct = items1.filter((product) => product.id == id);
    setProduct(filterProduct[0]);
  }, [id]);

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
              <img src={product.img1} alt="" />
            </div>
            <div class="small">
              <img src={product.img2} alt="" />
            </div>
            <div class="small">
              <img src={product.img3} alt="" />
            </div>
            <div class="small">
              <img src={product.img4} alt="" />
            </div>
          </div>
          <div class="right-cont">
            <div class="hero-img">
              <img src={product.img1} alt="" />
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
      <ScrollRestoration/>
    </div>
  );
};

export default SwiperProd;