import { useMemo } from "react";
import PropTypes from "prop-types";
import "./NameEmailLabels.css";

const NameEmailLabels = ({
  className = "",
  yourName,
  enterYourNamePlaceholder,
  propMinWidth,
  handleChange,
  name,
}) => {
  const nameEmailLabelsStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div
      className={`name-email-labels ${className}`}
      style={nameEmailLabelsStyle}
    >
      <h2 className="your-name">{yourName}</h2>
      <div className="name-email-inputs">
        <input
          className="enter-your-name"
          placeholder={enterYourNamePlaceholder}
          type="text"
          onChange={handleChange}
          name={name}
        />
      </div>
    </div>
  );
};

NameEmailLabels.propTypes = {
  className: PropTypes.string,
  yourName: PropTypes.string,
  enterYourNamePlaceholder: PropTypes.string,
  propMinWidth: PropTypes.any,
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default NameEmailLabels;
