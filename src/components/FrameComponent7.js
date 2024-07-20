import FrameComponent8 from "./FrameComponent8";
import PropTypes from "prop-types";
import "./FrameComponent7.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent7 = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <div className={`frame-parent6 ${className}`}>
      <div className="our-partnership-wrapper">
        <div className="our-partnership">{translations[language].ourPartnership}</div>
      </div>
      <div className="frame-parent7">
        <div className="frame-wrapper3">
          <div className="daerazo-parent">
            <img
              className="daerazo-icon"
              loading="lazy"
              alt="icon of man"
              src="./pearsonhardman2/daerazo.svg"
            />
            <div className="daerazo">Daerazo</div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="frame" src="./pearsonhardman2/vector-3.svg" />
        <FrameComponent8 group2="./pearsonhardman2/group-2.svg" miguxian="Miguxian" />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="./pearsonhardman2/vector-4.svg"
        />
        <FrameComponent8 group2="./pearsonhardman2/jeninalyn.svg" miguxian="Jeninayln" />
        <img className="vector-icon" alt="" src="./pearsonhardman2/vector-5.svg" />
        <FrameComponent8 group2="./pearsonhardman2/superanzo.svg" miguxian="Superanzo" />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
