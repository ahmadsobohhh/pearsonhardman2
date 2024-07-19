import { useState } from "react";
import { useNavigate } from "react-router-dom";
import NameEmailLabels from "./NameEmailLabels";
import ServiceLawyer from "./ServiceLawyer";
import Message from "./Message";
import PropTypes from "prop-types";
import "./FrameComponent.css";

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    date: "",
    lawyer: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/appointment-confirmation", { state: formData });
  };

  return (
    <section className={`appointment-content-wrapper ${className}`}>
      <div className="appointment-content">
        <div className="form-content">
          <div className="appointment-title">
            <h1 className="lets-make-a">
               Make an Appointment with Us
            </h1>
          </div>
          <form className="input-fields" onSubmit={handleSubmit}>
            <div className="name-email">
              <NameEmailLabels
                yourName="Your Name*"
                enterYourNamePlaceholder="Enter your name"
                handleChange={handleChange}
                name="name"
              />
              <NameEmailLabels
                yourName="Your Email*"
                enterYourNamePlaceholder="Enter your email"
                handleChange={handleChange}
                name="email"
              />
            </div>
            <div className="phone-date">
              <NameEmailLabels
                yourName="Your Phone*"
                enterYourNamePlaceholder="Enter your phone"
                handleChange={handleChange}
                name="phone"
              />
              <NameEmailLabels
                yourName="Date*"
                enterYourNamePlaceholder="dd/mm/yy"
                handleChange={handleChange}
                name="date"
              />
            </div>
            <div className="service-lawyer">
              <ServiceLawyer
                services="Services*"
                chooseServices="Choose Services"
                handleChange={handleChange}
                name="services"
              />
              <ServiceLawyer
                services="Lawyer*"
                chooseServices="Choose your lawyer"
                handleChange={handleChange}
                name="lawyer"
              />
            </div>
            <Message handleChange={handleChange} name="message" />
            <button className="submit-button" type="submit">
              <div className="make-appointment">Make Appointment</div>
            </button>
          </form>
        </div>
      </div>
      <div className="image-content">
          <img src="./pearsonhardman2/mask-group-11@2x.png" alt="Appointment" />
        </div>
    </section>
  );
};

FrameComponent.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent;
