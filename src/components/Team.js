import FrameComponent2 from "./FrameComponent2";
import PropTypes from "prop-types";
import "./Team.css";
import { useLanguage } from '../context/LanguageContext';
import translations from '../utils/translations';

const Team = ({ className = "" }) => {
  const { language } = useLanguage();

  return (
    <section className={`team ${className}`}>
      <div className="team-grid">
        <div className="team-description">
          <div className="lawyer4">{translations[language].lawyer}</div>
          <div className="team-content">
            <h1 className="professional-services-prepared1">
              {translations[language].teamProfessionalServices}
            </h1>
          </div>
        </div>
        <div className="frame-parent15">
          <FrameComponent2
            maskGroup="./pearsonhardman2/mask-group1@2x.png"
            laitmanHarry="Laitman Harry"
          />
          <FrameComponent2
            maskGroup="./pearsonhardman2/mask-group-15@2x.png"
            laitmanHarry="Nada Geont"
            propHeight="unset"
          />
          <FrameComponent2
            maskGroup="./pearsonhardman2/mask-group-10@2x.png"
            laitmanHarry="Desy Willy"
            propHeight="602px"
          />
        </div>
        <div className="frame-parent16">
          <FrameComponent2
            maskGroup="./pearsonhardman2/mask-group-31@2x.png"
            laitmanHarry="Herno Jully"
            propHeight="602px"
          />
          <FrameComponent2
            maskGroup="./pearsonhardman2/mask-group-41@2x.png"
            laitmanHarry="Lydia Dary"
            propHeight="602px"
          />
          <FrameComponent2
            maskGroup="./pearsonhardman2/mask-group-51@2x.png"
            laitmanHarry="Smilly Hani"
            propHeight="602px"
          />
        </div>
      </div>
    </section>
  );
};

Team.propTypes = {
  className: PropTypes.string,
};

export default Team;
