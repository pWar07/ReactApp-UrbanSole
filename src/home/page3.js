import "./page3.css";
import card11 from "../assets/media/card11.jpg";
import card12 from "../assets/media/card12.jpg";
import card21 from "../assets/media/card21.jpg";
import card22 from "../assets/media/card22.jpg";
import card31 from "../assets/media/card31.jpg";
import card32 from "../assets/media/card32.jpg";
import card41 from "../assets/media/card41.jpg";
import card42 from "../assets/media/card42.jpg";
import card51 from "../assets/media/card51.jpg";
import card52 from "../assets/media/card52.jpg";
import card61 from "../assets/media/card61.jpg";
import card62 from "../assets/media/card62.jpg";
import card71 from "../assets/media/card71.jpg";
import card72 from "../assets/media/card72.jpg";
import card81 from "../assets/media/card81.jpg";
import card82 from "../assets/media/card82.jpg";
import card91 from "../assets/media/card91.jpg";
import card92 from "../assets/media/card92.jpg";

function Pg3() {
  return (
    <div id="page3">
      <div class="title2">
        <h1>Popular</h1>
        <h2>Collection</h2>
      </div>
      <div class="slide-container swiper">
        <div class="slide-content">
          <div class="card-wrapper swiper-wrapper">
            
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card11} alt="" class="card-img1" />
                  <img src={card12} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Converse</h2>
                <p class="description">CHUCK 70 LOW BLACK</p>
                <p class="price">₹ 5,999.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card21} alt="" class="card-img1" />
                  <img src={card22} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Adidas</h2>
                <p class="description">
                  CRAZY IIINFINITY 'WONDER GOLD/CORE BLACK/GREY SIX'
                </p>
                <p class="price">₹ 15,999.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card31} alt="" class="card-img1" />
                  <img src={card32} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Jordan</h2>
                <p class="description">
                  AIR JORDAN 6 RETRO 'WHITE/YELLOW OCHRE-BLACK'
                </p>
                <p class="price">₹ 18,395.000</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                {" "}
                /
                <div class="card-image">
                  <img src={card41} alt="" class="card-img1" />
                  <img src={card42} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Jordan</h2>
                <p class="description">
                  WMN'S AIR JORDAN 1 BROOKLYN 'LEGEND MD BROWN/LT OREWOOD BRN'
                </p>
                <p class="price">₹ 15,295.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card51} alt="" class="card-img1" />
                  <img src={card52} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Jordan</h2>
                <p class="description">
                  AIR JORDAN 9 RETRO 'SUMMIT WHITE/BLACK-DK POWDER BLUE'
                </p>
                <p class="price">₹ 19,295.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card61} alt="" class="card-img1" />
                  <img src={card62} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">New Balance</h2>
                <p class="description">BB550 SEA SALT 'WHITE'</p>
                <p class="price">₹ 12,999.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card71} alt="" class="card-img1" />
                  <img src={card72} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Nike</h2>
                <p class="description">
                  AIR MAX 90 GORE-TEX 'DK SMOKE GREY/SUMMIT WHITE-COOL GREY'
                </p>
                <p class="price">₹ 14,995.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card81} alt="" class="card-img1" />
                  <img src={card82} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Asics</h2>
                <p class="description">JAPAN S ST 'WHITE/DIGITAL VIOLET'</p>
                <p class="price">₹ 6,999.00</p>

                <button class="button">View More</button>
              </div>
            </div>
            <div class="card swiper-slide">
              <div class="image-content">
                <div class="card-image">
                  <img src={card91} alt="" class="card-img1" />
                  <img src={card92} alt="" class="card-img2" />
                </div>
              </div>

              <div class="card-content">
                <h2 class="name">Puma</h2>
                <p class="description">THE SMURFS RS-X 'TEAM LIGHT BLUE/RED'</p>
                <p class="price">₹ 11,999.00</p>

                <button class="button">View More</button>
              </div>
            </div>
          </div>
        </div>

        <div class="swiper-button-prev swiper-navBtn">
          <i class="ri-arrow-left-s-line"></i>
        </div>
        <div class="swiper-button-next swiper-navBtn">
          <i class="ri-arrow-right-s-line"></i>
        </div>
        <div class="swiper-pagination"></div>
      </div>
    </div>
  );
}
export default Pg3;
