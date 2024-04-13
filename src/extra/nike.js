import nike1 from "../assets/media/products/prod41.png";
import nike2 from "../assets/media/products/prod42.jpeg";
import nike3 from "../assets/media/products/prod43.png";
import nike4 from "../assets/media/products/prod44.jpeg";
import { Link } from "react-router-dom";

const Nike = () => {
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
              <img src={nike1} alt="" />
            </div>
            <div class="small">
              <img src={nike2} alt="" />
            </div>
            <div class="small">
              <img src={nike3} alt="" />
            </div>
            <div class="small">
              <img src={nike4} alt="" />
            </div>
          </div>
          <div class="right-cont">
            <div class="hero-img">
              <img src={nike1} alt="" />
            </div>
          </div>
        </div>
        <div id="details">
          <h4>Nike</h4>
          <h1>Nike Air Max Dn</h1>
          <h2 class="price">₹8,999</h2>
          <div class="sizes">
            <input type="button" value="Add to cart" />
          </div>
          <div class="about">
            <h3>Product Details</h3>
            <p>Say hello to the next generation of Air technology. The Air Max Dn features our Dynamic Air unit system of dual-pressure tubes, creating a reactive sensation with every step. This results in a futuristic design that's comfortable enough to wear from day to night. Go ahead—Feel The Unreal.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Nike;
