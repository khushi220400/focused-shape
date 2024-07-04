import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import AboutUs from "../AboutUs";

function About() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://th.bing.com/th/id/R.13820971a962ffbeb63a8fef36185b16?rik=vZ3lu%2blbhy6jxw&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f03%2f10%2f319576-photography-landscape-nature-water-grass-trees-plants-sunrise-lake.jpg&ehk=6WS2p9KknQa9F%2bgAH16n44NReuUyS2rzXah2zy7kiAw%3d&risl=&pid=ImgRaw&r=0"
        title="About"
        btnClass="hide"
      />
      <AboutUs />
      <Footer />
    </>
  );
}
export default About;
