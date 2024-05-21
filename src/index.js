import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Log from "./Pages/login";
import About from "./Pages/about";
import Product from "./products/prodPage";
import SingleProd from "./products/productDetail";
import Puma from "./extra/puma";
import Adidas from "./extra/adidas";
import Nike from "./extra/nike";
import SwiperProd from "./products/swiperProdPage";
import ContactUs from "./Pages/contactUs";
import Release from "./Pages/release";
import Cart from "./Pages/cart";
import SNike from "./extra/searchNike";
import SAdidas from "./extra/searchAdidas";
import SWoodland from "./extra/searchWoodland";
import SPuma from "./extra/searchPuma";
import SSneaker from "./extra/searchSneaker";
import SFormal from "./extra/searchFormal";
import SBoot from "./extra/searchBoot";
import SCanvas from "./extra/searchCanvas";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/product",
    element: <Product />,
  },
  {
    path: "/popular/:id",
    element: <SwiperProd />,
  },
  {
    path: "/product/:id",
    element: <SingleProd />,
  },
  {
    path: "/contact",
    element: <ContactUs />,
  },
  {
    path: "/release",
    element: <Release />,
  },
  {
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/join-us",
    element: <Log />,
  },
  // EXTRA
  {
    path: "/pumaxbmw",
    element: <Puma />,
  },
  {
    path: "/adidas",
    element: <Adidas />,
  },
  {
    path: "/nike",
    element: <Nike />,
  },
  {
    path: "/product/nike",
    element: <SNike />,
  },
  {
    path: "/product/adidas",
    element: <SAdidas />,
  },
  {
    path: "/product/woodland",
    element: <SWoodland />,
  },
  {
    path: "/product/puma",
    element: <SPuma />,
  },

  {
    path: "/product/sneaker",
    element: <SSneaker />,
  },
  {
    path: "/product/formal",
    element: <SFormal />,
  },
  {
    path: "/product/boot",
    element: <SBoot />,
  },
  {
    path: "/product/canvas",
    element: <SCanvas />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
