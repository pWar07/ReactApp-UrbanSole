import "./login.css";
import loginBg from "../assets/media/bg-login.avif";
import wardrobe from "../assets/media/wardrobe.jpg";
import { Link } from "react-router-dom";

function Log() {
  return (
    <>
      <div id="login">
        <img src={wardrobe} alt="" />
        <div class="cont1">
          <div class="btn">
            <Link to="/" class="btn-cont">
              <i class="ri-arrow-left-s-line"></i>
              <p>|</p>
              <p class="text">Back</p>
            </Link>
          </div>
        </div>
        <div class="cont2" id="container">
          <div class="form-container sign-up-container">
            <form action="#">
              <h1>Create Account</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="#" class="social">
                  <i class="ri-google-fill"></i>
                </a>
                <a href="#" class="social">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </div>
              <span>or use your email for registration</span>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign Up</button>
            </form>
          </div>
          <div class="form-container sign-in-container">
            <form action="#">
              <h1>Sign In</h1>
              <div class="social-container">
                <a href="#" class="social">
                  <i class="ri-facebook-fill"></i>
                </a>
                <a href="#" class="social">
                  <i class="ri-google-fill"></i>
                </a>
                <a href="#" class="social">
                  <i class="ri-linkedin-fill"></i>
                </a>
              </div>
              <span>or use your account</span>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <button>Sign In</button>
            </form>
          </div>
          <div class="overlay-container">
            <div class="overlay">
              <div class="overlay-panel overlay-left">
                <h1>Welcome Back</h1>
                <p>
                  To keep connected with us please login with your personal info
                </p>
                <button class="ghost" id="signIn">
                  Sign In
                </button>
              </div>
              <div class="overlay-panel overlay-right">
                <h1>Hello,Friend</h1>
                <p>Enter your personal details and start journey with us</p>
                <button class="ghost" id="signUp">
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Log;
