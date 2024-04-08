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
