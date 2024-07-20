import PropTypes from "prop-types";
import "./FrameComponent5.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent5 = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <section className={`homepage-1-inner1 ${className}`}>
      <div className="frame-parent12">
        <div className="testimonials-parent">
          <div className="testimonials">{translations[language].testimonials}</div>
          <div className="mask-group-container">
            <img
              className="mask-group-icon3"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/mask-group-3@2x.png"
            />
            <div className="our-happy-client-container">
              <p className="our-happy-client">{translations[language].ourHappyClientSay}</p>
              <p className="about-us1">{translations[language].aboutUs}</p>
            </div>
          </div>
        </div>
        <div className="testimonial-content">
          <img
            className="mask-group-icon4"
            loading="lazy"
            alt=""
            src="./pearsonhardman2/mask-group-4@2x.png"
          />
          <div className="testimonial-content-inner">
            <div className="frame-parent13">
              <div className="parent">
                <div className="lorem-ipsum-dolor1">
                  {translations[language].testimonialText}
                </div>
              </div>
              <div className="johnatan-g-parent">
                <div className="johnatan-g-">{translations[language].johnatanG}</div>
                <div className="frame-wrapper4">
                  <div className="star-parent">
                    <img
                      className="star-icon"
                      loading="lazy"
                      alt=""
                      src="./pearsonhardman2/star.svg"
                    />
                    <img
                      className="star-icon1"
                      loading="lazy"
                      alt=""
                      src="./pearsonhardman2/star.svg"
                    />
                    <img className="star-icon2" alt="" src="./pearsonhardman2/star.svg" />
                    <img className="star-icon3" alt="" src="./pearsonhardman2/star.svg" />
                    <img className="star-icon4" alt="" src="./pearsonhardman2/star-4.svg" />
                  </div>
                </div>
                <div className="reviewed">
                  <span>{translations[language].starRating}</span>
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
