import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import Trip from "../Trip";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://th.bing.com/th/id/R.89e61a0e8d6c44e509f8f2cf2f6fe4c7?rik=TCOJWt%2biIWQazQ&riu=http%3a%2f%2fwallup.net%2fwp-content%2fuploads%2f2016%2f01%2f263693-nature-landscape-wildflowers-trees-calm-river-water-overcast-clouds.jpg&ehk=3Osm4z8dnIOblU0TL96czeVxkOM2Rqka97Z4A49AVKA%3d&risl=&pid=ImgRaw&r=0"
        title="Service"
        btnClass="hide"
      />
      <Trip />
      <Footer />
    </>
  );
}
export default Service;
