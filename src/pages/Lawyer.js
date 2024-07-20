import Hero from "../components/Hero";
import Team from "../components/Team";
import Pqq from "../components/Pqq";
import "./Lawyer.css";
import Footer from "../components/Footer";

const Lawyer = () => {
  return (
    <div className="lawyer">
      <Hero
        image66="./pearsonhardman2/image-66@2x.png"
        aboutUs="Our Lawyers"
        heroShape="./pearsonhardman2/vector-18.svg"
      />
      <Team />
      <Pqq />
      <Footer> </Footer>
    </div>
  );
};

export default Lawyer;
