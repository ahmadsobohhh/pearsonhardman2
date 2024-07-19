import NameEmailLabels from "./NameEmailLabels";
import Message from "./Message";
import PropTypes from "prop-types";
import "./FrameComponent1.css";

const FrameComponent1 = ({ className = "" }) => {
  return (
    <section className={`contact-container-wrapper ${className}`}>
      <div className="contact-container">
        <div className="contact-form">
          <div className="form-fields">
            <h1 className="get-in-touch">Get In touch</h1>
            <div className="input-fields1">
              <div className="name-inputs">
                <NameEmailLabels
                  yourName="First Name*"
                  enterYourNamePlaceholder="Enter first name"
                  propMinWidth="240px"
                />
                <NameEmailLabels
                  yourName="Last Name*"
                  enterYourNamePlaceholder="Enter last name"
                  propMinWidth="240px"
                />
              </div>
              <div className="name-inputs1">
                <NameEmailLabels
                  yourName="Your Phone*"
                  enterYourNamePlaceholder="Enter your phone"
                  propMinWidth="240px"
                />
                <NameEmailLabels
                  yourName="Your Email*"
                  enterYourNamePlaceholder="Enter your email"
                  propMinWidth="240px"
                />
              </div>
              <button className="submit-button1">
                <div className="send-message">Done</div>
              </button>
            </div>
          </div>
          <div className="map">
            <img
              className="map-maker-ottawa-ontario-ca"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/-map-maker-ottawa-ontario-canada-aubergine@2x.png"
            />
          </div>
        </div>
        <div className="contact-details1">
          <div className="contact-info3">
            <img
              className="call-icon1"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/call1.svg"
            />
            <div className="contact-values-wrapper">
              <div className="contact-values">+613 890 7232</div>
            </div>
          </div>
          <div className="contact-info4">
            <img
              className="location-icon1"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/location1.svg"
            />
            <div className="uottawa-rd-on-k2r-0a1-wrapper">
              <div className="uottawa-rd-on">+7889 uOttawa Rd, ON K2R 0A1</div>
            </div>
          </div>
          <div className="contact-info5">
            <img
              className="message-icon1"
              loading="lazy"
              alt=""
              src="./pearsonhardman2/message1.svg"
            />
            <div className="pearsonhardmandomaincom-wrapper">
              <div className="pearsonhardmandomaincom">
                PearsonHardman@domain.com
              </div>
            </div>
          </div>
          <div className="contact-info6">
            <img className="time-square-icon" alt="" src="./pearsonhardman2/time-square.svg" />
            <div className="am-0900-pm-wrapper">
              <div className="am-0900">07.00 am - 09.00 pm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

FrameComponent1.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent1;
