import "./contact.css";

function Contact() {
  return (
    <>
      <div id="contact">
        <div class="cont">
          <div class="title">
            <h1>Contact</h1>
            <h2>Us</h2>
          </div>
          <p>
            Stay up to date with the latest news on new arrivals, exclusive
            sales, and more.
          </p>
          <div class="subscribe">
            <div class="sub-cont">
              <input type="text" placeholder="email@example.com" />
              <input class="foot-btn" type="button" value="SUBSCRIBE" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
