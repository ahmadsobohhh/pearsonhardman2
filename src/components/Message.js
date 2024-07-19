import PropTypes from "prop-types";
import "./Message.css";

const Message = ({ handleChange, name }) => {
  return (
    <div className="message">
      <label>Message</label>
      <textarea
        placeholder="Enter your message"
        onChange={handleChange}
        name={name}
      />
    </div>
  );
};

Message.propTypes = {
  handleChange: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
};

export default Message;
