import "./page1.css";
import backg from "../assets/media/bg-img1.jpeg";
import backg1 from "../assets/media/backg.jpg";
import back1 from "../assets/media/back1.avif"

function Pg1() {
  return (
    <div id="page1">
    <img src={back1}></img>
      <h1>UrbanSole</h1>
      <h3>The Shoe Store</h3>
      <div class="bottom">
        <div class="social">
          <h4 class="link">
            <a href="https://www.instagram.com/">Instagram</a>
          </h4>
        </div>
        <h5>
          <i class="ri-arrow-down-wide-line"></i>
        </h5>
        <div class="social">
          <h4 class="link">
            <a href="https://www.facebook.com/">Facebook</a>
          </h4>
        </div>
      </div>
    </div>
  );
}
export default Pg1;
