import Hero from "../components/Hero";
import FrameComponent1 from "../components/FrameComponent1";
import "./ContactUs.css";

const ContactUs = () => {
  return (
    <div className="contact-us">
      <Hero
        image66="./pearsonhardman/image-66@2x.png"
        aboutUs="Contact us"
        heroShape="./pearsonhardman/vector-18.svg"
      />
      <FrameComponent1 />
    </div>
  );
};

export default ContactUs;
