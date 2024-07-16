import Hero from "../components/Hero";
import FrameComponent1 from "../components/FrameComponent1";
import Footer from "../components/Footer";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Hero
        image66="/image-66@2x.png"
        aboutUs="Contact us"
        heroShape="/vector-18.svg"
      />
      <FrameComponent1 />
    </div>
  );
};

export default ContactUs;
