import PropTypes from "prop-types";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import "./FrameComponent10.css";

const FrameComponent10 = ({ className = "" }) => {
  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-parent4">
        <div className="path28-parent">
          <img
            className="path28-icon"
            loading="lazy"
            alt=""
            src="/path28.svg"
          />
          <div className="pearson-hardman-wrapper">
            <Link to="/" className="pearson-hardman1">Pearson Hardman</Link> {/* Use Link here */}
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="home-parent">
            <Link className="home" to="/">Home</Link>
            <Link className="search1" to="/search">Search</Link>
            <Link className="our-lawyers" to="/lawyer">Our Lawyers</Link>
            <Link className="book-an-appointment" to="/appointment">Book An Appointment</Link>
            <Link className="contact-us1" to="/contact-us">Contact Us</Link>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
