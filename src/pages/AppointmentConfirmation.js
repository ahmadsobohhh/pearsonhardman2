import { useLocation } from "react-router-dom";
import "./AppointmentConfirmation.css";

const AppointmentConfirmation = () => {
  const { state } = useLocation();
  const { name, email, phone, services, date, lawyer, message } = state || {};

  return (
    <div className="appointment-confirmation-wrapper">
      <div className="appointment-confirmation">
        <h1>Appointment Confirmed!</h1>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Phone:</strong> {phone}</p>
        <p><strong>Services:</strong> {services}</p>
        <p><strong>Date:</strong> {date}</p>
        <p><strong>Lawyer:</strong> {lawyer}</p>
        <p><strong>Message:</strong> {message}</p>
      </div>
    </div>
  );
};

export default AppointmentConfirmation;
