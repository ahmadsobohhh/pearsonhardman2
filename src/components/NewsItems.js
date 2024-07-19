import PropTypes from "prop-types";
import React from "react";

const NewsItems = ({ maskGroup, nadaGeomorgant, propHeight }) => {
  return (
    <div className="news-item" style={{ height: propHeight }}>
      <img src={maskGroup} alt={nadaGeomorgant} className="news-image" />
      <div className="news-details">
      </div>
    </div>
  );
};

NewsItems.propTypes = {
  maskGroup: PropTypes.string.isRequired,
  nadaGeomorgant: PropTypes.string.isRequired,
  propHeight: PropTypes.string,
};

NewsItems.defaultProps = {
  propHeight: "auto",
};

export default NewsItems;
