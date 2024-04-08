import "./page4.css";
import p411 from "../assets/media/nike-logo.png";
import p412 from "../assets/media/nike1.jpeg";
import p421 from "../assets/media/woodland-logo.png";
import p422 from "../assets/media/woodland1.jpeg";
import p431 from "../assets/media/skechers-logo.png";
import p432 from "../assets/media/skechers1.jpg";
import p441 from "../assets/media/redchief-logo.png";
import p442 from "../assets/media/redchief1.jpeg";
import p451 from "../assets/media/bata-logo.png";
import p452 from "../assets/media/bata1.webp";
import p461 from "../assets/media/redtape-logo.png";
import p462 from "../assets/media/redtape1.webp";
import p471 from "../assets/media/puma-logo.png";
import p472 from "../assets/media/puma1.jpeg";
import p481 from "../assets/media/adidas-logo.png";
import p482 from "../assets/media/adidas1.webp";
import p491 from "../assets/media/nb-logo.png";
import p492 from "../assets/media/nb1.jpg";
import p4101 from "../assets/media/reebok-logo.png";
import p4102 from "../assets/media/reebok1.jpeg";
import p4111 from "../assets/media/converse-logo.png";
import p4112 from "../assets/media/converse1.jpeg";
import p4121 from "../assets/media/jordan-logo.png";
import p4122 from "../assets/media/jordan1.jpg";

function Pg4() {
  return (
    <div id="page4" data-scroll>
      <div class="title">
        <h1>Shop</h1>
        <h2>by brand</h2>
      </div>
      <div class="img-container">
        <div class="line">
          <div class="img-div">
            <div class="overlay">
              <img src={p411} class="alter" alt="" />
            </div>
            <img src={p412} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p421} class="alter" alt="" />
            </div>
            <img src={p422} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p431} class="alter1" alt="" />
            </div>
            <img src={p432} alt="" />
          </div>
        </div>
        <div class="line">
          <div class="img-div">
            <div class="overlay">
              <img src={p441} alt="" />
            </div>
            <img src={p442} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p451} class="alter1" alt="" />
            </div>
            <img src={p452} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p461} class="alter1" alt="" />
            </div>
            <img src={p462} alt="" />
          </div>
        </div>
        <div class="line">
          <div class="img-div">
            <div class="overlay">
              <img src={p471} class="alter1" alt="" />
            </div>
            <img src={p472} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p481} alt="" />
            </div>
            <img src={p482} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p491} class="alter1" alt="" />
            </div>
            <img src={p492} alt="" />
          </div>
        </div>
        <div class="line">
          <div class="img-div">
            <div class="overlay">
              <img src={p4101} class="alter" alt="" />
            </div>
            <img src={p4102} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p4111} class="alter" alt="" />
            </div>
            <img src={p4112} alt="" />
          </div>
          <div class="img-div">
            <div class="overlay">
              <img src={p4121} class="alter" alt="" />
            </div>
            <img src={p4122} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pg4;
