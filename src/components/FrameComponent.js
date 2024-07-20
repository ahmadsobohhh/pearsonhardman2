import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NameEmailLabels from "./NameEmailLabels";
import ServiceLawyer from "./ServiceLawyer";
import Message from "./Message";
import PropTypes from "prop-types";
import "./FrameComponent.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent = ({ className = "" }) => {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    services: "",
    date: "",
    lawyer: "",
    message: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.services || !formData.date || !formData.lawyer) {
      setError(translations[language].fillOutProperly);
      return;
    }
    setError("");
    navigate("/appointment-confirmation", { state: formData });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'Enter') {
        handleSubmit(event);
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [formData]);

  return (
    <section className={`appointment-content-wrapper ${className}`}>
      <div className="appointment-content">
        <div className="form-content">
          <div className="appointment-title">
            <h1 className="lets-make-a">
              {translations[language].makeAppointment}
            </h1>
          </div>
          <form className="input-fields" onSubmit={handleSubmit}>
            <div className="name-email">
              <NameEmailLabels
                yourName={translations[language].firstName}
                enterYourNamePlaceholder={translations[language].enterFirstNamePlaceholder}
                handleChange={handleChange}
                name="name"
              />
              <NameEmailLabels
                yourName={translations[language].email}
                enterYourNamePlaceholder="Enter your email"
                handleChange={handleChange}
                name="email"
              />
            </div>
            <div className="phone-date">
              <NameEmailLabels
                yourName={translations[language].phone}
                enterYourNamePlaceholder={translations[language].enterPhonePlaceholder}
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
            {error && <div className="error-message" style={{ color: 'red' }}>{error}</div>}
            <button className="submit-button" type="submit">
              <div className="make-appointment">{translations[language].bookAnAppointment}</div>
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
