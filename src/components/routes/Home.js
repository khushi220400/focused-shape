import Navbar from "../Navbar";
import Hero from "../Hero";
import Destination from "../Destination";
import Trip from "../Trip";
import Footer from "../Footer";

function Home() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero"
        heroImg="https://image.lexica.art/full_jpg/732c2e20-a5fc-4e48-a53d-2e8b68eb1315"
        title="Your Journey Your Story"
        text="Choose Your Favourite Destination"
        buttonText="Travel Plan"
        url="/"
        btnClass="show"
      />
      <Destination />
      <Trip />
      <Footer />
    </>
  );
}
export default Home;
