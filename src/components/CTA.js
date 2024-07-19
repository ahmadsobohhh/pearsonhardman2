import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./CTA.css";

const CTA = ({ className = "" }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/appointment");
  };

  return (
    <section className={`cta ${className}`}>
      <div className="cta-child" />
      <div className="we-help-you-with-quality-legal-parent">
        <div className="we-help-you">We Help You With Quality Legal Lawyer</div>
        <div className="lorem-ipsum-dolor-sit-amet-con-wrapper">
          <div className="lorem-ipsum-dolor2">{`Click below to get started by looking at our lawyers`}</div>
        </div>
      </div>
      <div className="cta-inner">
        <button className="get-started-wrapper" onClick={handleButtonClick}>
          <div className="get-started1">Get Started</div>
        </button>
      </div>
    </section>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
};

export default CTA;
