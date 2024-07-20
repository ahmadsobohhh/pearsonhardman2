import PropTypes from "prop-types";
import "./FrameComponent6.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent6 = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <section className={`services-wrapper ${className}`}>
      <div className="services">
        <div className="services-child" />
        <div className="services-inner">
          <div className="mask-group-group">
            <img
              className="mask-group-icon2"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/mask-group-2@2x.png"
            />
            <div className="professional-services-prepared">
              {translations[language].professionalServicesPrepared}
            </div>
          </div>
        </div>
        <div className="frame-parent8">
          <div className="service-option-row-parent">
            <div className="service-option-row">
              <div className="education-lawyer">
                {translations[language].teamProfessionalServices}
              </div>
            </div>
            <img
              className="arrow-right-3"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/arrow--right-3.svg"
            />
          </div>
          <img className="frame-child1" alt="" src="./vector-3-1.svg" />
          <div className="frame-parent9">
            <div className="business-law-wrapper">
              <div className="business-law">{translations[language].teamProfessionalServices}</div>
            </div>
            <img
              className="arrow-right-31"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/arrow--right-3.svg"
            />
          </div>
          <img className="frame-child2" alt="" src="./pearsonhardman2/vector-3-1.svg" />
          <div className="frame-parent10">
            <div className="education-lawyer-consultatio-wrapper">
              <div className="education-lawyer1">{translations[language].teamProfessionalServices}</div>
            </div>
            <img
              className="arrow-right-32"
              loading="lazy"
              alt=""
              src="
              ./pearsonhardman2/arrow--right-3.svg"
            />
          </div>
          <img className="frame-child3" alt="" src="./pearsonhardman2/vector-3-1.svg" />
          <div className="frame-parent11">
            <div className="business-law-container">
              <div className="business-law1">{translations[language].teamProfessionalServices}</div>
            </div>
            <img
              className="arrow-right-33"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/arrow--right-3.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent6.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent6;
