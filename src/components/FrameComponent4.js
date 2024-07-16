import { useMemo } from "react";
import PropTypes from "prop-types";
import "./FrameComponent4.css";

const FrameComponent4 = ({ className = "", propWidth, propFlex }) => {
  const frameDivStyle = useMemo(() => {
    return {
      width: propWidth,
      flex: propFlex,
    };
  }, [propWidth, propFlex]);

  return (
    <div
      className={`the-case-of-william-accused-co-parent ${className}`}
      style={frameDivStyle}
    >
      <div className="the-case-of">
        The Case of William Accused of Corruption at B.M.O. Bank
      </div>
      <div className="lorem-ipsum-dolor3">{`The case that broke the century, click below.`}</div>
      <button className="see-detail-container">
        <div className="see-detail1">See detail</div>
      </button>
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
