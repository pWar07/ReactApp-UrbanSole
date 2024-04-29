import { items } from "../components/data";
import React, { useState } from "react";
import "./prodPage.css";
import { Link,ScrollRestoration } from "react-router-dom";
import NavBar from "../header/nav";
import Foot from "../footer/footer";

const Product = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = items.filter((product) =>
    product.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <>
      <NavBar />
      <div id="prodPage">
        <div className="filterMenu">
          <input
            type="text"
            placeholder="Search"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          />
          <div className="byBrand">
            <p className="title1">Search by Brand</p>
            <p>Nike</p>
            <p>Adidas</p>
            <p>Woodland</p>
            <p>Puma</p>
          </div>
          <div className="byType">
            <p className="title1">Search Type</p>
            <p>Sneaker</p>
            <p>Formal</p>
            <p>Boots</p>
            <p>Canvas</p>
          </div>
        </div>
        <div className="prodWrapper">
          {items.map((product, index) => {
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

export default Product;
