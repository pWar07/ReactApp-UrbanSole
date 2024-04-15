import Contact from "../components/contact";
import Pg1 from "../home/page1";
import Pg2 from "../home/page2";
import Pg3 from "../home/page3";
import Review from "../home/testi";
// import Pg4 from "../home/page4";

function Main() {
  return (
    <>
      <Pg1 />
      <Pg2 />
      <Pg3 />
      {/* <Pg4 /> */}
      <Review />
      <Contact />
    </>
  );
}
export default Main;
