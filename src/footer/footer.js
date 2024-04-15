import "./footer.css";
import amazon from "../assets/media/payments/amazon.svg";
import american from "../assets/media/payments/american-express.svg";
import discover from "../assets/media/payments/discover.svg";
import mastercard from "../assets/media/payments/mastercard.svg";
import mobikwik from "../assets/media/payments/mobikwik.svg";
import paytm from "../assets/media/payments/paytm.svg";
import rupay from "../assets/media/payments/rupay.svg";
import visa from "../assets/media/payments/visa.svg";

function Foot() {
  return (
    <div id="footer">
      <div class="upper">
        <div class="col1">
          <p class="foot-title">INFO</p>
          <p>Contact Us</p>
          <p>Release</p>
          <p>Stores</p>
          <p>Brands</p>
        </div>
        <div class="col2">
          <p class="foot-title">POLICIES</p>
          <p>Help Center</p>
          <p>Privacy Policy</p>
          <p>Returns & Exchange</p>
          <p>Terms & Conditions</p>
          <p>Order & Shipping</p>
          <p>Terms of Service</p>
        </div>
        <div class="col3">
          <p class="foot-title">OUR SOCIALS</p>
          <div class="foot-icons">
            <i class="ri-instagram-line"></i>
            <i class="ri-facebook-box-fill"></i>
          </div>
        </div>
        <div class="col4">
          <p class="foot-title">Find us here(Add Map)</p>
          <div className="mapCont">
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235014.29918790405!2d72.41493012913726!3d23.020158084541748!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712977820139!5m2!1sen!2sin" className="map"></iframe>
          </div>

        </div>
      </div>
      <div class="lower">
        <p>secured checkout with:</p>
        <div class="cont-pay">
          <img src={amazon} alt="" />
          <img src={american} alt="" />
          <img src={discover} alt="" />
          <img src={mastercard} alt="" />
          <img src={mobikwik} alt="" />
          <img src={paytm} alt="" />
          <img src={rupay} alt="" />
          <img src={visa} alt="" />
        </div>

        <div class="last">
          <p>
            © 2024,{" "}
            <span class="btm">
              <a href="#">UrbanSole</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Foot;
