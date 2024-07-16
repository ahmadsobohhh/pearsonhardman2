import PropTypes from "prop-types";
import "./Message.css";

const Message = ({ className = "", messageInputRows, messageInputCols }) => {
  return (
    <div className={`message ${className}`}>
      <div className="message-label">
        <div className="message-optional">
          <span>{`Message `}</span>
          <span className="optional">(optional)</span>
        </div>
        <textarea
          className="message-input"
          placeholder="Enter message"
          rows={messageInputRows}
          cols={messageInputCols}
        />
      </div>
    </div>
  );
};

Message.propTypes = {
  className: PropTypes.string,
  messageInputRows: PropTypes.number,
  messageInputCols: PropTypes.number,
};

export default Message;
