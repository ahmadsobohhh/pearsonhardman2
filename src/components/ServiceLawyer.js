import PropTypes from "prop-types";
import "./ServiceLawyer.css";

const ServiceLawyer = ({ className = "", services, chooseServices }) => {
  return (
    <div className={`service-lawyer ${className}`}>
      <h2 className="services2">{services}</h2>
      <div className="service-lawyer-dropdowns">
        <div className="service-lawyer-options">
          <div className="choose-services">{chooseServices}</div>
          <img className="arrow-down-2" alt="" src="./pearsonhardman2/arrow--down-2.svg" />
        </div>
      </div>
    </div>
  );
};

ServiceLawyer.propTypes = {
  className: PropTypes.string,
  services: PropTypes.string,
  chooseServices: PropTypes.string,
};

export default ServiceLawyer;
