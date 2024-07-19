import PropTypes from "prop-types";
import "./FrameComponent5.css";

const FrameComponent5 = ({ className = "" }) => {
  return (
    <section className={`homepage-1-inner1 ${className}`}>
      <div className="frame-parent12">
        <div className="testimonials-parent">
          <div className="testimonials">Testimonials</div>
          <div className="mask-group-container">
            <img
              className="mask-group-icon3"
              loading="lazy"
              alt=""
              src="./mask-group-3@2x.png"
            />
            <div className="our-happy-client-container">
              <p className="our-happy-client">Our Happy Client Say</p>
              <p className="about-us1">About Us</p>
            </div>
          </div>
        </div>
        <div className="testimonial-content">
          <img
            className="mask-group-icon4"
            loading="lazy"
            alt=""
            src="./mask-group-4@2x.png"
          />
          <div className="testimonial-content-inner">
            <div className="frame-parent13">
              <div className="parent">
                <div className="lorem-ipsum-dolor1">
                  Pearson Hardman defended my trillion dollar corporation against numerous false allegations that would have destroyed my company. I would recommend them and stay with them for as long as my career  goes on.
                </div>
              </div>
              <div className="johnatan-g-parent">
                <div className="johnatan-g-">{`Johnatan G - `}</div>
                <div className="frame-wrapper4">
                  <div className="star-parent">
                    <img
                      className="star-icon"
                      loading="lazy"
                      alt=""
                      src="./star.svg"
                    />
                    <img
                      className="star-icon1"
                      loading="lazy"
                      alt=""
                      src="./star.svg"
                    />
                    <img className="star-icon2" alt="" src="./star.svg" />
                    <img className="star-icon3" alt="" src="./star.svg" />
                    <img className="star-icon4" alt="" src="./star-4.svg" />
                  </div>
                </div>
                <div className="reviewed">
                  <span>{`4.8/5 - `}</span>
                  <span className="reviewed1">322 Reviewed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent5.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent5;
