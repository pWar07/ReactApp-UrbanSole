import { boot } from "../components/data";
import React, { useState } from "react";
import "../products/prodPage.css";
import { Link,ScrollRestoration } from "react-router-dom";
import NavBar from "../header/nav";
import Foot from "../footer/footer";

const SBoot = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = boot.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div id="prodPage">
        <div className="filterMenu">
          {/* <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          /> */}
          <div className="byBrand">
            <p className="title1">Search by Brand</p>
            <Link className="prodLink" to="/product/nike"><p>Nike</p></Link>
            <Link className="prodLink" to="/product/adidas"><p>Adidas</p></Link>
            <Link className="prodLink" to="/product/woodland"><p>Woodland</p></Link>
            <Link className="prodLink" to="/product/puma"><p>Puma</p></Link>
          </div>
          <div className="byType">
            <p className="title1">Search Type</p>
            <Link className="prodLink" to="/product/sneaker"><p>Sneaker</p></Link>
            <Link className="prodLink" to="/product/formal"><p>Formal</p></Link>
            <Link className="prodLink" to="/product/boot"><p>Boots</p></Link>
            <Link className="prodLink" to="/product/canvas"><p>Canvas</p></Link>
          </div>
        </div>
        <div className="prodWrapper">
          {boot.map((product, index) => {
            return (
              <>
                <div key={product.id}>
                  <Link to={`/product/${product.id}`} class="card" key={index}>
                    <div class="image-content">
                      <div class="card-image">
                        <img src={product.img1} alt="" class="card-img1" />
                        <img src={product.img2} alt="" class="card-img2" />
                      </div>
                    </div>
                    <div class="card-content">
                      <h2 class="brand">{product.brandName}</h2>
                      <p class="title">{product.title}</p>
                      <p class="price">{product.price}</p>
                      <button class="button">View More</button>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <Foot />
      <ScrollRestoration />
    </>
  );
};

export default SBoot;
