import PropTypes from "prop-types";
import "./Pqq.css";

const Pqq = ({ className = "" }) => {
  return (
    <section className={`pqq ${className}`}>
      <div className="testimonial-background" />
      <div className="testimonial-content1">
        <div className="testimonial-quote">
          <div className="we-help-you-with-quality-legal-wrapper">
            <h1 className="we-help-you1">Book An Appointment</h1>
          </div>
          <div className="lorem-ipsum-dolor9">{`Lorem ipsum dolor sit amet consectetur. Commodo pulvinar molestie pellentesque urna libero velit porta. Velit pellentesque hac gravida pellentesque est semper. Duis lectus gravida ultricies eleifend in pharetra faucibus orci sem. `}</div>
        </div>
        <div className="testimonial-button">
          <button className="button-content">
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
