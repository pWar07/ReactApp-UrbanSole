import "./App.css";
import NavBar from "./header/nav";
import Foot from "./footer/footer";
import Main from "./Pages/home";
import Slider from "./components/swiper";
import Product from "./products/prodPage";
import Collection from "./home/collection";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { items } from "./components/data";

// const App = () => {
//   return (
//       <div className="app">
//         <Routes> 
//           <HomeLayoutRoute path="/" element={<Main />} />
          
//         </Routes>
//       </div>
//   );
// };

const App = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Foot />
      {/* <Slider/> */}
      {/* <Product /> */}
      {/* <Collection/> */}
    </>
  );
}

export default App;
