import Hero from "../components/Hero";
import FrameComponent1 from "../components/FrameComponent1";
import "./ContactUs.css";
import Footer from "../components/Footer";


const ContactUs = () => {
  return (
    <div className="contact-us">
      <Hero
        image66="./pearsonhardman2/image-66@2x.png"
        aboutUs="Contact us"
        heroShape="./pearsonhardman2/vector-18.svg"
      />
      <FrameComponent1 />
      <Footer />
    </div>
  );
};

export default ContactUs;
