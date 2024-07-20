import { useState } from "react";
import NameEmailLabels from "./NameEmailLabels";
import Message from "./Message";
import PropTypes from "prop-types";
import "./FrameComponent1.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent1 = ({ className = "" }) => {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Form submitted with data: ${JSON.stringify(formData)}`);
    // Add your form submission logic here
  };

  return (
    <section className={`contact-container-wrapper ${className}`}>
      <div className="contact-container">
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-fields">
            <h1 className="get-in-touch">{translations[language].getInTouch}</h1>
            <div className="input-fields1">
              <div className="name-inputs">
                <NameEmailLabels
                  yourName={translations[language].firstName}
                  enterYourNamePlaceholder={translations[language].enterFirstNamePlaceholder}
                  propMinWidth="240px"
                  handleChange={handleChange}
                  name="firstName"
                />
                <NameEmailLabels
                  yourName={translations[language].lastName}
                  enterYourNamePlaceholder={translations[language].enterLastNamePlaceholder}
                  propMinWidth="240px"
                  handleChange={handleChange}
                  name="lastName"
                />
              </div>
              <div className="name-inputs1">
                <NameEmailLabels
                  yourName={translations[language].phone}
                  enterYourNamePlaceholder={translations[language].enterPhonePlaceholder}
                  propMinWidth="240px"
                  handleChange={handleChange}
                  name="phone"
                />
                <NameEmailLabels
                  yourName={translations[language].email}
                  enterYourNamePlaceholder="Enter your email"
                  propMinWidth="240px"
                  handleChange={handleChange}
                  name="email"
                />
              </div>
              <button className="submit-button1" type="submit">
                <div className="send-message">{translations[language].done}</div>
              </button>
            </div>
          </div>
          <div className="map">
            <img
              className="map-maker-ottawa-ontario-ca"
              loading="lazy"
              alt="map of ottawa"
              src="./pearsonhardman2/-map-maker-ottawa-ontario-canada-aubergine@2x.png"
            />
          </div>
        </form>
        <div className="contact-details1">
          <div className="contact-info3">
            <img
              className="call-icon1"
              loading="lazy"
              alt="call icon"
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
              alt="location icon"
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
              alt="message icon"
              src="./pearsonhardman2/message1.svg"
            />
            <div className="pearsonhardmandomaincom-wrapper">
              <div className="pearsonhardmandomaincom">
                PearsonHardman@domain.com
              </div>
            </div>
          </div>
          <div className="contact-info6">
            <img className="time-square-icon" alt="time icon" src="./pearsonhardman2/time-square.svg" />
            <div className="am-0900-pm-wrapper">
              <div className="am-0900">{translations[language].officeHoursTime}</div>
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
