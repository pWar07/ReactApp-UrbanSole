import "./productDetail.css";
import prod11 from "../assets/media/products/prod11.jpg";
import prod12 from "../assets/media/products/prod12.jpg";
import prod13 from "../assets/media/products/prod13.jpg";
import prod14 from "../assets/media/products/prod14.jpg";
import { Link, useParams } from "react-router-dom";
import { items } from "../components/data";
import { useEffect, useState } from "react";

const SingleProd = () => {
  const { id } = useParams();

  const [product, setProduct] = useState({});
  const [relatedProds, setRelatedProds] = useState([])

  useEffect(() => {
    const filterProduct = items.filter((product) => product.id == id);
    setProduct(filterProduct[0]);

    const relatedProds = items.filter((p)=>p.category === product.category)
    setRelatedProds(relatedProds)
    // console.log("RelatedProduct = ",relatedProds)
    setRelatedProds(relatedProds)
  }, [id, product.category]);

  return (
    <div id="main1">
      <div id="header1">
        <Link to="/product" class="back-icon">
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
    </div>
  );
};

export default SingleProd;
