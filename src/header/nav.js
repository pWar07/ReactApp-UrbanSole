import "./nav.css";
import logo from "../assets/media/img1.png";
import { Link } from "react-router-dom";
import { useState } from "react";

function NavBar() {
  const [searchShow,setSearchShow]=useState(false);
  const searchBar = ()=>{
    setSearchShow(!searchShow)
  }
  return (
    <div id="header">
      <div id="nav">
        <img class="logo" src={logo} alt="" />
        <div class="cont">
          <div class="left">
          <p>
              <Link className="link" to="/">
                Home
              </Link>
            </p>
            <p>
              <Link className="link" to="/category">
                Categories
              </Link>
            </p>
            <p>
              <Link className="link" to="/about">
                About
              </Link>
            </p>
            <p>
              <Link className="link" to="/cart">
                Cart
              </Link>
            </p>
          </div>
          <div class="right">
            <input id="search" type="text" placeholder="Search" className={`${searchShow ? "show" : "notVisible"}`} />
            <p onClick={searchBar}>Search</p>
            <p>
              <Link className="link login-link" to="/join-us">
                Log In
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default NavBar;
