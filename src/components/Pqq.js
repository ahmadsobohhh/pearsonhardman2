import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./Pqq.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const Pqq = ({ className = "" }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleButtonClick = () => {
    navigate("/appointment");
  };

  return (
    <section className={`pqq ${className}`}>
      <div className="testimonial-background" />
      <div className="testimonial-content1">
        <div className="testimonial-quote">
          <div className="we-help-you-with-quality-legal-wrapper">
            <h1 className="we-help-you1">{translations[language].bookAnAppointment}</h1>
          </div>
          <div className="lorem-ipsum-dolor9">
            {translations[language].dontLetWorst}
          </div>
        </div>
        <div className="testimonial-button">
          <button className="button-content" onClick={handleButtonClick}>
            <div className="get-started2">{translations[language].bookAnAppointment}</div>
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
