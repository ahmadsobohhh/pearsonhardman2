import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent2.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent2 = ({
  className = "",
  maskGroup,
  laitmanHarry,
  propHeight,
}) => {
  const frameDiv1Style = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  const { language } = useLanguage();

  return (
    <div className={`mask-group-parent2 ${className}`} style={frameDiv1Style}>
      <img
        className="mask-group-icon11"
        loading="lazy"
        alt=""
        src={maskGroup}
      />
      <div className="frame-wrapper7">
        <div className="laitman-harry-parent">
          <h1 className="laitman-harry">{laitmanHarry}</h1>
          <div className="senior-business-lawyer-wrapper">
            <div className="senior-business-lawyer2">
              {translations[language].teamProfessionalServices}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent2.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  laitmanHarry: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default FrameComponent2;
