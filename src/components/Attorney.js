import PropTypes from "prop-types";
import "./Attorney.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const Attorney = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <div className={`attorney ${className}`}>
      <div className="attorney-container">
        <img
          className="mask-group-icon7"
          loading="lazy"
          alt="weight scale image"
          src="./pearsonhardman2/mask-group-7@2x.png"
        />
        <div className="attorney-content">
          <div className="years-experience-parent">
            <div className="years-experience">
              <div className="years-has-been">
                {translations[language].attorneyYearsExperience}
              </div>
            </div>
            <img
              className="experience-icon"
              loading="lazy"
              alt="experience-icon"
              src="./pearsonhardman2/vector-12.svg"
            />
            <div className="stats">
              <div className="stats-container">
                <div className="stats-row">
                  <div className="stats-icons">
                    <img
                      className="tick-square-icon"
                      loading="lazy"
                      alt="tick squared icon"
                      src="./pearsonhardman2/tick-square.svg"
                    />
                  </div>
                  <div className="success-handled-cases">
                    {translations[language].successHandledCases}
                  </div>
                </div>
                <div className="stats-row1">
                  <div className="tick-square-wrapper">
                    <img
                      className="tick-square-icon1"
                      loading="lazy"
                      alt="tick square icon"
                      src="./pearsonhardman2/tick-square.svg"
                    />
                  </div>
                  <div className="responsible-raised">
                    {translations[language].responsibleRaised}
                  </div>
                </div>
                <div className="stats-row2">
                  <div className="tick-square-container">
                    <img
                      className="tick-square-icon2"
                      loading="lazy"
                      alt="tick square icon"
                      src="./pearsonhardman2/tick-square.svg"
                    />
                  </div>
                  <div className="success-handled-cases1">
                    {translations[language].successHandledCases}
                  </div>
                </div>
                <div className="stats-row3">
                  <div className="tick-square-frame">
                    <img
                      className="tick-square-icon3"
                      loading="lazy"
                      alt="tick square icon"
                      src="./pearsonhardman2/tick-square.svg"
                    />
                  </div>
                  <div className="responsible-raised1">
                    {translations[language].responsibleRaised}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Attorney.propTypes = {
  className: PropTypes.string,
};

export default Attorney;
