import PropTypes from "prop-types";
import "./Message.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const Message = ({ handleChange, name }) => {
  const { language } = useLanguage();

  return (
    <div className="message">
      <label>{translations[language].getMessage}</label>
      <textarea
        placeholder={translations[language].enterMessagePlaceholder}
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
