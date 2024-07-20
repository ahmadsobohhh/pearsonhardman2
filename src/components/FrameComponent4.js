import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent4 = ({ className = "", propWidth, propFlex }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  const { language } = useLanguage();

  return (
    <div
      className={`the-case-of-william-accused-co-parent ${className}`}
      style={frameDivStyle}
    >
      <div className="the-case-of">
        The Case of William Accused of Corruption at B.M.O. Bank
      </div>
      <div className="lorem-ipsum-dolor3">
        {translations[language].getStartedByLooking}
      </div>
    </div>
  );
};

FrameComponent4.propTypes = {
  className: PropTypes.string,

  /** Style props */
  propWidth: PropTypes.any,
  propFlex: PropTypes.any,
};

export default FrameComponent4;
