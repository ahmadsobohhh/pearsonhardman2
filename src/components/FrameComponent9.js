import PropTypes from "prop-types";
import "./FrameComponent9.css";

const FrameComponent9 = ({ className = "" }) => {
  return (
    <div className={`frame-parent5 ${className}`}>
      <div className="mask-group-wrapper">
        <img
          className="mask-group-icon1"
          loading="lazy"
          alt=""
          src="/mask-group-1@2x.png"
        />
      </div>
      <img className="frame-child" loading="lazy" alt="" src="/vector-2.svg" />
      <div className="frame-wrapper2">
        <div className="about-us-parent">
          <div className="about-us">About Us</div>
          <div className="helping-to-overcome">
            Helping to overcome and ease the legal burden
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
