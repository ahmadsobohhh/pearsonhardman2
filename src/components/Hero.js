import PropTypes from "prop-types";
import "./Hero.css";

const Hero = ({ className = "", image66, aboutUs, heroShape }) => {
  return (
    <header className={`hero ${className}`}>
      <img className="image-66-icon" alt="" src={"./image66"} />
      <div className="rectangle-parent">
        <div className="rectangle-div" />
        <div className="frame-child4" />
      </div>
      <div className="hero-navigation">
      </div>
      <div className="hero-content">
        <div className="hero-title">
          <h1 className="about-us2">{aboutUs}</h1>
        </div>
        <img
          className="hero-shape-icon"
          loading="lazy"
          alt=""
          src={"./pearsonhardman2/heroShape"}
        />
        <div className="hero-description">
          <div className="lorem-ipsum-dolor6">{`Meet our uOttawa and Carelton educated Lawyers, we only hire the best of the best and the top of the class.`}</div>
        </div>
      </div>
    </header>
  );
};

Hero.propTypes = {
  className: PropTypes.string,
  image66: PropTypes.string,
  aboutUs: PropTypes.string,
  heroShape: PropTypes.string,
};

export default Hero;
