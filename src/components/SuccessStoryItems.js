import { useMemo } from "react";
import PropTypes from "prop-types";
import "./SuccessStoryItems.css";

const SuccessStoryItems = ({ className = "", maskGroup, propPadding }) => {
  const successStoryItemsStyle = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div
      className={`success-story-items ${className}`}
      style={successStoryItemsStyle}
    >
      <img className="mask-group-icon9" loading="lazy" alt="" src={"./pearsonhardman2/maskGroup"} />
      <div className="story-content">
        <div className="cases-have-been">{`7 Cases Have Been Success `}</div>
        <img className="story-icon" loading="lazy" alt="" src="./pearsonhardman2/vector-8.svg" />
        <div className="lorem-ipsum-dolor4">
          Click to see this ground breaking case!
        </div>
        <button className="story-link">
          <div className="read-now">Read now</div>
        </button>
      </div>
    </div>
  );
};

SuccessStoryItems.propTypes = {
  className: PropTypes.string,
  maskGroup: PropTypes.string,

  /** Style props */
  propPadding: PropTypes.any,
};

export default SuccessStoryItems;
