import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./CTA.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const CTA = ({ className = "" }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();

  const handleButtonClick = () => {
    navigate("/appointment");
  };

  return (
    <section className={`cta ${className}`}>
      <div className="cta-child" />
      <div className="we-help-you-with-quality-legal-parent">
        <div className="we-help-you">{translations[language].qualityLegalLawyer}</div>
        <div className="lorem-ipsum-dolor-sit-amet-con-wrapper">
          <div className="lorem-ipsum-dolor2">{translations[language].getStartedByLooking}</div>
        </div>
      </div>
      <div className="cta-inner">
        <button className="get-started-wrapper" onClick={handleButtonClick}>
          <div className="get-started1">{translations[language].getStarted}</div>
        </button>
      </div>
    </section>
  );
};

CTA.propTypes = {
  className: PropTypes.string,
};

export default CTA;
