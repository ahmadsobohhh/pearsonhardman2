import Hero from "../components/Hero";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointment">
      <Hero
        image66="./image-66@2x.png"
        aboutUs="Appointment"
        heroShape="./vector-18.svg"
      />
      <FrameComponent />
      <Footer />
    </div>
  );
};

export default Appointment;
