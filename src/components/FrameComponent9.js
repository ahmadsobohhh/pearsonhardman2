import PropTypes from "prop-types";
import "./FrameComponent9.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent9 = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <div className={`frame-parent5 ${className}`}>
      <div className="mask-group-wrapper">
        <img
          className="mask-group-icon1"
          loading="lazy"
          alt=""
          src="./pearsonhardman2/mask-group-1@2x.png"
        />
      </div>
      <img className="frame-child" loading="lazy" alt="" src="./pearsonhardman2/vector-2.svg" />
      <div className="frame-wrapper2">
        <div className="about-us-parent">
          <div className="about-us">{translations[language].aboutUs}</div>
          <div className="helping-to-overcome">
            {translations[language].helpingToOvercome}
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent9.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent9;
