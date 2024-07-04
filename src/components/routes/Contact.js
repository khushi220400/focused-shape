import Navbar from "../Navbar";
import Hero from "../Hero";
import Footer from "../Footer";
import ContactForm from "../ContactForm";

function Contact() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg="https://wallpaperaccess.com/full/233392.jpg"
        title="Contact"
        btnClass="hide"
      />
      <ContactForm />
      <Footer />
    </>
  );
}
export default Contact;
