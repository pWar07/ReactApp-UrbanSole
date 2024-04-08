import Foot from "../footer/footer";
import NavBar from "../header/nav";
import Contact from "../components/contact";
import aboutBg from "../assets/media/about-bg.jpeg";
import "./about.css";

function About() {
  return (
    <>
      <NavBar />
      <div id="about">
        <div class="cont">
          <div class="title">About UrbanSole</div>
          <div class="img-cont">
            <img src={aboutBg} alt="" />
          </div>
          <div class="text-cont">
            <p class="text1">
              From the very first sole, Urbansole has stood for one thing:
              harmony. We deliver footwear that has cutting-edge design with
              timeless comfort, shoes that are as stylish on day one as they are
              durable for years to come. Walk your path in confidence with
              Urbansole.
            </p>
            <p>
              <span>Founded </span>2024
            </p>
            <p>
              <span>Origin </span>India
            </p>
          </div>
        </div>
      </div>
      <Contact />
      <Foot />
    </>
  );
}
export default About;
