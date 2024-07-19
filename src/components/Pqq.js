import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Pqq.css";

const Pqq = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/appointment");
  };

  return (
    <section className={`pqq ${className}`}>
      <div className="testimonial-background" />
      <div className="testimonial-content1">
        <div className="testimonial-quote">
          <div className="we-help-you-with-quality-legal-wrapper">
            <h1 className="we-help-you1">Book An Appointment</h1>
          </div>
          <div className="lorem-ipsum-dolor9">{`Don't let the worst come to worst, click the button below to book a consultation now!`}</div>
        </div>
        <div className="testimonial-button">
          <button className="button-content" onClick={handleButtonClick}>
            <div className="get-started2">Book An Appointment</div>
          </button>
        </div>
      </div>
    </section>
  );
};

Pqq.propTypes = {
  className: PropTypes.string,
};

export default Pqq;
