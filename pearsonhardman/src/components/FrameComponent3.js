import FrameComponent4 from "./FrameComponent4";
import PropTypes from "prop-types";
import "./FrameComponent3.css";

const FrameComponent3 = ({ className = "" }) => {
  return (
    <div className={`frame-wrapper5 ${className}`}>
      <div className="case-list-header-content-parent">
        <div className="case-list-header-content">
          <div className="cases1">Cases</div>
          <div className="we-have-handled">
            We have handled cases from some of our clients
          </div>
        </div>
        <div className="frame-parent14">
          <div className="frame-wrapper6">
            <div className="mask-group-parent1">
              <img
                className="mask-group-icon5"
                loading="lazy"
                alt=""
                src="/mask-group-5@2x.png"
              />
              <FrameComponent4 />
            </div>
          </div>
          <div className="case-link">
            <div className="more-cases">
              <div className="see-more">See more</div>
              <img
                className="arrow-right-34"
                loading="lazy"
                alt=""
                src="/arrow--right-3-4.svg"
              />
            </div>
            <img
              className="mask-group-icon6"
              loading="lazy"
              alt=""
              src="/mask-group-6@2x.png"
            />
            <div className="duplicate-case-container">
              <FrameComponent4 propWidth="unset" propFlex="1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

FrameComponent3.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent3;
