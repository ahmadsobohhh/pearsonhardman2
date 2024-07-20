import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "./FrameComponent10.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const FrameComponent10 = ({ className = "" }) => {
  const { language, toggleLanguage } = useLanguage();

  return (
    <header className={`frame-header ${className}`}>
      <div className="frame-parent4">
        <div className="path28-parent">
          <img
            className="path28-icon"
            loading="lazy"
            alt="path icon"
            src="/pearsonhardman2/path28.svg"
          />
          <div className="pearson-hardman-wrapper">
            <Link to="/" className="pearson-hardman1">Pearson Hardman</Link>
          </div>
        </div>
        <div className="frame-wrapper1">
          <div className="home-parent">
            <Link className="home" to="/">{translations[language].home}</Link>
            <Link className="search1" to="/search">{translations[language].search}</Link>
            <Link className="our-lawyers" to="/lawyer">{translations[language].ourLawyers}</Link>
            <Link className="book-an-appointment" to="/appointment">{translations[language].bookAnAppointment}</Link>
            <Link className="contact-us1" to="/contact-us">{translations[language].contactUs}</Link>
            <button className="toggle-language" onClick={toggleLanguage}>
              {language === 'en' ? 'FR' : 'EN'}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

FrameComponent10.propTypes = {
  className: PropTypes.string,
};

export default FrameComponent10;
