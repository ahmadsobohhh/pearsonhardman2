import PropTypes from "prop-types";
import "./Attorney.css";

const Attorney = ({ className = "" }) => {
  return (
    <div className={`attorney ${className}`}>
      <div className="attorney-container">
        <img
          className="mask-group-icon7"
          loading="lazy"
          alt=""
          src="/mask-group-7@2x.png"
        />
        <div className="attorney-content">
          <div className="years-experience-parent">
            <div className="years-experience">
              <div className="years-has-been">
                274 Years has been a legal attorney and consulting
              </div>
            </div>
            <img
              className="experience-icon"
              loading="lazy"
              alt=""
              src="/vector-12.svg"
            />
            <div className="stats">
              <div className="stats-container">
                <div className="stats-row">
                  <div className="stats-icons">
                    <img
                      className="tick-square-icon"
                      loading="lazy"
                      alt=""
                      src="/tick-square.svg"
                    />
                  </div>
                  <div className="success-handled-cases">
                    Success Handled Cases
                  </div>
                </div>
                <div className="stats-row1">
                  <div className="tick-square-wrapper">
                    <img
                      className="tick-square-icon1"
                      loading="lazy"
                      alt=""
                      src="/tick-square.svg"
                    />
                  </div>
                  <div className="responsible-raised">Responsible Raised</div>
                </div>
                <div className="stats-row2">
                  <div className="tick-square-container">
                    <img
                      className="tick-square-icon2"
                      loading="lazy"
                      alt=""
                      src="/tick-square.svg"
                    />
                  </div>
                  <div className="success-handled-cases1">
                    Success Handled Cases
                  </div>
                </div>
                <div className="stats-row3">
                  <div className="tick-square-frame">
                    <img
                      className="tick-square-icon3"
                      loading="lazy"
                      alt=""
                      src="/tick-square.svg"
                    />
                  </div>
                  <div className="responsible-raised1">Responsible Raised</div>
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
