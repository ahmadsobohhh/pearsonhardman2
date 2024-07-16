import { useMemo } from "react";
import PropTypes from "prop-types";
import "./NewsItems.css";

const NewsItems = ({
  className = "",
  maskGroup,
  nadaGeomorgant,
  propHeight,
}) => {
  const newsItemsStyle = useMemo(() => {
    return {
      height: propHeight,
    };
  }, [propHeight]);

  return (
    <div className={`news-items ${className}`} style={newsItemsStyle}>
      <img className="mask-group-icon8" loading="lazy" alt="" src={"./pearsonhardman2/maskGroup"} />
      <div className="news-details">
        <div className="news-names-positions">
          <div className="nada-geomorgant">{nadaGeomorgant}</div>
          <div className="news-positions">
          </div>
        </div>
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,
  nadaGeomorgant: PropTypes.string,

  /** Style props */
  propHeight: PropTypes.any,
};

export default NewsItems;
