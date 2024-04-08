import "./page2.css";
import pumabmw from "../assets/media/pumaxbmw.jpg";
import airmax from "../assets/media/nike-airmax.png";
import yeezy from "../assets/media/adidas-yeezy.jpg";

function Pg2() {
  return (
    <div id="page2" data-scroll data-scroll-speed="1">
      <div class="title1">
        <h1>Latest</h1>
        <h2>Drops</h2>
      </div>
      <div class="cont1">
        <div class="left">
          <h1>PUMA X BMW M MOTORSPORT</h1>
          <img src={pumabmw} alt="" />
        </div>
        <div class="right">
          <div class="box1">
            <h1>
              Nike Air <br />
              Max DN
            </h1>
            <img src={airmax} alt="" />
          </div>
          <div class="box2">
            <h1>
              Adidas <br />
              YEEZY
            </h1>
            <img src={yeezy} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Pg2;
