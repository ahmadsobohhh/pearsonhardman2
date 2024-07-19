import PropTypes from "prop-types";
import "./ServiceLawyer.css";

const ServiceLawyer = ({ services, chooseServices, handleChange, name }) => {
  const options =
    name === "services"
      ? ["Corporate Law", "Criminal Law", "Family Law", "Tax Law"]
      : ["John Doe", "Jane Smith", "Michael Johnson", "Emily Davis"];

  return (
    <div className="service-lawyer">
      <label>{services}</label>
      <select onChange={handleChange} name={name} className="select-input">
        <option value="">{chooseServices}</option>
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

ServiceLawyer.propTypes = {
  services: PropTypes.string.isRequired,
  chooseServices: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default ServiceLawyer;
