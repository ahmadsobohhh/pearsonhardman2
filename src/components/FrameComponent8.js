import PropTypes from "prop-types";
import "./FrameComponent8.css";

const FrameComponent8 = ({ className = "", group2, miguxian }) => {
  return (
    <div className={`logo-row-one-wrapper ${className}`}>
      <div className="logo-row-one">
        <div className="logo-row-two">
          <img
            className="logo-row-two-child"
            loading="lazy"
            alt=""
            src={group2}
          />
        </div>
        <div className="miguxian">{miguxian}</div>
      </div>
    </div>
  );
};

FrameComponent8.propTypes = {
  className: PropTypes.string,
  group2: PropTypes.string,
  miguxian: PropTypes.string,
};

export default FrameComponent8;
