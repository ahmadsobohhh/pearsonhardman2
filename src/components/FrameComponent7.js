import FrameComponent8 from "./FrameComponent8";
import PropTypes from "prop-types";
import "./FrameComponent7.css";

const FrameComponent7 = ({ className = "" }) => {
  return (
    <div className={`frame-parent6 ${className}`}>
      <div className="our-partnership-wrapper">
        <div className="our-partnership">Our Partnership</div>
      </div>
      <div className="frame-parent7">
        <div className="frame-wrapper3">
          <div className="daerazo-parent">
            <img
              className="daerazo-icon"
              loading="lazy"
              alt=""
              src="/daerazo.svg"
            />
            <div className="daerazo">Daerazo</div>
          </div>
        </div>
        <img className="frame-item" loading="lazy" alt="" src="/vector-3.svg" />
        <FrameComponent8 group2="/group-2.svg" miguxian="Miguxian" />
        <img
          className="frame-inner"
          loading="lazy"
          alt=""
          src="/vector-4.svg"
        />
        <FrameComponent8 group2="/jeninalyn.svg" miguxian="Jeninayln" />
        <img className="vector-icon" alt="" src="/vector-5.svg" />
        <FrameComponent8 group2="/superanzo.svg" miguxian="Superanzo" />
      </div>
    </div>
  );
};

FrameComponent7.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent7;
