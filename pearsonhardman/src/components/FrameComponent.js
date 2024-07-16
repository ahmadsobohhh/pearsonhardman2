import NameEmailLabels from "./NameEmailLabels";
import ServiceLawyer from "./ServiceLawyer";
import Message from "./Message";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <section className={`appointment-content-wrapper ${className}`}>
      <div className="appointment-content">
        <div className="appointment-title">
          <h1 className="lets-make-a">
            Let's Make a Appointment with us first
          </h1>
        </div>
        <div className="input-fields">
          <div className="name-email">
            <NameEmailLabels
              yourName="Your Name*"
              enterYourNamePlaceholder="Enter your name"
            />
            <NameEmailLabels
              yourName="Your Email*"
              enterYourNamePlaceholder="Enter your email"
              propMinWidth="502px"
            />
          </div>
          <div className="phone-date">
            <NameEmailLabels
              yourName="Your Phone*"
              enterYourNamePlaceholder="Enter your phone"
              propMinWidth="502px"
            />
            <ServiceLawyer
              services="Services*"
              chooseServices="Choose Services"
            />
          </div>
          <div className="phone-date1">
            <ServiceLawyer services="Date*" chooseServices="dd/mm/yy" />
            <ServiceLawyer
              services="Lawyer*"
              chooseServices="Choose your lawyer"
            />
          </div>
          <Message />
          <button className="submit-button">
            <div className="make-appointment">Make Appointment</div>
          </button>
        </div>
      </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
